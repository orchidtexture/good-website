---
name: plan-page
description: Instructions for creating new pages in the website following ADX principles.
---

# Plan Page Creation Skill

This skill provides instructions for creating new plan pages in the website. When the user asks to `/create_page <name>`, follow this protocol.

## 1. Discovery & Analysis
- **Identify Page Details**: Determine the intended slug (kebab-case) and display name from the input `<name>`.
- **Search for Specification**: Look for a `layout.md` file in the folder for the indentified page. This file contains the "GPSS" (Global Page Structural Specification) which is the source of truth for content.
- **Reference Existing Pages**: Use other similar pages in the codbase as design references.

## 2. Design Principles (ADX)
- **Server Components**: All plan pages must be Server Components.
- **SmartJapaneseText**: For Japanese text wrap ALL headers (`h1`, `h2`, `h3`), hero sub-headlines, and short descriptive texts in the `<SmartJapaneseText />` component.
- **Tailwind 4 Theme**: Use theme variables (`primary`, `accent`, `text-primary`, etc.) defined in `globals.css`. Never use hex codes.
- **Mobile First**: Ensure layouts are responsive using Tailwind breakpoints.

## 3. Implementation Protocol
1. **Types**: If `layout.md` introduces new data structures, check if they belong in `src/types/`.
2. **Assets**: All images are in the `/images/` folder. Use `next/image` with `priority` for the hero image.
3. **Paths**: Use `@/` alias for imports. Use root-relative paths for internal links.
4. **SEO**: Implement `generateMetadata` using data from the `seo_metadata` block in `layout.md`.

## 4. Execution Flow for `/create_page`
When triggered:
1. Read `layout.md`.
2. Extract SEO metadata and section content.
3. Scaffolding the `page.tsx` file.
4. Verify all components are correctly imported and `SmartJapaneseText` is applied if needed.
5. Provide a summary of the created page and its location.
