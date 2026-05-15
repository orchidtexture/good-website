import fs from 'fs'
import path from 'path'
import { Octokit } from 'octokit'
import matter from 'gray-matter'
import { Post, PostFrontmatter } from '@/types/post'
import { SiteConfig } from '@/types/config'

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/posts')
const CONFIG_PATH = path.join(process.cwd(), 'src/content/config.md')

const GITHUB_OWNER = process.env.GITHUB_OWNER || 'orchidtexture'
const GITHUB_REPO = process.env.GITHUB_REPO || 'good-website'
const GITHUB_PATH = 'src/content/posts'
const GITHUB_CONFIG_PATH = 'src/content/config.md'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export async function getSiteConfig(): Promise<SiteConfig | null> {
  try {
    // 1. Try Local first (Faster for dev)
    if (fs.existsSync(CONFIG_PATH)) {
      const fileContents = fs.readFileSync(CONFIG_PATH, 'utf8')
      const { data } = matter(fileContents)
      return data as SiteConfig
    }

    // 2. Fallback to GitHub
    if (process.env.GITHUB_TOKEN) {
      const { data: fileData } = await octokit.rest.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: GITHUB_CONFIG_PATH,
      })

      if ('content' in fileData && typeof fileData.content === 'string') {
        const decodedContent = Buffer.from(fileData.content, 'base64').toString('utf8')
        const { data } = matter(decodedContent)
        return data as SiteConfig
      }
    }

    return null
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
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error fetching all posts:', error)
    return []
  }
}
