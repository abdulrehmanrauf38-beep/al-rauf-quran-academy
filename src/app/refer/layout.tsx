import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer a Friend & Family Member — Get 10% Off",
  description:
    "Refer friends or family to Al Rauf Quran Academy. When they enrol in online Quran classes, you both receive 10% off your next month's tuition.",
  alternates: {
    canonical: "https://al-rauf-quran-academy.vercel.app/refer",
  },
  openGraph: {
    title: "Refer a Friend & Get 10% Off | Al Rauf International Quran Academy",
    description:
      "Share the gift of Quran education. Refer a friend and you both save 10% on monthly tuition fees.",
    url: "https://al-rauf-quran-academy.vercel.app/refer",
  },
};

export default function ReferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
