import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LLC vs S-Corp — Which Is Right for Your Rhode Island Business? | Premium Services Corporation',
  description: 'The LLC vs S-Corp decision affects your taxes every year you operate. What each structure means, when the S-Corp election makes sense, and how to decide for your specific situation.',
  keywords: [
    'LLC vs S-Corp Rhode Island',
    'S-Corp election small business Providence RI',
    'LLC or S-Corp tax savings New England',
    'best business structure Rhode Island',
    'S-Corp self employment tax savings Providence',
    'LLC S-Corp comparison Rhode Island',
  ],
  openGraph: {
    title: 'LLC vs S-Corp — Which Is Right for Your Rhode Island Business?',
    description: 'The LLC vs S-Corp decision affects your taxes every year. When the S-Corp election makes sense and how to decide.',
    url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/llc-vs-scorp',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/llc-vs-scorp' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
