import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificate Generator (Internal Portal)",
  description: "Al Rauf International Quran Academy staff certificate generation tool.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
