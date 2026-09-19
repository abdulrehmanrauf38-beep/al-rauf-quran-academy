import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Al Rauf Quran Academy - Standards, Quick Facts & FAQs",
  description:
    "Objective guide to choosing an online Quran academy. Learn essential evaluation criteria, quick facts about Al Rauf International Quran Academy, teacher credentials, and transparent pricing.",
  alternates: { canonical: "https://www.alraufquranacademy.com/why-choose-us" },
  openGraph: {
    title: "Why Choose Al Rauf Quran Academy | Evaluation Standards & Quick Facts",
    description:
      "A factual reference for families: teacher qualifications, 1-on-1 vs group classes, transparent pricing from $3/class, and quick facts on Al Rauf Academy.",
    url: "https://www.alraufquranacademy.com/why-choose-us",
    type: "article",
  },
};

export default function WhyChooseUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
