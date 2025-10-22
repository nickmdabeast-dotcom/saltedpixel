"use client";

import Link from "next/link";
import { useEffect } from "react";
import { RefreshCcw } from "lucide-react";

import FooterStrip from "@/components/footer-strip";
import SiteNav from "@/components/site-nav";
import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Application error", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        <SiteNav />
        <main id="page-content" className="container mx-auto px-4 pb-24 pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-sky-200">Something went wrong</span>
            <h1 className="mt-6 text-4xl font-bold sm:text-5xl">We hit a snag while loading this page</h1>
            <p className="mt-4 text-slate-200">
              Our team has been notified. You can refresh to try again, or let us map your next steps directly.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
              <Button onClick={reset} size="lg" className="flex items-center gap-2">
                <RefreshCcw className="h-4 w-4" aria-hidden="true" />
                Try again
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/contact" data-analytics-goal="500-contact">
                  Contact support
                </Link>
              </Button>
            </div>
          </div>
          <FooterStrip />
        </main>
      </body>
    </html>
  );
}
