import { Post } from '@/types/post'
import { SiteConfig } from '@/types/config'

/**
 * OrganizationJsonLd component
 * Use this on the Homepage or About page to define the brand.
 */
export function OrganizationJsonLd({ config }: { config: SiteConfig }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${config.baseUrl}/#organization`,
    name: config.schema?.organizationName || config.siteName,
    url: config.baseUrl,
    logo: config.logoUrl ? `${config.baseUrl}${config.logoUrl}` : undefined,
    sameAs: config.socialLinks ? Object.values(config.socialLinks) : [],
    foundingDate: config.schema?.foundingDate,
    address: config.schema?.address ? {
      '@type': 'PostalAddress',
      ...config.schema.address
    } : undefined,
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
  const baseUrl = config.baseUrl
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
      name: config.schema?.organizationName || config.siteName,
      logo: config.logoUrl ? {
        '@type': 'ImageObject',
        url: `${baseUrl}${config.logoUrl}`
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
