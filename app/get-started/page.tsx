"use client";

import React from "react";
import { CalendarCheck, Compass, Home, Layers } from "lucide-react";

import MarketingPage from "@/components/marketing-page";

export default function GetStartedPage() {
  return (
    <MarketingPage
      eyebrow="Launch With Confidence"
      title="Let's map out your custom growth system"
      description="Tell us about your goals, your customers, and the challenges holding your business back. We'll prepare a tailored SaltedPixel roadmap before our first call so you can see the opportunities ahead."
      primaryCta={{ label: "Schedule a discovery session", href: "/contact" }}
      secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" /> }}
      highlights={[
        {
          icon: <Compass className="h-6 w-6" />,
          title: "Guided onboarding",
          description: "A short intake form gathers the essentials so we can jump straight into solutions when we meet."
        },
        {
          icon: <Layers className="h-6 w-6" />,
          title: "System blueprint",
          description: "Understand how your website, SEO, and automations will work together in one cohesive plan."
        },
        {
          icon: <CalendarCheck className="h-6 w-6" />,
          title: "Flexible scheduling",
          description: "Pick a time that fits your calendar—we offer evening and weekend slots for busy owners."
        }
      ]}
      footerNote="Every engagement begins with a conversation—no obligations, just ideas."
    />
  );
}
