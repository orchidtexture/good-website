import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { getSiteConfig } from "@/lib/github";

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
                desc: 'Write raw HTML directly in your posts. No Markdown limits—just infinite design freedom for your Agent to craft unique landing pages.' 
              },
              { 
                title: 'Agent-Ready (ADX)', 
                desc: 'Clean, modular components with strict instruction layers (ADX) that enable AI agents to extend and rebrand your site in seconds.' 
              },
              { 
                title: 'SEO-Perfect', 
                desc: 'Automated JSON-LD, semantic HTML5, and dynamic metadata are baked into the core to ensure your site ranks high and loads fast.' 
              },
              { 
                title: 'Extreme Performance', 
                desc: 'Harness the power of Next.js 15+ and Tailwind CSS 4 to achieve near-perfect Lighthouse scores and instant Interaction to Next Paint (INP).' 
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 border border-accent/20 rounded-xl bg-accent/5">
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
          <p className="text-sm opacity-80 mb-4 italic">&quot;Make the navbar floating and rounded, and add a minimalist newsletter section to the footer.&quot;</p>
          <p className="text-sm opacity-70 leading-relaxed">
            Directly modify components in <code className="bg-accent/10 px-1 rounded text-primary text-xs">src/components/</code>. Our <strong>AGENTS.md</strong> instruction layer ensures that any AI agent you use adheres to strict performance and SEO rules in <strong>AGENTS.md</strong>, maintaining your <span className="text-primary font-bold">95+ Lighthouse score</span> even as your site grows.
          </p>
        </section>

        <section className="mt-8 p-8 border border-primary/20 rounded-2xl bg-primary/5">
          <h2 className="text-xl font-bold mb-2 text-primary uppercase tracking-tight">Step 2: Create rich content with an Agent</h2>
          <p className="text-sm opacity-80 mb-4 italic">&quot;Create a new post about the future of AI. Use a 2-column feature grid for the main points and a subtle bg-accent/5 rounded hero section for the intro.&quot;</p>
          <p className="text-sm opacity-70 leading-relaxed">
            Agents generate optimized <code className="bg-accent/10 px-1 rounded text-primary text-xs">.html</code> files in your posts directory. With <strong>Code-as-Content</strong>, you bypass the limitations of Markdown, allowing your agent to design bespoke layouts for every single article you publish.
          </p>
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
