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

const STATS = [
  { num: '30', label: 'YEARS OPERATING', ctx: 'Serving New England since 1996' },
  { num: '1,000+', label: 'CLIENTS SERVED', ctx: 'Businesses and families nationwide' },
  { num: 'EN / ES', label: 'BILINGUAL SERVICE', ctx: 'English and Spanish, always' },
]

const SERVICES = [
  { title: 'Tax Strategy', body: 'Clean, compliant tax planning that keeps more in your business and less with the government.', href: '/ecosystem/corporation/tax-strategy' },
  { title: 'Accounting', body: 'Monthly bookkeeping, financial statements, and full CFO-level advisory.', href: '/ecosystem/corporation/accounting' },
  { title: 'Payroll', body: 'Accurate, on-time payroll with direct deposit, tax filings, and compliance built in.', href: '/ecosystem/corporation/payroll' },
  { title: 'Business Advisory', body: 'Strategic guidance for business owners at every stage — from startup through scale.', href: '/ecosystem/corporation/business-advisory' },
  { title: 'Financial Planning', body: 'Long-term financial structure for individuals and businesses built to last.', href: '/ecosystem/corporation/financial-planning' },
  { title: 'Insurance Advisory', body: 'Understanding what coverage your business actually needs and what it does not.', href: '/ecosystem/corporation/contact' },
]

const NAV_LINKS = [
  { label: 'Tax Strategy', href: '/ecosystem/corporation/tax-strategy' },
  { label: 'Accounting', href: '/ecosystem/corporation/accounting' },
  { label: 'Payroll', href: '/ecosystem/corporation/payroll' },
  { label: 'Business Advisory', href: '/ecosystem/corporation/business-advisory' },
  { label: 'Financial Planning', href: '/ecosystem/corporation/financial-planning' },
  { label: 'Contact Us', href: '/ecosystem/corporation/contact' },
]

export default function Corporation() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
      ]} />
      {/* SECTION 1 — HERO */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(64px,10vh,110px)',
        background: 'linear-gradient(168deg, #2A6452, #214E40)',
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
            <span>CORPORATION</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-hero)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)', color: 'var(--cream)', maxWidth: '640px', textWrap: 'balance',
          }}>
            Premium Services<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Corporation.</em>
          </h1>

          <div style={{
            margin: '32px 0',
            height: '2px',
            background: 'var(--gold)',
            width: 'clamp(120px,28vw,380px)',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.82)', maxWidth: '560px',
          }}>
            Tax, accounting, and financial strategy. Built on the right foundation.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '40px', left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(242,233,218,0.38)',
        }}>
          A DR. MARLA COMPANY · ESTABLISHED 1996 · NO. 03
        </div>
      </section>

      {/* NAVIGATION ROW */}
      <nav style={{
        background: 'rgba(33,78,64,0.95)',
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

      {/* SECTION 2 — WHAT IT DOES */}
      <section style={{
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div data-cols="2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '72px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--gold-deep)', marginBottom: '20px',
            }}>
              FINANCIAL & WEALTH MANAGEMENT
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: 'var(--ink)', textWrap: 'balance',
            }}>
              The numbers, handled <em style={{ fontStyle: 'italic', color: '#214E40' }}>correctly.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '24px', maxWidth: '520px',
            }}>
              For thirty years, Premium Services Corporation has helped business owners across New England build the financial structure they need to grow. Tax strategy, payroll, accounting, and advisory — handled with precision, in English and in Spanish.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '16px', maxWidth: '520px',
            }}>
              The families and small businesses Dr. Marla grew up around never had someone who could explain the numbers clearly, in their own language. That is why this company was built.
            </p>
          </div>

          <div>
            {STATS.map((s, i) => {
              const isLast = i === STATS.length - 1
              return (
                <div key={s.label} style={{
                  padding: '24px 0',
                  borderBottom: isLast ? 'none' : '1px solid var(--ink-15)',
                }}>
                  <div style={{
                    fontFamily: 'var(--serif)', fontWeight: 400,
                    fontSize: 'clamp(32px,4.5vw,48px)', lineHeight: 1,
                    color: 'var(--ink)',
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                    letterSpacing: '0.26em', textTransform: 'uppercase',
                    color: 'var(--gold-deep)', marginTop: '10px',
                  }}>
                    {s.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 13,
                    color: 'var(--ink-45)', marginTop: '6px', lineHeight: 1.5,
                  }}>
                    {s.ctx}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICES */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(170deg, #2A6452, #214E40)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '48px',
          }}>
            WHAT WE HANDLE
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2px',
          }}>
            {SERVICES.map(card => (
              <Link key={card.title} href={card.href} style={{
                background: 'rgba(242,233,218,0.06)',
                padding: '28px 24px',
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
                  color: 'var(--cream)', marginBottom: '10px',
                }}>
                  {card.title}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 15, lineHeight: 1.55,
                  color: 'rgba(242,233,218,0.7)',
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

      {/* SECTION 4 — THE FOUNDATION */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '24px',
        }}>
          THE FOUNDATION
        </div>

        <div style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-headline)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)', maxWidth: '660px', textWrap: 'balance',
        }}>
          The foundation you choose determines <em style={{ fontStyle: 'italic', color: '#214E40' }}>everything</em> that gets built on top of it.
        </div>

        <div style={{
          marginTop: '28px',
          marginBottom: '28px',
          height: '2px', background: 'var(--gold)',
          width: 'clamp(80px,14vw,160px)',
        }} />

        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'var(--gold-deep)',
        }}>
          STRUCTURAL INTEGRITY — DR. MARLA SABATER
        </div>

        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
          fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
          color: 'var(--ink-70)', maxWidth: '620px', marginTop: '28px',
        }}>
          Premium Services Corporation was built on the belief that every business owner deserves a strong financial foundation. Not just a tax return at the end of the year. A real strategy, explained clearly, built for the decades ahead.
        </div>

        <div style={{
          marginTop: '32px',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <div style={{
            width: '3px', height: '32px',
            background: 'var(--gold)', flexShrink: 0,
          }} />
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--gold-deep)',
          }}>
            BILINGUAL SERVICE · ENGLISH & SPANISH · PROVIDENCIA, RI
          </div>
        </div>
      </section>

      {/* SECTION 5 — CONTACT CTA */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(42,100,82,0.4), rgba(33,78,64,0) 55%), linear-gradient(165deg, #2A6452, #214E40)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            letterSpacing: 'var(--ls-headline)', color: 'var(--cream)',
          }}>
            Ready to build the right foundation?<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s talk.</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
            color: 'rgba(242,233,218,0.75)', marginTop: '20px', maxWidth: '480px',
          }}>
            Schedule a consultation. Premium Services Corporation works with business owners at every stage — from first filing to full financial strategy.
          </p>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px',
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
            <Link href="/ecosystem/corporation/contact" style={{
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              padding: '14px 36px',
              fontFamily: 'var(--sans)',
              fontWeight: 600,
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
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
            PREMIUM SERVICES CORPORATION · A DR. MARLA COMPANY · NO. 03
          </div>
        </div>
      </section>
    </>
  )
}
