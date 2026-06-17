import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Advisory Services | Providence RI | Premium Services Corporation',
  description: 'Strategic business advisory for owners at every stage of growth. Structure, planning, and guidance from someone who has built eight companies over thirty years. Providence, RI.',
  keywords: [
    'business advisory Providence RI',
    'small business consultant Rhode Island',
    'business strategy New England',
    'startup business advisor Providence',
    'business growth consultant Rhode Island',
    'business structure advisor Providence RI',
  ],
  openGraph: {
    title: 'Business Advisory | Premium Services Corporation',
    description: 'Strategic guidance for business owners at every stage. Thirty years of real experience.',
    url: 'https://marlasabater.com/ecosystem/corporation/business-advisory',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/business-advisory' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
