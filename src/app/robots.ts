import { MetadataRoute } from 'next'
import { getSiteConfig } from '@/lib/github'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const config = await getSiteConfig()
  const baseUrl = config?.baseUrl || 'https://good-website-blond.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
