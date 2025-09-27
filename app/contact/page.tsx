"use client";

import React from "react";
import { Clock, Headset, Home, MessageSquare } from "lucide-react";

import MarketingPage from "@/components/marketing-page";

export default function ContactPage() {
  return (
    <MarketingPage
      eyebrow="Let's Talk"
      title="Tell us about your next big milestone"
      description="Drop us a note and we’ll follow up within one business day with tailored next steps. Prefer to talk it through? We can hop on a quick call or video chat to get you moving."
      primaryCta={{ label: "Send us an email", href: "mailto:hello@saltedpixel.com" }}
      secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" /> }}
      highlights={[
        {
          icon: <MessageSquare className="h-6 w-6" />,
          title: "Share your vision",
          description: "Tell us about your audience, your goals, and where you need momentum—we'll guide the rest."
        },
        {
          icon: <Headset className="h-6 w-6" />,
          title: "Live strategy sessions",
          description: "Hop on a call with our founders to unpack your ideas and sketch an action plan in real time."
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: "Quick responses",
          description: "Expect a thoughtful reply or meeting invite within 24 hours, often much faster."
        }
      ]}
      footerNote="Prefer text? Add (555) 123-4567 to your contacts—SMS automations coming soon."
    />
  );
}
