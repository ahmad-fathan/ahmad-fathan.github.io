import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const langFields = {
  en: z.string(),
  id: z.string(),
};

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teaching' }),
  schema: z.object({
    name: z.object(langFields),
    code: z.string().optional(),
    level: z.string().optional(),
    institution: z.string().optional(),
    description: z.object(langFields).optional(),
    topics: z.array(z.string()).default([]),
    jenjang: z.string().optional(),
    kelas: z.string().optional(),
    sks: z.number().optional(),
    fakultasProdi: z.string().optional(),
  }),
});

const speaking = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/speaking' }),
  schema: z.object({
    event_name: z.string(),
    year: z.number(),
    date: z.coerce.date().optional(),
    talk: z.string().optional(),
    organizer: z.string().optional(),
    location: z.string().optional(),
    format: z.enum(['online', 'onsite', 'hybrid']).optional(),
    type: z
      .enum(['seminar', 'workshop', 'training', 'guest-lecture', 'conference', 'community'])
      .optional(),
    eventUrl: z.string().optional(),
    materialUrl: z.string().optional(),
  }),
});

export const collections = {
  teaching,
  speaking,
};
