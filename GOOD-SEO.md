# SEO Best Practices Guide (pi-seo)

This document outlines a set of SEO best practices and metrics. Following these guidelines ensures high visibility in search engines, better user experience, and compliance with modern web standards.

---

## 🛠 1. Technical SEO
Technical health is the foundation of SEO. If search engines cannot crawl or understand your site, content optimization will not matter.

| Metric | Best Practice |
| :--- | :--- |
| **Status Code** | Pages must return a `200 OK` status. Redirects should use `301` (Permanent) to pass link equity. |
| **Canonical URL** | Every page should have a `rel="canonical"` tag to prevent duplicate content issues. It must match the primary version of the URL. |
| **Robots Meta** | Avoid `noindex` on primary content. Use `max-image-preview:large` to encourage rich snippets in Google Discover. |
| **Sitemaps** | Maintain an XML sitemap at `/sitemap.xml`. Ensure it is listed in `robots.txt` and contains only `200 OK` indexable URLs. |
| **SSL/HTTPS** | Secure your site with HTTPS. Non-secure sites are penalized in rankings and flagged by browsers. |

---

## 📝 2. Content Optimization
Content must be relevant, well-structured, and provide value to the user.

| Metric | Best Practice (General) | Best Practice (Japanese/CJK) |
| :--- | :--- | :--- |
| **Title Tag** | 50–60 characters. Place keywords at the beginning. | 30–45 characters. Ensure it is readable and contains primary keywords. |
| **Meta Description** | 120–160 characters. Include a clear Call to Action (CTA). | 80–120 characters. Focus on USPs and high-intent keywords. |
| **Word Count** | Minimum 300 words for simple pages; 1,000+ for authority content. | Minimum 1,000 characters (CJK) for meaningful context. |
| **Keyword Density** | Use natural language and synonyms (LSI). Avoid keyword stuffing. | Use a mix of Kanji, Hiragana, and Katakana as users search using all three. |

---

## 🏗 3. Structural SEO & UX
How a page is built affects both crawlers and humans (Core Web Vitals).

| Metric | Best Practice |
| :--- | :--- |
| **H1 Heading** | **Exactly one** `<h1>` tag per page. It should contain the primary topic/keyword. |
| **Heading Hierarchy** | Use headings in order (`H1` -> `H2` -> `H3`). Never skip levels (e.g., don't jump from `H1` to `H3`). |
| **Image Alt Text** | Provide descriptive `alt` text for all images. This is critical for accessibility and Image Search rankings. |
| **Image Dimensions** | Always include `width` and `height` attributes on `<img>` tags to prevent Layout Shift (CLS). |
| **Schema Markup** | Use JSON-LD to implement Structured Data. Essential types: `Organization`, `LocalBusiness`, `Product`, `Article`, and `BreadcrumbList`. |

---

## ⚡ 4. Performance (Core Web Vitals)
Google uses these metrics as a direct ranking signal for mobile and desktop search.

*   **Largest Contentful Paint (LCP)**: Measures loading performance. Target: **< 2.5 seconds**.
*   **First Contentful Paint (FCP)**: Measures the time until the first bit of content is rendered. Target: **< 1.8 seconds**.
*   **Cumulative Layout Shift (CLS)**: Measures visual stability. Target: **< 0.1**.
*   **Interaction to Next Paint (INP)**: Measures responsiveness. Target: **< 200 milliseconds**.

---

## 🎓 5. E-E-A-T (Trust Signals)
Search engines prioritize content that demonstrates Experience, Expertise, Authoritativeness, and Trustworthiness.

*   **Experience**: Include first-hand accounts, original photos, or "I/We" perspectives.
*   **Expertise**: Provide author bios, professional credentials, and links to verified profiles.
*   **Authoritativeness**: Showcase awards, certifications, and mentions from reputable third-party sources.
*   **Trust**: Ensure clear contact details (NAP: Name, Address, Phone), a privacy policy, and secure payment/login indicators.

---

## 🚀 Priority Checklist for New Pages
1. [ ] One `<h1>` tag with the primary keyword.
2. [ ] Title tag (50-60 chars) and Meta Description (120-160 chars).
3. [ ] All images have descriptive `alt` tags and defined dimensions.
4. [ ] JSON-LD Schema is implemented and validated.
5. [ ] Page loads in under 2.5 seconds (LCP).
6. [ ] Canonical tag is set correctly.