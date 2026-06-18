import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Does a Business Advisor Do for a Small Business? | Premium Services Corporation',
  description: 'A business advisor helps you make better decisions on structure, hiring, growth, and exits. What the role actually covers and how it differs from other professional services.',
  openGraph: {
    title: 'What Does a Business Advisor Do for a Small Business?',
    description: 'The core function of a business advisor and how the role differs from other professional services.',
    url: 'https://marlasabater.com/ecosystem/corporation/business-advisory/what-does-business-advisor-do',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/business-advisory/what-does-business-advisor-do' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
