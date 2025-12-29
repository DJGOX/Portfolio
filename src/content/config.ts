import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.string().or(z.date()),
    client: z.string().optional(),
    role: z.string(),
    categories: z.array(z.string()).default([]),
    languages: z.array(z.enum(["en", "es"])).default(["en"]),
    tools: z.array(z.string()).default([]),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .default([]),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    featured: z.boolean().default(false),
    media: z
      .object({
        type: z.enum(["embed", "local"]).default("embed"),
        aspect: z.enum(["16:9", "9:16", "1:1"]).default("16:9"),
        provider: z.enum(["youtube", "vimeo", "tiktok"]).optional(),
        url: z.string().url().optional(),
        src: z.string().optional(),
        poster: z.string().optional(),
      })
      .optional(),
    links: z
      .object({
        live: z.string().url().optional(),
        reel: z.string().url().optional(),
        download: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
