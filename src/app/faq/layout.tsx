import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Common Questions About Online Quran Classes",
  description:
    "Answers to frequently asked questions about Al Rauf International Quran Academy: how online Quran classes work, scheduling across time zones, female tutors, free trial, payment, and more.",
  alternates: { canonical: "https://globalquraninstitute.com/faq" },
  openGraph: {
    title: "FAQs About Online Quran Classes | Al Rauf International Quran Academy",
    description:
      "Everything you want to know before starting: how classes work on Google Meet, time zones, female tutors, free trials, teacher changes, and payment.",
    url: "https://globalquraninstitute.com/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
