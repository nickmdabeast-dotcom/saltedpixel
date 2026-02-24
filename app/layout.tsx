import type { Metadata } from "next";
import Script from "next/script";

import "./../styles/globals.css";

const cloudinaryBase =
  "https://res.cloudinary.com/dqbxmbzhj/image/upload";
const logoAsset =
  "v1761253474/image__1_-removebg-preview_imgupscaler.ai_v1_Fast__2K_wjb0gs.png";
const metaPixelId = "1218512860395251";

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
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
