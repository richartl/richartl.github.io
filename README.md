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

También podés usar `.mdx` en cualquiera de las tres colecciones (`src/data/blog`,
`src/data/pages`, `src/data/projects`) cuando necesites algo que Markdown puro no puede: HTML/JSX
embebido, `export const` con JS, o importar y usar un componente `.astro`/`.tsx` dentro del post.
El front matter funciona igual. El panel de Decap CMS está configurado para trabajar con `.mdx`
(no soporta mezclar extensiones dentro de una misma colección).

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

## Editar el contenido con un panel visual (Decap CMS, 100% local)

Si no quieres escribir Markdown a mano, hay un panel de administración en `/admin`
([Decap CMS](https://decapcms.org)) que corre **solo en local**: no hay login, no hay
servicio en la nube, no requiere internet. Guarda los cambios directamente en los
archivos `.md` de tu copia del repo — luego los subes a GitHub como cualquier otro cambio
(`git add`, `git commit`, `git push`).

`docker compose up` ya levanta todo lo necesario (Astro + el proxy local de Decap). Abre:

```text
http://localhost:4321/admin/index.html
```

(Nota: hay que entrar con `/index.html` al final — el servidor de desarrollo de Astro no
resuelve `/admin/` a su `index.html` automáticamente. En el sitio publicado sí funciona `/admin/` a secas.)

Si prefieres correrlo sin Docker (con pnpm instalado):

```bash
pnpm install
pnpm dev:cms
```

El panel tiene tres colecciones (Blog, Páginas, Proyectos) que reflejan las carpetas de
`src/data/`. Al guardar o publicar una entrada, Decap escribe el archivo `.md` correspondiente
con el mismo formato de front matter que ya usa el proyecto.

El archivo `public/admin/config.yml` define esas colecciones — si agregas un campo nuevo al
esquema de contenido (`src/content.config.ts` o donde esté definido), agrégalo también ahí para
que el panel lo muestre.

## Probar TinaCMS (alternativa a Decap, en evaluación)

Hay una segunda configuración de CMS, [TinaCMS](https://tina.io), agregada solo para comparar
con Decap — no reemplaza nada todavía, ambas conviven. También corre 100% en local (sin
TinaCloud, sin login) usando el backend de filesystem del propio CLI.

```bash
pnpm install
pnpm tina:dev
```

Con Docker (levanta un contenedor aparte del de Decap — no los corras juntos, usan el mismo puerto 4321):

```bash
docker compose --profile tina up blog-tina
```

Abre:

```text
http://localhost:4321/tina-admin/index.html
```

(el puerto puede cambiar si el 4321 ya está en uso — el comando lo imprime en la terminal).
El esquema vive en `tina/config.ts` y refleja las mismas tres colecciones que Decap (Blog,
Páginas, Proyectos) sobre los mismos archivos `.mdx` de `src/data/`. Los archivos que genera Tina
al arrancar (`tina/__generated__/`, `public/tina-admin/`) están en `.gitignore`.

Si te quedas con Tina, hay que decidir después qué hacer con Decap (`public/admin/`,
`decap-server`) para no mantener dos paneles.

## Dominio

Antes de publicar cambia `site` y `base` en `astro.config.ts` por tu dominio/ruta real.
