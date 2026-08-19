import { defineConfig } from 'tinacms';

// Config de prueba para comparar TinaCMS con Decap CMS en local.
// No requiere TinaCloud: corriendo `pnpm tina:dev` usa el backend
// filesystem local y guarda directamente en el repo, igual que Decap.
const kickerColorOptions = ['tape-surf', 'tape-tape', 'tape-flare', 'tape-ink', 'tape-paper'];

export default defineConfig({
  branch: 'main',
  clientId: null,
  token: null,

  // outputFolder distinto de "admin": ese path ya lo usa Decap CMS
  // (public/admin) y no queremos que Tina lo pise mientras comparamos.
  build: {
    outputFolder: 'tina-admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog',
        path: 'src/data/blog',
        format: 'mdx',
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => `${values?.title?.toLowerCase().replace(/ /g, '-') ?? 'nuevo-post'}`,
          },
        },
        fields: [
          { type: 'string', name: 'title', label: 'Título', isTitle: true, required: true },
          { type: 'string', name: 'author', label: 'Autor' },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'string', name: 'description', label: 'Descripción', ui: { component: 'textarea' } },
          { type: 'datetime', name: 'pubDate', label: 'Fecha de publicación' },
          { type: 'boolean', name: 'draft', label: 'Borrador' },
          { type: 'rich-text', name: 'body', label: 'Contenido', isBody: true },
        ],
      },
      {
        name: 'pages',
        label: 'Páginas',
        path: 'src/data/pages',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Título', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Descripción', ui: { component: 'textarea' } },
          { type: 'string', name: 'kicker', label: 'Kicker' },
          { type: 'string', name: 'kickerColor', label: 'Color del kicker', options: kickerColorOptions },
          { type: 'rich-text', name: 'body', label: 'Contenido', isBody: true },
        ],
      },
      {
        name: 'projects',
        label: 'Proyectos',
        path: 'src/data/projects',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Título', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Descripción', ui: { component: 'textarea' } },
          { type: 'string', name: 'kicker', label: 'Kicker' },
          { type: 'string', name: 'kickerColor', label: 'Color del kicker', options: kickerColorOptions },
          { type: 'number', name: 'order', label: 'Orden' },
          { type: 'boolean', name: 'draft', label: 'Borrador' },
          { type: 'rich-text', name: 'body', label: 'Contenido', isBody: true },
        ],
      },
    ],
  },
});
