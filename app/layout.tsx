import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Manrope } from "next/font/google";

import "./../styles/globals.css";

import JsonLd from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { organizationJsonLd } from "@/lib/structured-data";

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.siteDescription,
  keywords: [
    "website design",
    "local SEO",
    "automation",
    "Binghamton marketing",
    "Fairfield County marketing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.baseUrl}/og/home`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} hero image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.siteDescription,
    images: [`${siteConfig.baseUrl}/og/home`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  icons: {
    icon: [{ url: "/icons/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icons/logo.svg", type: "image/svg+xml" }],
    other: [{ rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#0f172a" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={sans.variable}>
      <body className="bg-slate-950 text-white antialiased">
        <a className="skip-link" href="#page-content">
          Skip to content
        </a>
        <div className="min-h-screen font-sans">{children}</div>
        <JsonLd data={organizationJsonLd} id="organization-jsonld" />
        <Script src="/scripts/rum.js" strategy="afterInteractive" data-endpoint="/api/rum" />
        {measurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
              strategy="afterInteractive"
            />
            <Script src="/scripts/analytics-init.js" strategy="afterInteractive" data-measurement-id={measurementId} />
          </>
        ) : null}
        <Script src="/scripts/analytics-goals.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
