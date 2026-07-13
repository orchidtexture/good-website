import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import Button from "@/components/Button";
import { RouteJsonLd } from "@/components/JsonLd";
import { 
  Bot, 
  Search, 
  Code2, 
  Workflow, 
  Check, 
  X, 
  Zap, 
  Layout, 
  FileJson,
  CheckCircle2,
  XCircle
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const faqItems = [
  {
    question: "What is an AI CMS platform?",
    answer: "An AI CMS platform is a content management system designed specifically to be operated, extended, and maintained by AI agents like Claude, Pi, or Cursor, rather than just humans clicking through a dashboard."
  },
  {
    question: "Is this a Next.js CMS template?",
    answer: "Yes. Good Website is an SEO optimized Next.js CMS template using the latest App Router, React Server Components, and Tailwind CSS. It is built to be a code-first foundation for your site."
  },
  {
    question: "How does it improve SEO?",
    answer: "It bakes technical SEO into the architecture. It automatically implements JSON-LD schema, metadata, canonical tags, and semantic HTML5, ensuring your site is search-ready by default."
  },
  {
    question: "Can I use Claude, Pi, or Cursor?",
    answer: "Absolutely. The repository includes strict AGENTS.md instruction layers so your preferred AI agent understands exactly how to generate components, modify layouts, and create content."
  },
  {
    question: "Do I need to code?",
    answer: "You should be comfortable with a code editor, git, and basic deployment concepts. While AI agents write the code, this is a developer-centric product where you own and review the source code."
  },
  {
    question: "Can I customize the content model and design?",
    answer: "Yes, infinitely. Because it uses a Code-as-Content model, you aren't restricted by predefined dashboard fields. You can ask an agent to build custom React components right into your posts."
  },
  {
    question: "Does it replace an SEO tool?",
    answer: "It replaces the need for technical SEO plugins and manual schema formatting by automating best practices, but you still need to research keywords and plan your content strategy."
  },
  {
    question: "Who should not use it?",
    answer: "If you are looking for a purely visual drag-and-drop editor without touching code, or a turnkey hosted solution where you don't manage a GitHub repository, a traditional no-code website builder is a better fit."
  }
];

export default async function Home() {
  return (
    <div className="container mx-auto pb-8 px-4 sm:px-6 lg:px-8">
      <RouteJsonLd path="/" />
      <Hero />
      
      <div className="max-w-4xl mx-auto space-y-32">
        {/* Section 1: AI Agents */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Bot size={16} />
              <span>Agent-Developer Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
              Build and ship websites with AI agents
            </h2>
            <div className="text-lg opacity-80 leading-relaxed space-y-4">
              <p>
                Traditional CMS interfaces slow down development by separating the content from the code. By using Good Website, a purpose-built <strong>ai agent cms template</strong>, you invite Claude, Pi, and Cursor directly into your project. 
              </p>
              <p>
                Our strict Agent-Developer Experience (ADX) instructions ensure that when you prompt an agent to build a new feature or layout, it interacts safely with your Next.js components and configuration. The agent generates the code, but you maintain the ability to review, test, and deploy every change securely.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-800">
            <div className="flex items-center px-4 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-slate-400 font-mono">cursor - agent-prompt</div>
            </div>
            <div className="p-6 font-mono text-sm text-slate-300 leading-relaxed">
              <p className="text-blue-400">User:</p>
              <p className="mb-4 text-slate-100">Make the navbar floating and rounded, and add a minimalist newsletter section.</p>
              <p className="text-purple-400">Agent:</p>
              <p>Reading <span className="text-amber-300">AGENTS.md</span>...</p>
              <p>Updating <span className="text-green-300">src/components/Navbar.tsx</span></p>
              <p>Creating <span className="text-green-300">src/components/Newsletter.tsx</span></p>
              <p className="mt-4 text-slate-100">Done! I have applied the custom theme variables and verified mobile responsiveness.</p>
            </div>
          </div>
        </section>

        {/* Section 2: SEO */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Search size={16} />
              <span>Perfect Lighthouse Scores</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              SEO is built into the publishing foundation
            </h2>
            <p className="text-lg opacity-80">
              When looking for the best website platforms for SEO, you need more than a generic checklist. Good Website bakes technical SEO directly into the architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <FileJson className="text-primary" size={24} />,
                title: "Automated Metadata",
                desc: "Dynamic title tags, descriptions, and Open Graph data generated for every route."
              },
              {
                icon: <Code2 className="text-primary" size={24} />,
                title: "Structured Data",
                desc: "Built-in JSON-LD schema injection for rich Google results."
              },
              {
                icon: <Zap className="text-primary" size={24} />,
                title: "Core Web Vitals",
                desc: "Optimized image handling, zero layout shift, and server-first rendering to ensure lightning-fast LCP."
              },
              {
                icon: <Layout className="text-primary" size={24} />,
                title: "Semantic HTML5",
                desc: "Strict heading hierarchies and accessible markup by default."
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors">
                <div className="mb-4 bg-background w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{feature.title}</h3>
                <p className="opacity-80 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Next.js CMS */}
        <section className="relative overflow-hidden rounded-3xl bg-primary text-text-secondary">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black opacity-10 blur-3xl"></div>
          
          <div className="relative p-10 sm:p-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              A Next.js CMS template for code-first teams
            </h2>
            <div className="text-lg opacity-90 space-y-4">
              <p>
                We have created an <strong className="font-semibold text-white">seo optimized nextjs cms</strong> that hands ownership back to the developer. Built on Next.js 15+ with the App Router, React Server Components, and Tailwind CSS, this template is entirely extensible. 
              </p>
              <p>
                Because it is a code-first repository, you do not rent your customization from a SaaS dashboard. You own the component logic, the deployment model, and the entire content lifecycle. It is the ultimate Next.js CMS template for teams that want speed without sacrificing technical control.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Button href="https://github.com/orchidtexture/good-website" variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30" external>
                View Architecture
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Workflow */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Workflow size={16} />
              <span>Developer Control</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Code-as-Content and the AI CMS workflow
            </h2>
            <p className="text-lg opacity-80">
              As a true <strong className="font-semibold">code content cms platform</strong>, we bypass the limitations of generic Markdown. Blog posts and pages are free-form HTML files powered by Tailwind utilities. This means your posts aren&apos;t just text—they are mini-applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Prompt", desc: "Ask the agent: 'Create a pricing comparison post using a 3-column feature grid.'" },
              { step: "2", title: "Review", desc: "The agent generates standard HTML directly in your src/content/posts folder." },
              { step: "3", title: "Validate", desc: "Automated tools check schema and formatting for perfect SEO scores." },
              { step: "4", title: "Deploy", desc: "Commit to git and deploy seamlessly via Vercel or Netlify." }
            ].map((s, i) => (
              <div key={i} className="relative p-6 rounded-2xl border border-accent/20 bg-background shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-primary/10 absolute top-4 right-4 select-none">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 mt-4">{s.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Comparison */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center text-text-primary">
            Why Good Website instead of a traditional CMS or drag-and-drop builder
          </h2>
          <div className="overflow-x-auto bg-background rounded-3xl border border-accent/20 shadow-sm">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-5 px-6 font-semibold text-text-primary border-b border-accent/20 w-1/3">Capability</th>
                  <th className="py-5 px-6 font-bold text-primary border-b border-accent/20 bg-primary/5 w-1/3 text-lg">Good Website</th>
                  <th className="py-5 px-6 font-semibold text-text-primary opacity-60 border-b border-accent/20 w-1/3">Traditional Builders</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                <tr className="border-b border-accent/10">
                  <td className="py-4 px-6 font-medium">Code Ownership</td>
                  <td className="py-4 px-6 bg-primary/5 font-semibold text-primary">
                    <div className="flex items-center gap-2">
                      <Check size={18} /> <span>100% (GitHub repo)</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 opacity-70">Locked in database</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-4 px-6 font-medium">AI Agent Compatibility</td>
                  <td className="py-4 px-6 bg-primary/5 font-semibold text-primary">
                    <div className="flex items-center gap-2">
                      <Check size={18} /> <span>Native (via ADX)</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 opacity-70">
                    <div className="flex items-center gap-2">
                      <X size={16} /> <span>Limited / None</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-4 px-6 font-medium">SEO Control</td>
                  <td className="py-4 px-6 bg-primary/5 font-semibold text-primary">
                    <div className="flex items-center gap-2">
                      <Check size={18} /> <span>Programmatic & Complete</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 opacity-70">
                    <div className="flex items-center gap-2">
                      <X size={16} /> <span>Basic plugin fields</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Publishing Workflow</td>
                  <td className="py-4 px-6 bg-primary/5 font-semibold text-primary">
                    <div className="flex items-center gap-2">
                      <Check size={18} /> <span>Git-backed diffs</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 opacity-70">Dashboard clicking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Who it's for */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-green-500/20 bg-green-500/5">
            <div className="flex items-center gap-3 mb-6 text-green-600 dark:text-green-500">
              <CheckCircle2 size={28} />
              <h3 className="text-2xl font-bold">Who it is for</h3>
            </div>
            <p className="text-lg opacity-90 leading-relaxed mb-6">
              This is a specialized <strong className="font-semibold">seo friendly website builder</strong> tailored for developers, indie hackers, and technical marketers who are comfortable working in a code editor and managing git repositories.
            </p>
          </div>
          <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5">
            <div className="flex items-center gap-3 mb-6 text-red-600 dark:text-red-500">
              <XCircle size={28} />
              <h3 className="text-2xl font-bold">Who it is not for</h3>
            </div>
            <p className="text-lg opacity-90 leading-relaxed mb-6">
              If you are looking for a purely visual drag-and-drop editor without touching code, a local website design service, or a turnkey hosted blog where you do not manage any configuration, Good Website is not the right fit.
            </p>
          </div>
        </section>

        {/* Section 7: How to get started */}
        <section className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col md:flex-row">
          <div className="p-8 md:p-12 flex-1 text-slate-100 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              How to get started
            </h2>
            <ol className="space-y-5 text-slate-300">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                <span>Clone the repository from GitHub.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                <span>Install dependencies using <code className="text-amber-300 font-mono text-sm bg-black/30 px-1.5 py-0.5 rounded ml-1">pnpm install</code>.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                <span>Configure your initial site metadata in <code className="text-green-300 font-mono text-sm bg-black/30 px-1.5 py-0.5 rounded ml-1">config/site-meta.json</code>.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mt-0.5">4</span>
                <span>Open the project in Cursor, or use Claude Code/Pi CLI to start building components.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mt-0.5">5</span>
                <span>Deploy the codebase directly to platforms like Vercel or Netlify.</span>
              </li>
            </ol>
          </div>
          <div className="bg-slate-950 p-6 md:p-8 flex-1 border-t md:border-t-0 md:border-l border-slate-800 flex flex-col justify-center font-mono text-sm text-slate-300">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            </div>
            <p className="text-blue-400 mb-1">$ <span className="text-slate-100">git clone https://github.com/orchidtexture/good-website.git</span></p>
            <p className="text-blue-400 mb-1">$ <span className="text-slate-100">cd good-website</span></p>
            <p className="text-blue-400 mb-4">$ <span className="text-slate-100">pnpm install</span></p>
            <p className="text-slate-500 mb-1">added 245 packages, and audited 246 packages in 3s</p>
            <p className="text-blue-400 mb-1 mt-4">$ <span className="text-slate-100">pnpm run dev</span></p>
            <p className="text-green-400">ready - started server on 0.0.0.0:3000, url: http://localhost:3000</p>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="pt-8 border-t border-accent/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="bg-background rounded-3xl border border-accent/20 p-6 sm:p-10 shadow-sm">
            <FAQ items={faqItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 pt-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-text-primary">
            Ready to build faster with an AI CMS platform?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="https://github.com/orchidtexture/good-website" 
              size="lg"
              variant="primary"
              external
            >
              Get Started Now
            </Button>
            <Button 
              href="/posts" 
              size="lg"
              variant="outline"
            >
              Explore Blog Demo
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
