import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { OrganizationJsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
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
  const baseUrl = config?.baseUrl || 'https://good-website-blond.vercel.app';

  return {
    title: {
      template: `%s | ${siteName}`,
      default: `${siteName} - ${siteDescription}`,
    },
    description: siteDescription,
    metadataBase: new URL(baseUrl),
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

  const themeStyles = config ? `
    :root {
      --primary-color: ${config.theme.light.primary};
      --secondary-color: ${config.theme.light.secondary};
      --background-color: ${config.theme.light.background};
      --text-primary-color: ${config.theme.light.textPrimary};
      --text-secondary-color: ${config.theme.light.textSecondary};
      --accent-color: ${config.theme.light.accent};
      --font-sans: ${config.theme.fontSans};
    }
    
    [data-theme='dark'] {
      --primary-color: ${config.theme.dark.primary};
      --secondary-color: ${config.theme.dark.secondary};
      --background-color: ${config.theme.dark.background};
      --text-primary-color: ${config.theme.dark.textPrimary};
      --text-secondary-color: ${config.theme.dark.textSecondary};
      --accent-color: ${config.theme.dark.accent};
    }

    @media (prefers-color-scheme: dark) {
      html:not([data-theme='light']) {
        --primary-color: ${config.theme.dark.primary};
        --secondary-color: ${config.theme.dark.secondary};
        --background-color: ${config.theme.dark.background};
        --text-primary-color: ${config.theme.dark.textPrimary};
        --text-secondary-color: ${config.theme.dark.textSecondary};
        --accent-color: ${config.theme.dark.accent};
      }
    }
  ` : '';

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {themeStyles && <style dangerouslySetInnerHTML={{ __html: themeStyles }} />}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme) document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        {config && <OrganizationJsonLd config={config} />}
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200">
          <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm opacity-60">
              © {new Date().getFullYear()} {config?.siteName || 'Good Website'}. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
