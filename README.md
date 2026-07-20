# The Good Website Template

A high-performance, SEO-first CMS built with Next.js 15+ (App Router), TypeScript, and Tailwind CSS 4, using GitHub as the data store.

## Features
- **GitHub as CMS**: Content lives in your repository as Free-form HTML with YAML frontmatter.
- **FAQ Section**: Accordion-based FAQ component with automatic JSON-LD schema generation.
- **Extreme Speed**: Static generation (SSG) with Incremental Static Regeneration (ISR).
- **SEO-First**: Automated JSON-LD, Sitemaps, Robots.txt, and Meta Tags.
- **Customizable**: Change colors, fonts, and site info from a single `config.md` file.
- **Mobile-First**: Fully responsive navigation and layout.
- **Multi-language Support**: Built-in support for multiple languages via dictionary files.
- **Smart Japanese Typography**: Automatic semantic line breaking for Japanese text using BudouX.
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

## Customization & Agent Workflow

This template is optimized for **Agent-Developer Experience (ADX)**. Instead of complex, limited configuration flags, we provide lean, high-performance default components that are designed to be easily modified by AI coding agents.

### For Humans
1. **Clone the repo**.
2. **Fire up your Agent** (Pi, Claude Code, Cursor, etc.).
3. **Ask for what you want**: "Make the navbar floating and rounded," "Add a newsletter section," "Change the blog layout to a grid."

### For Agents
Agents should read `AGENTS.md` for specific instructions on how to maintain the site's performance and SEO while fulfilling user requests.

### Agent Skills
This project includes specialized Pi Skills to automate common tasks. You can trigger these via your agent:

| Skill | Description | Usage / Command |
| :--- | :--- | :--- |
| **Image Toolkit** | Optimize images (WebP conversion) for performance. | `image-toolkit convert-to-webp <path>` |
| **Pi Schema** | Generate and inject advanced JSON-LD for SEO. | `pi-schema inject-schema <page_path> <schema_type>` |
| **Pi Seo** | Audit and optimize pages based on `GOOD-SEO.md`. | `pi-seo audit-page <path>` `pi-seo audit-page` |
| **Plan Page** | Blueprint and scaffold new pages following ADX principles. | `plan-page <name>` |
| **Generate Layout** | Analyze a page and generate a `layout.md` (GPSS) spec. | `generate-layout <path>` |
| **Verify Layout** | Audit a page against its `layout.md` (GPSS) specification. | `verify-layout <slug>` |

### UI Component Library
Built with **Tailwind CSS 4** and optimized for **ADX**. Use these components to build your pages:

#### Core Components
- **`Button`**: Versatile button/link component with variants (`primary`, `accent`, `line`, `outline`, `ghost`) and sizes.
  ```tsx
  <Button href="/path" variant="primary">Click Me</Button>
  ```
- **`SmartJapaneseText`**: Essential for Japanese typography. Prevents awkward line breaks by automatically injecting `<wbr />` tags.
  ```tsx
  <SmartJapaneseText as="h1">日本語のタイトル</SmartJapaneseText>
  ```
- **`JsonLd`**: Centralized schema injection. Includes `GlobalJsonLd`, `ArticleJsonLd`, `BreadcrumbJsonLd`, and `CustomJsonLd`.

#### Sections
- **`Hero`**: The standard high-impact landing section.
- **`FAQ`**: Interactive accordion section that **self-injects** `FAQPage` schema.
- **`Navbar` / `Footer`**: Global navigation and footer, configurable via `config.md`.

### Global Settings
Site-wide data and brand colors are managed in `src/content/config.md`.

## Content & Blog Posts (Code-as-Content)

This template uses a **"Code-as-Content"** model for blog posts. Instead of being limited by Markdown, each post is a free-form `.html` file.

- **Infinite Flexibility**: Use Tailwind classes, custom grids, and complex HTML structures directly inside your posts.
- **Agent-Ready**: Simply ask your agent to "Create a new post about [Topic] with a custom designed hero section" and it will generate the optimized HTML for you.
- **Location**: Posts are stored in `src/content/posts/`.
- **Format**: Every post requires a YAML frontmatter block for metadata (title, date, description).

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

## Contributing

We welcome contributions to the Good Website template!

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature/your-feature`).
3. **Make your changes**.
4. **Submit a Pull Request**.

Please follow the ADX principles outlined in `AGENTS.md` when submitting changes.

## Project Structure
- `/src/app`: Next.js App Router pages and routes.
- `/src/components`: Reusable UI components.
  - `/sections`: Large page sections (Hero, FAQ, etc.).
- `/src/content/posts`: Your blog posts (HTML with YAML frontmatter).
- `/src/content/config.md`: Global site configuration and theme.
- `/src/lib/github.ts`: The logic that fetches and parses your content.
- `/utils/scripts`: Developer utility scripts (e.g., image conversion).
- `/.pi/skills`: Custom AI Agent skills for project automation.
