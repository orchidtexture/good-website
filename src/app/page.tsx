import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto pb-8 px-4 sm:px-6 lg:px-8">
      <Hero />
      <div className="max-w-3xl mx-auto">
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Built for Speed. Optimized for Agents.</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { 
                title: 'Code-as-Content', 
                desc: 'Write raw HTML directly in your posts. No Markdown limits—just infinite design freedom for your Agent.' 
              },
              { 
                title: 'Agent-Ready (ADX)', 
                desc: 'Clean, modular components with strict instruction layers for AI agents to extend effortlessly.' 
              },
              { 
                title: 'SEO-Perfect', 
                desc: 'Automated JSON-LD, semantic HTML, and dynamic metadata are baked in.' 
              },
              { 
                title: 'Extreme Performance', 
                desc: 'Next.js 15+ and Tailwind 4 combined for near-instant LCP and FCP.' 
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 border border-accent/20 rounded-xl bg-accent/5">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 p-8 border border-accent/20 rounded-2xl bg-accent/5">
          <h2 className="text-xl font-bold mb-2 text-text-primary">How to customize your site with an Agent:</h2>
          <p className="text-sm opacity-80 mb-4 italic">&quot;Make the navbar floating and rounded, and add a minimalist newsletter section to the footer.&quot;</p>
          <p className="text-sm opacity-70 leading-relaxed">
            Agents are instructed to modify components directly in <code className="bg-accent/10 px-1 rounded text-primary">src/components/</code>. They follow the strict performance and SEO rules in <strong>AGENTS.md</strong> to ensure your site stays optimized as it evolves.
          </p>
        </section>

        <section className="mt-8 p-8 border border-primary/20 rounded-2xl bg-primary/5">
          <h2 className="text-xl font-bold mb-2 text-primary">How to create content with an Agent:</h2>
          <p className="text-sm opacity-80 mb-4 italic">&quot;Create a new post about the future of AI. Use a 2-column feature grid for the main points and a subtle bg-accent/5 rounded hero section for the intro.&quot;</p>
          <p className="text-sm opacity-70 leading-relaxed">
            The agent will generate a clean <code className="bg-accent/10 px-1 rounded text-primary">.html</code> file in your posts directory. Since this template uses <strong>Code-as-Content</strong>, your agent can design every post as a unique landing page while keeping it blazingly fast and SEO-optimized.
          </p>
        </section>
      </div>
    </div>
  );
}
