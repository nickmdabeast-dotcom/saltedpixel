"use client";

import React from "react";
import { Bot, Globe, Home, LineChart } from "lucide-react";

import MarketingPage from "@/components/marketing-page";

export default function GrowthSystemPage() {
  return (
    <MarketingPage
      eyebrow="The SaltedPixel Method"
      title="A complete growth system engineered for local business"
      description="We blend stunning design, local search visibility, and AI automation into one integrated platform. Each layer is built to reinforce the others so that your website becomes the engine powering every lead."
      primaryCta={{ label: "See our service lineup", href: "/services" }}
      secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" /> }}
      highlights={[
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Web experiences built to convert",
          description: "Modern, responsive sites that showcase your brand and make it effortless for visitors to take action."
        },
        {
          icon: <LineChart className="h-6 w-6" />,
          title: "Local SEO momentum",
          description: "From citations to content, we amplify your visibility so you appear right when customers search."
        },
        {
          icon: <Bot className="h-6 w-6" />,
          title: "Automation that delights",
          description: "AI-powered follow-up keeps conversations moving even when you're focused on running the business."
        }
      ]}
      footerNote="Web • Search • Automation — unified for measurable growth."
    />
  );
}
