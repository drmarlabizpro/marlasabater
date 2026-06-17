import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Happens If You Make a Payroll Tax Mistake? | Premium Services Corporation',
  description: 'Payroll tax errors trigger IRS penalties up to 15% per quarter, state penalties, and potential personal liability. What the consequences are and how to avoid them.',
  openGraph: {
    title: 'What Happens If You Make a Payroll Tax Mistake?',
    description: 'IRS penalties, state penalties, and personal liability under the Trust Fund Recovery Penalty.',
    url: 'https://marlasabater.com/ecosystem/corporation/payroll/payroll-tax-mistake-consequences',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/payroll/payroll-tax-mistake-consequences' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
