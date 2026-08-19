# Blog personal de Ricardo Pérez

Blog personal hecho con [Astro](https://astro.build) y Tailwind, con un estilo editorial
propio (paleta "surf + cinta adhesiva", ver `src/styles/global.css`).

## Ejecutar localmente

Solo necesitas Docker Desktop.

```bash
docker compose up
```

Abre:

```text
http://localhost:4321
```

No necesitas Node.js, npm ni pnpm instalados localmente.

## Detener

```bash
docker compose down
```

## Borrar también los volúmenes de dependencias

```bash
docker compose down -v
```

## Contenido: todo vive en Markdown

Todo el contenido del sitio (notas, páginas y proyectos) son archivos `.md` en `src/data/`.
No hace falta tocar componentes `.astro` ni saber Tailwind para agregar o editar contenido.

### Agregar una nueva nota

Crea un archivo Markdown dentro de:

```text
src/data/blog/
```

Ejemplo:

```md
---
title: "Título"
author: "Ricardo Pérez"
tags: ["SRE", "NOTE_003"]
description: "Descripción corta."
pubDate: "2026-08-18"
draft: false
---

Contenido...
```

Aparece automáticamente en `/blog/` y en "Últimas notas" de la home (las 3 más recientes).
Pon `draft: true` para que no se publique todavía.

### Agregar/editar una página (Sobre mí, CV, etc.)

Crea o edita un archivo Markdown dentro de:

```text
src/data/pages/
```

Ejemplo (`src/data/pages/sobre-mi.md`):

```md
---
title: "Título de la página"
description: "Se usa como subtítulo y como meta-descripción."
kicker: "About"
kickerColor: "tape-flare"
---

Contenido...
```

El nombre del archivo define la URL: `src/data/pages/sobre-mi.md` → `/sobre-mi/`.

Por ahora `sobre-mi.md` y `cv.md` tienen cada uno su propio archivo de ruta
(`src/pages/sobre-mi.astro` y `src/pages/cv.astro`) que solo carga esa entrada y la pinta.
Si agregas una página nueva (por ejemplo `contacto.md`), necesitas un archivo de ruta igual de
sencillo — copia uno de los dos existentes y cambia el `'sobre-mi'`/`'cv'` por el nombre de tu
archivo. `kickerColor` acepta: `tape-surf`, `tape-tape`, `tape-flare`, `tape-ink`, `tape-paper`.

### Agregar/editar un proyecto

Crea o edita un archivo Markdown dentro de:

```text
src/data/projects/
```

Ejemplo:

```md
---
title: "Nombre del proyecto"
description: "Descripción corta, se ve en la tarjeta."
kicker: "Build_003"
kickerColor: "tape-flare"
order: 3
draft: false
---

Contenido de la página del proyecto...
```

Aparece automáticamente en `/proyectos/`, con su propia página en `/proyectos/<nombre-del-archivo>/`,
y los dos proyectos con `order` más bajo salen destacados en la home. `draft: true` lo oculta.

## El menú de arriba (nav)

El menú **no** sale de Markdown — es la única parte de la navegación que se edita a mano, en
`src/layouts/Base.astro`, en el arreglo `navLinks`. Cada entrada es:

```js
{ href: '/proyectos/', label: 'Proyectos', accent: 'flare' }
```

- `href`: la ruta (con `/` al inicio y al final).
- `label`: el texto que se ve.
- `accent`: color del subrayado (`surf`, `tape` o `flare`).

Agregar una página nueva no la agrega sola al menú — si quieres que aparezca ahí, añade una línea
a `navLinks`.

## Dominio

Antes de publicar cambia `site` y `base` en `astro.config.ts` por tu dominio/ruta real.
