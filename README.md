# GitHub CMS Template

A high-performance, SEO-first CMS built with Next.js 15+ (App Router), TypeScript, and Tailwind CSS 4, using GitHub as the data store.

## Features
- **GitHub as CMS**: Content lives in your repository as Markdown/MDX.
- **Extreme Speed**: Static generation (SSG) with Incremental Static Regeneration (ISR).
- **SEO-First**: Automated JSON-LD, Sitemaps, Robots.txt, and Meta Tags.
- **Customizable**: Change colors, fonts, and site info from a single `config.md` file.
- **Mobile-First**: Fully responsive navigation and layout.
- **Dark/Light Mode**: Full theme customization for both modes.

## Quick Start

1. **Use this Template**: Click the "Use this template" button on GitHub to create your own repo.
2. **Setup Environment**:
   ```bash
   cp .env.example .env.local
   ```
3. **Configure**: Edit `src/content/config.md` to change your site's identity and colors.
4. **Run**:
   ```bash
   pnpm install
   pnpm dev
   ```

## Environment Variables

| Variable | Description |
| :--- | :--- |
| `GITHUB_TOKEN` | (Required for Production) A Personal Access Token with repo read access. |
| `GITHUB_OWNER` | Your GitHub username. |
| `GITHUB_REPO` | The name of your repository. |

## Deployment

Deploy to **Vercel** with one click:
- Add your environment variables in the Vercel dashboard.
- Set the Build Command to `pnpm build`.

## Project Structure
- `/src/content/posts`: Your blog posts (Markdown).
- `/src/content/config.md`: Global site configuration and theme.
- `/src/lib/github.ts`: The logic that fetches and parses your content.
- `/src/components`: Reusable UI components.
