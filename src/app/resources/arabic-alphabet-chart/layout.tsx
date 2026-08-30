import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Arabic Alphabet Chart (Printable PDF Guide)",
  description:
    "Download and print the complete Arabic Alphabet Chart with 28 letters, English transliteration, Makhārij points, and pronunciation tips for Quran beginners.",
  alternates: {
    canonical: "https://globalquraninstitute.com/resources/arabic-alphabet-chart",
  },
  openGraph: {
    title: "Free Arabic Alphabet Chart (Printable PDF Guide) | Al Rauf International Quran Academy",
    description:
      "28 Arabic letters pronunciation and Makharij guide for Quran beginners. Free printable reference sheet by Al Rauf International Quran Academy.",
    url: "https://globalquraninstitute.com/resources/arabic-alphabet-chart",
  },
};

export default function ArabicChartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
