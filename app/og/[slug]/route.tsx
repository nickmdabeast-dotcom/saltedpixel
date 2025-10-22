import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";

const backgrounds = [
  "linear-gradient(135deg, #0f172a 0%, #1d3b8b 45%, #312e81 100%)",
  "linear-gradient(135deg, #0f172a 0%, #1f2937 45%, #4c1d95 100%)",
  "linear-gradient(135deg, #0f172a 0%, #0f766e 45%, #1d4ed8 100%)",
];

const pageMap: Record<string, { title: string; subtitle: string }> = {
  home: {
    title: "SaltedPixel Growth Systems",
    subtitle: "Web • SEO • Automation for local service brands",
  },
  about: {
    title: "Founder-led strategy for modern brands",
    subtitle: "Meet the SaltedPixel team building momentum",
  },
  services: {
    title: "Conversion websites, local SEO, automation",
    subtitle: "SaltedPixel services crafted to compound growth",
  },
  contact: {
    title: "Request your free growth plan",
    subtitle: "We respond within 24 hours with tailored next steps",
  },
  "growth-system": {
    title: "The SaltedPixel Method",
    subtitle: "An integrated growth engine for service businesses",
  },
  consultation: {
    title: "Strategy consultation",
    subtitle: "Founder-led workshops uncovering quick wins",
  },
  work: {
    title: "Case snapshots & wins",
    subtitle: "See how SaltedPixel drives measurable outcomes",
  },
};

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug.replace(/\.png$/i, "");
  const details = pageMap[slug] ?? pageMap.home;
  const background = backgrounds[Math.abs(slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % backgrounds.length];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: background,
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              height: "72px",
              width: "72px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #38bdf8, #a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            SP
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.6em", color: "rgba(226,232,240,0.7)" }}>
              {siteConfig.serviceAreas.join(" • ")}
            </span>
            <span style={{ fontSize: "28px", fontWeight: 600 }}>{siteConfig.name}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h1 style={{ fontSize: "72px", lineHeight: 1.05, fontWeight: 700 }}>{details.title}</h1>
          <p style={{ fontSize: "28px", color: "rgba(226,232,240,0.85)", maxWidth: "70%" }}>{details.subtitle}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "24px", color: "rgba(226,232,240,0.7)" }}>
          <span>{siteConfig.baseUrl.replace("https://", "")}</span>
          <span>Founder-led • Fast launches</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
