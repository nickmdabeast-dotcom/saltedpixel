export const metadata = {
  title: "SaltedPixel",
  description: "Modern websites, local SEO, and AI automation."
};

import "./../styles/globals.css";
import SiteNav from "@/components/site-nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-56 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[140px]" />
            <div className="absolute bottom-[-20%] right-[-5%] h-[30rem] w-[30rem] rounded-full bg-purple-500/25 blur-[140px]" />
            <div className="absolute inset-0 opacity-70 mix-blend-screen [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,0.75),transparent_70%)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.2),transparent_65%)]" />
            </div>
            <div className="absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]">
              <div className="absolute inset-0 bg-[conic-gradient(from_120deg_at_50%_50%,rgba(148,163,184,0.2),transparent_60%,rgba(148,163,184,0.2))]" />
            </div>
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="relative z-10 flex min-h-screen flex-col">
            <SiteNav />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
