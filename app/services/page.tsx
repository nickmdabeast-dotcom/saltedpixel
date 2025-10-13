"use client";

import React from "react";
import { Bot, Home, Layout, Search } from "lucide-react";

import MarketingPage from "@/components/marketing-page";

export default function ServicesPage() {
  return (
    <MarketingPage
      eyebrow="What We Deliver"
      title="Services designed to work together from day one"
      description="Pick individual solutions or let us orchestrate the full SaltedPixel system. Every engagement is strategy-led, transparent, and focused on measurable outcomes."
      primaryCta={{ label: "Start a project", href: "/contact" }}
      secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" /> }}
      highlights={[
        {
          icon: <Layout className="h-6 w-6" />,
          title: "Conversion-focused websites",
          description: "High-impact visuals, clear storytelling, and UX best practices tuned for local audiences."
        },
        {
          icon: <Search className="h-6 w-6" />,
          title: "Local SEO acceleration",
          description: "Technical optimizations, content, and reviews working together to dominate neighborhood searches."
        },
        {
          icon: <Bot className="h-6 w-6" />,
          title: "AI-powered automations",
          description: "Smart chat, instant follow-up, and internal workflows that give you hours back every week."
        }
      ]}
      footerNote="Mix and match services—our retainers flex as your growth needs evolve."
    />
  );
}
