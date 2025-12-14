"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ProgressOverview } from "./ProgressOverview";
import { SectionCard } from "./SectionCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Filter, X } from "lucide-react";
import type { TrackerData } from "@/types";

async function fetchSections(): Promise<TrackerData> {
  const res = await fetch("/api/sections");
  if (!res.ok) throw new Error("Failed to fetch sections");
  return res.json();
}

async function toggleTask(taskId: string, isCompleted: boolean) {
  const res = await fetch(`/api/tasks/${taskId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isCompleted }),
  });
  if (!res.ok) throw new Error("Failed to update task");
  return res.json();
}

async function updateDocumentLink(taskGroupId: string, documentLink: string) {
  const res = await fetch(`/api/task-groups/${taskGroupId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ documentLink }),
  });
  if (!res.ok) throw new Error("Failed to update document link");
  return res.json();
}

type FilterType = "all" | "completed" | "pending";

export function TrackerDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["sections"],
    queryFn: fetchSections,
  });

  const taskMutation = useMutation({
    mutationFn: ({ taskId, isCompleted }: { taskId: string; isCompleted: boolean }) =>
      toggleTask(taskId, isCompleted),
    onMutate: async ({ taskId, isCompleted }) => {
      await queryClient.cancelQueries({ queryKey: ["sections"] });
      const previousData = queryClient.getQueryData<TrackerData>(["sections"]);

      // Optimistic update
      if (previousData) {
        const newData = JSON.parse(JSON.stringify(previousData)) as TrackerData;
        for (const section of newData.sections) {
          for (const taskGroup of section.taskGroups) {
            const task = taskGroup.tasks.find((t) => t.id === taskId);
            if (task) {
              task.isCompleted = isCompleted;
              break;
            }
          }
        }
        // Recalculate progress
        const allTasks = newData.sections.flatMap((s) =>
          s.taskGroups.flatMap((tg) => tg.tasks)
        );
        const completed = allTasks.filter((t) => t.isCompleted).length;
        newData.overallProgress = {
          total: allTasks.length,
          completed,
          percentage: Math.round((completed / allTasks.length) * 100),
        };
        for (const section of newData.sections) {
          const sectionTasks = section.taskGroups.flatMap((tg) => tg.tasks);
          const sectionCompleted = sectionTasks.filter((t) => t.isCompleted).length;
          section.progress = {
            total: sectionTasks.length,
            completed: sectionCompleted,
            percentage: Math.round((sectionCompleted / sectionTasks.length) * 100),
          };
        }
        queryClient.setQueryData(["sections"], newData);
      }

      return { previousData };
    },
    onSuccess: (_, { isCompleted }) => {
      toast.success(isCompleted ? "Task completed!" : "Task marked incomplete");
    },
    onError: (err, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["sections"], context.previousData);
      }
      toast.error("Failed to update task");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["sections"] });
    },
  });

  const documentLinkMutation = useMutation({
    mutationFn: ({ taskGroupId, documentLink }: { taskGroupId: string; documentLink: string }) =>
      updateDocumentLink(taskGroupId, documentLink),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sections"] });
      toast.success("Document link saved!");
    },
    onError: () => {
      toast.error("Failed to save link. Please enter a valid URL.");
    },
  });

  const handleTaskToggle = (taskId: string, isCompleted: boolean) => {
    taskMutation.mutate({ taskId, isCompleted });
  };

  const handleDocumentLinkSave = (taskGroupId: string, link: string) => {
    documentLinkMutation.mutate({ taskGroupId, documentLink: link });
  };

  const exportToCSV = () => {
    if (!data) return;

    const rows = [["Section", "Task Group", "Task", "Status", "Document Link"]];

    for (const section of data.sections) {
      for (const taskGroup of section.taskGroups) {
        for (const task of taskGroup.tasks) {
          rows.push([
            section.title,
            taskGroup.title,
            task.title,
            task.isCompleted ? "Completed" : "Pending",
            taskGroup.documentLink || "",
          ]);
        }
      }
    }

    const csvContent = rows.map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `etpl-progress-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Progress exported to CSV!");
  };

  // Filter data based on search and filter
  const filteredData = data ? {
    ...data,
    sections: data.sections.map(section => ({
      ...section,
      taskGroups: section.taskGroups.map(tg => ({
        ...tg,
        tasks: tg.tasks.filter(task => {
          const matchesSearch = searchQuery === "" ||
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tg.title.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesFilter = filter === "all" ||
            (filter === "completed" && task.isCompleted) ||
            (filter === "pending" && !task.isCompleted);
          return matchesSearch && matchesFilter;
        })
      })).filter(tg => tg.tasks.length > 0)
    })).filter(section => section.taskGroups.length > 0)
  } : null;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-500">Loading tracker...</div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500">Error loading tracker. Please refresh.</div>
      </div>
    );
  }

  return (
    <div>
      <ProgressOverview progress={data.overallProgress} />

      {/* Search, Filter, and Export Bar */}
      <div className="bg-white rounded-lg border p-4 mb-6 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <div className="flex rounded-lg border overflow-hidden">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                filter === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-3 py-2 text-sm font-medium transition-colors border-x ${
                filter === "pending" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                filter === "completed" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              Done
            </button>
          </div>
          <Button onClick={exportToCSV} variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </div>

      {filteredData && filteredData.sections.length > 0 ? (
        filteredData.sections.map((section, index) => (
          <SectionCard
            key={section.id}
            section={section}
            onTaskToggle={handleTaskToggle}
            onDocumentLinkSave={handleDocumentLinkSave}
            isPending={taskMutation.isPending || documentLinkMutation.isPending}
            defaultExpanded={index === 0}
          />
        ))
      ) : (
        <div className="text-center py-12 text-gray-500">
          No tasks match your search or filter criteria.
        </div>
      )}
    </div>
  );
}
