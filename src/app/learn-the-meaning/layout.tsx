import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understand What You Recite - Quran Word Meanings",
  description:
    "Explore common Quranic verses and phrases with English meanings and reflections. Understand what you recite with Al Rauf International Quran Academy.",
  alternates: {
    canonical: "https://al-rauf-quran-academy.vercel.app/learn-the-meaning",
  },
  openGraph: {
    title: "Understand What You Recite | Al Rauf International Quran Academy",
    description:
      "Learn the meanings behind common Quranic verses, daily du'as, and short Surahs. Transform recitation into genuine connection.",
    url: "https://al-rauf-quran-academy.vercel.app/learn-the-meaning",
  },
};

export default function LearnTheMeaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
