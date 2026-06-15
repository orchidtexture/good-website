export interface ThemeColors {
  primary: string
  secondary: string
  background: string
  text_primary: string
  text_secondary: string
  accent: string
  border: string
}

export interface ThemeSettings {
  font_sans: string
  colors: ThemeColors
  dark_colors: ThemeColors
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
  theme: ThemeSettings
}

export interface SchemaDefaults {
  business_type: string
  price_range: string
  telephone: string
  founding_date: string
  legal_name: string
  postal_code: string
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

// Keep SiteConfig for backward compatibility where possible, but it might need migration
export type SiteConfig = SiteMeta
