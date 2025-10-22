import type { Metadata } from "next";
import { Bot, Home, Layout, Search } from "lucide-react";

import JsonLd from "@/components/json-ld";
import MarketingPage from "@/components/marketing-page";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd, servicesFaqJsonLd, servicesJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "SaltedPixel Services – Web, SEO, Automation",
  description:
    "Explore SaltedPixel services built for local service brands: conversion-focused websites, local SEO acceleration, and AI automations that save hours every week.",
  path: "/services",
  keywords: ["web design services", "local seo services", "marketing automation services"],
});

export default function ServicesPage() {
  const breadcrumbs = buildBreadcrumbJsonLd({ path: "/services", name: "Services" });

  return (
    <>
      <JsonLd data={breadcrumbs} id="breadcrumbs-services" />
      <JsonLd data={servicesJsonLd} id="services-schema" />
      <JsonLd data={servicesFaqJsonLd} id="services-faq-schema" />
      <MarketingPage
        eyebrow="What We Deliver"
        title="Services designed to work together from day one"
        description="Pick individual solutions or let us orchestrate the full SaltedPixel system. Every engagement is strategy-led, transparent, and focused on measurable outcomes."
        primaryCta={{ label: "Get a Free Growth Plan", href: "/contact" }}
        secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" aria-hidden="true" /> }}
        highlights={[
          {
            icon: <Layout className="h-6 w-6" aria-hidden="true" />,
            title: "Conversion-focused websites",
            description: "High-impact visuals, clear storytelling, and UX best practices tuned for local audiences.",
          },
          {
            icon: <Search className="h-6 w-6" aria-hidden="true" />,
            title: "Local SEO acceleration",
            description: "Technical optimizations, content, and reviews working together to dominate neighborhood searches.",
          },
          {
            icon: <Bot className="h-6 w-6" aria-hidden="true" />,
            title: "AI-powered automations",
            description: "Smart chat, instant follow-up, and internal workflows that give you hours back every week.",
          },
        ]}
        footerNote="Mix and match services—our retainers flex as your growth needs evolve."
      >
        <section className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-slate-200 shadow-xl backdrop-blur lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white">How we assemble your growth plan</h3>
            <p className="mt-4 text-sm text-slate-300">
              Every engagement starts with a discovery sprint where we audit your site, search footprint, and automations. From there we prioritize the services that unlock the fastest wins while building toward a compounding growth engine.
            </p>
          </div>
          <ul className="space-y-4 text-sm text-slate-200">
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" aria-hidden="true" />Discovery workshop and roadmap in week one
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400" aria-hidden="true" />Sprint-based build with founder check-ins twice a week
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />Launch playbook covering content, reviews, and automations
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold text-white">Services FAQ</h3>
          <div className="mt-6 space-y-4">
            {[
              {
                question: "What does a typical engagement include?",
                answer:
                  "Most clients combine website design, SEO foundations, and key automations. We tailor each plan based on the opportunities uncovered in our discovery sprint.",
              },
              {
                question: "Do you support internal teams?",
                answer:
                  "Yes. We plug into your marketing stack, provide implementation guides, and can train your team to manage ongoing updates.",
              },
              {
                question: "Can we start with one service?",
                answer:
                  "Absolutely. Many partners start with a website refresh or automation rollout and expand once the core system is in place.",
              },
            ].map((item) => (
              <details key={item.question} className="group rounded-2xl border border-white/10 bg-white/5 p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-white">
                  {item.question}
                  <span className="text-sm text-slate-300 transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-slate-200">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </MarketingPage>
    </>
  );
}
