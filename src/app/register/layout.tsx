import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register & Enrol in Online Quran Classes",
  description:
    "Enrol in online Quran classes at Al Rauf International Quran Academy. Complete the simple registration form to choose your course (Noorani Qaida, Tajweed, Hifz & more), schedule, and class frequency.",
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
