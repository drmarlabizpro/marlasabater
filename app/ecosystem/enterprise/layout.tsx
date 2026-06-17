import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Services Enterprise | Investments & Acquisitions | Dr. Marla Sabater',
  description: 'Premium Services Enterprise handles real estate holdings, business acquisitions, and strategic investments. The flagship company of the Dr. Marla ecosystem. Providence, RI.',
  keywords: ['Premium Services Enterprise', 'investment acquisitions Providence RI', 'real estate holdings Rhode Island', 'business acquisitions New England', 'Dr Marla Sabater flagship'],
  openGraph: {
    title: 'Premium Services Enterprise | Investments & Acquisitions',
    description: 'Property, holdings, and the long view. The flagship company of the Dr. Marla ecosystem.',
    url: 'https://marlasabater.com/ecosystem/enterprise',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Services Enterprise | Investments & Acquisitions',
    description: 'Property, holdings, and the long view. The flagship company of the Dr. Marla ecosystem.',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/enterprise' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
