import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When Should a Small Business Start Tax Planning? | Premium Services Corporation',
  description: 'The answer is always day one. Why starting tax planning early produces compounding savings and how waiting until tax season costs business owners money every year.',
  keywords: [
    'when to start tax planning small business',
    'tax planning new business Rhode Island',
    'small business tax strategy timing Providence RI',
    'year round tax planning New England',
    'start tax strategy early Rhode Island',
    'tax planning startup business Providence',
  ],
  openGraph: {
    title: 'When Should a Small Business Start Tax Planning?',
    description: 'The answer is always day one. Why starting early produces compounding savings.',
    url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/when-to-start-tax-planning',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/when-to-start-tax-planning' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
