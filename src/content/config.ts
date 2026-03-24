import { defineCollection, z } from 'astro:content';

const tutorials = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['python', 'godot']),
    difficulty: z.enum(['einsteiger', 'grundlagen', 'fortgeschritten']),
    date: z.date(),
    readTime: z.string(),
    draft: z.boolean().default(false),
  })
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.enum(['python', 'godot', 'allgemein', 'tools']),
    date: z.date(),
    draft: z.boolean().default(false),
  })
});

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().max(155),
    summary: z.string().max(400),
    url: z.string().url(),
    source: z.string().optional(),
    category: z.enum(['Python', 'Godot', 'Coding']),
    tags: z.array(z.string()).default([]),
    date: z.date(),
    og_image: z.string().optional(),
    image_alt_text: z.string().optional(),          // ← NEU: Alt-Text für Beitragsbild
  })
});

const tools = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['python', 'godot', 'allgemein']),
    tags: z.array(z.string()),
    affiliateUrl: z.string().url().optional(),
    websiteUrl: z.string().url(),
    free: z.boolean().default(true),
    draft: z.boolean().default(false),
  })
});

export const collections = { tutorials, blog, news, tools };
