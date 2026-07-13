import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { GlobalJsonLd } from "@/components/JsonLd";
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
  if (!config) return {};
  
  const siteName = config.siteName;
  const titleTemplate = config.titleTemplate;
  const defaultTitle = config.titleTag;
  const siteDescription = config.siteDescription;
  const baseUrl = config.baseUrl;

  return {
    title: {
      template: titleTemplate,
      default: defaultTitle,
    },
    description: siteDescription,
    metadataBase: new URL(baseUrl),
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
      --border-color: ${config.theme.light.border};
      --font-sans: ${config.theme.fontSans};
    }
    
    [data-theme='dark'] {
      --primary-color: ${config.theme.dark.primary};
      --secondary-color: ${config.theme.dark.secondary};
      --background-color: ${config.theme.dark.background};
      --text-primary-color: ${config.theme.dark.textPrimary};
      --text-secondary-color: ${config.theme.dark.textSecondary};
      --accent-color: ${config.theme.dark.accent};
      --border-color: ${config.theme.dark.border};
    }

    @media (prefers-color-scheme: dark) {
      html:not([data-theme='light']) {
        --primary-color: ${config.theme.dark.primary};
        --secondary-color: ${config.theme.dark.secondary};
        --background-color: ${config.theme.dark.background};
        --text-primary-color: ${config.theme.dark.textPrimary};
        --text-secondary-color: ${config.theme.dark.textSecondary};
        --accent-color: ${config.theme.dark.accent};
        --border-color: ${config.theme.dark.border};
      }
    }
  ` : '';

  return (
    <html
      lang={config?.defaultLocale.split('_')[0] || "ja"}
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
        <GlobalJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
