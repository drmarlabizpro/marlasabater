import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Advisory vs Consulting — What Is the Difference? | Premium Services Corporation',
  description: 'Consulting solves a specific problem and ends. Advisory is an ongoing relationship that compounds in value over time. How to know which one your business needs.',
  openGraph: {
    title: 'Business Advisory vs Consulting — What Is the Difference?',
    description: 'Project-based consulting and ongoing advisory serve different needs. How to know which fits.',
    url: 'https://marlasabater.com/ecosystem/corporation/business-advisory/business-advisory-vs-consulting',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/business-advisory/business-advisory-vs-consulting' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
