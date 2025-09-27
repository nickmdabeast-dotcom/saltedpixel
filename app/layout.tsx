export const metadata = {
  title: "SaltedPixel",
  description: "Modern websites, local SEO, and AI automation."
};

import "./../styles/globals.css";
import SiteNav from "@/components/site-nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[38rem] bg-[linear-gradient(to_bottom,#0a1a3f,#132b63_65%,rgba(19,43,99,0))]" />
            <div className="absolute -top-64 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-sky-400/20 blur-[160px]" />
            <div className="absolute top-1/3 -left-32 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[160px]" />
            <div className="absolute bottom-[-20%] right-[-5%] h-[34rem] w-[34rem] rounded-full bg-purple-500/20 blur-[160px]" />
            <div className="absolute inset-0 opacity-70 mix-blend-screen [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,0.75),transparent_72%)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_62%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.16),transparent_70%)]" />
            </div>
            <div className="absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_18%,rgba(0,0,0,1)_82%,rgba(0,0,0,0)_100%)]">
              <div className="absolute inset-0 bg-[conic-gradient(from_130deg_at_50%_50%,rgba(148,163,184,0.16),transparent_60%,rgba(148,163,184,0.16))]" />
            </div>
            <div className="absolute inset-x-0 top-[22%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-[18%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
