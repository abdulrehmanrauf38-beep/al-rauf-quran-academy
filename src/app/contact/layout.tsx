import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - WhatsApp, Email & Support",
  description:
    "Get in touch with Al Rauf International Quran Academy. Reach us via WhatsApp (+92 371 2215078) or email for enquiries about online Quran classes, scheduling, pricing, or to request a female tutor.",
  alternates: { canonical: "https://globalquraninstitute.com/contact" },
  openGraph: {
    title: "Contact Al Rauf International Quran Academy | WhatsApp & Email Support",
    description:
      "Questions about online Quran classes? Reach us on WhatsApp +92 371 2215078 or by email. Fast responses, friendly support for families in USA, UK, Canada, Australia.",
    url: "https://globalquraninstitute.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
