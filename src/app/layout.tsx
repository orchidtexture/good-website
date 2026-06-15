import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
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
  
  const siteName = config.site_config.site_name;
  const titleTemplate = config.site_config.title_template;
  const defaultTitle = config.global_fallback.title;
  const siteDescription = config.global_fallback.description;
  const baseUrl = config.site_config.base_url;

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
      --primary-color: ${config.site_config.theme.colors.primary};
      --secondary-color: ${config.site_config.theme.colors.secondary};
      --background-color: ${config.site_config.theme.colors.background};
      --text-primary-color: ${config.site_config.theme.colors.text_primary};
      --text-secondary-color: ${config.site_config.theme.colors.text_secondary};
      --accent-color: ${config.site_config.theme.colors.accent};
      --border-color: ${config.site_config.theme.colors.border};
      --font-sans: ${config.site_config.theme.font_sans};
    }
    
    [data-theme='dark'] {
      --primary-color: ${config.site_config.theme.dark_colors.primary};
      --secondary-color: ${config.site_config.theme.dark_colors.secondary};
      --background-color: ${config.site_config.theme.dark_colors.background};
      --text-primary-color: ${config.site_config.theme.dark_colors.text_primary};
      --text-secondary-color: ${config.site_config.theme.dark_colors.text_secondary};
      --accent-color: ${config.site_config.theme.dark_colors.accent};
      --border-color: ${config.site_config.theme.dark_colors.border};
    }

    @media (prefers-color-scheme: dark) {
      html:not([data-theme='light']) {
        --primary-color: ${config.site_config.theme.dark_colors.primary};
        --secondary-color: ${config.site_config.theme.dark_colors.secondary};
        --background-color: ${config.site_config.theme.dark_colors.background};
        --text-primary-color: ${config.site_config.theme.dark_colors.text_primary};
        --text-secondary-color: ${config.site_config.theme.dark_colors.text_secondary};
        --accent-color: ${config.site_config.theme.dark_colors.accent};
        --border-color: ${config.site_config.theme.dark_colors.border};
      }
    }
  ` : '';

  return (
    <html
      lang={config?.site_config.default_locale.split('_')[0] || "ja"}
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
