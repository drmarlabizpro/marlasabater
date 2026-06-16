import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PSG Motor Group | Automotive Sales & Services | Dr. Marla Sabater',
  description: 'Vehicle sales, fleet sourcing, export services, auto detailing, and B2B automotive solutions across New England. Reliable vehicles, sourced and serviced. Providence, RI.',
  keywords: ['automotive sales Providence RI', 'vehicle fleet Rhode Island', 'car sales Providence', 'B2B automotive New England', 'PSG Motor Group'],
  openGraph: {
    title: 'PSG Motor Group | Automotive Sales & Services',
    description: 'Reliable vehicles, sourced and serviced. Sales, export, and fleet for business.',
    url: 'https://marlasabater.com/ecosystem/psg',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PSG Motor Group | Automotive Sales & Services',
    description: 'Reliable vehicles, sourced and serviced. Sales, export, and fleet for business.',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/psg' },
}

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const SPECS = [
  { num: '01', label: 'VEHICLE SALES', desc: 'Individual and bulk vehicle sales for businesses and individuals' },
  { num: '02', label: 'FLEET SOURCING', desc: 'Building and maintaining vehicle fleets for growing businesses' },
  { num: '03', label: 'EXPORT SERVICES', desc: 'International vehicle export with full logistics coordination' },
  { num: '04', label: 'AUTO DETAILING', desc: 'Professional detailing for personal and commercial vehicles' },
  { num: '05', label: 'B2B AUTOMOTIVE', desc: 'Business-to-business automotive solutions and consulting' },
]

const SERVICES = [
  { title: 'Vehicle Sales', body: 'New and pre-owned vehicles sourced for quality, reliability, and value. Individual and fleet purchases handled directly.' },
  { title: 'Fleet Sourcing', body: 'Building vehicle fleets for service businesses, logistics companies, and growing operations across New England.' },
  { title: 'Export Services', body: 'International vehicle export with documentation, logistics, and delivery coordination fully managed.' },
  { title: 'Detailing & Services', body: 'Professional auto detailing and vehicle preparation for personal, commercial, and fleet vehicles.' },
]

