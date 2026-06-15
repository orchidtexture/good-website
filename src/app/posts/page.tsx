import Link from 'next/link'
import { getAllPosts, getSiteConfig } from '@/lib/github'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import Button from '@/components/Button'

export const revalidate = 3600 // revalidate at most every hour

export const metadata = {
  title: 'Blog Posts',
  description: 'Read the latest updates and articles from Good Website.',
  alternates: {
    canonical: "/posts",
  },
}

export default async function PostsPage() {
  const posts = await getAllPosts()
  const config = await getSiteConfig()
  const baseUrl = config?.site_config.base_url || 'https://goodwebsite.dev'

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        baseUrl={baseUrl}
        items={[
          { name: 'Home', item: '/' },
          { name: 'Posts', item: '/posts' },
        ]}
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-12 text-4xl font-extrabold tracking-tight sm:text-5xl text-text-primary">
          Blog Posts
        </h1>
        
        {posts.length === 0 ? (
          <p className="opacity-70">No posts found yet.</p>
        ) : (
          <ul className="space-y-12">
            {posts.map((post) => (
              <li key={post.slug} className="group">
                <article className="flex flex-col items-start">
                  <time 
                    dateTime={post.date} 
                    className="mb-2 text-sm opacity-60"
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors text-text-primary">
                    <Link href={`/posts/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="opacity-70 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <Button 
                    href={`/posts/${post.slug}`}
                    variant="ghost"
                    size="sm"
                    className="group-hover:text-primary -ml-3"
                  >
                    Read more <span aria-hidden="true">→</span>
                  </Button>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
