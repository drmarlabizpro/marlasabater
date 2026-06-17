import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Are CFO Services for a Small Business? | Premium Services Corporation',
  description: 'CFO-level advisory means cash flow forecasting, growth planning, pricing analysis, and financial oversight — without the cost of a full-time hire. How it works for small businesses.',
  openGraph: {
    title: 'What Are CFO Services for a Small Business?',
    description: 'Cash flow forecasting, growth planning, and financial oversight without a full-time hire.',
    url: 'https://marlasabater.com/ecosystem/corporation/accounting/cfo-services-small-business',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/accounting/cfo-services-small-business' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
