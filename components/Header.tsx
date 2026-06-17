'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const ECOSYSTEM_COMPANIES = [
  { no: '01', name: 'Dr. Marla Biz Pro Corp', role: 'Leadership & Strategy', href: '/ecosystem', color: '#7C2230' },
  { no: '02', name: 'Premium Services Enterprise', role: 'Investments & Acquisitions', href: '/ecosystem/enterprise', color: '#8A2738' },
  { no: '03', name: 'Premium Services Corporation', role: 'Financial & Wealth Management', href: '/ecosystem/corporation', color: '#2A6452' },
  { no: '04', name: 'Premium Services Group', role: 'Construction & Development', href: '/ecosystem/group', color: '#3C4753' },
  { no: '05', name: 'Flavor Movement', role: 'Food & Hospitality', href: '/ecosystem/flavor', color: '#8A2330' },
  { no: '06', name: 'Legacy Production House', role: 'Media & Talent', href: '/ecosystem/legacy', color: '#5A2F5E' },
  { no: '07', name: 'Marvic Hospitality Group', role: 'Hospitality & Entertainment', href: '/ecosystem/marvic', color: '#193F3C' },
  { no: '08', name: 'PSG Motor Group', role: 'Automotive Sales & Services', href: '/ecosystem/psg', color: '#3A3020' },
]

// Per-route header colors. Ordered longest-prefix-first so inner routes
// (e.g. /ecosystem/corporation/accounting) inherit their company tone.
const ROUTE_COLORS: { prefix: string; bg: string; border: string }[] = [
  { prefix: '/ecosystem/enterprise', bg: '#651E2A', border: 'rgba(201,162,60,0.5)' },
  { prefix: '/ecosystem/corporation', bg: '#214E40', border: 'rgba(201,162,60,0.5)' },
  { prefix: '/ecosystem/group', bg: '#3C4753', border: 'rgba(201,162,60,0.5)' },
  { prefix: '/ecosystem/flavor', bg: '#8A2330', border: 'rgba(201,162,60,0.5)' },
  { prefix: '/ecosystem/legacy', bg: '#3A2140', border: 'rgba(201,162,60,0.5)' },
  { prefix: '/ecosystem/marvic', bg: '#193F3C', border: 'rgba(201,162,60,0.5)' },
  { prefix: '/ecosystem/psg', bg: '#3A3020', border: 'rgba(201,162,60,0.5)' },
  { prefix: '/ministry', bg: '#3A3530', border: 'rgba(38,16,20,0.15)' },
]

const DEFAULT_COLOR = { bg: 'var(--bordeaux)', border: 'var(--gold)' }

export default function Header() {
  const [open, setOpen] = useState(false)
  const [ecosystemOpen, setEcosystemOpen] = useState(false)
  const ecosystemRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const colors = ROUTE_COLORS.find(r => pathname.startsWith(r.prefix)) ?? DEFAULT_COLOR

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    // Close mobile menu and ecosystem dropdown on route change
    setOpen(false)
    setEcosystemOpen(false)
  }, [pathname])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ecosystemRef.current && !ecosystemRef.current.contains(e.target as Node)) {
        setEcosystemOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
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
          <Link
            href="/about"
            className={`site-nav-link ${pathname === '/about' ? 'site-nav-link--active' : ''}`}
          >
            About
          </Link>

          <div ref={ecosystemRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setEcosystemOpen(!ecosystemOpen)}
              style={{
                fontFamily: 'var(--sans)',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: ecosystemOpen ? 'var(--gold-soft)' : 'rgba(242,233,218,0.72)',
                background: 'none',
                border: 'none',
                borderBottom: ecosystemOpen ? '1px solid var(--gold)' : '1px solid transparent',
                cursor: 'pointer',
                padding: '0 0 2px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'color 0.2s',
              }}
            >
              Ecosystem
              <span style={{
                fontSize: '7px',
                opacity: 0.55,
                transform: ecosystemOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease',
                lineHeight: 1,
              }}>
                ▼
              </span>
            </button>

            {ecosystemOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 20px)',
                left: '-20px',
                width: '480px',
                background: colors.bg,
                border: '1px solid rgba(201,162,60,0.22)',
                borderTop: '2px solid var(--gold)',
                zIndex: 300,
                boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
              }}>
                <div style={{
                  padding: '14px 20px',
                  borderBottom: '1px solid rgba(242,233,218,0.1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--sans)',
                    fontWeight: 600,
                    fontSize: '9px',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'rgba(242,233,218,0.4)',
                  }}>
                    THE ECOSYSTEM · EIGHT DIVISIONS
                  </span>
                  <Link
                    href="/ecosystem"
                    onClick={() => setEcosystemOpen(false)}
                    style={{
                      fontFamily: 'var(--sans)',
                      fontWeight: 600,
                      fontSize: '9px',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-soft)',
                      textDecoration: 'none',
                    }}
                  >
                    VIEW ALL →
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  {ECOSYSTEM_COMPANIES.map((co, i) => (
                    <Link
                      key={co.href}
                      href={co.href}
                      onClick={() => setEcosystemOpen(false)}
                      style={{
                        padding: '13px 18px',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        borderBottom: i < 6 ? '1px solid rgba(242,233,218,0.07)' : 'none',
                        borderRight: i % 2 === 0 ? '1px solid rgba(242,233,218,0.07)' : 'none',
                        transition: 'background 0.15s ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(242,233,218,0.07)'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = 'transparent'
                      }}
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: co.color,
                        flexShrink: 0,
                        marginTop: '5px',
                        border: '1px solid rgba(242,233,218,0.15)',
                      }} />
                      <div>
                        <div style={{
                          fontFamily: 'var(--sans)',
                          fontWeight: 600,
                          fontSize: '9px',
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: 'rgba(242,233,218,0.35)',
                          marginBottom: '3px',
                        }}>
                          No. {co.no}
                        </div>
                        <div style={{
                          fontFamily: 'var(--serif)',
                          fontWeight: 400,
                          fontSize: '13px',
                          letterSpacing: '-0.01em',
                          color: 'var(--cream)',
                          lineHeight: 1.2,
                          marginBottom: '3px',
                        }}>
                          {co.name}
                        </div>
                        <div style={{
                          fontFamily: 'var(--sans)',
                          fontWeight: 400,
                          fontSize: '10px',
                          letterSpacing: '0.04em',
                          color: 'rgba(242,233,218,0.42)',
                          lineHeight: 1.4,
                        }}>
                          {co.role}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`site-nav-link ${pathname === '/contact' ? 'site-nav-link--active' : ''}`}
          >
            Contact
          </Link>

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

      {/* Mobile overlay — color matches current route */}
      <div
        className={`site-mobile-overlay ${open ? 'overlay-open' : ''}`}
        style={{ background: colors.bg }}
      >
        <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(242,233,218,0.1)' }}>
          <div style={{
            fontFamily: 'var(--sans)',
            fontWeight: 600,
            fontSize: '9px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.35)',
            marginBottom: '12px',
          }}>
            The Ecosystem
          </div>
          {ECOSYSTEM_COMPANIES.map(co => (
            <Link
              key={co.href}
              href={co.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 0',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(242,233,218,0.06)',
              }}
            >
              <div style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: co.color,
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--serif)',
                fontWeight: 400,
                fontSize: 'clamp(15px,4.5vw,20px)',
                letterSpacing: '-0.01em',
                color: 'var(--cream)',
                lineHeight: 1.2,
              }}>
                {co.name}
              </span>
            </Link>
          ))}
        </div>

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
