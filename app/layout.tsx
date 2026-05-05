import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marlasabater.com"),
  title: {
    default:
      "Dr. Marla Sabater, MBA Th.D | Accounting, Payroll and Business Services | Providence RI",
    template: "%s | Dr. Marla Sabater",
  },
  description:
    "Dr. Marla Sabater brings 30 years of accounting, payroll, and business advisory expertise to small businesses in Rhode Island and nationwide. Bilingual service in English and Spanish. 1,000 clients served.",
  keywords: [
    "Rhode Island accounting",
    "Providence RI accountant",
    "small business payroll Rhode Island",
    "bilingual accountant Rhode Island",
    "contadora bilingue Providence",
    "accounting services Providence",
    "payroll services RI",
    "business advisory Rhode Island",
  ],
  alternates: {
    canonical: "https://marlasabater.com",
  },
  openGraph: {
    type: "website",
    url: "https://marlasabater.com",
    siteName: "Dr. Marla Sabater",
    title:
      "Dr. Marla Sabater, MBA Th.D | Accounting, Payroll and Business Services | Providence RI",
    description:
      "Dr. Marla Sabater brings 30 years of accounting, payroll, and business advisory expertise to small businesses in Rhode Island and nationwide. Bilingual service in English and Spanish. 1,000 clients served.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Marla Sabater, MBA Th.D | Accounting, Payroll and Business Services | Providence RI",
    description:
      "Dr. Marla Sabater brings 30 years of accounting, payroll, and business advisory expertise to small businesses in Rhode Island and nationwide. Bilingual service in English and Spanish. 1,000 clients served.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "var(--color-base)" }}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
