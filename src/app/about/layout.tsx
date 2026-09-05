import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Al Rauf – Our Story & Quran Teaching Values",
  description:
    "Meet the team behind Al Rauf Quran Academy. Learn our founding story, Islamic values, and why families trust our certified Pakistani scholars worldwide.",
  alternates: { canonical: "https://al-rauf-quran-academy.vercel.app/about" },
  openGraph: {
    title: "About Al Rauf International Quran Academy - Our Story & Mission",
    description:
      "Founded to bring authentic Quran education from qualified Pakistani scholars to Muslim families worldwide. Learn about our values, mission, and teaching philosophy.",
    url: "https://al-rauf-quran-academy.vercel.app/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
