import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Do I Know If I Need a Financial Plan? | Premium Services Corporation',
  description: 'If you are making financial decisions without a framework connecting them, you need a plan. The signs that your business and personal finances need a structured strategy.',
  openGraph: {
    title: 'How Do I Know If I Need a Financial Plan?',
    description: 'The signs that your business and personal finances need a structured strategy.',
    url: 'https://marlasabater.com/ecosystem/corporation/financial-planning/do-i-need-financial-plan',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/financial-planning/do-i-need-financial-plan' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
