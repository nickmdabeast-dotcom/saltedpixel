import type { ReactNode } from "react";

import FixedNavigation from "@/components/fixed-navigation";

import "./../styles/globals.css";

export const metadata = {
  title: "SaltedPixel",
  description: "Modern websites, local SEO, and AI automation.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FixedNavigation />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
