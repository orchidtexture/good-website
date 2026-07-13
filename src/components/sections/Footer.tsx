import { getSiteConfig } from "@/lib/github";
import Link from "next/link";
import Button from "../Button";

/**
 * Footer component (Server Component)
 * Designed for Agent-Developer Experience (ADX).
 * Agents: Modify the layout, social links, and extra navigation directly here.
 * Use config/site-meta.json for global data like contact_email.
 */
export default async function Footer() {
  const config = await getSiteConfig();
  const siteName = config?.siteName || 'Good Website';
  const siteDescription = config?.siteDescription;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/20 bg-site-bg">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl text-text-primary hover:opacity-80 transition-opacity">
              {siteName}
            </Link>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              {siteDescription}
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
          {/* <div>
            <h3 className="font-semibold mb-4 text-text-primary uppercase tracking-wider text-xs">Connect</h3>
            <div className="flex gap-2 text-sm opacity-70">
              {config?.contactPhoneSecondary && (
                <p>Tel: {config.contactPhoneSecondary}</p>
              )}
            </div>
          </div> */}
        </div>

        <div className="mt-12 pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm opacity-60">
              © {currentYear} {siteName}. All rights reserved.
            </p>
            <p className="text-sm opacity-80">
              Developed by <a href="https://tasuku.io" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline transition-all">tasuku</a> in Japan.
            </p>
          </div>
          <div className="flex gap-6 text-xs opacity-60">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:opacity-100 transition-opacity">Sitemap</Link>
            <Link href="/robots.txt" className="hover:opacity-100 transition-opacity">Robots</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
