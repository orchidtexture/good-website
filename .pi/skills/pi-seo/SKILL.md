---
name: pi-seo
description: Audit and optimize the codebase for SEO health based on GOOD-SEO.md guidelines.
---

# Agent Skill: SEO Auditor (pi-seo)

## 1. Commands

| Command | Description | Usage |
| :--- | :--- | :--- |
| `audit-page` | Audits a specific page against the `GOOD-SEO.md` guidelines. | `pi-seo audit-page <page_path>` |
| `audit-site` | Performs a global audit of the site structure (sitemap, robots, config). | `pi-seo audit-site` |

## 2. Audit Protocol

When performing an audit, **always provide a detailed report first.** Do not apply fixes automatically. Present the findings to the user and wait for instructions on which issues to resolve.

Check the following sections based on `GOOD-SEO.md`:

### A. Technical Health
- **Canonical URLs**: Check if `generateMetadata` implements canonical tags.
- **Robots Meta**: Ensure `index, follow` is the default and `max-image-preview:large` is present.
- **Sitemap & Robots**: Verify `src/app/sitemap.ts` and `src/app/robots.ts` exist and are correctly configured.

### B. Content & Metadata
- **Title Tags**: 50–60 chars (EN) / 30–45 chars (JP). Primary keyword at the start.
- **Meta Descriptions**: 120–160 chars (EN) / 80–120 chars (JP). Must include a CTA.
- **Word Count**: Verify meaningful length (300+ words EN / 1000+ chars JP).

### C. Structural SEO
- **H1 Count**: Exactly ONE `<h1>` per page.
- **Hierarchy**: No skipping levels (H1 > H2 > H3).
- **Images**: `alt` text present, `width`/`height` defined to prevent CLS.
- **Japanese Typography**: Ensure `SmartJapaneseText` is used for Japanese headers/UI text.

### D. E-E-A-T & Trust
- **Author Info**: Article schema must have author details.
- **Contact/Legal**: Check for contact info and privacy policy links in `Footer.tsx` or `config.md`.

## 3. Implementation Guidelines
- **Report First**: Every audit command must output a structured list of "Passed", "Warning", and "Failed" items.
- **User Confirmation**: After the report, ask the user: "Would you like me to fix these issues automatically, or would you prefer to handle them manually?"
- **Metadata**: Use the `Metadata` type from `next` and implement `generateMetadata` for dynamic routes.
- **JSON-LD**: Use the components in `src/components/JsonLd.tsx` for all structured data.
- **Images**: Always use `next/image` with proper props.

---

## 4. Reference
This skill is based on the guidelines in `GOOD-SEO.md`. Always refer to that document for the latest metrics and targets.
