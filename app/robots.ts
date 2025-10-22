import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
    host: siteConfig.domain,
  };
}
