"use client";

import { Checkbox } from "@/components/ui/checkbox";
import type { Task } from "@prisma/client";

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string, isCompleted: boolean) => void;
  isPending?: boolean;
}

export function TaskItem({ task, onToggle, isPending }: TaskItemProps) {
  return (
    <div className="flex items-center space-x-3 py-2">
      <Checkbox
        id={task.id}
        checked={task.isCompleted}
        onCheckedChange={(checked) => onToggle(task.id, checked as boolean)}
        disabled={isPending}
        className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
      />
      <label
        htmlFor={task.id}
        className={`text-sm cursor-pointer flex-1 ${
          task.isCompleted ? "text-gray-400 line-through" : "text-gray-700"
        } ${isPending ? "opacity-50" : ""}`}
      >
        {task.title}
      </label>
    </div>
  );
}
