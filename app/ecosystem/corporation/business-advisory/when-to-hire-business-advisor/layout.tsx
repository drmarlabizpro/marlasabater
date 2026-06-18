import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When Is the Right Time to Hire a Business Advisor? | Premium Services Corporation',
  description: 'Earlier than most people think. The best time to hire a business advisor is before major decisions — not after things get complicated. Why timing matters.',
  openGraph: {
    title: 'When Is the Right Time to Hire a Business Advisor?',
    description: 'The best time to hire a business advisor is before major decisions, not after.',
    url: 'https://marlasabater.com/ecosystem/corporation/business-advisory/when-to-hire-business-advisor',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/business-advisory/when-to-hire-business-advisor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
