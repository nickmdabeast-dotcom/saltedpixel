"use client";

import React from "react";
import { GraduationCap, Handshake, Home, Lightbulb } from "lucide-react";

import MarketingPage from "@/components/marketing-page";

export default function AboutPage() {
  return (
    <MarketingPage
      eyebrow="Who We Are"
      title="Binghamton innovators building big-brand experiences for small business"
      description="SaltedPixel was founded by Binghamton University School of Management students who believe local companies deserve the same polish and automation as national brands."
      primaryCta={{ label: "Meet the team", href: "/contact" }}
      secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" /> }}
      highlights={[
        {
          icon: <GraduationCap className="h-6 w-6" />,
          title: "Business-first thinking",
          description: "We pair marketing strategy with modern development so every project drives revenue, not just clicks."
        },
        {
          icon: <Lightbulb className="h-6 w-6" />,
          title: "Always experimenting",
          description: "From AI workflows to design trends, we test new ideas weekly and bring the best to our clients."
        },
        {
          icon: <Handshake className="h-6 w-6" />,
          title: "Partners, not vendors",
          description: "You get transparent communication, proactive recommendations, and a team that sticks around after launch."
        }
      ]}
      footerNote="Grounded in Upstate NY • Growing bold brands everywhere"
    />
  );
}
