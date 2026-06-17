import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bookkeeper vs Accountant — What Is the Difference? | Premium Services Corporation',
  description: 'A bookkeeper records transactions. An accountant interprets them and advises. Understanding the difference helps you know what your business actually needs.',
  openGraph: {
    title: 'Bookkeeper vs Accountant — What Is the Difference?',
    description: 'A bookkeeper records transactions. An accountant interprets them and advises.',
    url: 'https://marlasabater.com/ecosystem/corporation/accounting/bookkeeper-vs-accountant',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/accounting/bookkeeper-vs-accountant' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
