export interface ThemeSettings {
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  textColor: string
  accentColor: string
  fontSans: string
  fontSerif?: string
}

export interface SiteConfig {
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
}
