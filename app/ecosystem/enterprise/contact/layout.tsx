import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Premium Services Enterprise | Investments & Acquisitions | Providence RI',
  description: 'Start a conversation with Premium Services Enterprise about real estate holdings, business acquisitions, and strategic investments across New England. Providence, RI.',
  keywords: [
    'contact Premium Services Enterprise',
    'investment inquiry Providence RI',
    'acquisition conversation Rhode Island',
    'real estate investment contact New England',
    'strategic investment inquiry Providence',
    'business acquisition contact Rhode Island',
  ],
  openGraph: {
    title: 'Contact Premium Services Enterprise',
    description: 'Start a conversation about real estate, acquisitions, and strategic investments.',
    url: 'https://marlasabater.com/ecosystem/enterprise/contact',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/enterprise/contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
