import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - WhatsApp, Email & Support",
  description:
    "Reach Al Rauf Quran Academy via WhatsApp (+92 371 2215078) or email. Questions about online classes, scheduling, pricing, or requesting a female tutor welcome.",
  alternates: { canonical: "https://al-rauf-quran-academy.vercel.app/contact" },
  openGraph: {
    title: "Contact Al Rauf International Quran Academy | WhatsApp & Email Support",
    description:
      "Questions about online Quran classes? Reach us on WhatsApp +92 371 2215078 or by email. Fast responses, friendly support for families in USA, UK, Canada, Australia.",
    url: "https://al-rauf-quran-academy.vercel.app/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
