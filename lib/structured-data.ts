import { siteConfig } from "./site-config";

type BreadcrumbInput = {
  path: string;
  name?: string;
};

const serviceItems = [
  {
    name: "Conversion-focused websites",
    description:
      "Design, development, and optimization of responsive marketing websites for local service brands.",
    url: `${siteConfig.baseUrl}/services`,
  },
  {
    name: "Local SEO acceleration",
    description: "Citations, content strategy, and review systems to rank in neighborhood searches.",
    url: `${siteConfig.baseUrl}/services`,
  },
  {
    name: "AI-powered automations",
    description: "Chat, follow-up, and workflow automation that extends your team's capacity.",
    url: `${siteConfig.baseUrl}/services`,
  },
];

const faqItems = [
  {
    question: "How quickly can we launch?",
    answer:
      "Most growth plans go live within 14–21 days thanks to focused sprints and automation-ready deliverables.",
  },
  {
    question: "Do you work beyond New York and Connecticut?",
    answer:
      "Yes. While we're rooted in Greater Binghamton and Fairfield County, we partner with service brands nationwide.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay founder-led with monthly check-ins, analytics reviews, and ongoing experiments to keep growth compounding.",
  },
];

export const organizationJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}${siteConfig.logo}`,
    sameAs: Object.values(siteConfig.socials),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        telephone: siteConfig.phoneE164,
        areaServed: siteConfig.serviceAreas,
        availableLanguage: ["English"],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    image: `${siteConfig.baseUrl}${siteConfig.logo}`,
    areaServed: siteConfig.serviceAreas,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "Services", "About", "Contact", "Work"],
    url: [
      siteConfig.baseUrl,
      `${siteConfig.baseUrl}/services`,
      `${siteConfig.baseUrl}/about`,
      `${siteConfig.baseUrl}/contact`,
      `${siteConfig.baseUrl}/work`,
    ],
  },
];

function formatBreadcrumbName(input: string) {
  return input
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
    )
    .join(" / ");
}

export function buildBreadcrumbJsonLd({ path, name }: BreadcrumbInput) {
  const normalized = path.replace(/\/+$/, "");
  const trimmed = normalized.replace(/^\/+/, "");
  const crumbName = name ?? formatBreadcrumbName(trimmed);

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.baseUrl,
    },
  ];

  if (trimmed) {
    itemListElement.push({
      "@type": "ListItem",
      position: itemListElement.length + 1,
      name: crumbName,
      item: `${siteConfig.baseUrl}/${trimmed}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: serviceItems.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      areaServed: siteConfig.serviceAreas,
      url: service.url,
    },
  })),
};

export const servicesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

