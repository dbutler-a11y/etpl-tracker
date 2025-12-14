import type { Section, TaskGroup, Task } from "@prisma/client";

export type TaskWithGroup = Task;

export type TaskGroupWithTasks = TaskGroup & {
  tasks: Task[];
};

export type SectionWithTaskGroups = Section & {
  taskGroups: TaskGroupWithTasks[];
};

export interface Progress {
  total: number;
  completed: number;
  percentage: number;
}

export interface SectionWithProgress extends SectionWithTaskGroups {
  progress: Progress;
}

export interface TrackerData {
  sections: SectionWithProgress[];
  overallProgress: Progress;
}
