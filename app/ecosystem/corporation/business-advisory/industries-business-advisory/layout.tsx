import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Industries Does Premium Services Corporation Advise? | Business Advisory RI',
  description: 'Over thirty years Premium Services Corporation has advised businesses across nine industries in Rhode Island and New England. Construction, food, hospitality, media, automotive, and more.',
  openGraph: {
    title: 'What Industries Does Premium Services Corporation Advise?',
    description: 'Nine industries over thirty years — construction, food, hospitality, media, automotive, and more.',
    url: 'https://marlasabater.com/ecosystem/corporation/business-advisory/industries-business-advisory',
    siteName: 'Dr. Marla Sabater',
    type: 'article',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation/business-advisory/industries-business-advisory' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
