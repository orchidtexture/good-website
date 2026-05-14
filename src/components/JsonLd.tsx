import { Post } from '@/types/post'
import { SiteConfig } from '@/types/config'

export function OrganizationJsonLd({ config }: { config: SiteConfig }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.siteName,
    url: 'https://good-website.vercel.app',
    logo: config.logoUrl ? `https://good-website.vercel.app${config.logoUrl}` : undefined,
    sameAs: config.socialLinks ? Object.values(config.socialLinks) : [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ArticleJsonLd({ post }: { post: Post }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: [
      {
        '@type': 'Person',
        name: post.author,
        url: 'https://good-website.vercel.app', // Update with author profile if available
      },
    ],
    image: post.image ? `https://good-website.vercel.app${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date, // Assuming modified = published for now
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://good-website.vercel.app/posts/${post.slug}`,
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
}: {
  items: { name: string; item: string }[]
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://good-website.vercel.app${item.item}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
