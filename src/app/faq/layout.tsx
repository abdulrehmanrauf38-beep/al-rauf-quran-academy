import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Common Questions About Online Quran Classes",
  description:
    "Find answers to common questions about Al Rauf Quran Academy: how online classes work, time zone scheduling, female tutors, free trials, and tuition.",
  alternates: { canonical: "https://al-rauf-quran-academy.vercel.app/faq" },
  openGraph: {
    title: "FAQs About Online Quran Classes | Al Rauf International Quran Academy",
    description:
      "Everything you want to know before starting: how classes work on Google Meet, time zones, female tutors, free trials, teacher changes, and payment.",
    url: "https://al-rauf-quran-academy.vercel.app/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
