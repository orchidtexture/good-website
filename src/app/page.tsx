import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <div className="max-w-3xl mx-auto">
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Built for Speed. Optimized for Agents.</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { 
                title: 'Agent-Ready (ADX)', 
                desc: 'Clean, modular components with strict instruction layers for AI agents to extend effortlessly.' 
              },
              { 
                title: 'GitHub-Backed', 
                desc: 'Your content lives in your repo. No database overhead, no extra costs.' 
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

        <section className="mt-20 p-8 border border-primary/20 rounded-2xl bg-primary/5">
          <h2 className="text-xl font-bold mb-2 text-primary">How to customize with an Agent:</h2>
          <p className="text-sm opacity-80 mb-4 italic">&quot;Make the navbar floating and rounded, add a newsletter section, and change the theme to use a Serif font for headings.&quot;</p>
          <p className="text-sm opacity-70">
            Just fire up your favorite coding agent. This repo includes an <code className="bg-accent/10 px-1 rounded text-primary">AGENTS.md</code> file that guides them to customize everything while keeping your site fast and optimized.
          </p>
        </section>
      </div>
    </div>
  );
}
