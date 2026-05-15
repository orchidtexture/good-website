import Link from "next/link";

/**
 * Hero component (Server Component)
 * Designed for Agent-Developer Experience (ADX).
 * Agents: Modify the layout, typography, and content directly here.
 * Use Tailwind's container and responsive utility classes.
 */
export default function Hero() {
  return (
    <section className="py-12 sm:py-20 lg:py-28">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          The Agent-First CMS Template
        </h1>
        <p className="text-xl opacity-80 mb-10 leading-relaxed max-w-2xl mx-auto">
          A high-performance, SEO-first Next.js template designed for <b>Agent-Developer Experience (ADX)</b>. Optimized for Pi, Claude Code, and Cursor to help you build and customize your site in seconds.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/posts"
            className="rounded-md bg-primary px-8 py-4 text-sm font-semibold text-text-secondary shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Read the Blog
          </Link>
          <a
            href="https://github.com/orchidtexture/good-website"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-secondary px-8 py-4 text-sm font-semibold text-text-primary shadow-sm ring-1 ring-inset ring-accent/20 hover:opacity-80 transition-opacity"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
}
