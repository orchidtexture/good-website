import { Dictionary } from "@/dictionaries";
import Button from "@/components/Button";

interface HeroProps {
  dict: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="py-12 sm:py-20 lg:py-28">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-primary"></span>
          Agent First Architecture
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 text-text-primary">
          {dict.home.title}
        </h1>
        <p className="text-xl opacity-80 mb-10 leading-relaxed max-w-2xl mx-auto">
          {dict.home.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            href="https://github.com/orchidtexture/good-website" 
            size="lg"
            variant="primary"
            external
          >
            {/* ... */}
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
