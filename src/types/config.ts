export interface ThemeColors {
  primary: string
  secondary: string
  background: string
  textPrimary: string
  textSecondary: string
  accent: string
}

export interface ThemeSettings {
  fontSans: string
  fontSerif?: string
  light: ThemeColors
  dark: ThemeColors
}

export interface SiteConfig {
  baseUrl: string
  siteName: string
  siteType: string // e.g. "SoftwareApplication", "Organization", "LocalBusiness"
  titleTag: string
  siteDescription: string
  navbarName?: string
  logoUrl?: string
  contactEmail?: string
  socialLinks?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
  theme: ThemeSettings
  schema?: {
    organizationName?: string
    foundingDate?: string
    address?: {
      streetAddress?: string
      addressLocality?: string
      addressRegion?: string
      postalCode?: string
      addressCountry?: string
    }
  }
}
