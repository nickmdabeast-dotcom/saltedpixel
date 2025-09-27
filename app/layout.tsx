export const metadata = {
  title: "SaltedPixel",
  description: "Modern websites, local SEO, and AI automation."
};

import "./../styles/globals.css";
import { MainNav } from "@/components/main-nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-slate-950 text-white antialiased">
        <MainNav />
        {children}
      </body>
    </html>
  );
}
