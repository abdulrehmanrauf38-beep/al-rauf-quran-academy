import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn why Al Rauf International Quran Academy was founded: to make authentic, 1-on-1 Quran education accessible to Muslim families worldwide through patient, personalised online teaching from qualified Pakistani scholars.",
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
