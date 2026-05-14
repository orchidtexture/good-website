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
    // 1. Try local file system first (for development)
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

    // 2. Fallback to GitHub (for production/remote sync)
    // We only do this if GITHUB_TOKEN is present to avoid rate limits
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
    // In development, read from local directory
    if (fs.existsSync(POSTS_DIRECTORY)) {
      const files = fs.readdirSync(POSTS_DIRECTORY)
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

    // Fallback to GitHub list (simplified for example)
    // In a real production app, you'd iterate the repo contents
    return []
  } catch (error) {
    console.error('Error fetching all posts:', error)
    return []
  }
}
