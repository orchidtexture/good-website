import { Post } from '@/types/post'
import siteMetaImport from '../../config/site-meta.json'
import { SeoMetaConfig, RouteConfig, SchemaConfig } from '@/types/seo-meta'

const siteMeta = siteMetaImport as unknown as SeoMetaConfig;

/**
 * GlobalJsonLd component
 * Renders the global fallback schema from site-meta.json.
 */
export function GlobalJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(siteMeta.global_fallback.schema_defaults) }}
    />
  )
}

/**
 * CustomJsonLd component
 * Allows injecting any custom Schema.org object (FAQ, HowTo, etc).
 */
export function CustomJsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * ArticleJsonLd component
 * Specifically for blog posts.
 */
export function ArticleJsonLd({ post }: { post: Post }) {
  const baseUrl = siteMeta.site_config.base_url
  const wordCount = post.content.split(/\s+/).length
  const isoDate = new Date(post.date).toISOString()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${baseUrl}/posts/${post.slug}/#article`,
    headline: post.title,
    description: post.description,
    author: [
      {
        '@type': 'Person',
        name: post.author,
        url: baseUrl, 
      },
    ],
    image: post.image ? [
      `${baseUrl}${post.image}`
    ] : undefined,
    datePublished: isoDate,
    dateModified: isoDate, 
    wordCount: wordCount,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/posts/${post.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteMeta.site_config.site_name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}${siteMeta.global_fallback.logo_url}`
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * BreadcrumbJsonLd component
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; item: string }[]
}) {
  const baseUrl = siteMeta.site_config.base_url;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${baseUrl}${item.item}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * RouteJsonLd component
 * Automatically injects schemas defined in site-meta.json for a specific route.
 */
export function RouteJsonLd({ path }: { path: string }) {
  const route: RouteConfig | undefined = siteMeta.routes[path];
  
  if (!route || !route.schemas) return null;

  return (
    <>
      {route.schemas.map((schema: SchemaConfig, index: number) => {
        const jsonLd = {
          '@context': 'https://schema.org',
          '@type': schema.type,
          ...schema.properties
        };
        return (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        );
      })}
    </>
  );
}
