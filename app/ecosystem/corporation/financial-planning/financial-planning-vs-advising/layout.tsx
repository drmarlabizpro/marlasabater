import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Planning vs Financial Advising — What Is the Difference? | Premium Services Corporation',
  description: 'Financial advising focuses on investment products. Financial planning covers your entire picture — income, debt, business equity, retirement, insurance, and estate. Why the difference matters for business owners.',
  openGraph: {
    title: 'Financial Planning vs Financial Advising — What Is the Difference?',
    description: 'Why business owners need comprehensive planning, not just portfolio management.',
    url: 'https://marlasabater.com/ecosystem/corporation/financial-planning/financial-planning-vs-advising',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/financial-planning/financial-planning-vs-advising' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
