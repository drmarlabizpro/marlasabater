import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Services Enterprise | Investments & Acquisitions | Dr. Marla Sabater',
  description: 'Premium Services Enterprise handles real estate holdings, business acquisitions, and strategic investments. The flagship company of the Dr. Marla ecosystem. Providence, RI.',
  keywords: ['Premium Services Enterprise', 'investment acquisitions Providence RI', 'real estate holdings Rhode Island', 'business acquisitions New England', 'Dr Marla Sabater flagship'],
  openGraph: {
    title: 'Premium Services Enterprise | Investments & Acquisitions',
    description: 'Property, holdings, and the long view. The flagship company of the Dr. Marla ecosystem.',
    url: 'https://marlasabater.com/ecosystem/enterprise',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/enterprise' },
}

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function Grain({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      opacity, mixBlendMode: 'multiply' as const, backgroundImage: GRAIN,
      zIndex: 1
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
  { title: 'Real Estate Holdings', body: 'Acquisition and management of commercial and residential property across Rhode Island and nationwide.' },
  { title: 'Business Acquisitions', body: 'Identifying and acquiring businesses with strong fundamentals and long-term growth potential.' },
  { title: 'Strategic Investments', body: "Equity positions in businesses aligned with the ecosystem's vision and values." },
  { title: 'Asset Management', body: 'Active management and protection of acquired assets for sustained generational value.' },
]

export default function Enterprise() {
  return (
    <>
      <style>{`
        @media (min-width: 880px) {
          .ent-what-grid { grid-template-columns: 1.2fr 0.8fr !important; }
          .ent-focus-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

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
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.42)', marginBottom: 36,
          }}>
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</a>
            <span style={{ opacity: 0.4 }}>/</span>
            <a href="/ecosystem" style={{ color: 'inherit', textDecoration: 'none' }}>ECOSYSTEM</a>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>ENTERPRISE</span>
          </div>

          <div style={{
            display: 'inline-block',
            marginBottom: 20,
            fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 9,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            background: 'var(--gold-soft)', color: '#651E2A',
            padding: '5px 14px',
          }}>
            THE FLAGSHIP
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(52px,10vw,132px)', lineHeight: 0.9,
            letterSpacing: '-0.025em', color: 'var(--cream)', maxWidth: 900,
          }}>
            Premium Services<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Enterprise.</em>
          </h1>

          <div style={{
            margin: '36px 0',
            borderTop: '2px solid var(--gold)',
            borderBottom: '1px solid var(--gold)',
            paddingTop: 5,
            width: 'clamp(140px,32vw,420px)',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(20px,2.8vw,30px)', lineHeight: 1.38,
            color: 'rgba(242,233,218,0.85)', maxWidth: 560,
          }}>
            Property, holdings, and the long view. The company that owns and builds for the decades ahead.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: 40, left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(242,233,218,0.38)',
        }}>
          A DR. MARLA COMPANY · ESTABLISHED 1996 · NO. 02
        </div>
      </section>

      {/* SECTION 2 — WHAT IT IS */}
      <section style={{
        background: 'var(--cream)',
        padding: 'clamp(72px,11vh,120px) var(--gut)',
      }}>
        <div className="ent-what-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr', gap: 72,
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--gold-deep)', marginBottom: 20,
            }}>
              INVESTMENTS & ACQUISITIONS
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(32px,5vw,62px)', lineHeight: 1,
              letterSpacing: '-0.015em', color: 'var(--ink)',
            }}>
              Built to hold.<br />
              Built to <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>last.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.65,
              color: 'var(--ink-70)', marginTop: 24, maxWidth: 520,
            }}>
              Premium Services Enterprise acquires, holds, and grows. Real estate, business investments, and strategic acquisitions selected for long-term value. Not built to flip. Built to become part of the foundation.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.65,
              color: 'var(--ink-70)', marginTop: 16, maxWidth: 520,
            }}>
              Every acquisition is evaluated against one question: will this be worth more in twenty years? If the answer is yes and the fundamentals are sound, Premium Services Enterprise is the answer.
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
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
                    color: 'var(--gold-deep)', marginTop: 8,
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
            color: 'var(--gold-soft)', marginBottom: 48,
          }}>
            FOCUS AREAS
          </div>

          <div className="ent-focus-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr', gap: 2,
          }}>
            {FOCUS_CARDS.map(card => (
              <div key={card.title} style={{
                background: 'rgba(242,233,218,0.06)',
                padding: '32px 28px',
                borderLeft: '3px solid var(--gold)',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(18px,2.4vw,26px)', lineHeight: 1.1,
                  color: 'var(--cream)',
                }}>
                  {card.title}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 15, lineHeight: 1.55,
                  color: 'rgba(242,233,218,0.7)', marginTop: 12,
                }}>
                  {card.body}
                </div>
              </div>
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
          color: 'var(--gold-deep)', marginBottom: 24,
        }}>
          THE APPROACH
        </div>

        <div style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(26px,4vw,52px)', lineHeight: 1.06,
          letterSpacing: '-0.015em', color: 'var(--ink)', maxWidth: 800,
        }}>
          “We do not build to sell. We build to hold, to grow, and to leave something <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>stronger</em> than we found it.”
        </div>

        <div style={{
          margin: '28px 0',
          height: 2, background: 'var(--gold)',
          width: 'clamp(80px,14vw,160px)',
        }} />

        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
          fontSize: 'clamp(17px,2vw,21px)', lineHeight: 1.55,
          color: 'var(--ink-70)', maxWidth: 620,
        }}>
          Premium Services Enterprise was built as the long-term holding arm of the Dr. Marla ecosystem. Real estate, business acquisitions, and strategic positions are selected not for short-term return but for the value they will carry into the next decade and beyond.
        </div>

        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginTop: 32,
        }}>
          LICENSED REAL ESTATE · RHODE ISLAND
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
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 700 }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(30px,5vw,58px)', lineHeight: 1.02,
            letterSpacing: '-0.018em', color: 'var(--cream)',
          }}>
            Interested in a conversation?<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Get in touch.</em>
          </h2>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: 14, marginTop: 36,
          }}>
            {[
              '356 Manton Avenue, Suite 1A, Providence, RI 02909',
              '(401) 321-3781',
              'Marla@msabater.com',
            ].map(item => (
              <div key={item} style={{
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 13,
                letterSpacing: '0.01em', color: 'var(--cream)',
              }}>
                {item}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <a href="/contact" style={{
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
            </a>
          </div>

          <div style={{
            marginTop: 48,
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
