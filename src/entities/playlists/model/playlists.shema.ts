import { z } from 'zod';

export const playlistSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters')
    .regex(/^[\p{L}\p{N}\s\-_'".!?()]+$/u, 'Invalid characters in title'),

  description: z
    .string()
    .trim()
    .min(3, 'Description must be at least 3 characters')
    .max(500, 'Description must be less than 500 characters')
    .or(z.literal('')),
});

export type PlaylistFormValues = z.infer<typeof playlistSchema>;
