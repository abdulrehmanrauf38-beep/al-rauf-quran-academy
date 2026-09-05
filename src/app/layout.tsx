import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://al-rauf-quran-academy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  verification: { google: "tAAEQN6QqIi6352W8TKt9_7uSni85kr_Vbv9XhWnYLs" },
  title: {
    default: "Al Rauf Quran Academy - Online 1-on-1 Quran Classes",
    template: "%s | Al Rauf Quran Academy",
  },
  description:
    "Learn Quran online 1-on-1 with certified Pakistani teachers. Female tutors available. 3 free trial classes - USA, UK, Canada, Australia welcome.",
  keywords: [
    "online Quran classes",
    "learn Quran online",
    "online Quran tutor USA",
    "Quran teacher UK",
    "online Quran academy Canada",
    "female Quran tutor online",
    "Tajweed classes online",
    "Noorani Qaida online",
    "online Hifz program",
    "1-on-1 Quran lessons",
    "Pakistani Quran scholars online",
    "Islamic studies online for kids",
  ],
  authors: [{ name: "Al Rauf International Quran Academy" }],
  creator: "Al Rauf International Quran Academy",
  publisher: "Al Rauf International Quran Academy",
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Al Rauf International Quran Academy",
    title: "Al Rauf Quran Academy - Online 1-on-1 Quran Classes",
    description:
      "Learn Quran online 1-on-1 with certified Pakistani teachers. Female tutors available. 3 free trial classes - USA, UK, Canada, Australia welcome.",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Al Rauf International Quran Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Al Rauf Quran Academy - Online 1-on-1 Quran Classes",
    description:
      "Learn Quran online 1-on-1 with certified Pakistani teachers. Female tutors available. 3 free trial classes - USA, UK, Canada, Australia welcome.",
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // Schema.org EducationalOrganization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Al Rauf International Quran Academy",
    alternateName: ["Al Rauf Quran Academy", "Al Rauf Academy Online"],
    url: BASE_URL,
    logo: `${BASE_URL}/icon.svg`,
    image: `${BASE_URL}/icon.svg`,
    description:
      "Online 1-on-1 Quran Academy offering Noorani Qaida, Quran Reading, Tajweed, Hifz, and Islamic Studies with qualified Pakistani scholars worldwide.",
    email: "alraufquranacademy1@gmail.com",
    telephone: "+923712215078",
    areaServed: [
      { "@type": "AdministrativeArea", name: "United States" },
      { "@type": "AdministrativeArea", name: "United Kingdom" },
      { "@type": "AdministrativeArea", name: "Canada" },
      { "@type": "AdministrativeArea", name: "Australia" },
      { "@type": "AdministrativeArea", name: "Worldwide" },
    ],
    availableLanguage: ["English", "Urdu", "Arabic"],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "3.00",
      highPrice: "6.00",
      offerCount: "5",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923712215078",
      contactType: "customer service",
      email: "alraufquranacademy1@gmail.com",
      availableLanguage: ["English", "Urdu", "Arabic"],
    },
  };

  // Schema.org Course ItemList structured data
  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Course",
        position: 1,
        name: "Noorani Qaida",
        description:
          "Foundational Arabic letter recognition, Makharij pronunciation, and basic phonetic rules for beginners.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Al Rauf International Quran Academy",
          sameAs: BASE_URL,
        },
        courseMode: "online",
        offers: {
          "@type": "Offer",
          price: "3.00",
          priceCurrency: "USD",
          category: "Per Class Rate",
        },
      },
      {
        "@type": "Course",
        position: 2,
        name: "Quran Reading (Nazra)",
        description:
          "Master fluent Quran recitation with proper pauses, connecting rules, and correct phonetics.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Al Rauf International Quran Academy",
          sameAs: BASE_URL,
        },
        courseMode: "online",
        offers: {
          "@type": "Offer",
          price: "4.00",
          priceCurrency: "USD",
          category: "Per Class Rate",
        },
      },
      {
        "@type": "Course",
        position: 3,
        name: "Tajweed Mastery",
        description:
          "In-depth theoretical and practical rules of Tajweed, Makharij articulation points, Sifaat, and Waqf.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Al Rauf International Quran Academy",
          sameAs: BASE_URL,
        },
        courseMode: "online",
        offers: {
          "@type": "Offer",
          price: "6.00",
          priceCurrency: "USD",
          category: "Per Class Rate",
        },
      },
      {
        "@type": "Course",
        position: 4,
        name: "Hifz (Quran Memorization)",
        description:
          "Structured Quran memorization with daily new Sabaq, revision (Sabqi & Manzil), and retention coaching.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Al Rauf International Quran Academy",
          sameAs: BASE_URL,
        },
        courseMode: "online",
        offers: {
          "@type": "Offer",
          price: "5.00",
          priceCurrency: "USD",
          category: "Per Class Rate",
        },
      },
      {
        "@type": "Course",
        position: 5,
        name: "Islamic Studies",
        description:
          "Essential Aqeedah, Fiqh, Seerah, Daily Duas, and Islamic manners for all ages. Included FREE with any enrolled course.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Al Rauf International Quran Academy",
          sameAs: BASE_URL,
        },
        courseMode: "online",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0.00",
          priceCurrency: "USD",
          category: "Free with any course",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
