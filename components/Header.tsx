'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Contact', href: '/contact' },
]

// Per-route header colors
// All values are dark tones so cream links stay legible at all times
const ROUTE_COLORS: Record<string, { bg: string; border: string }> = {
  '/ecosystem/enterprise': {
    bg: '#651E2A',
    border: 'rgba(201,162,60,0.6)',
  },
  '/ecosystem/corporation': {
    bg: '#214E40',
    border: 'rgba(201,162,60,0.6)',
  },
  '/ecosystem/group': {
    bg: '#3C4753',
    border: 'rgba(201,162,60,0.6)',
  },
  '/ecosystem/flavor': {
    bg: '#8A2330',
    border: 'rgba(201,162,60,0.6)',
  },
  '/ecosystem/legacy': {
    bg: '#3A2140',
    border: 'rgba(201,162,60,0.6)',
  },
  '/ecosystem/marvic': {
    bg: '#193F3C',
    border: 'rgba(201,162,60,0.6)',
  },
  '/ecosystem/psg': {
    bg: '#3A3020',
    border: 'rgba(201,162,60,0.6)',
  },
  '/ministry': {
    bg: '#3A3530',
    border: 'rgba(38,16,20,0.15)',
  },
}

const DEFAULT_COLOR = {
  bg: 'var(--bordeaux)',
  border: 'var(--gold)',
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Get the color config for the current route
  // Falls back to bordeaux for all non-company routes
  const colors = ROUTE_COLORS[pathname] ?? DEFAULT_COLOR

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    // Close mobile menu on route change
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className="site-header"
        style={{
          background: colors.bg,
          borderBottomColor: colors.border,
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Wordmark */}
        <Link href="/" className="site-wordmark">
          <span className="site-wordmark-name">
            Dr. <em>Marla</em>
          </span>
          <span className="site-wordmark-est">EST. 1996</span>
        </Link>

        {/* Desktop nav */}
        <nav className="site-nav-desktop">
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`site-nav-link ${pathname === href ? 'site-nav-link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="site-nav-cta">
            Schedule a Consultation
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="site-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`site-hamburger-line ${open ? 'line-top-open' : ''}`} />
          <span className={`site-hamburger-line ${open ? 'line-mid-open' : ''}`} />
          <span className={`site-hamburger-line ${open ? 'line-bot-open' : ''}`} />
        </button>
      </header>

      {/* Mobile overlay — color also matches current route */}
      <div
        className={`site-mobile-overlay ${open ? 'overlay-open' : ''}`}
        style={{ background: colors.bg }}
      >
        <nav className="site-mobile-nav">
          {[...NAV, { label: 'Schedule a Consultation', href: '/contact' }].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="site-mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="site-mobile-endorse">
          Dr. Marla Ecosystem · Est. 1996
        </div>
      </div>
    </>
  )
}
