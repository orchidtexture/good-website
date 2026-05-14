import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { OrganizationJsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { getSiteConfig } from "@/lib/github";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  const siteName = config?.siteName || 'Good Website';
  const siteDescription = config?.siteDescription || 'A high-performance CMS';

  return {
    title: {
      template: `%s | ${siteName}`,
      default: `${siteName} - ${siteDescription}`,
    },
    description: siteDescription,
    metadataBase: new URL('https://good-website.vercel.app'),
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig();

  const themeVars = config ? ({
    '--primary-color': config.theme.primaryColor,
    '--secondary-color': config.theme.secondaryColor,
    '--background-color': config.theme.backgroundColor,
    '--text-color': config.theme.textColor,
    '--accent-color': config.theme.accentColor,
    '--font-sans': config.theme.fontSans,
  } as React.CSSProperties) : {};

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={themeVars}
    >
      <body className="min-h-full flex flex-col bg-site-bg text-site-text dark:bg-zinc-950 dark:text-zinc-50">
        {config && <OrganizationJsonLd config={config} />}
        <Navbar siteName={config?.siteName || 'Good Website'} />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} {config?.siteName || 'Good Website'}. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
