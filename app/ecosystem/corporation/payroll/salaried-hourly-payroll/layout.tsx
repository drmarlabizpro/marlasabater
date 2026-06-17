import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payroll for Salaried and Hourly Employees | Premium Services Corporation',
  description: 'Managing payroll for mixed workforces — salaried, hourly, part-time, and contractor. How pay calculations differ and what compliance looks like for each type.',
  openGraph: {
    title: 'Payroll for Salaried and Hourly Employees',
    description: 'How calculations and compliance differ for salaried, hourly, tipped, and mixed workforces.',
    url: 'https://marlasabater.com/ecosystem/corporation/payroll/salaried-hourly-payroll',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/payroll/salaried-hourly-payroll' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
