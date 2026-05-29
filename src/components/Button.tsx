import React from 'react'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'line' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'full' | 'xl' | 'lg' | 'md' | 'none'
  href?: string
  icon?: React.ReactNode
  fullWidth?: boolean
  external?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  rounded = 'full',
  href,
  icon,
  fullWidth = false,
  external = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 active:scale-[0.98]'
  
  const variants = {
    primary: 'bg-primary text-text-secondary hover:opacity-90',
    accent: 'bg-accent text-text-secondary hover:opacity-90',
    line: 'bg-[#06C755] text-white hover:opacity-90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-text-secondary',
    ghost: 'hover:bg-accent/10 text-text-primary'
  }

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base'
  }

  const roundness = {
    full: 'rounded-full',
    xl: 'rounded-xl',
    lg: 'rounded-lg',
    md: 'rounded-md',
    none: 'rounded-none'
  }

  const classes = [
    baseStyles,
    variants[variant],
    sizes[size],
    roundness[rounded],
    fullWidth ? 'w-full' : '',
    className
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </>
  )

  if (href) {
    if (external || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a 
          href={href} 
          className={classes} 
          target={external ? '_blank' : undefined} 
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
