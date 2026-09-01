import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Quran Teachers - Certified Pakistani Scholars",
  description:
    "Meet Al Rauf International Quran Academy's certified Quran tutors — Ijazah-holding Pakistani scholars with years of online teaching experience. Dedicated female tutors available for sisters and girls.",
  alternates: { canonical: "https://al-rauf-quran-academy.vercel.app/teachers" },
  openGraph: {
    title: "Meet Our Quran Teachers | Al Rauf International Quran Academy",
    description:
      "Certified Ijazah-holding Pakistani Quran scholars. Dedicated female tutors available. 1-on-1 personalised lessons online via Google Meet.",
    url: "https://al-rauf-quran-academy.vercel.app/teachers",
  },
};

export default function TeachersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
