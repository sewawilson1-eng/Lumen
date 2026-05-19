# Lumen — Teeth Whitening Marketing Site

A modern, production-ready marketing site for the **Lumen** premium teeth whitening brand. Built with Next.js 15 App Router, Tailwind CSS v4, Framer Motion, and Lucide React.

## Run locally

```powershell
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:3000

# 3. Production build (optional)
npm run build
npm start
```

> If `node` is not on your PATH, prepend it for the session:
> `$env:Path = "C:\Program Files\nodejs;$env:Path"` and call `npm.cmd` directly.

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — Section components + `primitives/` (Button, Container, FadeUp)
- `content/` — Typed data files driving each section
- `lib/cn.ts` — class-name joiner

## Tech notes

- **Tailwind v4** is configured entirely in `app/globals.css` via `@theme inline` — no `tailwind.config.ts` is needed.
- **Brand tokens** are CSS variables (`--primary`, `--primary-soft`, etc.) mapped into Tailwind's color scale, so utilities like `bg-primary-soft` and `text-primary-dark` work everywhere.
- **Server components by default.** `'use client'` is used only where interactivity demands it: `Nav`, `Hero` (parallax), `Button` (whileTap), `FadeUp`, `ReviewMarquee`, `BeforeAfterSlider`, `FAQ`.
- **next/image** with remote-pattern allowlist for Unsplash.
- **prefers-reduced-motion** disables animations and smooth scroll via `globals.css`.
- **SEO**: `metadataBase`, OG/Twitter cards, semantic `<header>/<main>/<section>/<footer>`, alt text everywhere.
