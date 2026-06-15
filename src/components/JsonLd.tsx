import { Post } from '@/types/post'
import { SiteConfig } from '@/types/config'

/**
 * OrganizationJsonLd component
 * Use this on the Homepage or About page to define the brand.
 */
export function OrganizationJsonLd({ config }: { config: SiteConfig }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': config.global_fallback.schema_defaults.business_type,
    '@id': `${config.site_config.base_url}/#organization`,
    name: config.global_fallback.schema_defaults.legal_name || config.site_config.site_name,
    url: config.site_config.base_url,
    logo: config.global_fallback.logo_url ? `${config.site_config.base_url}${config.global_fallback.logo_url}` : undefined,
    foundingDate: config.global_fallback.schema_defaults.founding_date,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.global_fallback.schema_defaults.street_address,
      addressLocality: config.global_fallback.schema_defaults.address_locality,
      addressRegion: config.global_fallback.schema_defaults.address_region,
      postalCode: config.global_fallback.schema_defaults.postal_code,
      addressCountry: config.global_fallback.schema_defaults.address_country
    },
    telephone: config.global_fallback.schema_defaults.telephone,
    priceRange: config.global_fallback.schema_defaults.price_range
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * CustomJsonLd component
 * Allows injecting any custom Schema.org object (FAQ, HowTo, etc).
 */
export function CustomJsonLd({ schema }: { schema: Record<string, any> }) {
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
export function ArticleJsonLd({ post, config }: { post: Post; config: SiteConfig }) {
  const baseUrl = config.site_config.base_url
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
      name: config.global_fallback.schema_defaults.legal_name || config.site_config.site_name,
      logo: config.global_fallback.logo_url ? {
        '@type': 'ImageObject',
        url: `${baseUrl}${config.global_fallback.logo_url}`
      } : undefined
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
  baseUrl,
}: {
  items: { name: string; item: string }[]
  baseUrl: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.item}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
