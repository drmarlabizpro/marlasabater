import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Much Can a Small Business Save With a Tax Strategy? | Premium Services Corporation',
  description: 'Most small business owners overpay taxes by 10 to 30 percent annually. What a real tax strategy addresses, where the savings come from, and how they compound over time.',
  keywords: [
    'small business tax savings Rhode Island',
    'how much to save on taxes Providence RI',
    'tax strategy savings small business',
    'reduce business taxes Rhode Island',
    'tax planning savings New England',
  ],
  openGraph: {
    title: 'How Much Can a Small Business Save With a Tax Strategy?',
    description: 'Most small business owners overpay taxes by 10 to 30 percent annually. Where the savings actually come from.',
    url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/how-much-can-you-save',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/how-much-can-you-save' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
