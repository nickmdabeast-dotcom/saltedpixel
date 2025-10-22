import type { Metadata } from "next";
import { FileText } from "lucide-react";

import JsonLd from "@/components/json-ld";
import MarketingPage from "@/components/marketing-page";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "SaltedPixel Terms of Service",
  description:
    "Review the working agreements, billing terms, and usage expectations when partnering with SaltedPixel on web, SEO, and automation projects.",
  path: "/terms",
  keywords: ["saltedpixel terms", "service agreement", "marketing contract"],
});

const terms = [
  {
    heading: "Working together",
    body: `SaltedPixel engagements begin with a written scope and timeline. We collaborate using shared project boards and accept feedback within the agreed sprint windows. Any requests outside of scope are documented, estimated, and approved before we proceed.`,
  },
  {
    heading: "Payments & invoicing",
    body: `Project invoices follow the milestones outlined in your proposal. Retainers are billed monthly. All invoices are due within 15 days unless otherwise agreed. Late invoices may pause active work until the account is current.`,
  },
  {
    heading: "Intellectual property",
    body: `Upon receipt of final payment, you own the deliverables we create for you, excluding any third-party assets used under their own licenses. SaltedPixel reserves the right to showcase non-confidential work in our portfolio unless you request otherwise in writing.`,
  },
  {
    heading: "Cancellations",
    body: `Either party may cancel an engagement with 14 days’ notice. Work completed up to the cancellation date will be invoiced at the agreed rate. Deposits on upcoming work are non-refundable once production has begun.`,
  },
];

export default function TermsPage() {
  const breadcrumbs = buildBreadcrumbJsonLd({ path: "/terms", name: "Terms" });

  return (
    <>
      <JsonLd data={breadcrumbs} id="breadcrumbs-terms" />
      <MarketingPage
        eyebrow="Terms"
        title="The essentials that keep projects smooth"
        description="We keep expectations clear so your team knows exactly how we operate and deliver."
        primaryCta={{ label: "Get a Free Growth Plan", href: "/contact" }}
        secondaryCta={{ label: "Back to home", href: "/" }}
        highlights={[
          {
            icon: <FileText className="h-6 w-6" aria-hidden="true" />,
            title: "Transparent scope",
            description: "Every engagement includes a roadmap, deliverables, and response times before we begin.",
          },
          {
            icon: <FileText className="h-6 w-6" aria-hidden="true" />,
            title: "Predictable billing",
            description: "Milestone-based or retainer billing with clear due dates and reminders before invoices arrive.",
          },
          {
            icon: <FileText className="h-6 w-6" aria-hidden="true" />,
            title: "Mutual respect",
            description: "We treat your brand like our own and expect the same respect for timelines, communication, and approvals.",
          },
        ]}
        footerNote="Need a signed agreement? Request our standard MSA or we’ll review yours."
      >
        <div className="mt-16 space-y-8 text-slate-200">
          {terms.map((term) => (
            <section key={term.heading} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">{term.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{term.body}</p>
            </section>
          ))}
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Effective October 2024</p>
        </div>
      </MarketingPage>
    </>
  );
}
