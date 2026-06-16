import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accounting & Bookkeeping Services | Providence RI | Premium Services Corporation',
  description: 'Monthly bookkeeping, financial statements, and CFO-level advisory for small businesses in Rhode Island and New England. Premium Services Corporation, Providence RI.',
  keywords: [
    'accounting services Providence RI',
    'bookkeeping small business Rhode Island',
    'monthly bookkeeping Providence',
    'CFO services small business New England',
    'financial statements Rhode Island',
    'small business accountant Providence RI',
  ],
  openGraph: {
    title: 'Accounting & Bookkeeping | Premium Services Corporation',
    description: 'Monthly bookkeeping, financial statements, and CFO-level advisory for small businesses.',
    url: 'https://marlasabater.com/ecosystem/corporation/accounting',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/accounting' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
