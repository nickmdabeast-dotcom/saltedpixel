"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CtaLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "outline";
}

interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface MarketingPageProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  highlights: Highlight[];
  footerNote?: string;
}

export function MarketingPage({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  highlights,
  footerNote,
}: MarketingPageProps) {
  return (
    <section className="relative z-10 mx-4 overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/30 shadow-[0_35px_90px_-45px_rgba(15,23,42,0.85)] backdrop-blur-3xl md:mx-8">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_65%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom,_rgba(192,132,252,0.14),transparent_70%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(160deg,rgba(15,23,42,0.65),rgba(15,23,42,0.35))] opacity-80"
      />
      <div className="relative container mx-auto px-4 pb-16 pt-32">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-200">
            {eyebrow}
          </span>
          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-slate-200 md:text-xl">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Link href={primaryCta.href} className="flex items-center gap-2">
                {primaryCta.label}
                {primaryCta.icon ?? <ArrowRight className="h-5 w-5" />}
              </Link>
            </Button>
            {secondaryCta ? (
              <Button
                asChild
                size="lg"
                variant={secondaryCta.variant ?? "outline"}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Link href={secondaryCta.href} className="flex items-center gap-2">
                  {secondaryCta.icon ?? <ArrowLeft className="h-5 w-5" />}
                  {secondaryCta.label}
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_25px_45px_-35px_rgba(15,23,42,1)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-white/40 hover:bg-white/15"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                {highlight.icon}
              </div>
              <h2 className="text-xl font-semibold text-white">{highlight.title}</h2>
              <p className="mt-3 text-slate-200">{highlight.description}</p>
            </div>
          ))}
        </div>

        {footerNote ? (
          <p className="mt-16 max-w-3xl text-sm uppercase tracking-[0.3em] text-slate-300/80">
            {footerNote}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default MarketingPage;
