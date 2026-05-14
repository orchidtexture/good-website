import fs from 'fs'
import path from 'path'
import { Octokit } from 'octokit'
import matter from 'gray-matter'
import { Post, PostFrontmatter } from '@/types/post'

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/posts')
const GITHUB_OWNER = 'orchidtexture'
const GITHUB_REPO = 'good-website'
const GITHUB_PATH = 'src/content/posts'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // 1. In production, if we have a token, prefer GitHub to allow ISR to work
    if (process.env.NODE_ENV === 'production' && process.env.GITHUB_TOKEN) {
      const { data: fileData } = await octokit.rest.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: `${GITHUB_PATH}/${slug}.md`,
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
    }

    // 2. Local file system (for development or if no token provided)
    const localPath = path.join(POSTS_DIRECTORY, `${slug}.md`)
    if (fs.existsSync(localPath)) {
      const fileContents = fs.readFileSync(localPath, 'utf8')
      const { data, content } = matter(fileContents)
      return {
        ...(data as PostFrontmatter),
        slug,
        content,
      }
    }

    // 3. Last ditch effort: Try GitHub even if not in production (if token exists)
    if (process.env.GITHUB_TOKEN) {
      const { data: fileData } = await octokit.rest.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: `${GITHUB_PATH}/${slug}.md`,
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
    }

    return null
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    // 1. Try local file system first
    if (fs.existsSync(POSTS_DIRECTORY)) {
      const files = fs.readdirSync(POSTS_DIRECTORY)
      if (files.length > 0) {
        const posts = await Promise.all(
          files
            .filter((file) => file.endsWith('.md'))
            .map(async (file) => {
              const slug = file.replace(/\.md$/, '')
              return await getPostBySlug(slug)
            })
        )
        return posts
          .filter((post): post is Post => post !== null)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      }
    }

    // 2. Fallback to GitHub
    if (process.env.GITHUB_TOKEN) {
      const { data: files } = await octokit.rest.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: GITHUB_PATH,
      })

      if (Array.isArray(files)) {
        const posts = await Promise.all(
          files
            .filter((file) => file.name.endsWith('.md'))
            .map(async (file) => {
              const slug = file.name.replace(/\.md$/, '')
              return await getPostBySlug(slug)
            })
        )
        return posts
          .filter((post): post is Post => post !== null)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      }
    }

    return []
  } catch (error) {
    console.error('Error fetching all posts:', error)
    return []
  }
}
