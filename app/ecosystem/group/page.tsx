import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Premium Services Group | Construction & Development | Dr. Marla Sabater',
  description: 'General contracting, commercial buildouts, and development services across New England. Building what communities use. Providence, RI.',
  keywords: ['construction contracting Providence RI', 'commercial buildouts Rhode Island', 'general contractor Providence', 'development services New England', 'Premium Services Group'],
  openGraph: {
    title: 'Premium Services Group | Construction & Development',
    description: 'Building what a community uses.',
    url: 'https://marlasabater.com/ecosystem/group',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Services Group | Construction & Development',
    description: 'Building what a community uses.',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/group' },
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

const SPECS = [
  { num: '01', label: 'GENERAL CONTRACTING', desc: 'Full-scope commercial and residential contracting' },
  { num: '02', label: 'COMMERCIAL BUILDOUTS', desc: 'Interior and exterior commercial build and renovation' },
  { num: '03', label: 'DEVELOPMENT', desc: 'Project coordination and development management' },
  { num: '04', label: 'PROJECT MANAGEMENT', desc: 'End-to-end oversight from planning through completion' },
]

const SERVICES = [
  { title: 'General Contracting', body: 'Commercial and residential construction from the ground up. Licensed, insured, and built to last.' },
  { title: 'Commercial Buildouts', body: 'Interior build-outs and renovations for retail, office, and mixed-use commercial spaces.' },
  { title: 'Residential Projects', body: 'Home renovations and improvements handled with care and craftsmanship.' },
  { title: 'Project Management', body: 'Full oversight from planning through permitting through completion. One point of contact, no surprises.' },
]

export default function Group() {
  return (
    <>
      {/* SECTION 1 — HERO (light ground, blueprint gridlines) */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(64px,10vh,110px)',
        background: '#D8CCB2',
        backgroundImage: 'repeating-linear-gradient(to right, rgba(38,16,20,0.05) 0 1px, transparent 1px 64px)',
        color: 'var(--ink)',
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(38,16,20,0.42)', marginBottom: '36px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/ecosystem" style={{ color: 'inherit', textDecoration: 'none' }}>ECOSYSTEM</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>GROUP</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(44px,8.5vw,112px)', lineHeight: 0.92,
            letterSpacing: '-0.024em', color: 'var(--ink)', maxWidth: '820px',
          }}>
            Premium Services<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>Group.</em>
          </h1>

          <div style={{
            margin: '32px 0',
            height: '2px',
            background: 'var(--gold)',
            width: 'clamp(120px,28vw,380px)',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(19px,2.6vw,28px)', lineHeight: 1.42,
            color: 'rgba(38,16,20,0.72)', maxWidth: '560px',
          }}>
            Building what a community uses.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '40px', left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(38,16,20,0.35)',
        }}>
          A DR. MARLA COMPANY · ESTABLISHED 1996 · NO. 04
        </div>
      </section>

      {/* SECTION 2 — WHAT IT BUILDS */}
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
              CONSTRUCTION & DEVELOPMENT
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(32px,5vw,62px)', lineHeight: 1,
              letterSpacing: '-0.018em', color: 'var(--ink)',
            }}>
              Structural work. Real projects.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Real communities.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.65,
              color: 'var(--ink-70)', marginTop: '24px', maxWidth: '520px',
            }}>
              Premium Services Group handles construction and development projects across New England. Commercial buildouts, residential work, project management, and development coordination — built with the kind of reliability her community needed and rarely found.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.65,
              color: 'var(--ink-70)', marginTop: '16px', maxWidth: '520px',
            }}>
              She built this company because she saw what happened when communities did not have honest, capable contractors they could trust. That gap was the reason.
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
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  borderBottom: isLast ? 'none' : '1px solid var(--ink-15)',
                  gap: '16px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <span style={{
                      fontFamily: 'var(--sans)', fontWeight: 700,
                      fontSize: 'clamp(28px,4vw,42px)', lineHeight: 1,
                      color: 'var(--gold-deep)',
                    }}>
                      {s.num}
                    </span>
                    <span style={{
                      fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: 'var(--ink-45)', marginLeft: '10px',
                    }}>
                      {s.label}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                    fontSize: 15, color: 'var(--ink-70)',
                    textAlign: 'right', maxWidth: '220px',
                  }}>
                    {s.desc}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICES (dark slate w/ gridlines) */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: '#3C4753',
        backgroundImage: 'repeating-linear-gradient(to right, rgba(234,231,221,0.05) 0 1px, transparent 1px 64px)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.05} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '48px',
          }}>
            SERVICES
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2px',
          }}>
            {SERVICES.map(card => (
              <div key={card.title} style={{
                background: 'rgba(242,233,218,0.06)',
                padding: '32px 28px',
                borderLeft: '3px solid var(--gold)',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(18px,2.2vw,24px)', lineHeight: 1.1,
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

      {/* SECTION 4 — THE VISION */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '24px',
        }}>
          THE VISION
        </div>

        <div style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(28px,4.5vw,56px)', lineHeight: 1.04,
          letterSpacing: '-0.018em', color: 'var(--ink)', maxWidth: '800px',
        }}>
          Building what a community uses is not just construction.<br />
          It is <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>investment</em> in what comes next.
        </div>

        <div style={{
          marginTop: '28px',
          marginBottom: '28px',
          height: '2px', background: 'var(--gold)',
          width: 'clamp(80px,14vw,160px)',
        }} />

        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
          fontSize: 'clamp(17px,2vw,21px)', lineHeight: 1.55,
          color: 'var(--ink-70)', maxWidth: '620px',
        }}>
          Every project Premium Services Group takes on is a commitment to the community it serves. Reliable work, honest pricing, and the kind of quality that holds up over time.
        </div>
      </section>

      {/* SECTION 5 — CONTACT CTA */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(165deg, #3C4753, #2A3540)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.05} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(30px,5vw,58px)', lineHeight: 1.02,
            letterSpacing: '-0.018em', color: 'var(--cream)',
          }}>
            Have a project in mind?<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s build it.</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.55,
            color: 'rgba(242,233,218,0.75)', marginTop: '20px', maxWidth: '480px',
          }}>
            Premium Services Group takes on commercial and residential projects across New England. Get in touch to discuss your project.
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
              DISCUSS YOUR PROJECT →
            </Link>
          </div>

          <div style={{
            marginTop: '48px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.38)',
          }}>
            PREMIUM SERVICES GROUP · A DR. MARLA COMPANY · NO. 04
          </div>
        </div>
      </section>
    </>
  )
}
