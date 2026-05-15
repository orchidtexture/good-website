# Development Plan: Agent-Optimized GitHub CMS

This document outlines the step-by-step development of a high-performance, SEO-first CMS built with Next.js and TypeScript, designed specifically for **Agent-Developer Experience (ADX)**.

## Core Principles
- **Agent-Optimized (ADX)**: The codebase is structured to be "legible" and "writable" by AI coding agents (Pi, Claude Code, etc.). 
- **SEO as a First-Class Citizen**: Every decision prioritizes search engine visibility and Core Web Vitals (following `GOOD-SEO.md`).
- **Config for Data, Code for Style**: Use `config.md` for site-wide data. Use components directly for styling to allow agents maximum creative freedom.
- **Extreme Speed**: Static generation and optimized assets to ensure < 2.5s LCP.
- **Agent Instruction Layer**: Built-in documentation and rules to guide agents in extending the site without breaking performance.

---

## Phase 1: Foundation & Project Setup [DONE]
- [x] Initialize Next.js 14+ with TypeScript and Tailwind CSS (App Router).
- [x] Configure ESLint and Prettier for code quality.
- [x] Set up basic folder structure (`/components`, `/lib`, `/content`, `/types`).
- [x] Implement a basic layout following mobile-first principles.

## Phase 2: GitHub Content Integration [DONE]
- [x] Define the content schema (Markdown frontmatter).
- [x] Set up `octokit` to retrieve content from GitHub.
- [x] Implement local caching for development.
- [x] Create a utility to parse Markdown into structured data.

## Phase 3: Dynamic Routing & Rendering [DONE]
- [x] Create `[slug]` routes for dynamic content delivery.
- [x] Use `generateStaticParams` for high-performance SSG.
- [x] Implement proper heading hierarchy for SEO.

## Phase 4: Advanced SEO & Metadata [DONE]
- [x] Build a robust `Metadata` generator.
- [x] Implement `rel="canonical"` and `robots` meta tags.
- [x] Automate JSON-LD structured data.
- [x] Set up `sitemap.ts` and `robots.ts` generators.

## Phase 5: Mobile-First UI/UX [DONE]
- [x] Design a responsive navigation system.
- [x] Implement image optimization using `next/image`.
- [x] Ensure accessible typography.

## Phase 6: CMS Customization [DONE]
- [x] Define configuration schema (`src/types/config.ts`).
- [x] Create a central configuration file (`src/content/config.md`).
- [x] Implement dynamic CSS variables from the config for themes.

## Phase 7: Agent-Developer Experience (ADX) [IN PROGRESS]
- [x] **Agent Instruction Layer**: Refine `AGENTS.md` with precise rules for component creation, styling, and customization philosophy.
- [ ] **Component Scaffolding**: Create a library of agent-friendly components (Navbar, Hero, Posts) that follow strict accessibility and SEO standards.
- [x] **Logic-over-Config**: Decouple UI logic from configuration files to empower agents to write cleaner, more direct code.
- [ ] **Optimization Rules**: Enforce performance/SEO checks that agents must pass.
- [ ] **Deployment Automation**: Streamline the "clone to live" pipeline for agent-led workflows.

---

## Technical Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS
- **Content**: GitHub (Markdown/MDX)
- **Parsing**: `next-mdx-remote` or `contentlayer` (to be decided)
- **Deployment**: Vercel (recommended for Next.js)
