import Button from "@/components/Button";

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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-primary"></span>
          Agent First Architecture
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-text-primary">
          The SEO website builder for the AI agent era
        </h1>
        <p className="text-xl opacity-80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Good Website is an SEO-first, Next.js CMS template. Skip the rigid no-code tools and collaborate directly with Claude, Pi, and Cursor to generate, customize, and deploy search-ready sites.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            href="https://github.com/orchidtexture/good-website" 
            size="lg"
            variant="primary"
            external
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            Clone Template
          </Button>
          <Button 
            href="/posts" 
            size="lg"
            variant="outline"
          >
            View Demo Blog
          </Button>
        </div>
      </div>
    </section>
  );
}
