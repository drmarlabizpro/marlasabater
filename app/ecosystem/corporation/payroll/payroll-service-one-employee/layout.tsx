import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Do I Need a Payroll Service for One Employee? | Premium Services Corporation',
  description: 'Even with one employee, payroll involves federal and state tax withholding, unemployment insurance, quarterly filings, and W-2 preparation. Why a payroll service pays for itself.',
  openGraph: {
    title: 'Do I Need a Payroll Service for One Employee?',
    description: 'The compliance requirements for one employee are essentially the same as for twenty.',
    url: 'https://marlasabater.com/ecosystem/corporation/payroll/payroll-service-one-employee',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/payroll/payroll-service-one-employee' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
