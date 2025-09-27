"use client";

import React from "react";
import { Home, MonitorSmartphone, Sparkles, TrendingUp } from "lucide-react";

import MarketingPage from "@/components/marketing-page";

export default function WorkPage() {
  return (
    <MarketingPage
      eyebrow="Proof in the Portfolio"
      title="Recent SaltedPixel launches and growth wins"
      description="Explore the websites, automations, and SEO campaigns we've crafted for ambitious small businesses. Each project is tailored to the brand—and built to convert."
      primaryCta={{ label: "Request a featured case study", href: "/contact" }}
      secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" /> }}
      highlights={[
        {
          icon: <Sparkles className="h-6 w-6" />,
          title: "Standout storytelling",
          description: "Clean layouts, bold imagery, and messaging that makes your value unforgettable."
        },
        {
          icon: <MonitorSmartphone className="h-6 w-6" />,
          title: "Mobile-first builds",
          description: "Lightning-fast experiences that feel native on phones, tablets, and desktops alike."
        },
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "Measurable growth",
          description: "Detailed analytics, tracking, and reporting so you always know what's working."
        }
      ]}
      footerNote="We're gathering our favorite transformations—check back soon for full case studies."
    />
  );
}
