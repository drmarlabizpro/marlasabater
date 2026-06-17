import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategic Investments | New England | Premium Services Enterprise',
  description: 'Equity positions and strategic investments in businesses aligned with the Dr. Marla ecosystem vision. Long-term value over short-term return. Providence, RI.',
  keywords: [
    'strategic investments Providence RI',
    'business investment Rhode Island',
    'equity investment New England',
    'strategic equity partner Providence',
    'business investment partner Rhode Island',
    'long term investment New England',
  ],
  openGraph: {
    title: 'Strategic Investments | Premium Services Enterprise',
    description: 'Equity positions in businesses aligned with the ecosystem vision. Long-term value over short-term return.',
    url: 'https://marlasabater.com/ecosystem/enterprise/investments',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/enterprise/investments' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
