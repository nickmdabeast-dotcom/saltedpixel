import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function FooterStrip() {
  return (
    <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-300">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="uppercase tracking-[0.3em] text-slate-400">
          Serving {siteConfig.serviceAreas.join(" • ")}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-slate-400">
          <Link href="/privacy" className="transition hover:text-slate-200">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-slate-200">
            Terms
          </Link>
          <a href="https://www.google.com/search?q=SaltedPixel" className="transition hover:text-slate-200">
            Google Business Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterStrip;
