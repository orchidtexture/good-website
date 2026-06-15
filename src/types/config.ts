export interface ThemeColors {
  primary: string
  secondary: string
  background: string
  textPrimary: string
  textSecondary: string
  accent: string
  border: string
}

export interface SiteConfig {
  baseUrl: string
  siteName: string
  siteType: string
  titleTag: string
  titleTemplate: string
  siteDescription: string
  ogImage: string
  logoUrl: string
  contactEmail: string
  notifyEmail?: string
  adminEmail?: string
  contactPhone?: string
  contactPhoneSecondary?: string
  lineUrl?: string
  videoCallUrl?: string
  defaultLocale: string
  theme: {
    fontSans: string
    light: ThemeColors
    dark: ThemeColors
  }
  schema: {
    organizationName: string
    legalName: string
    foundingDate: string
    address: {
      streetAddress: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      addressCountry: string
    }
  }
  routes: Record<string, RouteConfig>
}

export interface RawThemeColors {
  primary: string
  secondary: string
  background: string
  text_primary: string
  text_secondary: string
  accent: string
  border: string
}

export interface RawThemeSettings {
  font_sans: string
  colors: RawThemeColors
  dark_colors: RawThemeColors
}

export interface SiteConfigBase {
  base_url: string
  site_name: string
  title_template: string
  default_locale: string
  contact_email: string
  notify_email?: string
  admin_email?: string
  contact_phone_secondary?: string
  line_url?: string
  video_call_url?: string
  theme: RawThemeSettings
}

export interface SchemaDefaults {
  business_type: string
  price_range: string
  telephone: string
  founding_date: string
  legal_name: string
  postal_code?: string
  address_country: string
  address_region: string
  address_locality: string
  street_address: string
}

export interface GlobalFallback {
  title: string
  description: string
  og_image: string
  logo_url: string
  robots: string
  schema_defaults: SchemaDefaults
}

export interface RouteConfig {
  title?: string
  description?: string
  keywords?: string[]
  og_type?: string
  geo_visibility?: {
    target_llm_citations?: string[]
    semantic_summary?: string
  }
  schemas?: any[]
}

export interface SiteMeta {
  site_config: SiteConfigBase
  global_fallback: GlobalFallback
  routes: Record<string, RouteConfig>
}
