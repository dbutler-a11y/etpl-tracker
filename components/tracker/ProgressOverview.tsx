"use client";

import { Progress } from "@/components/ui/progress";
import type { Progress as ProgressType } from "@/types";

interface ProgressOverviewProps {
  progress: ProgressType;
}

export function ProgressOverview({ progress }: ProgressOverviewProps) {
  return (
    <div className="bg-white rounded-lg border p-6 mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Overall Progress</h2>
          <p className="text-sm text-gray-500">
            {progress.completed} of {progress.total} tasks completed
          </p>
        </div>
        <div className="text-3xl font-bold text-blue-600">
          {progress.percentage}%
        </div>
      </div>
      <Progress value={progress.percentage} className="h-3" />
    </div>
  );
}
