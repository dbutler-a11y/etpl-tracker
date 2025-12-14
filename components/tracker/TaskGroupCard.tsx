"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TaskItem } from "./TaskItem";
import { DocumentLinkInput } from "./DocumentLinkInput";
import type { TaskGroupWithTasks } from "@/types";

interface TaskGroupCardProps {
  taskGroup: TaskGroupWithTasks;
  onTaskToggle: (taskId: string, isCompleted: boolean) => void;
  onDocumentLinkSave: (taskGroupId: string, link: string) => void;
  isPending?: boolean;
}

export function TaskGroupCard({
  taskGroup,
  onTaskToggle,
  onDocumentLinkSave,
  isPending,
}: TaskGroupCardProps) {
  const completedCount = taskGroup.tasks.filter((t) => t.isCompleted).length;
  const totalCount = taskGroup.tasks.length;
  const allCompleted = completedCount === totalCount && totalCount > 0;

  return (
    <Card className={`mb-4 ${allCompleted ? "border-green-200 bg-green-50/30" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <span className="text-gray-500 font-normal">{taskGroup.order}.</span>
            {taskGroup.title}
          </CardTitle>
          <Badge
            variant={allCompleted ? "default" : "secondary"}
            className={allCompleted ? "bg-green-600" : ""}
          >
            {completedCount}/{totalCount}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {taskGroup.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onTaskToggle}
              isPending={isPending}
            />
          ))}
        </div>
        <DocumentLinkInput
          taskGroupId={taskGroup.id}
          documentLink={taskGroup.documentLink}
          onSave={onDocumentLinkSave}
          isPending={isPending}
        />
      </CardContent>
    </Card>
  );
}
