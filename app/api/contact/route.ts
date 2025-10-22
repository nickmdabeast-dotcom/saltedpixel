import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site-config";

const MIN_DURATION_MS = 3000;

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const company = sanitize(body.company);
    const timeline = sanitize(body.timeline);
    const message = sanitize(body.message);
    const website = sanitize(body.website);
    const elapsedMs = typeof body.elapsedMs === "number" ? body.elapsedMs : 0;

    if (website) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    if (elapsedMs > 0 && elapsedMs < MIN_DURATION_MS) {
      return NextResponse.json({ error: "Form submitted too quickly." }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? siteConfig.email;
    const subject = `New inquiry from ${name}`;
    const textContent = [`Name: ${name}`, `Email: ${email}`, company ? `Company: ${company}` : null, timeline ? `Timeline: ${timeline}` : null, "Message:", message]
      .filter(Boolean)
      .join("\n");

    if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `SaltedPixel Website <hello@${siteConfig.domain}>`,
          to: [recipient],
          subject,
          text: textContent,
        }),
      });
      if (!response.ok) {
        console.error("Resend API error", await response.text());
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json({ error: "Unable to submit your request." }, { status: 500 });
  }
}
