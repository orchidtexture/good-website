import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          High Performance, SEO-First CMS
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          Welcome to Good Website, a Next.js 15+ template optimized for speed, 
          SEO, and developer experience. This project uses GitHub as a headless 
          CMS, delivering blazing-fast static pages.
        </p>
        <div className="flex gap-4">
          <Link
            href="/posts"
            className="rounded-md bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Read the Blog
          </Link>
          <a
            href="https://github.com/orchidtexture/good-website"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-50 dark:ring-zinc-700 dark:hover:bg-zinc-700"
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
              <li key={feature.title} className="p-6 border border-zinc-200 rounded-xl dark:border-zinc-800">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
