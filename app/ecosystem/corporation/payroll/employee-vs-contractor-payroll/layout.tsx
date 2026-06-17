import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Employee vs Independent Contractor — Payroll Differences | Premium Services Corporation',
  description: 'Employees require withholding and W-2s. Contractors get 1099s. Misclassification is one of the most audited areas by the IRS and Rhode Island DOL. What the rules actually are.',
  openGraph: {
    title: 'Employee vs Independent Contractor — Payroll Differences',
    description: 'IRS and Rhode Island worker classification rules and the consequences of getting it wrong.',
    url: 'https://marlasabater.com/ecosystem/corporation/payroll/employee-vs-contractor-payroll',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/payroll/employee-vs-contractor-payroll' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
