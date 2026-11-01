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

const heroSchema = z
  .object({
    label: z.string().optional(),
    headline: z.string(),
    sentence: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    primaryCta: z
      .object({
        label: z.string(),
        href: z.string(),
        actionId: z.string().optional(),
      })
      .optional(),
    secondaryCta: z
      .object({
        label: z.string(),
        href: z.string(),
      })
      .optional(),
  })
  .optional();

const noticeSchema = z
  .object({
    text: z.string(),
    href: z.string().optional(),
    expires: z.string().optional(),
  })
  .optional();

const taskSchema = z.object({
  label: z.string(),
  description: z.string(),
  href: z.string(),
  external: z.boolean().optional(),
});

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  heroImage: z.string().optional(),
  audience: z.enum(['students', 'community', 'youth', 'shared']),
  registration: registrationSchema,
  draft: z.boolean().optional(),
  hero: heroSchema,
  notice: noticeSchema,
  tasks: z.array(taskSchema).optional(),
  actions: z.array(z.string()).optional(),
  legacyPaths: z.array(z.string()).optional(),
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

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    audience: z.enum(['students', 'community', 'both']),
    when: z.string(),
    href: z.string(),
    expires: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { home, students, community, youth, shared, events };
