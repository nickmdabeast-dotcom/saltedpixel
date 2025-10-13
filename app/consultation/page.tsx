"use client";

import React from "react";
import { BarChart3, ClipboardCheck, Home, Smile } from "lucide-react";

import MarketingPage from "@/components/marketing-page";

export default function ConsultationPage() {
  return (
    <MarketingPage
      eyebrow="Free Strategy Session"
      title="Get actionable insights before you ever sign on"
      description="Our consultation is a collaborative workshop where we audit your digital presence and highlight quick wins. You'll walk away with prioritized recommendations whether or not we work together."
      primaryCta={{ label: "Reserve your consultation", href: "/contact" }}
      secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" /> }}
      highlights={[
        {
          icon: <ClipboardCheck className="h-6 w-6" />,
          title: "360° audit",
          description: "We review your current site, search visibility, and automations to uncover gaps and opportunities."
        },
        {
          icon: <BarChart3 className="h-6 w-6" />,
          title: "Roadmap & KPIs",
          description: "Expect a concise action plan with metrics to track so you know exactly what success looks like."
        },
        {
          icon: <Smile className="h-6 w-6" />,
          title: "Zero-pressure vibe",
          description: "Use the insights on your own or partner with us—either way, you'll have clarity on your next move."
        }
      ]}
      footerNote="Consultations are limited each month to ensure every conversation is high-impact."
    />
  );
}
