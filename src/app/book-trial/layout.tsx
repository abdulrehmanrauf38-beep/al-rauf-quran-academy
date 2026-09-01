import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book 3 Free Trial Quran Classes - No Obligation",
  description:
    "Book your 3 free online Quran trial classes with Al Rauf International Quran Academy. No credit card or payment required. Choose your preferred course, time zone, and student age. Qualified Pakistani teachers online.",
  alternates: { canonical: "https://al-rauf-quran-academy.vercel.app/book-trial" },
  openGraph: {
    title: "Book 3 Free Online Quran Trial Classes | Al Rauf International Quran Academy",
    description:
      "Start learning Quran online with 3 completely free trial classes. No commitment, no payment. Experienced Pakistani Quran tutors. Book in under 2 minutes.",
    url: "https://al-rauf-quran-academy.vercel.app/book-trial",
  },
};

export default function BookTrialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
