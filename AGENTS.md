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
