'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
]

export default function Navbar({ siteName, style = 'default' }: { siteName: string; style?: 'default' | 'floating' }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isFloating = style === 'floating'

  return (
    <header className={`z-40 transition-all duration-300 ${
      isFloating 
        ? `fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl border border-accent/20 bg-site-bg/80 backdrop-blur-md shadow-lg overflow-hidden ${isOpen ? 'rounded-t-[28px] rounded-b-2xl' : 'rounded-full'}` 
        : 'sticky top-0 w-full border-b border-accent/20 bg-site-bg/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${isFloating ? 'h-14' : 'h-16'}`}>
          <div className="flex items-center gap-2 font-bold text-xl text-text-primary">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              {siteName}
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
            <ThemeToggle className={isFloating ? 'rounded-full' : 'rounded-lg'} />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle className={isFloating ? 'rounded-full' : 'rounded-lg'} />
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 text-text-primary opacity-70 hover:opacity-100 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all ${
                isFloating ? 'rounded-full' : 'rounded-md'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}>
        <div className="overflow-hidden">
          <div className={`px-4 pb-3 pt-2 space-y-1 ${
            isFloating ? 'border-t border-accent/20' : 'border-b border-accent/20'
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isFloating ? 'rounded-full' : 'rounded-md'
                } ${
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
