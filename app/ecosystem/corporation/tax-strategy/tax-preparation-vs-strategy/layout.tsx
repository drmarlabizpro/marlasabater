import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tax Preparation vs Tax Strategy — What Is the Difference? | Premium Services Corporation',
  description: 'Tax preparation reports what happened. Tax strategy shapes what will happen. The difference between the two and why it determines how much your business pays in taxes every year.',
  keywords: [
    'tax preparation vs tax strategy Rhode Island',
    'difference tax planning tax preparation',
    'proactive tax planning Providence RI',
    'tax strategy small business New England',
    'year round tax planning Rhode Island',
  ],
  openGraph: {
    title: 'Tax Preparation vs Tax Strategy — What Is the Difference?',
    description: 'Tax preparation reports what happened. Tax strategy shapes what will happen. Why the difference determines how much you pay.',
    url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/tax-preparation-vs-strategy',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/tax-preparation-vs-strategy' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
