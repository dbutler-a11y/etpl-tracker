import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { SectionWithProgress, Progress } from "@/types";

function calculateProgress(tasks: { isCompleted: boolean }[]): Progress {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.isCompleted).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { total, completed, percentage };
}

export async function GET() {
  try {
    const sections = await prisma.section.findMany({
      orderBy: { order: "asc" },
      include: {
        taskGroups: {
          orderBy: { order: "asc" },
          include: {
            tasks: {
              orderBy: { order: "asc" },
            },
          },
        },
      },
    });

    // Calculate progress for each section
    const sectionsWithProgress: SectionWithProgress[] = sections.map((section) => {
      const allTasks = section.taskGroups.flatMap((tg) => tg.tasks);
      return {
        ...section,
        progress: calculateProgress(allTasks),
      };
    });

    // Calculate overall progress
    const allTasks = sections.flatMap((s) =>
      s.taskGroups.flatMap((tg) => tg.tasks)
    );
    const overallProgress = calculateProgress(allTasks);

    return NextResponse.json({
      sections: sectionsWithProgress,
      overallProgress,
    });
  } catch (error) {
    console.error("Error fetching sections:", error);
    return NextResponse.json(
      { error: "Failed to fetch sections" },
      { status: 500 }
    );
  }
}
