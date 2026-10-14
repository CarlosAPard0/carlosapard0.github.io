import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

export const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['science', 'analysis', 'engineering']),
    technologies: z.array(z.string()),
    githubUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    order: z.number().default(99),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
    repo: z.string().url().optional(),
    summary: z.string().optional(),
  }),
});

export const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    order: z.number().default(99),
    technologies: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, experience };
