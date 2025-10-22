import type { Metadata } from "next";
import { Bot, Globe, Home, LineChart } from "lucide-react";

import JsonLd from "@/components/json-ld";
import MarketingPage from "@/components/marketing-page";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "SaltedPixel Growth System",
  description:
    "Discover how SaltedPixel weaves web design, local SEO, and automation into one growth engine purpose-built for local service businesses.",
  path: "/growth-system",
  keywords: ["growth system", "local business marketing", "automation and seo"],
});

export default function GrowthSystemPage() {
  const breadcrumbs = buildBreadcrumbJsonLd({ path: "/growth-system", name: "Growth System" });

  return (
    <>
      <JsonLd data={breadcrumbs} id="breadcrumbs-growth-system" />
      <MarketingPage
        eyebrow="The SaltedPixel Method"
        title="A complete growth system engineered for local business"
        description="We blend stunning design, local search visibility, and AI automation into one integrated platform. Each layer is built to reinforce the others so that your website becomes the engine powering every lead."
        primaryCta={{ label: "Get a Free Growth Plan", href: "/contact" }}
        secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" aria-hidden="true" /> }}
        highlights={[
          {
            icon: <Globe className="h-6 w-6" aria-hidden="true" />,
            title: "Web experiences built to convert",
            description: "Modern, responsive sites that showcase your brand and make it effortless for visitors to take action.",
          },
          {
            icon: <LineChart className="h-6 w-6" aria-hidden="true" />,
            title: "Local SEO momentum",
            description: "From citations to content, we amplify your visibility so you appear right when customers search.",
          },
          {
            icon: <Bot className="h-6 w-6" aria-hidden="true" />,
            title: "Automation that delights",
            description: "AI-powered follow-up keeps conversations moving even when you're focused on running the business.",
          },
        ]}
        footerNote="Web • Search • Automation — unified for measurable growth."
      />
    </>
  );
}
