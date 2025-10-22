import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

const routes = [
  "/",
  "/about",
  "/services",
  "/consultation",
  "/growth-system",
  "/work",
  "/contact",
  "/privacy",
  "/terms",
];

async function pingSearchEngines(sitemapUrl: string) {
  const targets = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
  ];

  await Promise.allSettled(
    targets.map((target) =>
      fetch(target, {
        method: "GET",
      }).catch(() => undefined)
    )
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urlEntries = routes.map((path) => ({
    url: `${siteConfig.baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date().toISOString(),
  }));

  await pingSearchEngines(`${siteConfig.baseUrl}/sitemap.xml`);

  return urlEntries;
}
