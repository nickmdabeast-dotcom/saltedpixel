import type { Metadata } from "next";

import "./../styles/globals.css";

const cloudinaryBase =
  "https://res.cloudinary.com/dqbxmbzhj/image/upload";
const logoAsset =
  "v1761253474/image__1_-removebg-preview_imgupscaler.ai_v1_Fast__2K_wjb0gs.png";

export const metadata: Metadata = {
  title: "SaltedPixel",
  description: "Modern websites, local SEO, and AI automation.",
  icons: {
    icon: [
      {
        url: `${cloudinaryBase}/c_fill,w_32,h_32,r_max/${logoAsset}`,
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: `${cloudinaryBase}/c_fill,w_192,h_192,r_max/${logoAsset}`,
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
      {
        url: `${cloudinaryBase}/c_fill,w_180,h_180,r_max/${logoAsset}`,
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: [`${cloudinaryBase}/c_fill,w_32,h_32,r_max/${logoAsset}`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
