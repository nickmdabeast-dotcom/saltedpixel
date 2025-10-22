import { Metadata } from "next";

import { siteConfig, SiteRouteMetadata } from "./site-config";

const defaultImages = {
  width: 1200,
  height: 630,
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }
  return `${siteConfig.baseUrl}${path}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  keywords,
  alternateTitles,
}: SiteRouteMetadata): Metadata {
  const pageUrl = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? `/og${path === "/" ? "/home" : path}`);

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: defaultImages.width,
          height: defaultImages.height,
          alt: `${title} – ${siteConfig.name}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    other:
      alternateTitles && alternateTitles.length
        ? {
            "og:alternate_title": alternateTitles.join("|")
          }
        : undefined,
  };
}
