import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Holdings | New England | Premium Services Enterprise',
  description: 'Commercial and residential real estate acquisition and management across New England. Long-term holdings built for generational value. Premium Services Enterprise, Providence RI.',
  keywords: [
    'real estate holdings Providence RI',
    'commercial real estate acquisitions Rhode Island',
    'real estate investment New England',
    'property holdings Providence RI',
    'commercial property Rhode Island',
    'real estate portfolio New England',
  ],
  openGraph: {
    title: 'Real Estate Holdings | Premium Services Enterprise',
    description: 'Commercial and residential real estate acquisition and management across New England.',
    url: 'https://marlasabater.com/ecosystem/enterprise/real-estate',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/enterprise/real-estate' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
