import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Quran Class Pricing - Affordable 1-on-1 Lessons",
  description:
    "Transparent, affordable Quran class pricing at Al Rauf Academy. Noorani Qaida from $3/class, Tajweed $6, Hifz $5. Islamic Studies FREE. No hidden fees.",
  alternates: { canonical: "https://al-rauf-quran-academy.vercel.app/pricing" },
  openGraph: {
    title: "Online Quran Class Pricing | Al Rauf International Quran Academy",
    description:
      "Clear, affordable per-class pricing with no long-term contracts. Start with 3 free trial classes. Noorani Qaida $3, Tajweed $6, Hifz $5, Islamic Studies FREE.",
    url: "https://al-rauf-quran-academy.vercel.app/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
