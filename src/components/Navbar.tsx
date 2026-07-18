import { getSiteConfig } from "@/lib/github";
import NavbarClient from "./NavbarClient";
import { Locale } from "@/dictionaries";
import { headers } from "next/headers";

/**
 * Navbar component (Server Side)
 * Fetches site configuration and renders the client-side navbar.
 */
export default async function Navbar() {
  const headerList = await headers();
  const lang = (headerList.get('x-lang') as Locale) || 'ja';
  const config = await getSiteConfig(lang);
  return <NavbarClient config={config} lang={lang} />;
}
