import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bilingual Tax Strategy — English and Spanish | Premium Services Corporation',
  description: 'Premium Services Corporation provides full tax strategy and financial advisory in English and Spanish. Serving bilingual business owners across Rhode Island and New England.',
  keywords: [
    'bilingual tax strategy Rhode Island',
    'tax advisor English Spanish Providence RI',
    'contadora Providence RI',
    'servicios de impuestos en español Rhode Island',
    'bilingual accountant Providence',
    'tax planning Spanish English New England',
  ],
  openGraph: {
    title: 'Bilingual Tax Strategy — English and Spanish | Premium Services Corporation',
    description: 'Full tax strategy and financial advisory in English and Spanish. Serving bilingual business owners across Rhode Island and New England.',
    url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/bilingual-tax-strategy',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/bilingual-tax-strategy' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
