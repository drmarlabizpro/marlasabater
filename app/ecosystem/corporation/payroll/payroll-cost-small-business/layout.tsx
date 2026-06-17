import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Much Does Payroll Cost for a Small Business? | Premium Services Corporation',
  description: 'Payroll service pricing for small businesses in Rhode Island. What full-service payroll costs, what is included, and why the cost of getting it wrong is always higher.',
  openGraph: {
    title: 'How Much Does Payroll Cost for a Small Business?',
    description: 'Payroll service pricing for small businesses in Rhode Island and what full-service includes.',
    url: 'https://marlasabater.com/ecosystem/corporation/payroll/payroll-cost-small-business',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/payroll/payroll-cost-small-business' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
