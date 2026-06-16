import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Premium Services Corporation | Financial & Wealth Management | Dr. Marla Sabater',
  description: 'Tax strategy, accounting, payroll, and financial advisory for business owners in New England and nationwide. Bilingual service in English and Spanish. Providence, RI.',
  keywords: ['accounting payroll Providence RI', 'bilingual accountant Rhode Island', 'tax strategy small business Providence', 'business financial advisory New England', 'Premium Services Corporation'],
  openGraph: {
    title: 'Premium Services Corporation | Financial & Wealth Management',
    description: 'Tax, accounting, and financial strategy. Built on the right foundation.',
    url: 'https://marlasabater.com/ecosystem/corporation',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Services Corporation | Financial & Wealth Management',
    description: 'Tax, accounting, and financial strategy. Built on the right foundation.',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/corporation' },
}

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
  { title: 'Tax Strategy', body: 'Clean, compliant tax planning that keeps more in your business and less with the government.' },
  { title: 'Accounting', body: 'Monthly bookkeeping, financial statements, and full CFO-level advisory.' },
  { title: 'Payroll', body: 'Accurate, on-time payroll with direct deposit, tax filings, and compliance built in.' },
  { title: 'Business Advisory', body: 'Strategic guidance for business owners at every stage — from startup through scale.' },
  { title: 'Financial Planning', body: 'Long-term financial structure for individuals and businesses built to last.' },
  { title: 'Insurance Advisory', body: 'Understanding what coverage your business actually needs and what it does not.' },
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
              The numbers, handled <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>correctly.</em>
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
              <div key={card.title} style={{
                background: 'rgba(242,233,218,0.06)',
                padding: '28px 24px',
                borderLeft: '3px solid var(--gold)',
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
              </div>
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
          The foundation you choose determines <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>everything</em> that gets built on top of it.
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
            <Link href="/contact" style={{
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
