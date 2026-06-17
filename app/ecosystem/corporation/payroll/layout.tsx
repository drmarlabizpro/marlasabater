import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payroll Services for Small Businesses | Providence RI | Premium Services Corporation',
  description: 'Accurate, on-time payroll with direct deposit, tax filings, and compliance built in. Payroll services for small businesses across Rhode Island and New England.',
  keywords: [
    'payroll services Providence RI',
    'small business payroll Rhode Island',
    'payroll processing New England',
    'payroll tax filing Rhode Island',
    'direct deposit payroll Providence',
    'payroll compliance small business RI',
  ],
  openGraph: {
    title: 'Payroll Services | Premium Services Corporation',
    description: 'Accurate, on-time payroll with direct deposit, tax filings, and compliance built in.',
    url: 'https://marlasabater.com/ecosystem/corporation/payroll',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/payroll' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
