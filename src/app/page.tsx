import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import Button from "@/components/Button";
import { OrganizationJsonLd, CustomJsonLd } from "@/components/JsonLd";
import { getSiteConfig } from "@/lib/github";
import { Wrench, Zap, Search, Layout } from "lucide-react";

const faqItems = [
  {
    question: "What is an Agent-First CMS?",
    answer: "It is a CMS optimized for Agent-Developer Experience (ADX). The codebase is structured so AI agents like Pi, Claude Code, or Cursor can easily read, modify, and extend the site without the overhead of complex dashboards or proprietary APIs."
  },
  {
    question: "What does 'Code-as-Content' mean?",
    answer: "Instead of being restricted to standard Markdown, your posts are free-form HTML files. This allows agents to craft unique layouts, interactive components, and complex designs directly within your content files."
  },
  {
    question: "How is this different from a standard Next.js template?",
    answer: "While it uses modern Next.js 15+ features, its primary difference is the ADX layer. We provide specific instruction files (AGENTS.md) and lean components that are meant to be 'rewritten' by AI, rather than 'configured' through flags."
  },
  {
    question: "Is it really SEO-perfect?",
    answer: "Yes. Every page automatically implements JSON-LD schema (via our pi-schema skill), follows a strict heading hierarchy, and achieves top-tier Lighthouse scores for SEO and Accessibility."
  }
];

export default async function Home() {
  const config = await getSiteConfig();
  return (
    <div className="container mx-auto pb-8 px-4 sm:px-6 lg:px-8">
      {config && <OrganizationJsonLd config={config} />}
      {config && (
        <CustomJsonLd
          schema={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": config.siteName,
            "description": config.siteDescription,
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Node.js, Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Code-as-Content workflow",
              "SEO-First architecture",
              "Next.js 15+",
              "Tailwind CSS 4",
              "ADX (Agent-Developer Experience)"
            ]
          }}
        />
      )}
      <Hero />
      <div className="max-w-3xl mx-auto">
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-text-primary">
            Built for Speed. Optimized for Agents.
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { 
                title: 'Code-as-Content', 
                desc: 'Write raw HTML directly in your posts. No Markdown limits—just infinite design freedom for your Agent to craft unique landing pages.',
                icon: <Layout className="text-primary" size={24} />
              },
              { 
                title: 'Agent-Ready (ADX)', 
                desc: 'Clean, modular components with strict instruction layers (ADX) that enable AI agents to extend and rebrand your site in seconds.',
                icon: <Zap className="text-primary" size={24} />
              },
              { 
                title: 'SEO-Perfect', 
                desc: 'Automated JSON-LD, semantic HTML5, and dynamic metadata are baked into the core to ensure your site ranks high and loads fast.',
                icon: <Search className="text-primary" size={24} />
              },
              { 
                title: 'Automation Skills', 
                desc: 'Includes specialized Pi Skills for image optimization (WebP), layout verification, and automated schema injection.',
                icon: <Wrench className="text-primary" size={24} />
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 border border-accent/20 rounded-xl bg-accent/5">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-text-primary">{feature.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-text-primary">Why choose an Agent-First CMS?</h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              Traditional CMS platforms are built for humans clicking through complex dashboards. 
              <strong> Good Website </strong> is different. It is built for the new era of development where AI agents like Pi, Claude Code, and Cursor are your primary collaborators. By optimizing the codebase for &quot;Agent-Developer Experience&quot; (ADX), we enable these tools to understand your site&apos;s structure deeply and make precise, high-quality modifications without the usual overhead.
            </p>
            <p>
              Our &quot;Code-as-Content&quot; approach means your blog posts aren&apos;t just text—they are mini-applications. Want a custom calculator in your latest post? Or a dynamic data visualization? An agent can write that HTML and Tailwind code directly into the post file, giving you a level of flexibility that standard Markdown-based systems simply can&apos;t match.
            </p>
          </div>
        </section>

        <section className="mt-20 p-8 border border-accent/20 rounded-2xl bg-accent/5">
          <h2 className="text-xl font-bold mb-2 text-text-primary uppercase tracking-tight">Step 1: Customize your site with an Agent</h2>
          <p className="text-sm opacity-80 mb-6 italic">&quot;Make the navbar floating and rounded, and add a minimalist newsletter section to the footer.&quot;</p>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-sm opacity-70 leading-relaxed mb-4">
                Directly modify components in <code className="bg-accent/10 px-1 rounded text-primary text-xs">src/components/</code>. Our <strong>AGENTS.md</strong> instruction layer ensures that any AI agent you use adheres to strict performance and SEO rules.
              </p>
              <Button href="https://github.com/orchidtexture/good-website" variant="outline" size="sm" external>
                View AGENTS.md
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-8 p-8 border border-primary/20 rounded-2xl bg-primary/5">
          <h2 className="text-xl font-bold mb-2 text-primary uppercase tracking-tight">Step 2: Create rich content with an Agent</h2>
          <p className="text-sm opacity-80 mb-6 italic">&quot;Create a new post about the future of AI. Use a 2-column feature grid for the main points and a subtle bg-accent/5 rounded hero section for the intro.&quot;</p>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-sm opacity-70 leading-relaxed mb-4">
                Agents generate optimized <code className="bg-accent/10 px-1 rounded text-primary text-xs">.html</code> files in your posts directory. With <strong>Code-as-Content</strong>, you bypass the limitations of Markdown.
              </p>
              <Button href="/posts" variant="primary" size="sm">
                Explore Blog
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-text-primary">Advanced Agent Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-accent/10 rounded-xl">
              <h4 className="font-bold mb-2">Image Toolkit</h4>
              <p className="text-xs opacity-70">Automated WebP conversion and optimization for perfect LCP.</p>
            </div>
            <div className="p-6 border border-accent/10 rounded-xl">
              <h4 className="font-bold mb-2">Pi Schema</h4>
              <p className="text-xs opacity-70">Semantic JSON-LD injection for Google Rich Results using the <code className="bg-accent/10 px-1 rounded text-primary text-[10px]">inject-schema</code> command.</p>
            </div>
            <div className="p-6 border border-accent/10 rounded-xl">
              <h4 className="font-bold mb-2">Plan & Verify</h4>
              <p className="text-xs opacity-70">Automated page scaffolding and layout auditing based on GPSS specs.</p>
            </div>
          </div>
        </section>

        <section className="mt-20 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-text-primary">Technical Excellence by Default</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-primary mb-2">100</div>
              <p className="text-xs uppercase font-bold tracking-widest opacity-60">SEO Score</p>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">&lt;1s</div>
              <p className="text-xs uppercase font-bold tracking-widest opacity-60">LCP Time</p>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">0</div>
              <p className="text-xs uppercase font-bold tracking-widest opacity-60">Layout Shift</p>
            </div>
          </div>
        </section>

        <FAQ items={faqItems} />
      </div>
    </div>
  );
}
