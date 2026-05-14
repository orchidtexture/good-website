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
  siteDescription: string
  logoUrl?: string
  contactEmail?: string
  socialLinks?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
  theme: ThemeSettings
  navbarStyle?: 'default' | 'floating'
}
