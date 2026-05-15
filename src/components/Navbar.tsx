import { getSiteConfig } from "@/lib/github";
import NavbarClient from "./NavbarClient";

/**
 * Navbar component (Server Side)
 * Fetches site configuration and renders the client-side navbar.
 */
export default async function Navbar() {
  const config = await getSiteConfig();
  return <NavbarClient config={config} />;
}
