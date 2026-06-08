'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const solid = true

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 var(--gut)',
        height: '72px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        background: solid ? 'var(--bordeaux)' : 'transparent',
        borderBottom: solid ? '1px solid var(--gold)' : '1px solid transparent',
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}>

        {/* Wordmark */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(18px, 2.4vw, 24px)',
            letterSpacing: '-0.015em', lineHeight: 1,
            color: 'var(--cream)',
          }}>
            Dr. <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Marla</em>
          </span>
          <span style={{
            fontFamily: 'var(--sans)', fontWeight: 600,
            fontSize: '9px', letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: solid ? 'var(--gold-soft)' : 'rgba(242,233,218,0.5)',
            transition: 'color 0.4s ease',
          }}>
            EST. 1996
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{
          display: 'flex', alignItems: 'center', gap: '32px',
        }} className="desktop-nav">
          {NAV.map(({ label, href }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--sans)', fontWeight: 600,
              fontSize: '11px', letterSpacing: '0.22em',
              textTransform: 'uppercase', textDecoration: 'none',
              color: 'rgba(242,233,218,0.72)',
              paddingBottom: '2px',
              borderBottom: '1px solid transparent',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.color = 'var(--gold-soft)'
              ;(e.target as HTMLElement).style.borderBottomColor = 'var(--gold)'
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.color = 'rgba(242,233,218,0.72)'
              ;(e.target as HTMLElement).style.borderBottomColor = 'transparent'
            }}>
              {label}
            </Link>
          ))}
          <Link href="/contact" style={{
            fontFamily: 'var(--sans)', fontWeight: 600,
            fontSize: '10px', letterSpacing: '0.22em',
            textTransform: 'uppercase', textDecoration: 'none',
            color: 'var(--gold)',
            border: '1px solid var(--gold)',
            padding: '10px 20px',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'var(--gold)'
            el.style.color = 'var(--bordeaux)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'transparent'
            el.style.color = 'var(--gold)'
          }}>
            Schedule a Consultation
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', gap: '5px',
            padding: '8px',
          }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', height: '1px', background: 'var(--cream)',
              transition: 'width 0.2s',
              width: i === 1 ? (open ? '16px' : '24px') : '24px',
            }} />
          ))}
        </button>
      </header>

      {/* Mobile overlay menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'var(--bordeaux)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
        padding: 'var(--gut)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transition: 'opacity 0.35s ease',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[...NAV, { label: 'Schedule a Consultation', href: '/contact' }].map(({ label, href }) => (
            <Link key={href} href={href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'clamp(32px, 8vw, 64px)',
                letterSpacing: '-0.02em', lineHeight: 1.1,
                color: 'var(--cream)', textDecoration: 'none',
                borderBottom: '1px solid rgba(242,233,218,0.15)',
                paddingBottom: '16px',
              }}>
              {label}
            </Link>
          ))}
        </nav>
        <div style={{
          marginTop: '48px',
          fontFamily: 'var(--sans)', fontWeight: 600,
          fontSize: '10px', letterSpacing: '0.28em',
          textTransform: 'uppercase', color: 'var(--gold-soft)',
        }}>
          Dr. Marla Ecosystem · Est. 1996
        </div>
      </div>

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: flex; }
        }
      `}</style>
    </>
  )
}
