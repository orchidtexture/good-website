'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import Button from './Button'
import { SiteConfig } from '@/types/config'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
]

export default function NavbarClient({ config }: { config: SiteConfig | null }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const siteName = config?.site_config.site_name || 'Good Website'
  const logoUrl = config?.global_fallback.logo_url

  return (
    <header className="sticky top-0 z-40 w-full border-b border-accent/20 bg-site-bg/80 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-text-primary">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
              {logoUrl ? (
                <Image 
                  src={logoUrl} 
                  alt={siteName} 
                  width={32} 
                  height={32} 
                  className="w-8 h-8 object-contain"
                />
              ) : null}
              <p>
                <span>{siteName}</span>
              </p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:opacity-100 ${
                  pathname === item.href
                    ? 'text-primary font-bold'
                    : 'text-text-primary opacity-70'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open main menu"
              className="p-2"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}>
        <div className="overflow-hidden">
          <div className="px-4 pb-3 pt-2 space-y-1 border-t border-accent/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-primary text-text-secondary'
                    : 'text-text-primary hover:bg-accent/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
