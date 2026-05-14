import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/github'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Metadata } from 'next'
import Image from 'next/image'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

export const revalidate = 3600 // revalidate at most every hour

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.canonical || `/posts/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

const components = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="block my-8">
      <Image
        src={(props.src as string) || ''}
        alt={props.alt || ''}
        width={800}
        height={450}
        className="rounded-lg border border-accent/20"
      />
    </span>
  ),
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <ArticleJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: '/' },
          { name: 'Posts', item: '/posts' },
          { name: post.title, item: `/posts/${post.slug}` },
        ]}
      />
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <time 
            dateTime={post.date} 
            className="block mb-4 text-sm opacity-60"
          >
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-secondary opacity-20" />
            <span className="font-medium">{post.author}</span>
          </div>
        </header>

        {post.image && (
          <div className="relative aspect-video mb-12 overflow-hidden rounded-xl border border-accent/20">
            <Image
              src={post.image as string}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>
      </div>
    </article>
  )
}
