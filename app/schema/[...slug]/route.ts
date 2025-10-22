import { NextResponse } from "next/server";

import {
  buildBreadcrumbJsonLd,
  organizationJsonLd,
  servicesFaqJsonLd,
  servicesJsonLd,
} from "@/lib/structured-data";

function jsonLd(data: unknown) {
  return new NextResponse(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/ld+json; charset=utf-8",
      "Cache-Control": "public, max-age=600",
    },
  });
}

const breadcrumbSlugs = new Set([
  "about",
  "services",
  "contact",
  "work",
  "consultation",
  "growth-system",
  "privacy",
  "terms",
]);

export function GET(request: Request, { params }: { params: { slug?: string[] } }) {
  const slugPath = params.slug?.join("/") ?? "";
  const normalized = slugPath.replace(/\.json$/i, "");

  switch (normalized) {
    case "organization": {
      return jsonLd(organizationJsonLd);
    }
    case "services": {
      return jsonLd(servicesJsonLd);
    }
    case "services/faq": {
      return jsonLd(servicesFaqJsonLd);
    }
    default: {
      if (normalized.startsWith("breadcrumbs/")) {
        const slug = normalized.replace("breadcrumbs/", "");
        if (breadcrumbSlugs.has(slug)) {
          return jsonLd(buildBreadcrumbJsonLd({ path: `/${slug}` }));
        }
      }
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
  }
}
