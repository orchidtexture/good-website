export interface PostFrontmatter {
  title: string
  description: string
  date: string
  image?: string
  imageAlt?: string
  author: string
  tags?: string[]
  category?: string
  canonical?: string
  published: boolean
}

export interface Post extends PostFrontmatter {
  slug: string
  content: string
}
