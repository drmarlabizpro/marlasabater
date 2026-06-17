import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Does Monthly Bookkeeping Include? | Premium Services Corporation',
  description: 'Monthly bookkeeping covers transaction categorization, bank reconciliation, profit and loss statements, balance sheets, and cash flow reporting. A complete breakdown.',
  openGraph: {
    title: 'What Does Monthly Bookkeeping Include?',
    description: 'A complete breakdown of what monthly bookkeeping covers for a small business.',
    url: 'https://marlasabater.com/ecosystem/corporation/accounting/what-does-bookkeeping-include',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/accounting/what-does-bookkeeping-include' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
