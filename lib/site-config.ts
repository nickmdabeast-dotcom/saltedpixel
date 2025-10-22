export const siteConfig = {
  name: "SaltedPixel",
  tagline: "Growth systems for local business",
  domain: "www.saltedpixel.com",
  baseUrl: "https://www.saltedpixel.com",
  email: "outreach@saltedpixel.com",
  phoneDisplay: "475-298-6091",
  phoneE164: "+14752986091",
  address: {
    street: "15 Carroll Street",
    city: "Binghamton",
    state: "NY",
    postalCode: "13901",
    country: "US",
  },
  serviceAreas: ["Fairfield County, CT", "Greater Binghamton, NY"],
  socials: {
    instagram: "https://www.instagram.com/saltedpixel",
    linkedin: "https://www.linkedin.com/company/saltedpixel",
    facebook: "https://www.facebook.com/saltedpixel",
  },
  logo: "/icons/logo.svg",
  ogImage: "/og/default.png",
  siteDescription:
    "SaltedPixel builds conversion-focused websites, local SEO, and automation systems for service brands that need measurable growth.",
};

export type SiteRouteMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  alternateTitles?: string[];
};