export default function PSG() {
  return (
    <>
      {/* SECTION 1 — HERO (sand ground, motion lines) */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(64px,10vh,110px)',
        background: 'var(--c-auto)',
        color: 'var(--ink)',
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(38,16,20,0.38)', marginBottom: '36px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/ecosystem" style={{ color: 'inherit', textDecoration: 'none' }}>ECOSYSTEM</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>PSG</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(44px,8.5vw,112px)', lineHeight: 0.92,
            letterSpacing: '-0.024em', color: 'var(--ink)', maxWidth: '820px',
          }}>
            PSG{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>Motor Group.</em>
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '32px 0' }}>
            <div style={{ width: '84px', height: '2px', background: 'var(--gold)', opacity: 1 }} />
            <div style={{ width: '48px', height: '2px', background: 'var(--gold)', opacity: 0.6 }} />
            <div style={{ width: '24px', height: '2px', background: 'var(--gold)', opacity: 0.3 }} />
          </div>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(19px,2.6vw,28px)', lineHeight: 1.42,
            color: 'rgba(38,16,20,0.7)', maxWidth: '560px',
          }}>
            Reliable vehicles, sourced and serviced. Sales, export, and fleet for business.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '40px', left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(38,16,20,0.32)',
        }}>
          A DR. MARLA COMPANY · ESTABLISHED 1996 · NO. 08
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
              AUTOMOTIVE SALES & SERVICES
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(32px,5vw,62px)', lineHeight: 1,
              letterSpacing: '-0.018em', color: 'var(--ink)',
            }}>
              Reliable vehicles for<br />
              <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>serious business.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.65,
              color: 'var(--ink-70)', marginTop: '24px', maxWidth: '520px',
            }}>
              PSG Motor Group was built because service businesses need reliable vehicles and most of the time they have no one helping them source the right ones. Vehicle sales, fleet sourcing, export services, and detailing — handled with the same precision the rest of the ecosystem demands.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.65,
              color: 'var(--ink-70)', marginTop: '16px', maxWidth: '520px',
            }}>
              From a single vehicle purchase to a full fleet build-out, PSG Motor Group provides B2B automotive solutions that keep businesses moving.
            </p>
          </div>

          <div>
            {SPECS.map((s, i) => {
              const isLast = i === SPECS.length - 1
              return (
                <div key={s.num} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  paddingTop: '18px',
                  paddingBottom: '18px',
                  borderBottom: isLast ? 'none' : '1px solid var(--ink-15)',
                  gap: '16px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <span style={{
                      fontFamily: 'var(--sans)', fontWeight: 700,
                      fontSize: 'clamp(24px,3.5vw,36px)', lineHeight: 1,
                      color: 'var(--gold-deep)',
                    }}>
                      {s.num}
                    </span>
                    <span style={{
                      fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: 'var(--ink-45)', marginLeft: '8px',
                    }}>
                      {s.label}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                    fontSize: 15, color: 'var(--ink-70)',
                    textAlign: 'right', maxWidth: '200px',
                  }}>
                    {s.desc}
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
        background: 'var(--c-auto)',
        color: 'var(--ink)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid rgba(38,16,20,0.12)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '48px',
        }}>
          WHAT WE HANDLE
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2px',
        }}>
          {SERVICES.map(card => (
            <div key={card.title} style={{
              background: 'rgba(38,16,20,0.05)',
              padding: '32px 28px',
              borderLeft: '3px solid var(--gold)',
            }}>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'clamp(18px,2.2vw,24px)', lineHeight: 1.1,
                color: 'var(--ink)', marginBottom: '10px',
              }}>
                {card.title}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 15, lineHeight: 1.55,
                color: 'var(--ink-70)',
              }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — THE REASON */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '24px',
        }}>
          THE REASON
        </div>

        <div style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(28px,4.5vw,56px)', lineHeight: 1.04,
          letterSpacing: '-0.018em', color: 'var(--ink)', maxWidth: '800px',
        }}>
          Service businesses need reliable vehicles.<br />
          PSG was built to be<br />
          <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>the answer.</em>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: '5px',
          marginTop: '28px', marginBottom: '28px',
        }}>
          <div style={{ width: '80px', height: '2px', background: 'var(--gold)', opacity: 1 }} />
          <div style={{ width: '48px', height: '2px', background: 'var(--gold)', opacity: 0.6 }} />
          <div style={{ width: '24px', height: '2px', background: 'var(--gold)', opacity: 0.3 }} />
        </div>

        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
          fontSize: 'clamp(17px,2vw,21px)', lineHeight: 1.55,
          color: 'var(--ink-70)', maxWidth: '620px',
        }}>
          The ecosystem Dr. Marla built includes construction, food, hospitality, and media companies. Every one of them needs reliable transportation. PSG Motor Group started there and grew into a full automotive service for businesses and individuals across New England.
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
            SALES · FLEET · EXPORT · DETAILING · B2B
          </div>
        </div>
      </section>

      {/* SECTION 5 — CONTACT CTA */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(165deg, #3A3020, #261E14)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          opacity: 0.06, mixBlendMode: 'multiply' as const,
          backgroundImage: GRAIN, zIndex: 1
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(30px,5vw,58px)', lineHeight: 1.02,
            letterSpacing: '-0.018em', color: 'var(--cream)',
          }}>
            Need a vehicle or a fleet?<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s talk.</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.55,
            color: 'rgba(242,233,218,0.72)', marginTop: '20px', maxWidth: '480px',
          }}>
            PSG Motor Group works with businesses and individuals across New England. Whether you need one vehicle or a full fleet, get in touch to start the conversation.
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
              GET IN TOUCH →
            </Link>
          </div>

          <div style={{
            marginTop: '48px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.35)',
          }}>
            PSG MOTOR GROUP · A DR. MARLA COMPANY · NO. 08
          </div>
        </div>
      </section>
    </>
  )
}
