import type { Metadata } from "next";
import { Newsreader, Archivo } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const newsreader = Newsreader({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marlasabater.com"),
  title: {
    default:
      "Dr. Marla Sabater | Business Strategist & Founder | Providence RI",
    template: "%s",
  },
  description:
    "Dr. Marla Yanice Sabater is the founder of eight companies spanning finance, construction, food, media, hospitality, and automotive. Thirty years building businesses in New England.",
  keywords: [
    "Dr Marla Sabater",
    "business strategist Providence RI",
    "ecosystem founder",
    "Premium Services Corporation",
    "bilingual business advisor Rhode Island",
  ],
  alternates: {
    canonical: "https://marlasabater.com/",
  },
  openGraph: {
    type: "website",
    url: "https://marlasabater.com/",
    siteName: "Dr. Marla Sabater",
    title:
      "Dr. Marla Sabater | Business Strategist & Founder | Providence RI",
    description:
      "Dr. Marla Yanice Sabater is the founder of eight companies spanning finance, construction, food, media, hospitality, and automotive. Thirty years building businesses in New England.",
    locale: "en_US",
    images: [
      {
        url: "https://marlasabater.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Marla Sabater — Eight Companies, One Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Marla Sabater | Business Strategist & Founder | Providence RI",
    description:
      "Dr. Marla Yanice Sabater is the founder of eight companies spanning finance, construction, food, media, hospitality, and automotive. Thirty years building businesses in New England.",
    images: ["https://marlasabater.com/og-image.jpg"],
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
    <html
      lang="en"
      className={`${newsreader.variable} ${archivo.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body style={{ paddingTop: "72px" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://marlasabater.com/#organization",
                  "name": "Dr. Marla Sabater",
                  "url": "https://marlasabater.com",
                  "foundingDate": "1996",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "356 Manton Avenue, Suite 1A",
                    "addressLocality": "Providence",
                    "addressRegion": "RI",
                    "postalCode": "02909",
                    "addressCountry": "US",
                  },
                  "telephone": "(401) 321-3781",
                  "email": "Marla@msabater.com",
                  "sameAs": [
                    "https://www.linkedin.com/in/marlasabater",
                    "https://www.instagram.com/drmarlabizpro/",
                    "https://www.tiktok.com/@marlatheceo",
                    "http://drmarlabizpro.com/",
                    "https://drmarla.biz/",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://marlasabater.com/#business",
                  "name": "Dr. Marla Sabater",
                  "url": "https://marlasabater.com",
                  "telephone": "(401) 321-3781",
                  "email": "Marla@msabater.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "356 Manton Avenue, Suite 1A",
                    "addressLocality": "Providence",
                    "addressRegion": "RI",
                    "postalCode": "02909",
                    "addressCountry": "US",
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 41.824,
                    "longitude": -71.4128,
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "09:00",
                      "closes": "17:00",
                    },
                  ],
                  "priceRange": "$$",
                  "currenciesAccepted": "USD",
                  "paymentAccepted": "Cash, Credit Card",
                },
                {
                  "@type": "Person",
                  "@id": "https://marlasabater.com/#founder",
                  "name": "Dr. Marla Yanice Sabater",
                  "jobTitle": "Founder & CEO",
                  "worksFor": { "@id": "https://marlasabater.com/#organization" },
                  "knowsLanguage": ["en", "es"],
                  "hasCredential": [
                    { "@type": "EducationalOccupationalCredential", "credentialCategory": "MBA" },
                    { "@type": "EducationalOccupationalCredential", "credentialCategory": "Th.D" },
                  ],
                },
              ],
            }),
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
