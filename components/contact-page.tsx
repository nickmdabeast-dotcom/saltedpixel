"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Clock, Headset, Home, MessageSquare, Send } from "lucide-react";

import MarketingPage from "@/components/marketing-page";

const CONTACT_EMAIL = "outreach@saltedpixel.com";
const CONTACT_PHONE_DISPLAY = "475-298-6091";
const CONTACT_PHONE_PLAIN = "+14752986091";

type FormState = "idle" | "submitting" | "success" | "error";

type FormErrors = Partial<Record<string, string>>;

const initialErrors: FormErrors = {};

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formErrors, setFormErrors] = useState<FormErrors>(initialErrors);
  const [message, setMessage] = useState<string>("");
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const company = (formData.get("company") as string)?.trim();
    const timeline = (formData.get("timeline") as string)?.trim();
    const projectGoals = (formData.get("message") as string)?.trim();
    const honeypot = (formData.get("website") as string)?.trim();

    const errors: FormErrors = {};
    if (!name) errors.name = "Please share your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
    if (!projectGoals) errors.message = "Tell us how we can help.";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setFormState("idle");
      return;
    }

    setFormState("submitting");
    setMessage("");

    const payload = {
      name,
      email,
      company,
      timeline,
      message: projectGoals,
      website: honeypot,
      elapsedMs: Date.now() - startTimeRef.current,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const { error } = await response.json().catch(() => ({ error: "Unable to submit." }));
        throw new Error(error ?? "Unable to submit form.");
      }

      setFormState("success");
      setMessage("Thanks for reaching out! We’ll respond within one business day.");
      setFormErrors(initialErrors);
      form.reset();
      startTimeRef.current = Date.now();
    } catch (error) {
      setFormState("error");
      setMessage(error instanceof Error ? error.message : "We couldn’t send your message. Please try again.");
    }
  };

  return (
    <MarketingPage
      eyebrow="Let's Talk"
      title="Tell us about your next big milestone"
      description="Drop us a note and we’ll follow up within one business day with tailored next steps. Prefer to talk it through? We can hop on a quick call or video chat to get you moving."
      primaryCta={{ label: "Get a Free Growth Plan", href: "#contact-form" }}
      secondaryCta={{ label: "Back to home", href: "/", icon: <Home className="h-5 w-5" aria-hidden="true" /> }}
      highlights={[
        {
          icon: <MessageSquare className="h-6 w-6" aria-hidden="true" />,
          title: "Share your vision",
          description: "Tell us about your audience, your goals, and where you need momentum—we'll guide the rest.",
        },
        {
          icon: <Headset className="h-6 w-6" aria-hidden="true" />,
          title: "Live strategy sessions",
          description: "Hop on a call with our founders to unpack your ideas and sketch an action plan in real time.",
        },
        {
          icon: <Clock className="h-6 w-6" aria-hidden="true" />,
          title: "Quick responses",
          description: "Expect a thoughtful reply or meeting invite within 24 hours, often much faster.",
        },
      ]}
      footerNote={`Prefer text? Add ${CONTACT_PHONE_DISPLAY} to your contacts—SMS automations coming soon.`}
    >
      <section id="contact-form" className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-start" aria-labelledby="contact-form-heading">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur">
          <div className="mb-8 space-y-2">
            <span className="text-sm uppercase tracking-[0.35em] text-sky-200">Your project hub</span>
            <h2 id="contact-form-heading" className="text-3xl font-semibold text-white">
              Share the details and we’ll craft the roadmap
            </h2>
            <p className="text-slate-200">
              Fill out the form and we’ll schedule a discovery session to align on vision, scope, and momentum-building next steps.
            </p>
          </div>
          <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2 text-sm font-medium text-slate-200">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Ada Lovelace"
                  aria-invalid={Boolean(formErrors.name)}
                  aria-describedby={formErrors.name ? "name-error" : undefined}
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                />
                <span id="name-error" className="text-xs text-rose-300" aria-live="polite">
                  {formErrors.name ?? ""}
                </span>
              </div>
              <div className="flex flex-col gap-2 text-sm font-medium text-slate-200">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  aria-invalid={Boolean(formErrors.email)}
                  aria-describedby={formErrors.email ? "email-error" : undefined}
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                />
                <span id="email-error" className="text-xs text-rose-300" aria-live="polite">
                  {formErrors.email ?? ""}
                </span>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2 text-sm font-medium text-slate-200">
                <label htmlFor="company">Company or organization</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Salted Pixel Labs"
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                />
              </div>
              <div className="flex flex-col gap-2 text-sm font-medium text-slate-200">
                <label htmlFor="timeline">Ideal launch window</label>
                <input
                  id="timeline"
                  type="text"
                  name="timeline"
                  placeholder="Q3 2024"
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm font-medium text-slate-200">
              <label htmlFor="message">Project goals</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us about the outcomes you're aiming for, the audience you want to reach, and any must-have features."
                rows={5}
                aria-invalid={Boolean(formErrors.message)}
                aria-describedby={formErrors.message ? "message-error" : undefined}
                className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
              />
              <span id="message-error" className="text-xs text-rose-300" aria-live="polite">
                {formErrors.message ?? ""}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/60 disabled:cursor-not-allowed disabled:opacity-80"
                data-analytics-goal="contact-submit"
              >
                {formState === "submitting" ? "Sending..." : formState === "success" ? "Message sent" : "Send message"}
                <Send className="h-5 w-5" aria-hidden="true" />
              </button>
              <p className="text-xs text-slate-300">We’ll reply within 24 hours with 3 next steps.</p>
            </div>
            <div className="min-h-[1.5rem]" aria-live="polite" role="status">
              {message ? (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    formState === "success"
                      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                      : formState === "error"
                      ? "border-rose-400/40 bg-rose-400/10 text-rose-200"
                      : "border-blue-400/30 bg-blue-400/10 text-blue-200"
                  }`}
                >
                  {message}
                </div>
              ) : null}
            </div>
          </form>
        </div>
        <aside className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-8 text-slate-200 shadow-xl backdrop-blur">
          <h3 className="text-xl font-semibold text-white">What happens next</h3>
          <ul className="space-y-5 text-sm leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" aria-hidden="true" />
              We'll review your project snapshot and respond with tailored recommendations or a calendar link.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400" aria-hidden="true" />
              Collaborate directly with our founders on strategy, UX flows, and the systems that sustain growth.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Get a clear roadmap, timeline, and investment breakdown so you know exactly what happens next.
            </li>
          </ul>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Need an intro call?</p>
            <p className="mt-3 text-sm text-slate-200">
              Email <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-300 underline decoration-blue-500/60 underline-offset-4 hover:text-blue-200">{CONTACT_EMAIL}</a> or call <a href={`tel:${CONTACT_PHONE_PLAIN}`} className="text-blue-300 underline decoration-blue-500/60 underline-offset-4 hover:text-blue-200">{CONTACT_PHONE_DISPLAY}</a> for an immediate response.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0">
            <iframe
              src="https://calendly.com/saltedpixel/strategy-call?hide_gdpr_banner=1"
              title="Schedule a SaltedPixel strategy call"
              loading="lazy"
              className="h-96 w-full"
            />
          </div>
        </aside>
      </section>
      {formState !== "idle" && (
        <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col gap-3" aria-live="assertive">
          <div
            className={`pointer-events-auto rounded-2xl border px-4 py-3 text-sm shadow-lg ${
              formState === "success"
                ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-100"
                : formState === "error"
                ? "border-rose-400/40 bg-rose-500/20 text-rose-100"
                : "border-blue-400/40 bg-blue-500/20 text-blue-100"
            }`}
          >
            {formState === "success"
              ? "Message received! Check your inbox for next steps."
              : formState === "error"
              ? "We hit a snag—please refresh and try again."
              : "Sending your message..."}
          </div>
        </div>
      )}
    </MarketingPage>
  );
}
