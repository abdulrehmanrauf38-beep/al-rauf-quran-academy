import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register & Enrol in Online Quran Classes",
  description:
    "Register for 1-on-1 online Quran classes at Al Rauf Academy. Choose your course, class frequency, and schedule. Qualified Pakistani teachers ready.",
  alternates: { canonical: "https://al-rauf-quran-academy.vercel.app/register" },
  openGraph: {
    title: "Register for Online Quran Classes | Al Rauf International Quran Academy",
    description:
      "Simple enrolment for live 1-on-1 online Quran lessons. Pick your course, class frequency, and preferred schedule. Qualified Pakistani scholars ready to teach.",
    url: "https://al-rauf-quran-academy.vercel.app/register",
  },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
