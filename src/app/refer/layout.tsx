import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer a Friend & Family Member — Get 10% Off",
  description:
    "Refer a friend or family member to Al Rauf International Quran Academy. When they enroll in our online Quran classes, you both receive 10% off your next month's tuition.",
  alternates: {
    canonical: "https://globalquraninstitute.com/refer",
  },
  openGraph: {
    title: "Refer a Friend & Get 10% Off | Al Rauf International Quran Academy",
    description:
      "Share the gift of Quran education. Refer a friend and you both save 10% on monthly tuition fees.",
    url: "https://globalquraninstitute.com/refer",
  },
};

export default function ReferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
