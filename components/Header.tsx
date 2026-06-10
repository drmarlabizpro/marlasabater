'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close menu on route change / resize above breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header className="site-header">

        {/* Wordmark */}
        <Link href="/" className="site-wordmark">
          <span className="site-wordmark-name">
            Dr. <em>Marla</em>
          </span>
          <span className="site-wordmark-est">EST. 1996</span>
        </Link>

        {/* Desktop nav — hidden on mobile via CSS */}
        <nav className="site-nav-desktop">
          {NAV.map(({ label, href }) => (
            <Link key={href} href={href} className="site-nav-link">
              {label}
            </Link>
          ))}
          <Link href="/contact" className="site-nav-cta">
            Schedule a Consultation
          </Link>
        </nav>

        {/* Hamburger — visible on mobile only via CSS */}
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

      {/* Mobile overlay */}
      <div className={`site-mobile-overlay ${open ? 'overlay-open' : ''}`}>
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
