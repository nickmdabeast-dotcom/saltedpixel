"use client";

import Link from "next/link";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    __leadEventTracked?: boolean;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.__leadEventTracked) {
      return;
    }

    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
      window.__leadEventTracked = true;
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-20">
      <section className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10 shadow-2xl shadow-slate-950/50 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Audit Request Received
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
          We&apos;re reviewing your website and will send your personalized breakdown within 24–48 hours.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Return to Home
        </Link>
      </section>
    </main>
  );
}
