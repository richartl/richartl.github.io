import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    draft: z.boolean().optional().default(false),
  }),
});

// Colores disponibles para los kickers/tags "de cinta" (ver src/styles/global.css).
const tapeColor = z
  .enum(['tape-surf', 'tape-tape', 'tape-flare', 'tape-ink', 'tape-paper'])
  .default('tape-surf');

// Páginas sueltas fuera del blog: Sobre mí, CV, etc. Un archivo .md = una página,
// servida en /<nombre-del-archivo>/ (ver src/pages/sobre-mi.astro y src/pages/cv.astro).
const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/data/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kicker: z.string().default('Info'),
    kickerColor: tapeColor,
  }),
});

// Proyectos personales. Un archivo .md = un proyecto, listado en /proyectos/ y con
// su propia página en /proyectos/<nombre-del-archivo>/.
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kicker: z.string(),
    kickerColor: tapeColor,
    order: z.number().default(0),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  projects: projectsCollection,
};
