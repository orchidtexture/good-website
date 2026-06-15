import { getSiteConfig } from "@/lib/github";
import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy and terms of service.",
  alternates: {
    canonical: "/privacy",
  },
};

export default async function PrivacyPage() {
  const config = await getSiteConfig();
  const baseUrl = config?.site_config.base_url || "https://goodwebsite.dev";

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        baseUrl={baseUrl}
        items={[
          { name: "Home", item: "/" },
          { name: "Privacy Policy", item: "/privacy" },
        ]}
      />
      <div className="max-w-3xl mx-auto prose prose-zinc dark:prose-invert">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-8 text-text-primary">
          Privacy Policy
        </h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
        <h2>Information We Collect</h2>
        <p>
          We do not collect any personal information unless you explicitly provide it to us through contact forms or email.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          Any information you provide is used solely to respond to your inquiries and improve our services.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at {config?.site_config.contact_email || "hello@goodwebsite.dev"}.
        </p>
      </div>
    </div>
  );
}