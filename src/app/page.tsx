import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          High Performance, SEO-First CMS
        </h1>
        <p className="text-xl opacity-80 mb-8 leading-relaxed">
          Welcome to Good Website, a Next.js 15+ template optimized for speed, 
          SEO, and developer experience. This project uses GitHub as a headless 
          CMS, delivering blazing-fast static pages.
        </p>
        <div className="flex gap-4">
          <Link
            href="/posts"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-text-secondary shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Read the Blog
          </Link>
          <a
            href="https://github.com/orchidtexture/good-website"
            className="rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-text-secondary shadow-sm ring-1 ring-inset ring-accent/20 hover:opacity-80 transition-opacity"
          >
            GitHub Repository
          </a>
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Core Principles</h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { title: 'SEO-First', desc: 'Optimized metadata, semantic HTML, and JSON-LD support.' },
              { title: 'Mobile-First', desc: 'Responsive design that works perfectly on any screen size.' },
              { title: 'GitHub as CMS', desc: 'Content lives in your repo. No database overhead.' },
              { title: 'Extreme Speed', desc: 'Static generation with ISR for real-time updates.' },
            ].map((feature) => (
              <li key={feature.title} className="p-6 border border-accent/20 rounded-xl">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-70">{feature.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
