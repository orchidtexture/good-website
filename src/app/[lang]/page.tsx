import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import Button from "@/components/Button";
import { SmartJapaneseText } from "@/components/SmartJapaneseText";
import { RouteJsonLd } from "@/components/JsonLd";
import { 
  Bot, 
  Search, 
  Code2, 
  Workflow,
  Zap, 
  Layout, 
  FileJson,
  CheckCircle2,
  XCircle
} from "lucide-react";
import type { Metadata } from "next";
import { getDictionary, Locale } from "@/dictionaries";
import { getSiteConfig } from "@/lib/github";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const config = await getSiteConfig(lang);
  
  return {
    title: config?.titleTag,
    description: config?.siteDescription,
    alternates: {
      canonical: "/",
    },
  };
}


export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="container mx-auto pb-8 px-4 sm:px-6 lg:px-8">
      <RouteJsonLd path="/" />
      <Hero dict={dict} />
      
      <div className="max-w-4xl mx-auto space-y-32">
        {/* Section 1: AI Agents */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Bot size={16} />
              <SmartJapaneseText as="span">{dict.home.agent_experience}</SmartJapaneseText>
            </div>
            <SmartJapaneseText as="h2" className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
              {dict.home.section1.title}
            </SmartJapaneseText>
            <div className="text-lg opacity-80 leading-relaxed space-y-4">
              <p>
                {dict.home.section1.p1}
              </p>
              <p>
                {dict.home.section1.p2}
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
              <div className="ml-4 text-xs text-slate-400 font-mono">{dict.home.section1.agent_name}</div>
            </div>
            <div className="p-6 font-mono text-sm text-slate-300 leading-relaxed">
              <p className="text-blue-400">{dict.home.section1.user_label}</p>
              <p className="mb-4 text-slate-100">{dict.home.section1.user_prompt}</p>
              <p className="text-purple-400">{dict.home.section1.agent_label}</p>
              <p>{dict.home.section1.agent_action1} <span className="text-amber-300">AGENTS.md</span></p>
              <p>{dict.home.section1.agent_action2} <span className="text-green-300">src/components/Navbar.tsx</span></p>
              <p>{dict.home.section1.agent_action3} <span className="text-green-300">src/components/Newsletter.tsx</span></p>
              <p className="mt-4 text-slate-100">{dict.home.section1.agent_response}</p>
            </div>
          </div>
        </section>

        {/* Section 2: SEO */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Search size={16} />
              <SmartJapaneseText as="span">{dict.home.section2.badge}</SmartJapaneseText>
            </div>
            <SmartJapaneseText as="h2" className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              {dict.home.section2.title}
            </SmartJapaneseText>
            <p className="text-lg opacity-80">
              {dict.home.section2.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <FileJson className="text-primary" size={24} />,
                title: dict.home.section2.features[0].title,
                desc: dict.home.section2.features[0].desc
              },
              {
                icon: <Code2 className="text-primary" size={24} />,
                title: dict.home.section2.features[1].title,
                desc: dict.home.section2.features[1].desc
              },
              {
                icon: <Zap className="text-primary" size={24} />,
                title: dict.home.section2.features[2].title,
                desc: dict.home.section2.features[2].desc
              },
              {
                icon: <Layout className="text-primary" size={24} />,
                title: dict.home.section2.features[3].title,
                desc: dict.home.section2.features[3].desc
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors">
                <div className="mb-4 bg-background w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <SmartJapaneseText as="h3" className="text-xl font-semibold text-text-primary mb-2">{feature.title}</SmartJapaneseText>
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
            <SmartJapaneseText as="h2" className="text-3xl sm:text-4xl font-bold mb-6">
              {dict.home.section3.title}
            </SmartJapaneseText>
            <div className="text-lg opacity-90 space-y-4">
              <p dangerouslySetInnerHTML={{ __html: dict.home.section3.p1 }} />
              <p>
                {dict.home.section3.p2}
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Button href="https://github.com/orchidtexture/good-website" variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30" external>
                {dict.home.section3.cta}
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Workflow */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Workflow size={16} />
              <SmartJapaneseText as="span">{dict.home.section4.badge}</SmartJapaneseText>
            </div>
            <SmartJapaneseText as="h2" className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              {dict.home.section4.title}
            </SmartJapaneseText>
            <p className="text-lg opacity-80" dangerouslySetInnerHTML={{ __html: dict.home.section4.subtitle }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dict.home.section4.steps.map((s, i) => (
              <div key={i} className="relative p-6 rounded-2xl border border-accent/40 bg-background shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-primary/40 absolute top-4 right-4 select-none">
                  {i + 1}
                </div>
                <SmartJapaneseText as="h3" className="text-xl font-bold text-text-primary mb-3 mt-4">{s.title}</SmartJapaneseText>
                <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Multi-language */}
        <section className="bg-primary/5 rounded-3xl p-8 border border-primary/20">
          <SmartJapaneseText as="h2" className="text-3xl font-bold mb-6 text-text-primary">
            {dict.home.section_multilang.title}
          </SmartJapaneseText>
          <div className="text-lg opacity-80 leading-relaxed space-y-4">
            <p>
              {dict.home.section_multilang.p1}
            </p>
            <p>
              {dict.home.section_multilang.p2}
            </p>
            <p>
              {lang === 'ja' ? (
                <SmartJapaneseText>{dict.home.section_multilang.p3}</SmartJapaneseText>
              ) : (
                dict.home.section_multilang.p3
              )}
            </p>
          </div>
        </section>

        {/* Section 5: Comparison */}
        <section>
          <SmartJapaneseText as="h2" className="text-3xl font-bold mb-10 text-center text-text-primary">
            {dict.home.section5.title}
          </SmartJapaneseText>
          <div className="overflow-x-auto bg-background rounded-3xl border border-accent/20 shadow-sm">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr>
                  {dict.home.section5.table.headers.map((header, i) => (
                    <th key={i} className={`py-5 px-6 font-semibold border-b border-accent/20 w-1/3 ${i === 0 ? "text-text-primary" : i === 1 ? "text-primary bg-primary/5 text-lg" : "text-text-primary opacity-60"}`}>
                        {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[15px]">
                {dict.home.section5.table.rows.map((row, i) => (
                    <tr key={i} className="border-b border-accent/10">
                        <td className="py-4 px-6 font-medium">{row.cap}</td>
                        <td className="py-4 px-6 bg-primary/5 font-semibold text-primary">{row.gw}</td>
                        <td className="py-4 px-6 opacity-70">{row.tb}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Who it's for */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-green-500/20 bg-green-500/5">
            <div className="flex items-center gap-3 mb-6 text-green-600 dark:text-green-500">
              <CheckCircle2 size={28} />
              <SmartJapaneseText as="h3" className="text-2xl font-bold">{dict.home.section6.pros.title}</SmartJapaneseText>
            </div>
            <p className="text-lg opacity-90 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: dict.home.section6.pros.desc }} />
          </div>
          <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5">
            <div className="flex items-center gap-3 mb-6 text-red-600 dark:text-red-500">
              <XCircle size={28} />
              <SmartJapaneseText as="h3" className="text-2xl font-bold">{dict.home.section6.cons.title}</SmartJapaneseText>
            </div>
            <p className="text-lg opacity-90 leading-relaxed mb-6">
              {dict.home.section6.cons.desc}
            </p>
          </div>
        </section>

        {/* Section 7: How to get started */}
        <section className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col md:flex-row">
          <div className="p-8 md:p-12 flex-1 text-slate-100 flex flex-col justify-center">
            <SmartJapaneseText as="h2" className="text-3xl font-bold mb-6 text-white">
              {dict.home.section7.title}
            </SmartJapaneseText>
            <ol className="space-y-5 text-slate-300">
              {dict.home.section7.steps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mt-0.5">{i + 1}</span>
                    <span>{step}</span>
                  </li>
              ))}
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

        {/* Section: Contribute */}
        <section className="bg-accent/5 rounded-3xl p-8 border border-accent/20 text-center">
          <SmartJapaneseText as="h2" className="text-3xl font-bold mb-6 text-text-primary">
            {dict.home.section_contribute.title}
          </SmartJapaneseText>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            {dict.home.section_contribute.p1}
          </p>
          <Button href="https://github.com/orchidtexture/good-website" variant="primary" size="lg" external>
            {dict.home.section_contribute.btn}
          </Button>
        </section>

        {/* Section 8: FAQ */}
        <section className="pt-8 border-t border-accent/10">
          <div className="bg-background rounded-3xl border border-accent/20 p-6 sm:p-10 shadow-sm">
            <FAQ items={dict.faq.items} title={dict.faq.title} />
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 pt-10 text-center">
          <SmartJapaneseText as="h2" className="text-3xl sm:text-4xl font-bold mb-8 text-text-primary">
            {dict.home.cta.title}
          </SmartJapaneseText>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="https://github.com/orchidtexture/good-website" 
              size="lg"
              variant="primary"
              external
            >
              {dict.home.cta.btn_start}
            </Button>
            <Button 
              href={`/${lang}/posts`} 
              size="lg"
              variant="outline"
            >
              {dict.home.cta.btn_blog}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
