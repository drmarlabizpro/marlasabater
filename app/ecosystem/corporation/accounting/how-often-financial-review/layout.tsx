import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Often Should You Review Your Business Financials? | Premium Services Corporation',
  description: 'Most small business owners review financials too rarely. How often you should meet with your accountant, what to review, and why cadence matters for financial health.',
  openGraph: {
    title: 'How Often Should You Review Your Business Financials?',
    description: 'How often to meet with your accountant, what to review, and why cadence matters.',
    url: 'https://marlasabater.com/ecosystem/corporation/accounting/how-often-financial-review',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/accounting/how-often-financial-review' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
