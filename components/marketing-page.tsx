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
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-56 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-5%] h-[30rem] w-[30rem] rounded-full bg-purple-500/25 blur-[140px]" />
        <div className="absolute inset-0 opacity-70 mix-blend-screen [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,0.75),transparent_70%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.2),transparent_65%)]" />
        </div>
        <div className="absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]">
          <div className="absolute inset-0 bg-[conic-gradient(from_120deg_at_50%_50%,rgba(148,163,184,0.2),transparent_60%,rgba(148,163,184,0.2))]" />
        </div>
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 pb-16 pt-32">
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

        <div className="container mx-auto px-4 pb-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_45px_-35px_rgba(15,23,42,1)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/10"
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
            <p className="mt-16 max-w-3xl text-sm uppercase tracking-[0.3em] text-slate-400">
              {footerNote}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MarketingPage;
