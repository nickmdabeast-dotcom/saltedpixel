"use client";

import React, { useEffect, useRef } from "react";
import { Clock, Headset, Home, MessageSquare, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";

import MarketingPage from "@/components/marketing-page";

const CONTACT_EMAIL = "outreach@saltedpixel.com";
const CONTACT_PHONE_DISPLAY = "4752986091";
const CONTACT_PHONE_PLAIN = "4752986091";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    __leadEventTracked?: boolean;
  }
}

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mldpopab");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      if (typeof window !== "undefined" && !window.__leadEventTracked && typeof window.fbq === "function") {
        window.fbq("track", "Lead");
        window.__leadEventTracked = true;
      }

      formRef.current?.reset();
      router.push("/thank-you");
    }
  }, [router, state.succeeded]);

  return (
    <MarketingPage
      eyebrow="Let's Talk"
      title="Tell us about your next big milestone"
      description="Drop us a note and we’ll follow up within one business day with tailored next steps. Prefer to talk it through? We can hop on a quick call or video chat to get you moving."
      primaryCta={{ label: "Send us an email", href: "#contact-form", icon: <Send className="h-5 w-5" /> }}
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
      footerNote={`Prefer text? Add ${CONTACT_PHONE_DISPLAY} to your contacts—SMS automations coming soon.`}
    >
      <section
        id="contact-form"
        className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-start"
        aria-labelledby="contact-form-heading"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur">
          <div className="mb-8 space-y-2">
            <span className="text-sm uppercase tracking-[0.35em] text-sky-200">Your project hub</span>
            <h2 id="contact-form-heading" className="text-3xl font-semibold text-white">
              Share the details and we’ll craft the roadmap
            </h2>
            <p className="text-slate-200">
              Fill out the form and we’ll schedule a discovery session to align on vision, scope, and momentum-building next
              steps.
            </p>
          </div>
          <form ref={formRef} className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="group flex flex-col gap-2 text-sm font-medium text-slate-200">
                Full name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ada Lovelace"
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                />
              </label>
              <label className="group flex flex-col gap-2 text-sm font-medium text-slate-200">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-xs text-rose-300"
                />
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="group flex flex-col gap-2 text-sm font-medium text-slate-200">
                Company or organization
                <input
                  type="text"
                  name="company"
                  placeholder="Salted Pixel Labs"
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                />
              </label>
              <label className="group flex flex-col gap-2 text-sm font-medium text-slate-200">
                Ideal launch window
                <input
                  type="text"
                  name="timeline"
                  placeholder="Q3 2024"
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                />
              </label>
            </div>
            <label className="group flex flex-col gap-2 text-sm font-medium text-slate-200">
              Project goals
              <textarea
                name="message"
                required
                placeholder="Tell us about the outcomes you're aiming for, the audience you want to reach, and any must-have features."
                rows={5}
                className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-xs text-rose-300"
              />
            </label>
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            >
              {state.submitting ? "Sending..." : state.succeeded ? "Message sent" : "Send message"}
              <Send className="h-5 w-5" />
            </button>
            {state.succeeded ? (
              <p className="text-sm text-slate-300">
                Thanks for reaching out! Someone from the Salted Pixel team will respond within one business day.
              </p>
            ) : null}
          </form>
        </div>
        <aside className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-8 text-slate-200 shadow-xl backdrop-blur">
          <h3 className="text-xl font-semibold text-white">What happens next</h3>
          <ul className="space-y-5 text-sm leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" aria-hidden />
              We'll review your project snapshot and respond with tailored recommendations or a calendar link.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400" aria-hidden />
              Collaborate directly with our founders on strategy, UX flows, and the systems that sustain growth.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
              Get a clear roadmap, timeline, and investment breakdown so you know exactly what happens next.
            </li>
          </ul>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Need an intro call?</p>
            <p className="mt-3 text-sm text-slate-200">
              Email <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-300 underline decoration-blue-500/60 underline-offset-4 hover:text-blue-200">{CONTACT_EMAIL}</a> or call <a href={`tel:${CONTACT_PHONE_PLAIN}`} className="text-blue-300 underline decoration-blue-500/60 underline-offset-4 hover:text-blue-200">{CONTACT_PHONE_DISPLAY}</a> for an immediate response.
            </p>
          </div>
        </aside>
      </section>
    </MarketingPage>
  );
}
