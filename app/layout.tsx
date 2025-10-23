import type { Metadata } from "next";

import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "SaltedPixel",
  description: "Modern websites, local SEO, and AI automation.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
