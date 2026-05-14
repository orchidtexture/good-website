import Link from 'next/link'
import { getAllPosts } from '@/lib/github'

export const metadata = {
  title: 'Blog Posts',
  description: 'Read the latest updates and articles from Good Website.',
}

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-12 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Blog Posts
        </h1>
        
        {posts.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">No posts found yet.</p>
        ) : (
          <ul className="space-y-12">
            {posts.map((post) => (
              <li key={post.slug} className="group">
                <article className="flex flex-col items-start">
                  <time 
                    dateTime={post.date} 
                    className="mb-2 text-sm text-zinc-500 dark:text-zinc-400"
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    <Link href={`/posts/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <Link 
                    href={`/posts/${post.slug}`}
                    className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:underline"
                  >
                    Read more <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
