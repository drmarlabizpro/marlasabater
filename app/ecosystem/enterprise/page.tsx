'use client'

import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function Grain({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      opacity, mixBlendMode: 'multiply' as const,
      backgroundImage: GRAIN, zIndex: 1
    }} />
  )
}

const STAT_BLOCKS = [
  { num: '1996', label: 'YEAR FOUNDED' },
  { num: '30+', label: 'YEARS OPERATING' },
  { num: 'RI', label: 'HEADQUARTERED' },
  { num: '8', label: 'ECOSYSTEM COMPANIES' },
]

const FOCUS_CARDS = [
  { title: 'Real Estate Holdings', body: 'Acquisition and management of commercial and residential property across New England and nationwide.', href: '/ecosystem/enterprise/real-estate' },
  { title: 'Business Acquisitions', body: 'Identifying and acquiring businesses with strong fundamentals and long-term growth potential.', href: '/ecosystem/enterprise/acquisitions' },
  { title: 'Strategic Investments', body: "Equity positions in businesses aligned with the ecosystem's vision and values.", href: '/ecosystem/enterprise/investments' },
  { title: 'Asset Management', body: 'Active management and protection of acquired assets for sustained generational value.', href: '/ecosystem/enterprise/contact' },
]

const NAV_LINKS = [
  { label: 'Real Estate', href: '/ecosystem/enterprise/real-estate' },
  { label: 'Acquisitions', href: '/ecosystem/enterprise/acquisitions' },
  { label: 'Investments', href: '/ecosystem/enterprise/investments' },
  { label: 'Contact Us', href: '/ecosystem/enterprise/contact' },
]

