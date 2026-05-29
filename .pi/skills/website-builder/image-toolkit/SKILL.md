---
name: image-toolkit
description: A toolkit for managing images within the project to ensure high performance and SEO compliance.
---

# Image Toolkit Skill

This toolkit provides a collection of tools and workflows for managing, optimizing, and transforming images within the project to ensure high performance and SEO compliance.

## Commands

| Command | Description | Usage |
| :--- | :--- | :--- |
| `convert-to-webp` | Converts an image to WebP using `sharp`. | `node utils/scripts/convert-to-webp.mjs <path>` |

## Tools

### 1. WebP Optimizer
Converts high-resolution images (PNG, JPG) into optimized WebP format while preserving original dimensions and aspect ratio.

- **Purpose**: Reduce file size for faster LCP and better performance.
- **Script**: `utils/scripts/convert-to-webp.mjs`

#### Prerequisites
- Node.js must be installed.
- Project dependencies must be installed (`pnpm install`).

#### Instructions
When a user asks to add an image or optimize an existing one:
1.  **Locate the Image**: Ensure the source image is in `public/images/`.
2.  **Run Conversion**:
    ```bash
    node utils/scripts/convert-to-webp.mjs public/images/<filename>
    ```
3.  **Verify**: Confirm the `.webp` file exists and replace old references in the code.

## Future Tools (Roadmap)
- **Image Resizer**: For generating multiple breakpoints.
- **SVG Optimizer**: Using SVGO to clean up brand icons.
- **Placeholder Generator**: Creating low-res base64 placeholders for BlurHash-like effects.

## General Guidelines
- **Always use WebP**: Use WebP for photos and complex graphics.
- **Use SVGs for Icons**: Keep icons in SVG format for scalability.
- **LCP Optimization**: Above-the-fold images must be optimized and potentially preloaded.
