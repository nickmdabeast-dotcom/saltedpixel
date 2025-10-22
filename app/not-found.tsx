import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import FooterStrip from "@/components/footer-strip";
import SiteNav from "@/components/site-nav";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteNav />
      <main id="page-content" className="container mx-auto px-4 pb-24 pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-sky-200">404 – Page not found</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Looks like this page took a different route</h1>
          <p className="mt-4 text-slate-200">
            The link you followed might be outdated, or the page has moved. Let’s get you back to the growth resources you were looking for.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/" data-analytics-goal="404-home">
                Go to homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/contact" className="flex items-center gap-2" data-analytics-goal="404-contact">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Contact the team
              </Link>
            </Button>
          </div>
        </div>
        <FooterStrip />
      </main>
    </div>
  );
}
