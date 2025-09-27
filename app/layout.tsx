export const metadata = {
  title: "SaltedPixel",
  description: "Modern websites, local SEO, and AI automation."
};

import "./../styles/globals.css";
import SiteNav from "@/components/site-nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
