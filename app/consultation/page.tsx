import type { Metadata } from "next";
import { BarChart3, ClipboardCheck, Home, Smile } from "lucide-react";

import JsonLd from "@/components/json-ld";
import MarketingPage from "@/components/marketing-page";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "SaltedPixel Strategy Consultation",
  description:
    "Book a founder-led strategy consultation to audit your website, SEO, and automations. Leave with prioritized recommendations tailored to your next big milestone.",
  path: "/consultation",
  keywords: ["marketing consultation", "growth workshop", "saltedpixel strategy"],
});

export default function ConsultationPage() {
  const breadcrumbs = buildBreadcrumbJsonLd({ path: "/consultation", name: "Consultation" });

  return (
    <>
      <JsonLd data={breadcrumbs} id="breadcrumbs-consultation" />
      <MarketingPage
        eyebrow="Free Strategy Session"
        title="Get actionable insights before you ever sign on"
        description="Our consultation is a collaborative workshop where we audit your digital presence and highlight quick wins. You'll walk away with prioritized recommendations whether or not we work together."
        primaryCta={{ label: "Get a Free Growth Plan", href: "/contact" }}
        secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" aria-hidden="true" /> }}
        highlights={[
          {
            icon: <ClipboardCheck className="h-6 w-6" aria-hidden="true" />,
            title: "360° audit",
            description: "We review your current site, search visibility, and automations to uncover gaps and opportunities.",
          },
          {
            icon: <BarChart3 className="h-6 w-6" aria-hidden="true" />,
            title: "Roadmap & KPIs",
            description: "Expect a concise action plan with metrics to track so you know exactly what success looks like.",
          },
          {
            icon: <Smile className="h-6 w-6" aria-hidden="true" />,
            title: "Zero-pressure vibe",
            description: "Use the insights on your own or partner with us—either way, you'll have clarity on your next move.",
          },
        ]}
        footerNote="Consultations are limited each month to ensure every conversation is high-impact."
      />
    </>
  );
}
