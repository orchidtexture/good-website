import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { OrganizationJsonLd } from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Good Website',
    default: 'Good Website - High Performance CMS',
  },
  description: 'A high-performance, SEO-first CMS built with Next.js and GitHub.',
  metadataBase: new URL('https://good-website.vercel.app'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <OrganizationJsonLd />
        <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-bold text-xl">
              <span>Good Website</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-300">Home</Link>
              <Link href="/posts" className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-300">Posts</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Good Website. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
