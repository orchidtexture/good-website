import { getSiteConfig } from "@/lib/github";
import Link from "next/link";
import Button from "../Button";

/**
 * Footer component (Server Component)
 * Designed for Agent-Developer Experience (ADX).
 * Agents: Modify the layout, social links, and extra navigation directly here.
 * Use config.md for global data like contactEmail and socialLinks.
 */
export default async function Footer() {
  const config = await getSiteConfig();
  const siteName = config?.siteName || 'Good Website';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/20 bg-site-bg">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl text-text-primary hover:opacity-80 transition-opacity">
              Good Website
            </Link>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              {config?.siteDescription}
            </p>
          </div>

          {/* Navigation section */}
          <div>
            <h3 className="font-semibold mb-4 text-text-primary uppercase tracking-wider text-xs">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Home</Link>
              </li>
              <li>
                <Link href="/posts" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">Blog Posts</Link>
              </li>
              {config?.contactEmail && (
                <li>
                  <a href={`mailto:${config.contactEmail}`} className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
                    Contact
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Social section */}
          <div>
            <h3 className="font-semibold mb-4 text-text-primary uppercase tracking-wider text-xs">Connect</h3>
            <div className="flex gap-2">
              {config?.socialLinks?.github && (
                <Button
                  href={config.socialLinks.github}
                  variant="ghost"
                  size="sm"
                  external
                  aria-label="GitHub"
                  className="p-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </Button>
              )}
              {config?.socialLinks?.twitter && (
                <Button
                  href={config.socialLinks.twitter}
                  variant="ghost"
                  size="sm"
                  external
                  aria-label="Twitter"
                  className="p-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © {currentYear} {siteName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs opacity-60">
            <Link href="/sitemap.xml" className="hover:opacity-100 transition-opacity">Sitemap</Link>
            <Link href="/robots.txt" className="hover:opacity-100 transition-opacity">Robots</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
