import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Services Corporation | Financial & Wealth Management | Dr. Marla Sabater',
  description: 'Tax strategy, accounting, payroll, and financial advisory for business owners in New England and nationwide. Bilingual service in English and Spanish. Providence, RI.',
  keywords: ['accounting payroll Providence RI', 'bilingual accountant Rhode Island', 'tax strategy small business Providence', 'business financial advisory New England', 'Premium Services Corporation'],
  openGraph: {
    title: 'Premium Services Corporation | Financial & Wealth Management',
    description: 'Tax, accounting, and financial strategy. Built on the right foundation.',
    url: 'https://marlasabater.com/ecosystem/corporation',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Services Corporation | Financial & Wealth Management',
    description: 'Tax, accounting, and financial strategy. Built on the right foundation.',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
