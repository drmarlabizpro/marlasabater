import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retirement Planning for Business Owners | Providence RI | Premium Services Corporation',
  description: 'Solo 401k, SEP-IRA, and retirement strategy for self-employed business owners. Why starting early matters and how to build retirement savings independent of your business exit.',
  openGraph: {
    title: 'Retirement Planning for Business Owners',
    description: 'Solo 401k, SEP-IRA, and retirement strategy for self-employed business owners in Rhode Island.',
    url: 'https://marlasabater.com/ecosystem/corporation/financial-planning/business-owner-retirement-planning',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/financial-planning/business-owner-retirement-planning' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
