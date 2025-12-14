import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { documentLinkSchema } from "@/lib/validation";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Validate input
    const result = documentLinkSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid URL format", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { documentLink } = result.data;

    const taskGroup = await prisma.taskGroup.update({
      where: { id },
      data: { documentLink },
    });

    return NextResponse.json(taskGroup);
  } catch (error) {
    console.error("Error updating task group:", error);
    return NextResponse.json(
      { error: "Failed to update task group" },
      { status: 500 }
    );
  }
}
