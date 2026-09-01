import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Al Rauf International Quran Academy's terms of service: free trial conditions, payment policy, class cancellation rules, and acceptable use of our online Quran teaching platform.",
  alternates: { canonical: "https://al-rauf-quran-academy.vercel.app/terms-of-service" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Terms of Service | Al Rauf International Quran Academy",
    description:
      "Terms and conditions for using Al Rauf International Quran Academy's online Quran class services, including free trial terms and payment policy.",
    url: "https://al-rauf-quran-academy.vercel.app/terms-of-service",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
