import { MetadataRoute } from 'next'
import { getSiteConfig } from '@/lib/github'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const config = await getSiteConfig()
  const baseUrl = config?.site_config.base_url || 'https://goodwebsite.dev'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
