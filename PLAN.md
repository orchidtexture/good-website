# Development Plan: GitHub-backed CMS

This document outlines the step-by-step development of a high-performance, SEO-first CMS built with Next.js and TypeScript, using GitHub as the primary data store.

## Core Principles
- **SEO as a First-Class Citizen**: Every decision will prioritize search engine visibility and Core Web Vitals (following `GOOD-SEO.md`).
- **Mobile-First**: Design and functionality will be optimized for mobile users first.
- **GitHub as Database**: Content (Markdown/MDX) lives in a GitHub repository. No traditional DB or separate backend.
- **Extreme Speed**: Static generation and optimized assets to ensure < 2.5s LCP.
- **Step-by-Step**: Incremental development with full control over each component.

---

## Phase 1: Foundation & Project Setup [DONE]
- [x] Initialize Next.js 14+ with TypeScript and Tailwind CSS (App Router).
- [x] Configure ESLint and Prettier for code quality.
- [x] Set up basic folder structure (`/components`, `/lib`, `/content`, `/types`).
- [x] Implement a basic layout following mobile-first principles.

## Phase 2: GitHub Content Integration [DONE]
- [x] Define the content schema (Markdown frontmatter).
- [x] Set up `octokit` or a fetcher to retrieve content from a target GitHub repo.
- [x] Implement a local caching mechanism for development (avoiding API rate limits).
- [x] Create a utility to parse Markdown/MDX into structured data.

## Phase 3: Dynamic Routing & Rendering [DONE]
- [x] Create `[slug]` routes for dynamic content delivery.
- [x] Use `generateStaticParams` for high-performance SSG.
- [x] Implement an MDX renderer with support for custom components.
- [x] Ensure proper heading hierarchy (`H1` -> `H2` -> `H3`) as per `GOOD-SEO.md`.

## Phase 4: Advanced SEO & Metadata [DONE]
- [x] Build a robust `Metadata` generator (Title, Meta Description, OpenGraph, Twitter).
- [x] Implement `rel="canonical"` and `robots` meta tags.
- [x] Automate JSON-LD structured data (Article, Breadcrumb, Organization).
- [x] Set up `sitemap.ts` and `robots.ts` dynamic generators.

## Phase 5: Mobile-First UI/UX
- [ ] Design a responsive navigation system (hamburger menu for mobile, standard for desktop).
- [ ] Implement image optimization using `next/image` with required `width`/`height` and `alt` text.
- [ ] Ensure accessible typography and touch-friendly interaction targets.
- [ ] Optimize for Interaction to Next Paint (INP).

## Phase 6: Polish & Performance
- [ ] Implement Incremental Static Regeneration (ISR) to sync with GitHub updates.
- [ ] Add a search functionality (possibly using a local index or GitHub API).
- [ ] Final audit against `GOOD-SEO.md` and Core Web Vitals.
- [ ] Deployment configuration (e.g., Vercel or Netlify).

---

## Technical Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS
- **Content**: GitHub (Markdown/MDX)
- **Parsing**: `next-mdx-remote` or `contentlayer` (to be decided)
- **Deployment**: Vercel (recommended for Next.js)
