import { z } from 'zod';

export const addProjectSchema = z.object({
  src: z.string().url({ message: "Invalid URL" }),
  description: z.string().min(1, { message: "Description is required" }),
  title: z.string().min(1, { message: "Title is required" }),
});

export type IaddProjectFormInput = z.infer<typeof addProjectSchema>;
