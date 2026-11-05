# verma.dev

[![ci](https://github.com/adityaverma/verma.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/adityaverma/verma.dev/actions/workflows/ci.yml)
[![deploy](https://github.com/adityaverma/verma.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/adityaverma/verma.dev/actions/workflows/deploy.yml)
[![license: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Personal site for Aditya Verma: developer tools, AI agents and some writing
about building with both. Static, dark, no client-side JavaScript.

Built with [Astro](https://astro.build) and TypeScript.

## Development

Needs Node 24 (see `.nvmrc`).

```sh
npm install
npm run dev
```

## Scripts

| command           | what it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | local dev server with drafts shown |
| `npm run build`   | static build into `dist/`          |
| `npm run preview` | serve the built site               |
| `npm run check`   | type check `.astro` and `.ts`      |
| `npm test`        | unit tests with vitest             |

## Layout

```
src/
  components/   header, footer, project cards, post list
  content/      markdown posts
  data/         project list
  layouts/      base html shell
  lib/          small helpers, each with a test next to it
  pages/        routes
public/         favicon, robots.txt, CNAME
```

## Writing a post

Add a markdown file to `src/content/writing/`:

```md
---
title: Post title
description: One sentence for the index, RSS and search results.
date: 2026-11-01
draft: true
---
```

Drafts show up in `npm run dev` and are left out of the build, the RSS feed and
the sitemap. Remove `draft` to publish.
