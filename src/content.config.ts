import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const registrationSchema = z
  .object({
    type: z.enum(['url', 'embed']),
    href: z.string(),
    label: z.string().optional(),
  })
  .optional();

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  heroImage: z.string().optional(),
  audience: z.enum(['students', 'community', 'youth', 'shared']),
  registration: registrationSchema,
  draft: z.boolean().optional(),
});

const home = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/home' }),
  schema: pageSchema,
});

const students = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/students' }),
  schema: pageSchema,
});

const community = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/community' }),
  schema: pageSchema,
});

const youth = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/youth' }),
  schema: pageSchema,
});

const shared = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/shared' }),
  schema: pageSchema,
});

export const collections = { home, students, community, youth, shared };
