export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JsonLdValue }
  | JsonLdValue[];

export interface SchemaConfig {
  type: string;
  properties: Record<string, JsonLdValue>;
}

export interface GeoVisibility {
  target_llm_citations?: string[];
  semantic_summary?: string;
}

export interface RouteConfig {
  title: string;
  description: string;
  keywords?: string[];
  og_type?: string;
  geo_visibility?: GeoVisibility;
  schemas?: SchemaConfig[];
}

export interface SiteConfigMeta {
  base_url: string;
  site_name: string;
  title_template: string;
  default_locale: string;
}

export interface SchemaDefaults {
  business_type: string;
  price_range: string;
  telephone: string;
  founding_date: string;
  legal_name: string;
  postal_code?: string;
  address_country: string;
  address_region: string;
  address_locality: string;
  street_address: string;
}

export interface GlobalFallback {
  title: string;
  description: string;
  og_image: string;
  logo_url: string;
  robots: string;
  schema_defaults: SchemaDefaults;
}

export interface SeoMetaConfig {
  site_config: SiteConfigMeta;
  global_fallback: GlobalFallback;
  routes: Record<string, RouteConfig>;
}
