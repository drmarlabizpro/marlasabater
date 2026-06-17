import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Premium Services Corporation | Financial Services | Providence RI',
  description: 'Schedule a consultation with Premium Services Corporation. Tax strategy, accounting, payroll, business advisory, and financial planning for business owners across New England.',
  keywords: [
    'contact Premium Services Corporation',
    'schedule consultation accountant Providence RI',
    'accounting consultation Rhode Island',
    'tax strategy consultation Providence',
    'financial services appointment Providence RI',
    'bilingual accountant consultation Rhode Island',
  ],
  openGraph: {
    title: 'Contact Premium Services Corporation',
    description: 'Schedule a consultation for tax strategy, accounting, payroll, and financial planning.',
    url: 'https://marlasabater.com/ecosystem/corporation/contact',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
