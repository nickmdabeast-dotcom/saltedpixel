export const metadata = {
  title: "SaltedPixel",
  description: "Modern websites, local SEO, and AI automation."
};

import "./../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
