import { Post } from '@/types/post'
import { SiteConfig } from '@/types/config'

export function OrganizationJsonLd({ config }: { config: SiteConfig }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.siteName,
    url: config.baseUrl,
    logo: config.logoUrl ? `${config.baseUrl}${config.logoUrl}` : undefined,
    sameAs: config.socialLinks ? Object.values(config.socialLinks) : [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ArticleJsonLd({ post, baseUrl }: { post: Post; baseUrl: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: [
      {
        '@type': 'Person',
        name: post.author,
        url: baseUrl, // Update with author profile if available
      },
    ],
    image: post.image ? `${baseUrl}${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date, // Assuming modified = published for now
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/posts/${post.slug}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

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
