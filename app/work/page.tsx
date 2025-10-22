import type { Metadata } from "next";
import { CheckCircle2, Home, MonitorSmartphone, Sparkles, TrendingUp } from "lucide-react";

import JsonLd from "@/components/json-ld";
import MarketingPage from "@/components/marketing-page";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "SaltedPixel Work – Case Snapshots & Wins",
  description:
    "See how SaltedPixel delivers measurable outcomes with conversion-focused websites, SEO, and automations for local service brands.",
  path: "/work",
  keywords: ["marketing case study", "local business website", "saltedpixel results"],
});

const testimonials = [
  {
    quote:
      "They built our new site in under three weeks and set up automations that text back leads instantly. We've booked more meetings in a month than the previous quarter.",
    name: "Marisa G.",
    role: "Owner, Fairfield Home Services",
  },
  {
    quote:
      "SaltedPixel translated our messy ideas into a focused growth plan. The founders stayed hands-on, making sure every page aligned with our brand voice.",
    name: "Kevin P.",
    role: "Co-founder, Upstate Fit",
  },
  {
    quote:
      "From SEO content to review automations, they gave us a system that keeps working after launch. The weekly updates make it easy to see progress.",
    name: "Alyssa R.",
    role: "Marketing Lead, Birch & Beam Studios",
  },
];

export default function WorkPage() {
  const breadcrumbs = buildBreadcrumbJsonLd({ path: "/work", name: "Work" });

  return (
    <>
      <JsonLd data={breadcrumbs} id="breadcrumbs-work" />
      <MarketingPage
        eyebrow="Proof in the Portfolio"
        title="Recent SaltedPixel launches and growth wins"
        description="Explore the websites, automations, and SEO campaigns we've crafted for ambitious small businesses. Each project is tailored to the brand—and built to convert."
        primaryCta={{ label: "Get a Free Growth Plan", href: "/contact" }}
        secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" aria-hidden="true" /> }}
        highlights={[
          {
            icon: <Sparkles className="h-6 w-6" aria-hidden="true" />,
            title: "Standout storytelling",
            description: "Clean layouts, bold imagery, and messaging that makes your value unforgettable.",
          },
          {
            icon: <MonitorSmartphone className="h-6 w-6" aria-hidden="true" />,
            title: "Mobile-first builds",
            description: "Lightning-fast experiences that feel native on phones, tablets, and desktops alike.",
          },
          {
            icon: <TrendingUp className="h-6 w-6" aria-hidden="true" />,
            title: "Measurable growth",
            description: "Detailed analytics, tracking, and reporting so you always know what's working.",
          },
        ]}
        footerNote="We're gathering our favorite transformations—check back soon for full case studies."
      >
        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-slate-200 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Case snapshot</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Elm Street Dental</h3>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Typical launch in 14–21 days
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Problem</h4>
              <p className="mt-2 text-sm text-slate-200">
                A dated site buried key services and forced patients to call during business hours to book appointments.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Solution</h4>
              <p className="mt-2 text-sm text-slate-200">
                Rebuilt the website with service-specific landing pages, automated intake flows, and review campaigns connected to Google Business Profile.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Outcome</h4>
              <p className="mt-2 text-sm text-slate-200">
                2.6× increase in form completions within the first 30 days plus a growing review pipeline powered by automation.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold text-white">Client testimonials</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 shadow-lg backdrop-blur"
              >
                <p className="text-sm leading-relaxed">“{testimonial.quote}”</p>
                <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">
                  {testimonial.name} • {testimonial.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </MarketingPage>
    </>
  );
}
