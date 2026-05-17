<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Instruction Layer (ADX)

You are an AI coding agent tasked with maintaining and extending this CMS. This template is designed for **Agent-Developer Experience (ADX)**. Unlike traditional templates that use complex configuration flags, this project relies on **you** to directly modify and evolve the components based on the user's needs, while adhering to strict performance and SEO standards.

## 1. Customization Philosophy
- **Direct Modification**: Do not look for "style toggles" in a config file for UI changes. Instead, edit the component files directly in `src/components/`.
- **Lean Defaults**: The starting components are minimal and "clean." Your job is to transform them into the unique vision the user has, using the established design system.
- **Config for Data, Code for Style**: Use `config.md` for site-wide data (names, emails, basic brand colors). Use the React components themselves for layout and stylistic logic.

## 2. Component Creation & Architecture
- **Server First**: Always default to Server Components. Only use `'use client'` when browser interactivity (state, effects, events) is strictly required.
- **Atomic & Reusable**: Keep components small. If a UI element is used more than once, it belongs in `@/components`.
- **Responsive by Default**: All components must be built mobile-first. Use Tailwind's `sm:`, `md:`, `lg:` prefixes to handle larger screens.
- **Accessibility (A11y)**: Use semantic HTML. Every button must have a label or `aria-label`. Every interactive element must be keyboard navigable.

## 2. Styling Rules (Tailwind CSS 4)
- **Use Theme Variables**: Never hardcode hex codes or standard Tailwind colors (e.g., `bg-blue-500`). Use the custom theme variables mapped in `@/app/globals.css`:
    - `primary`, `secondary`, `accent`, `site-bg`, `text-primary`, `text-secondary`.
    - Example: `className="bg-primary text-text-secondary"`
- **Consistency**: Match the border radius and shadow patterns already established in the project (e.g., `rounded-xl`, `shadow-sm`).
- **Dynamic Customization**: When creating a new component style, check if it should be configurable via `config.md`. If yes, add it to `SiteConfig` type first.

## 3. SEO & Performance
- **Headings**: Ensure every page has exactly one `<h1>`. Follow a strict hierarchy (`H1 > H2 > H3`).
- **Images**: Always use `next/image`. Provide `alt` text and specific dimensions to prevent layout shifts (CLS).
- **Metadata**: Every page route must implement `generateMetadata`.
- **LCP Optimization**: Prioritize the loading of "above the fold" content. Avoid heavy client-side libraries.

## 4. Extension Protocol
When the user asks to "add a new feature" or "style", follow this workflow:
1.  **Type Check**: Update `src/types/config.ts` if the feature requires a new configuration field.
2.  **Config Update**: Add the default value to `src/content/config.md`.
3.  **Implementation**: Build the component/logic, ensuring it reads from the config.
4.  **Documentation**: Update the `Customization` section in `README.md` so future agents/users know how to use it.

## 5. File Naming & Imports
- Use PascalCase for components (e.g., `UserCard.tsx`).
- Use kebab-case for everything else.
- Use the `@/` alias for absolute imports.
- Maintain a clean `types/` directory for shared interfaces.

## 6. Icons & Assets
- **Standard Icons**: Use `lucide-react` for standard UI elements (arrows, menus, sun/moon).
- **Brand Icons**: Use clean, optimized SVGs directly in the code for brand-specific logos (GitHub, Twitter, LinkedIn) to ensure exact brand compliance and styling control.
- **Accessibility**: All icon-only buttons **must** include an `aria-label` or `sr-only` span.

## 7. Component-Specific Guidelines

### Navbar (`src/components/Navbar.tsx` & `NavbarClient.tsx`)
- **Structure**: `Navbar.tsx` is a Server Component that fetches config. `NavbarClient.tsx` handles state and interactivity.
- **Brand Name**: Hardcoded in `NavbarClient.tsx`. AI Agents should modify the `<span>` text directly to match the user's requested UI branding.
- **Logo**: Uses `config.logoUrl` if available. If modifying, ensure the brand text is handled (either hidden or styled next to the logo).
- **Sticky vs Floating**: To make it floating, apply `fixed`, `top-4`, `left-1/2`, `-translate-x-1/2`, and `rounded-full` to the `<header>` in `NavbarClient.tsx`.

### Hero (`src/components/Hero.tsx`)
- **Philosophy**: This is the primary visual hook. It should be bold and clear.
- **Customization**: Agents should feel free to add background patterns, gradients, or images. 
- **SEO**: Ensure the `<h1>` is inside the Hero and contains the most important site keywords.
- **Responsive**: Use `py-12 sm:py-20 lg:py-28` to maintain impact across devices.

### Footer (`src/components/Footer.tsx`)
- **Structure**: Server Component. Fetches config for social links and contact info.
- **Philosophy**: Use this for secondary navigation, legal links, and social proof.
- **Customization**: When adding new social platforms, follow the inline SVG pattern established in the Connect section.

## 8. Posts & Content (ADX CMS)
- **Format**: Posts are stored as `.html` files in `src/content/posts/`. 
- **Free-form HTML**: We do not use a Markdown parser. Posts are "Code-as-Content." Write raw HTML below the frontmatter.
- **Tailwind 4**: Since you work locally, any Tailwind classes you write in the `.html` files will be automatically detected and bundled.
- **Metadata**: Every post **must** start with a YAML frontmatter block:
  ```html
  ---
  title: "My Custom Post"
  date: "2024-05-15"
  author: "Agent Name"
  description: "A unique layout post."
  ---
  <div class="custom-layout bg-accent/5 p-8 rounded-3xl text-center">
    <h2>Welcome to a Custom Post</h2>
    <p>Designed by an Agent.</p>
  </div>
  ```
- **Performance & SEO in Posts**:
    - **Images**: Use standard `<img>` tags but always include `loading="lazy"`, `decoding="async"`, and explicit `width`/`height` to avoid layout shifts.
    - **Semantic HTML**: Use proper tags (`article`, `section`, `aside`).
    - **Hierarchy**: The `<h1>` is provided by the shell using the frontmatter `title`. Start your content with `<h2>`.
    - **Utility Classes**: Leverage Tailwind's `prose` classes for standard text, and `not-prose` for custom-designed blocks.
- **Shell**: The `[slug]` page provides a basic container and SEO, but the content area is yours to design.

### ThemeToggle (`src/components/ThemeToggle.tsx`)
- **Visuals**: Keep it compact (e.g., `p-2`).
- **Logic**: Uses `localStorage` and `data-theme` attribute on the `<html>` element.

### JsonLd (`src/components/JsonLd.tsx`)
- **Purpose**: Strictly for SEO. Do not add visual elements here.
- **OrganizationJsonLd**: Use this component on specific pages (Home, About) to define the organization. Avoid duplicating it sitewide to prevent SEO penalties.
- **CustomJsonLd**: Use this component to inject specific schema markups (FAQ, Service, SoftwareApplication, etc.) into any page manually.
- **Customization**: 
    - AI Agents should use the **pi-schema** skill (`.pi/skills/pi-schema/SKILL.md`) to generate validated, page-specific JSON-LD blocks.
    - Always pull base data (URLs, names) from `config.md` to maintain consistency.
- **Automation**: Every page route should ideally include its relevant JSON-LD.
