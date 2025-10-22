import type { Metadata } from "next";

import JsonLd from "@/components/json-ld";
import ContactPage from "@/components/contact-page";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact SaltedPixel – Start Your Growth Plan",
  description:
    "Share your goals with SaltedPixel and we’ll reply within 24 hours with a custom growth plan covering website, local SEO, and automation opportunities.",
  path: "/contact",
  keywords: ["contact saltedpixel", "marketing consultation", "request proposal"],
});

export default function Page() {
  const breadcrumbs = buildBreadcrumbJsonLd({ path: "/contact", name: "Contact" });

  return (
    <>
      <JsonLd data={breadcrumbs} id="breadcrumbs-contact" />
      <ContactPage />
    </>
  );
}
