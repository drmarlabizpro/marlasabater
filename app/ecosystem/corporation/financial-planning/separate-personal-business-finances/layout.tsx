import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Separate Personal and Business Finances | Premium Services Corporation',
  description: 'Separate accounts, separate credit, deliberate compensation structure. How business owners create a clean boundary between business and personal finances and why it matters.',
  openGraph: {
    title: 'How to Separate Personal and Business Finances',
    description: 'Separate accounts, deliberate compensation, and personal financial security independent of the business.',
    url: 'https://marlasabater.com/ecosystem/corporation/financial-planning/separate-personal-business-finances',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/financial-planning/separate-personal-business-finances' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
