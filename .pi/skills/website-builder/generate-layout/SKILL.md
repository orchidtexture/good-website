---
name: generate-layout
description: Analyzes a page's source code and generates a standard layout.md (GPSS) file based on the utils/gpss_template.md template.
---

# Generate Layout Skill

This skill allows you to reverse-engineer a `layout.md` file from an existing page's source code. Use this when the user asks to `/generate_layout <path>`.

## 1. Input Analysis
- **Target File**: Locate and read the source code at `<path>` (usually a `page.tsx` or a raw HTML dump).
- **Template Reference**: Read `utils/gpss_template.md` to ensure the output matches the required structure.

## 2. Extraction Logic
Extract the following elements from the source code:
- **SEO Metadata**: `title`, `meta description`, `keywords` from the `Metadata` object or `<head>`.
- **Breadcrumbs**: Identify the breadcrumb trail if present.
- **Utility Hooks**: Phone numbers, LINE links, and top-bar call-to-actions (often in `PromoBanner` or `ContactColumns`).
- **Hero Section**: The `H1`, sub-headlines, pitch paragraphs, and main image.
- **Content Blocks**:
    - Identify lists of features or pain points (Feature Grid).
    - Identify pricing tables or comparisons (Data Matrix).
    - Identify contact forms or intake sections (Form).
    - Identify testimonials (Social Proof).
- **Disclaimers**: Footnotes, tax notes, and warnings.
- **Footer Info**: Corporate address, registration numbers, and sibling links.

## 3. Output Generation
- **Target Directory**: The directory of the `<path>` (e.g., if path is `src/app/plans/my-page/page.tsx`, the output goes to `src/app/plans/my-page/layout.md`). Create it if it doesn't exist.
- **Format**: Follow the `utils/gpss_template.md` precisely. Do not omit sections if they exist in the source code.
- **Verbatim Text**: Capture Japanese text **verbatim**. Do not translate or paraphrase.

## 4. Execution Flow
1. Read the source file at `<path>`.
2. Extract all structural data.
3. Map data to the GPSS sections.
4. Write the file `layout.md` in the target directory.
5. Report the completion and summarize the sections mapped.
