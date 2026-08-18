# Ricardo Blog — Brutal starter

Starter de blog personal basado en la estética y estructura del tema
[Brutal](https://github.com/ElianCodes/brutal) de Elian Van Cutsem.

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

## Agregar una nueva nota

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

## Dominio

Antes de publicar cambia `site` en `astro.config.ts` por tu dominio real.

## Base

El proyecto toma como referencia Brutal y usa `@eliancodes/brutal-ui`.
Consulta `LICENSE-BRUTAL.txt`.
