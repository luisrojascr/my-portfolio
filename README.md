<div align="center">
  <h1>luisrojascr — Portfolio</h1>
  <p>Personal site built with Next.js, TypeScript, Tailwind CSS, SWR, Firebase, and Prisma with PostgreSQL.</p>
</div>

<br />

## Introduction

This project is a portfolio and blog: dashboard stats (WakaTime, GitHub contributions, Spotify), projects from PostgreSQL via Prisma, blog content from a WordPress headless API, and optional integrations (DEV.to, Firebase guestbook, OpenAI in the command palette).

The app uses the **Pages Router** (`src/pages`), **next-i18next** for English/Spanish, and **Next.js API routes** as serverless handlers for data fetching. **There is no user login**; GitHub data uses **read tokens** (`GITHUB_READ_USER_TOKEN_*`) for the GraphQL API, not OAuth sign-in.

<br />

## Tech stack

| Area | Details |
|------|---------|
| Framework | **Next.js 16** (Turbopack in dev), **React 19** |
| Language | **TypeScript** (~5.7) |
| Styling | **Tailwind CSS** 3 |
| Data / ORM | **Prisma** + **PostgreSQL** |
| HTTP client | **Fetch** (native; no Axios) |
| Remote data | **SWR**, **next-seo**, **next-sitemap** |
| i18n | **next-i18next** / **i18next** |
| UI / motion | **Framer Motion**, **React Icons**, **Headless UI** |
| Content | **react-markdown**, **remark** / **remark-gfm** |
| Realtime / extras | **Firebase** (guestbook), **Monaco** (JS playground) |
| State | **Zustand** |
| Quality | **ESLint 9** (`eslint.config.mjs` + `eslint-config-next`), **Prettier**, **Husky**, **lint-staged**, **Commitlint** |
| Tests | **Jest**, **Testing Library** |

Path alias: `@/*` → `src/*` (see `tsconfig.json`).

<br />

## Features

- **Command palette (⌘K)** — navigation; optional OpenAI wiring via `OPENAI_API_KEY` (feature may be disabled/unconfigured).
- **JavaScript playground** — live editor (Monaco).
- **Guestbook** — Firebase realtime chat.
- **Spotify “now playing”** — Spotify Web API + SWR.
- **WakaTime** — coding stats on the dashboard via API routes.
- **Blog** — WordPress REST API (`BLOG_API_URL`); list uses client-driven fetching, post pages use SSR where configured.
- **Projects** — Prisma + PostgreSQL; ISR-style revalidation and SSR for detail pages.
- **GitHub contributions** — GraphQL API with tokens from env (see below), not end-user OAuth.

<br />

## Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Development server |
| `yarn build` | Production build (runs `next-sitemap` in `postbuild`) |
| `yarn start` | Serve production build |
| `yarn lint` | ESLint on `src` (zero warnings) |
| `yarn lint:fix` | ESLint `--fix` + Prettier |
| `yarn typecheck` | `tsc --noEmit` |
| `yarn test` / `yarn test:ci` | Jest |
| `yarn format` / `yarn format:check` | Prettier |

`yarn install` runs **`prisma generate`** via `postinstall` (reads your Prisma schema; no database connection required for that step).

<br />

## Getting started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd my-portfolio
yarn install
```

Using **Yarn** is recommended so Husky hooks match the project scripts.

### 2. Environment variables

Copy `.env.example` to `.env` and fill in values. Third-party keys follow each provider’s docs (Spotify, WakaTime, Firebase, WordPress API base URL, etc.).

```env
BUNDLE_ANALYZER=false
SITE_URL=https://luisrojascr.netlify.app

# Blog (WordPress REST API base)
BLOG_API_URL=

# OpenAI (optional — command palette)
OPENAI_API_KEY=

# DEV.to (optional)
DEVTO_KEY=

# Spotify
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=

# WakaTime
WAKATIME_API_KEY=

# GitHub GraphQL (read-only tokens for contribution graph — not OAuth login)
GITHUB_READ_USER_TOKEN_PERSONAL=
GITHUB_READ_USER_TOKEN_WORK=

# Prisma / PostgreSQL
DATABASE_URL='postgres://USER:PASSWORD@HOST:5432/postgres'

# Contact form (e.g. Web3Forms)
CONTACT_FORM_API_KEY=

# Firebase (guestbook)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_DB_URL=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
NEXT_PUBLIC_FIREBASE_CHAT_DB=
```

### 3. Run the dev server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). Main entry: `src/pages/index.tsx`.

<br />

## Deployment notes

- Set the same env vars on your host (e.g. Vercel, Netlify).
- `SITE_URL` should match your public URL for SEO/sitemap (`next-sitemap`).

<br />

## Performance

Run **Lighthouse** or [PageSpeed Insights](https://pagespeed.web.dev/) against your **production** URL after deploy; scores depend on hosting, assets, and third-party APIs.

<br />

## License

Licensed under the [GNU General Public License v3.0](LICENSE).
