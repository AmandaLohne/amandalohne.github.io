import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        cover: z.string().optional(),
        coverAlt: z.string().optional(),
        date: z.coerce.date().optional(),
        draft: z.boolean().default(false),
        excerpt: z.string().optional(),
    }),
});

export const collections = { projects }; // ← must be a named export
