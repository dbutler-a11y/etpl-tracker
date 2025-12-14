import { z } from "zod";

export const taskUpdateSchema = z.object({
  isCompleted: z.boolean(),
});

export const documentLinkSchema = z.object({
  documentLink: z
    .string()
    .url("Please enter a valid URL")
    .or(z.literal(""))
    .optional()
    .nullable(),
});

export type TaskUpdateInput = z.infer<typeof taskUpdateSchema>;
export type DocumentLinkInput = z.infer<typeof documentLinkSchema>;
