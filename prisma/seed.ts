import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ETPL_DATA = {
  sections: [
    {
      order: 1,
      title: "Before Applying",
      emoji: "✅",
      description: "Pre-Submission Requirements",
      taskGroups: [
        {
          order: 1,
          title: "Business Entity & EIN",
          tasks: [
            { order: 1, title: "Verify LLC or Corporation status" },
            { order: 2, title: "Add EIN document" },
          ],
        },
        {
          order: 2,
          title: "TWC License or Exemption",
          tasks: [
            { order: 1, title: "Determine if program requires Career School License" },
            { order: 2, title: "Generate license application or exemption request" },
            { order: 3, title: "Upload confirmation from TWC" },
          ],
        },
        {
          order: 3,
          title: "Program Curriculum Packet (Program 1 - AI Support Technician)",
          tasks: [
            { order: 1, title: "Curriculum Outline" },
            { order: 2, title: "Module Learning Outcomes" },
            { order: 3, title: "Assessment & Completion Criteria" },
          ],
        },
        {
          order: 4,
          title: "Program Cost Breakdown",
          tasks: [
            { order: 1, title: "Tuition" },
            { order: 2, title: "Books/materials" },
            { order: 3, title: "Fees" },
            { order: 4, title: "Supplies" },
          ],
        },
        {
          order: 5,
          title: "Admissions, Attendance, Grading & Refund Policies",
          tasks: [
            { order: 1, title: "Admissions Requirements" },
            { order: 2, title: "Attendance Policy" },
            { order: 3, title: "Grading Policy" },
            { order: 4, title: "TWC-Compliant Refund Policy" },
          ],
        },
        {
          order: 6,
          title: "Student Grievance Procedure",
          tasks: [
            { order: 1, title: "Create complaint / resolution policy" },
          ],
        },
        {
          order: 7,
          title: "Non-Discrimination & Equal Opportunity Policy",
          tasks: [
            { order: 1, title: "Draft statement" },
          ],
        },
        {
          order: 8,
          title: "Student Support & Job Placement Services Plan",
          tasks: [
            { order: 1, title: "Outline support systems" },
            { order: 2, title: "Job search assistance" },
            { order: 3, title: "Resume/Interview support" },
          ],
        },
        {
          order: 9,
          title: "Program Catalog (Short-Form Version)",
          tasks: [
            { order: 1, title: "Create provider catalog for ETPL submission" },
          ],
        },
        {
          order: 10,
          title: "SOC Job Code Mapping Document",
          tasks: [
            { order: 1, title: "Map each program to SOC codes" },
            { order: 2, title: "Include job titles + alignment" },
          ],
        },
      ],
    },
    {
      order: 2,
      title: "Applying",
      emoji: "✅",
      description: "To Workforce Board & TWC",
      taskGroups: [
        {
          order: 11,
          title: "Provider Information Packet",
          tasks: [
            { order: 1, title: "Provider profile" },
            { order: 2, title: "Campus location" },
            { order: 3, title: "Contact information" },
          ],
        },
        {
          order: 12,
          title: "Program Submission Packet (Per Program)",
          tasks: [
            { order: 1, title: "Program name" },
            { order: 2, title: "Hours, delivery type" },
            { order: 3, title: "Costs" },
            { order: 4, title: "Credential" },
            { order: 5, title: "SOC mapping" },
          ],
        },
        {
          order: 13,
          title: "Workforce Board Upload & Communication",
          tasks: [
            { order: 1, title: "Submit packet to Board" },
            { order: 2, title: "Track Board requests & revisions" },
          ],
        },
        {
          order: 14,
          title: "TWC Review Responses",
          tasks: [
            { order: 1, title: "Track revisions requested by TWC" },
          ],
        },
        {
          order: 15,
          title: "Student Data Report (SDR)",
          tasks: [
            { order: 1, title: "SDR Template Created" },
            { order: 2, title: "SDR Submitted" },
          ],
        },
      ],
    },
    {
      order: 3,
      title: "After Approval",
      emoji: "✅",
      description: "Ongoing Requirements",
      taskGroups: [
        {
          order: 16,
          title: "Annual Performance Tracking System",
          tasks: [
            { order: 1, title: "Completion rate tracking" },
            { order: 2, title: "Employment outcomes" },
            { order: 3, title: "Credential attainment" },
          ],
        },
        {
          order: 17,
          title: "Annual ETPL Update Packet",
          tasks: [
            { order: 1, title: "Update documentation (tuition, hours, curriculum changes)" },
            { order: 2, title: "Submit annual updates" },
          ],
        },
        {
          order: 18,
          title: "Compliance Log",
          tasks: [
            { order: 1, title: "Licensing maintenance" },
            { order: 2, title: "Catalog updates" },
            { order: 3, title: "Policy changes" },
          ],
        },
      ],
    },
  ],
};

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.task.deleteMany();
  await prisma.taskGroup.deleteMany();
  await prisma.section.deleteMany();

  // Create sections with task groups and tasks
  for (const sectionData of ETPL_DATA.sections) {
    const section = await prisma.section.create({
      data: {
        order: sectionData.order,
        title: sectionData.title,
        emoji: sectionData.emoji,
        description: sectionData.description,
      },
    });

    for (const taskGroupData of sectionData.taskGroups) {
      const taskGroup = await prisma.taskGroup.create({
        data: {
          order: taskGroupData.order,
          title: taskGroupData.title,
          sectionId: section.id,
        },
      });

      for (const taskData of taskGroupData.tasks) {
        await prisma.task.create({
          data: {
            order: taskData.order,
            title: taskData.title,
            taskGroupId: taskGroup.id,
          },
        });
      }
    }
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
