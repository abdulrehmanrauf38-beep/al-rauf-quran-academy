import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Al Rauf International Quran Academy's privacy policy: how we collect, use, and protect your personal information when you book online Quran classes or contact us.",
  alternates: { canonical: "https://al-rauf-quran-academy.vercel.app/privacy-policy" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Privacy Policy | Al Rauf International Quran Academy",
    description:
      "How Al Rauf International Quran Academy handles your personal data, contact information, and privacy when using our online Quran class booking services.",
    url: "https://al-rauf-quran-academy.vercel.app/privacy-policy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
