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
    description: z.string().max(155),
    tag: z.enum(['python', 'godot', 'allgemein', 'tools']),
    date: z.date(),
    og_image: z.string().optional(),   // ← NEU: für spätere Automatisierung
    draft: z.boolean().default(false),
  })
});

// NEU: Devlog — projektbezogene Einträge (Lernreise, Spieleprojekte)
const devlog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().max(155),
    date: z.date(),
    project: z.enum(['Python Lernreise', 'Godot']),
    episode: z.number().optional(),           // z.B. 1, 2, 3 — für Seriennavigation
    tags: z.array(z.string()).default([]),
    og_image: z.string().optional(),
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
    image_alt_text: z.string().optional(),
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

export const collections = { tutorials, blog, devlog, news, tools };
