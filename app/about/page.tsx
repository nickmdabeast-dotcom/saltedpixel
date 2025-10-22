import type { Metadata } from "next";
import { GraduationCap, Handshake, Home, Lightbulb } from "lucide-react";

import JsonLd from "@/components/json-ld";
import MarketingPage from "@/components/marketing-page";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "About SaltedPixel – Founder-Led Growth Studio",
  description:
    "Meet the Binghamton-born team behind SaltedPixel. We combine business strategy, experimentation, and long-term partnerships to keep local brands growing.",
  path: "/about",
  keywords: ["saltedpixel team", "binghamton marketing studio", "founder led agency"],
});

export default function AboutPage() {
  const breadcrumbs = buildBreadcrumbJsonLd({ path: "/about", name: "About" });

  return (
    <>
      <JsonLd data={breadcrumbs} id="breadcrumbs-about" />
      <MarketingPage
        eyebrow="Who We Are"
        title="Binghamton innovators building big-brand experiences for small business"
        description="SaltedPixel was founded by Binghamton University School of Management students who believe local companies deserve the same polish and automation as national brands."
        primaryCta={{ label: "Get a Free Growth Plan", href: "/contact" }}
        secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" aria-hidden="true" /> }}
        highlights={[
          {
            icon: <GraduationCap className="h-6 w-6" aria-hidden="true" />,
            title: "Business-first thinking",
            description: "We pair marketing strategy with modern development so every project drives revenue, not just clicks.",
          },
          {
            icon: <Lightbulb className="h-6 w-6" aria-hidden="true" />,
            title: "Always experimenting",
            description: "From AI workflows to design trends, we test new ideas weekly and bring the best to our clients.",
          },
          {
            icon: <Handshake className="h-6 w-6" aria-hidden="true" />,
            title: "Partners, not vendors",
            description: "You get transparent communication, proactive recommendations, and a team that sticks around after launch.",
          },
        ]}
        footerNote="Grounded in Upstate NY • Growing bold brands everywhere"
      />
    </>
  );
}