export default function Enterprise() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Enterprise', url: 'https://marlasabater.com/ecosystem/enterprise' },
      ]} />
      {/* SECTION 1 — HERO */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(64px,10vh,110px)',
        background: 'radial-gradient(100% 84% at 28% 28%, rgba(201,162,60,0.22), rgba(110,31,42,0) 56%), linear-gradient(160deg, #8A2738, #651E2A 58%, #531824)',
        color: 'var(--cream)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.42)', marginBottom: '36px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/ecosystem" style={{ color: 'inherit', textDecoration: 'none' }}>ECOSYSTEM</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>ENTERPRISE</span>
          </div>

          <div style={{
            display: 'inline-block',
            marginBottom: '20px',
            fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 9,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            background: 'var(--gold-soft)', color: '#651E2A',
            padding: '5px 14px',
          }}>
            THE FLAGSHIP
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-hero)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)', color: 'var(--cream)', maxWidth: '640px', textWrap: 'balance',
          }}>
            Premium Services<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Enterprise.</em>
          </h1>

          <div style={{
            margin: '36px 0',
            height: '2px',
            background: 'var(--gold)',
            width: 'clamp(140px,32vw,420px)',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.85)', maxWidth: '560px',
          }}>
            Property, holdings, and the long view. The company that owns and builds for the decades ahead.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '40px', left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(242,233,218,0.38)',
        }}>
          A DR. MARLA COMPANY · ESTABLISHED 1996 · NO. 02
        </div>
      </section>

      {/* NAVIGATION ROW */}
      <nav style={{
        background: 'rgba(90,26,36,0.95)',
        padding: '0 var(--gut)',
        borderBottom: '1px solid rgba(201,162,60,0.2)',
        overflowX: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 0,
      }}>
        {NAV_LINKS.map((item, i) => {
          const isLast = i === NAV_LINKS.length - 1
          const isContact = item.label === 'Contact Us'
          const baseColor = isContact ? 'var(--gold-soft)' : 'rgba(242,233,218,0.55)'
          return (
            <Link key={item.href} href={item.href} style={{
              padding: '16px 20px',
              display: 'inline-flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: baseColor,
              borderRight: isLast ? 'none' : '1px solid rgba(242,233,218,0.08)',
              transition: 'color 0.2s, background 0.2s',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              if (!isContact) el.style.color = 'var(--cream)'
              el.style.background = 'rgba(242,233,218,0.06)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              if (!isContact) el.style.color = baseColor
              el.style.background = 'transparent'
            }}>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* SECTION 2 — WHAT IT IS */}
      <section style={{
        background: 'var(--cream)',
        padding: 'clamp(72px,11vh,120px) var(--gut)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '72px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--gold-deep)', marginBottom: '20px',
            }}>
              INVESTMENTS & ACQUISITIONS
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: 'var(--ink)', textWrap: 'balance',
            }}>
              Built to hold. Built to <em style={{ fontStyle: 'italic', color: '#7C2230' }}>last.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '24px', maxWidth: '520px',
            }}>
              Premium Services Enterprise acquires, holds, and grows. Real estate, business investments, and strategic acquisitions selected for long-term value. Not built to flip. Built to become part of the foundation.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '16px', maxWidth: '520px',
            }}>
              Every acquisition is evaluated against one question: will this be worth more in twenty years? If the answer is yes and the fundamentals are sound, Premium Services Enterprise is the answer.
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0',
          }}>
            {STAT_BLOCKS.map((b, i) => {
              const borderRight = i % 2 === 0 ? '1px solid var(--ink-15)' : 'none'
              const borderBottom = i < 2 ? '1px solid var(--ink-15)' : 'none'
              return (
                <div key={b.label} style={{
                  padding: '28px 24px',
                  borderRight,
                  borderBottom,
                }}>
                  <div style={{
                    fontFamily: 'var(--serif)', fontWeight: 400,
                    fontSize: 'clamp(32px,5vw,48px)', lineHeight: 1,
                    color: 'var(--ink)',
                  }}>
                    {b.num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'var(--gold-deep)', marginTop: '8px',
                  }}>
                    {b.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — FOCUS AREAS */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(170deg, #7C2230, #5A1A24)',
        color: 'var(--cream)',
        padding: 'clamp(72px,11vh,120px) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '48px',
          }}>
            FOCUS AREAS
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2px',
          }}>
            {FOCUS_CARDS.map(card => (
              <Link key={card.title} href={card.href} style={{
                background: 'rgba(242,233,218,0.06)',
                padding: '32px 28px',
                borderLeft: '3px solid var(--gold)',
                textDecoration: 'none',
                display: 'block',
                transition: 'background 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(242,233,218,0.12)'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(242,233,218,0.06)'
                el.style.transform = 'none'
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-subhead)', lineHeight: 'var(--lh-headline)',
                  color: 'var(--cream)',
                }}>
                  {card.title}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 15, lineHeight: 1.55,
                  color: 'rgba(242,233,218,0.7)', marginTop: '12px',
                }}>
                  {card.body}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--gold-soft)', marginTop: 16, display: 'block',
                }}>
                  LEARN MORE →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE APPROACH */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'clamp(72px,11vh,120px) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '24px',
        }}>
          THE APPROACH
        </div>

        <div style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-headline)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)', maxWidth: '660px', textWrap: 'balance',
        }}>
          “We do not build to sell. We build to hold, to grow, and to leave something <em style={{ fontStyle: 'italic', color: '#7C2230' }}>stronger</em> than we found it.”
        </div>

        <div style={{
          marginTop: '28px',
          marginBottom: '28px',
          height: '2px', background: 'var(--gold)',
          width: 'clamp(80px,14vw,160px)',
        }} />

        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
          fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
          color: 'var(--ink-70)', maxWidth: '620px',
        }}>
          Premium Services Enterprise was built as the long-term holding arm of the Dr. Marla ecosystem. Real estate, business acquisitions, and strategic positions are selected not for short-term return but for the value they will carry into the next decade and beyond.
        </div>

        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginTop: '32px',
        }}>
          LICENSED REAL ESTATE · NEW ENGLAND
        </div>
      </section>

      {/* SECTION 5 — CONTACT CTA */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(201,162,60,0.16), rgba(90,26,36,0) 55%), linear-gradient(165deg, #7C2230, #5A1A24)',
        color: 'var(--cream)',
        padding: 'clamp(72px,11vh,120px) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            letterSpacing: 'var(--ls-headline)', color: 'var(--cream)',
          }}>
            Interested in a conversation? <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Get in touch.</em>
          </h2>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '36px',
          }}>
            {[
              '356 Manton Avenue, Suite 1A, Providence, RI 02909',
              '(401) 321-3781',
              'Marla@msabater.com',
            ].map(item => (
              <div key={item} style={{
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 14,
                letterSpacing: '0.01em', color: 'var(--cream)',
              }}>
                {item}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link href="/contact" style={{
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              padding: '14px 36px',
              fontFamily: 'var(--sans)',
              fontWeight: 600,
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              SCHEDULE A CONSULTATION →
            </Link>
          </div>

          <div style={{
            marginTop: '48px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.38)',
          }}>
            PREMIUM SERVICES ENTERPRISE · A DR. MARLA COMPANY · NO. 02
          </div>
        </div>
      </section>
    </>
  )
}
