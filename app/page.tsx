import type { Metadata } from "next";

import HomePage from "@/components/home-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "SaltedPixel Growth Systems for Service Brands",
  description:
    "SaltedPixel crafts conversion-focused websites, local SEO, and automation for service businesses that need measurable growth across Fairfield County, CT and Greater Binghamton, NY.",
  path: "/",
  keywords: [
    "saltedpixel",
    "local seo agency",
    "binghamton web design",
    "fairfield county marketing",
    "automation for small business",
  ],
});

export default function Page() {
  return <HomePage />;
}
