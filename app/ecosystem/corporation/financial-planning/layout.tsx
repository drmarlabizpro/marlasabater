import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Planning for Business Owners | Providence RI | Premium Services Corporation',
  description: 'Long-term financial planning and wealth strategy for business owners and individuals across New England. Build the financial foundation that lasts. Providence, RI.',
  keywords: [
    'financial planning Providence RI',
    'wealth strategy small business Rhode Island',
    'financial planning New England',
    'business owner financial plan Providence',
    'long term financial planning Rhode Island',
    'personal financial planning Providence RI',
  ],
  openGraph: {
    title: 'Financial Planning | Premium Services Corporation',
    description: 'Long-term financial planning and wealth strategy for business owners and individuals.',
    url: 'https://marlasabater.com/ecosystem/corporation/financial-planning',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/financial-planning' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
