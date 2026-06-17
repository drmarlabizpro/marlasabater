import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Do I Need an Accountant If I Use QuickBooks? | Premium Services Corporation',
  description: 'Accounting software records transactions but cannot catch errors, identify deductions, or provide strategy. Why software and an accountant serve different purposes.',
  openGraph: {
    title: 'Do I Need an Accountant If I Use QuickBooks?',
    description: 'Why software and an accountant serve different purposes for a small business.',
    url: 'https://marlasabater.com/ecosystem/corporation/accounting/do-i-need-accountant-with-quickbooks',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/accounting/do-i-need-accountant-with-quickbooks' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
