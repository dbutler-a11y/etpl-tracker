"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TaskGroupCard } from "./TaskGroupCard";
import type { SectionWithProgress } from "@/types";

interface SectionCardProps {
  section: SectionWithProgress;
  onTaskToggle: (taskId: string, isCompleted: boolean) => void;
  onDocumentLinkSave: (taskGroupId: string, link: string) => void;
  isPending?: boolean;
  defaultExpanded?: boolean;
}

export function SectionCard({
  section,
  onTaskToggle,
  onDocumentLinkSave,
  isPending,
  defaultExpanded = true,
}: SectionCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="mb-6">
      <Button
        variant="ghost"
        className="w-full justify-start p-0 h-auto hover:bg-transparent"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3 w-full p-4 bg-gray-50 rounded-lg border">
          {isExpanded ? (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronRight className="h-5 w-5 text-gray-500" />
          )}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2">
              <span className="text-lg">{section.emoji}</span>
              <h3 className="font-semibold text-gray-900">
                Section {section.order}: {section.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 mt-1">{section.description}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">
              {section.progress.percentage}%
            </div>
            <div className="text-xs text-gray-500">
              {section.progress.completed}/{section.progress.total} tasks
            </div>
          </div>
        </div>
      </Button>

      {isExpanded && (
        <div className="mt-4 pl-4 border-l-2 border-gray-200">
          <Progress
            value={section.progress.percentage}
            className="h-2 mb-4"
          />
          {section.taskGroups.map((taskGroup) => (
            <TaskGroupCard
              key={taskGroup.id}
              taskGroup={taskGroup}
              onTaskToggle={onTaskToggle}
              onDocumentLinkSave={onDocumentLinkSave}
              isPending={isPending}
            />
          ))}
        </div>
      )}
    </div>
  );
}
