import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progress Report Portal (Internal Tool)",
  description: "Al Rauf International Quran Academy staff progress report dispatcher.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProgressReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
