import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Locale } from "@/dictionaries";
import { getSiteConfig } from "@/lib/github";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const config = await getSiteConfig(lang);
  
  const siteName = config?.siteName || 'Good Website';
  const titleTag = config?.titleTag || 'SEO-First CMS for AI Agents';
  const siteDescription = config?.siteDescription || "The ultimate high-performance, SEO-first CMS template designed for AI Coding Agents.";
  const baseUrl = config?.baseUrl || 'https://goodwebsite.dev';
  const titleTemplate = config?.titleTemplate || `%s | ${siteName}`;

  return {
    title: {
      template: titleTemplate,
      default: titleTag,
    },
    description: siteDescription,
    metadataBase: new URL(baseUrl),
    alternates: {
      languages: {
        'en': '/en',
        'ja': '/ja',
        'es': '/es',
      },
    },
    openGraph: {
      type: 'website',
      url: baseUrl,
      siteName: siteName,
      images: config?.ogImage ? [{ url: config.ogImage }] : [],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
