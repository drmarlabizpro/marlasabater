import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Structure Advice — LLC, S-Corp, C-Corp | Premium Services Corporation',
  description: 'Choosing the right business structure affects your taxes, liability, and future options. What each structure means, when to use it, and how to decide for your Rhode Island business.',
  openGraph: {
    title: 'Business Structure Advice — LLC, S-Corp, C-Corp',
    description: 'How to choose the right structure for taxes, liability, and future options in Rhode Island.',
    url: 'https://marlasabater.com/ecosystem/corporation/business-advisory/business-structure-advice',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/business-advisory/business-structure-advice' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
