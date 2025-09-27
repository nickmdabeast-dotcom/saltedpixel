export const metadata = {
  title: "SaltedPixel",
  description: "Modern websites, local SEO, and AI automation."
};

import "./../styles/globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
