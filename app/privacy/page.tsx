import type { Metadata } from "next";
import { Shield } from "lucide-react";

import JsonLd from "@/components/json-ld";
import MarketingPage from "@/components/marketing-page";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "SaltedPixel Privacy Policy",
  description:
    "Understand how SaltedPixel collects, stores, and uses information across websites, local SEO, and automation engagements.",
  path: "/privacy",
  keywords: ["saltedpixel privacy", "data policy", "marketing privacy"],
});

const sections = [
  {
    heading: "Information we collect",
    body: `We gather the details you provide through our contact form, emails, or scheduling links. This includes names, business details, project context, and any assets you voluntarily share. We also use privacy-friendly analytics to understand site performance without tracking individual identities.`,
  },
  {
    heading: "How we use your information",
    body: `Data fuels the roadmap we prepare for you. We use your information to send proposals, schedule consultations, deliver services, and provide progress updates. We never sell your data. If we partner with trusted vendors (for example, email or automation platforms), we only share the minimum necessary to deliver your requested outcome.`,
  },
  {
    heading: "Your rights and preferences",
    body: `You can request access, updates, or deletion of your stored information at any time by emailing outreach@saltedpixel.com. We’ll respond within two business days. If you ever opt in to marketing communications, you can opt out with a single click.`,
  },
];

export default function PrivacyPage() {
  const breadcrumbs = buildBreadcrumbJsonLd({ path: "/privacy", name: "Privacy" });

  return (
    <>
      <JsonLd data={breadcrumbs} id="breadcrumbs-privacy" />
      <MarketingPage
        eyebrow="Privacy"
        title="Your trust fuels every project"
        description="We’re a founder-led studio built on long-term relationships. That means being transparent about how we handle your data."
        primaryCta={{ label: "Get a Free Growth Plan", href: "/contact" }}
        secondaryCta={{ label: "Back to home", href: "/" }}
        highlights={[
          {
            icon: <Shield className="h-6 w-6" aria-hidden="true" />,
            title: "Secure by default",
            description: "We use encrypted tools, least-access principles, and limit vendor access to protect your data.",
          },
          {
            icon: <Shield className="h-6 w-6" aria-hidden="true" />,
            title: "Clear commitments",
            description: "No list selling, no surprise fees, and you can request deletion or export at any time.",
          },
          {
            icon: <Shield className="h-6 w-6" aria-hidden="true" />,
            title: "Compliance minded",
            description: "We align with state privacy guidance and follow best practices for marketing consent.",
          },
        ]}
        footerNote="Questions? Email outreach@saltedpixel.com for a personal response."
      >
        <div className="mt-16 space-y-10 text-slate-200">
          {sections.map((section) => (
            <section key={section.heading} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{section.body}</p>
            </section>
          ))}
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Updated October 2024</p>
        </div>
      </MarketingPage>
    </>
  );
}
