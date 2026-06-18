import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Does Financial Planning Cost and Is It Worth It? | Premium Services Corporation',
  description: 'Financial planning costs vary by complexity. How to evaluate whether it pays for itself and why most business owners who engage in planning discover they were leaving money on the table.',
  openGraph: {
    title: 'What Does Financial Planning Cost and Is It Worth It?',
    description: 'The right question is not cost — it is return. How to evaluate whether financial planning pays for itself.',
    url: 'https://marlasabater.com/ecosystem/corporation/financial-planning/financial-planning-cost-worth-it',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/financial-planning/financial-planning-cost-worth-it' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
