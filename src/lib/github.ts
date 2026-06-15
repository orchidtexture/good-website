import fs from 'fs'
import path from 'path'
import { Octokit } from 'octokit'
import matter from 'gray-matter'
import { Post, PostFrontmatter } from '@/types/post'
import { SiteConfig, SiteMeta, RawThemeColors, ThemeColors } from '@/types/config'

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/posts')
const SITE_META_PATH = path.join(process.cwd(), 'config/site-meta.json')

const GITHUB_OWNER = process.env.GITHUB_OWNER || 'orchidtexture'
const GITHUB_REPO = process.env.GITHUB_REPO || 'good-website'
const GITHUB_PATH = 'src/content/posts'
const GITHUB_SITE_META_PATH = 'config/site-meta.json'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export async function getSiteConfig(): Promise<SiteConfig | null> {
  try {
    let rawData: SiteMeta | null = null

    // 1. Try Local first (Faster for dev)
    if (fs.existsSync(SITE_META_PATH)) {
      const fileContents = fs.readFileSync(SITE_META_PATH, 'utf8')
      rawData = JSON.parse(fileContents) as SiteMeta
    }
    // 2. Fallback to GitHub
    else if (process.env.GITHUB_TOKEN) {
      try {
        const { data: fileData } = await octokit.rest.repos.getContent({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          path: GITHUB_SITE_META_PATH,
        })

        if ('content' in fileData && typeof fileData.content === 'string') {
          const decodedContent = Buffer.from(fileData.content, 'base64').toString('utf8')
          rawData = JSON.parse(decodedContent) as SiteMeta
        }
      } catch (e) {
        console.error('Error fetching site-meta from GitHub:', e)
      }
    }

    if (!rawData) return null

    // Map site-meta.json structure to SiteConfig interface
    const config = rawData.site_config
    const fallback = rawData.global_fallback
    const schema = fallback.schema_defaults

    const mapColors = (colors: RawThemeColors): ThemeColors => ({
      primary: colors.primary,
      secondary: colors.secondary,
      background: colors.background,
      textPrimary: colors.text_primary,
      textSecondary: colors.text_secondary,
      accent: colors.accent,
      border: colors.border,
    })

    return {
      baseUrl: config.base_url,
      siteName: config.site_name,
      siteType: schema.business_type || 'Organization',
      titleTag: fallback.title,
      titleTemplate: config.title_template,
      siteDescription: fallback.description,
      ogImage: fallback.og_image,
      logoUrl: fallback.logo_url,
      contactEmail: config.contact_email,
      notifyEmail: config.notify_email,
      adminEmail: config.admin_email,
      contactPhone: schema.telephone,
      contactPhoneSecondary: config.contact_phone_secondary,
      lineUrl: config.line_url,
      videoCallUrl: config.video_call_url,
      defaultLocale: config.default_locale,
      theme: {
        fontSans: config.theme.font_sans,
        light: mapColors(config.theme.colors),
        dark: mapColors(config.theme.dark_colors),
      },
      schema: {
        organizationName: schema.legal_name,
        legalName: schema.legal_name,
        foundingDate: schema.founding_date,
        address: {
          streetAddress: schema.street_address,
          addressLocality: schema.address_locality,
          addressRegion: schema.address_region,
          postalCode: schema.postal_code || '100-8111',
          addressCountry: schema.address_country,
        },
      },
      routes: rawData.routes,
    }
  } catch (error) {
    console.error('Error fetching site config:', error)
    return null
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // 1. Try Local
    const extensions = ['.html', '.md']
    if (fs.existsSync(POSTS_DIRECTORY)) {
      for (const ext of extensions) {
        const p = path.join(POSTS_DIRECTORY, `${slug}${ext}`)
        if (fs.existsSync(p)) {
          const fileContents = fs.readFileSync(p, 'utf8')
          const { data, content } = matter(fileContents)
          return {
            ...(data as PostFrontmatter),
            slug,
            content,
          }
        }
      }
    }

    // 2. Try GitHub
    if (process.env.GITHUB_TOKEN) {
      for (const ext of extensions) {
        try {
          const { data: fileData } = await octokit.rest.repos.getContent({
            owner: GITHUB_OWNER,
            repo: GITHUB_REPO,
            path: `${GITHUB_PATH}/${slug}${ext}`,
          })

          if ('content' in fileData && typeof fileData.content === 'string') {
            const decodedContent = Buffer.from(fileData.content, 'base64').toString('utf8')
            const { data, content } = matter(decodedContent)
            return {
              ...(data as PostFrontmatter),
              slug,
              content,
            }
          }
        } catch (e) {
          continue
        }
      }
    }

    return null
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    let posts: Post[] = []

    // 1. Try Local
    if (fs.existsSync(POSTS_DIRECTORY)) {
      const files = fs.readdirSync(POSTS_DIRECTORY)
      const localPosts = await Promise.all(
        files
          .filter((file) => file.endsWith('.md') || file.endsWith('.html'))
          .map(async (file) => {
            const slug = file.replace(/\.(md|html)$/, '')
            return await getPostBySlug(slug)
          })
      )
      posts = localPosts.filter((post): post is Post => post !== null)
    }

    // 2. If no local posts found and token exists, try GitHub
    if (posts.length === 0 && process.env.GITHUB_TOKEN) {
      try {
        const { data: files } = await octokit.rest.repos.getContent({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          path: GITHUB_PATH,
        })

        if (Array.isArray(files)) {
          const githubPosts = await Promise.all(
            files
              .filter((file) => file.name.endsWith('.md') || file.name.endsWith('.html'))
              .map(async (file) => {
                const slug = file.name.replace(/\.(md|html)$/, '')
                return await getPostBySlug(slug)
              })
          )
          posts = githubPosts.filter((post): post is Post => post !== null)
        }
      } catch (githubError: any) {
        if (githubError.status !== 404) {
          console.error('GitHub API error fetching posts:', githubError.message)
        }
      }
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error fetching all posts:', error)
    return []
  }
}
