import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Acquisitions | New England | Premium Services Enterprise',
  description: 'Acquiring businesses with strong fundamentals and long-term growth potential across New England. Strategic business acquisitions built for the decades ahead. Providence, RI.',
  keywords: [
    'business acquisitions Providence RI',
    'acquire business Rhode Island',
    'business acquisition New England',
    'buy business Providence RI',
    'strategic acquisition Rhode Island',
    'business purchase New England',
  ],
  openGraph: {
    title: 'Business Acquisitions | Premium Services Enterprise',
    description: 'Acquiring businesses with strong fundamentals and long-term growth potential across New England.',
    url: 'https://marlasabater.com/ecosystem/enterprise/acquisitions',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/enterprise/acquisitions' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
