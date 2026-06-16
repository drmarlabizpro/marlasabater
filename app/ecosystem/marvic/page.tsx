import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Marvic Hospitality Group | Hospitality & Entertainment | Dr. Marla Sabater',
  description: 'Event management, venue operations, hospitality consulting, and entertainment experiences across New England. Evenings that connect people and communities. Providence, RI.',
  keywords: ['hospitality management Providence RI', 'event venue Rhode Island', 'entertainment events Providence', 'event management New England', 'Marvic Hospitality Group'],
  openGraph: {
    title: 'Marvic Hospitality Group | Hospitality & Entertainment',
    description: 'Events, venues, and evenings that connect people and communities.',
    url: 'https://marlasabater.com/ecosystem/marvic',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marvic Hospitality Group | Hospitality & Entertainment',
    description: 'Events, venues, and evenings that connect people and communities.',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/marvic' },
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

const FEATURES = [
  { title: 'Event Management', body: 'End-to-end planning and execution for private, corporate, and community events.' },
  { title: 'Venue Operations', body: 'Venue sourcing, setup, coordination, and management for any scale of gathering.' },
  { title: 'Entertainment Experiences', body: 'Curated entertainment and programming that makes an evening unforgettable.' },
]

const SERVICES = [
  { title: 'Event Planning', body: 'Full-service event planning from concept through execution. Every detail managed, nothing left to chance.' },
  { title: 'Venue Sourcing & Operations', body: 'Finding the right space and running it right. Logistics, setup, staffing, and coordination.' },
  { title: 'Hospitality Consulting', body: 'Strategic guidance for hospitality businesses and event operators looking to grow.' },
  { title: 'Community Experiences', body: 'Large-scale community events and entertainment programming that bring neighborhoods together.' },
]

export default function Marvic() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Marvic Hospitality Group', url: 'https://marlasabater.com/ecosystem/marvic' },
      ]} />
      {/* SECTION 1 — HERO (deep teal, brass hairline) */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(64px,10vh,110px)',
        background: 'linear-gradient(158deg, #236460, #193F3C)',
        color: '#EFEDE0',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(239,237,224,0.38)', marginBottom: '36px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/ecosystem" style={{ color: 'inherit', textDecoration: 'none' }}>ECOSYSTEM</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>MARVIC</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-hero)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)', color: '#EFEDE0', maxWidth: '640px', textWrap: 'balance',
          }}>
            Marvic<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Hospitality Group.</em>
          </h1>

          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, var(--gold), transparent)',
            maxWidth: '360px',
            margin: '32px 0',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(239,237,224,0.72)', maxWidth: '560px',
          }}>
            Events, venues, and evenings that connect people and communities.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '40px', left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(239,237,224,0.35)',
        }}>
          A DR. MARLA COMPANY · ESTABLISHED 1996 · NO. 07
        </div>
      </section>

      {/* SECTION 2 — WHAT IT IS */}
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
              color: 'var(--c-hosp)', marginBottom: '20px',
            }}>
              HOSPITALITY & ENTERTAINMENT
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: 'var(--ink)', textWrap: 'balance',
            }}>
              Hospitality is the business of making people feel<br />
              <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>they belong.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '24px', maxWidth: '520px',
            }}>
              Marvic Hospitality Group was built on the belief that every great event, every great venue, every great experience starts with one question: do the people here feel welcome? The answer shapes everything else.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '16px', maxWidth: '520px',
            }}>
              Event management, venue operations, hospitality consulting, and entertainment experiences. From private gatherings to large-scale community events, Marvic brings the structure and the warmth.
            </p>
          </div>

          <div>
            {FEATURES.map((f, i) => {
              const isLast = i === FEATURES.length - 1
              return (
                <div key={f.title} style={{
                  paddingTop: '24px',
                  paddingBottom: '24px',
                  borderBottom: isLast ? 'none' : '1px solid var(--ink-15)',
                }}>
                  <div aria-hidden style={{
                    width: '24px', height: '2px',
                    background: 'var(--c-hosp)', marginBottom: '16px',
                  }} />
                  <div style={{
                    fontFamily: 'var(--serif)', fontWeight: 400,
                    fontSize: 'var(--t-subhead)', lineHeight: 'var(--lh-headline)',
                    color: 'var(--ink)', marginBottom: '8px',
                  }}>
                    {f.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                    fontSize: 15, lineHeight: 1.55,
                    color: 'var(--ink-70)',
                  }}>
                    {f.body}
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
        background: 'linear-gradient(160deg, #236460, #193F3C)',
        color: '#EFEDE0',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '48px',
          }}>
            WHAT WE DO
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2px',
          }}>
            {SERVICES.map(card => (
              <div key={card.title} style={{
                background: 'rgba(239,237,224,0.06)',
                padding: '32px 28px',
                borderLeft: '3px solid var(--gold)',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-subhead)', lineHeight: 'var(--lh-headline)',
                  color: '#EFEDE0', marginBottom: '10px',
                }}>
                  {card.title}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 15, lineHeight: 1.55,
                  color: 'rgba(239,237,224,0.65)',
                }}>
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE BELIEF */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--c-hosp)', marginBottom: '24px',
        }}>
          THE BELIEF
        </div>

        <div style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-headline)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)', maxWidth: '660px', textWrap: 'balance',
        }}>
          An evening well spent is not an accident.<br />
          It is the result of <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>intention.</em>
        </div>

        <div style={{
          marginTop: '28px',
          marginBottom: '28px',
          height: '1px',
          background: 'linear-gradient(to right, var(--gold), transparent)',
          maxWidth: '200px',
        }} />

        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
          fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
          color: 'var(--ink-70)', maxWidth: '620px',
        }}>
          Marvic Hospitality Group brings the same care to every event it manages. The details that guests notice and the details they do not notice but feel — both matter equally.
        </div>
      </section>

      {/* SECTION 5 — CONTACT CTA */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(158deg, #193F3C, #0F2826)',
        color: '#EFEDE0',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            letterSpacing: 'var(--ls-headline)', color: '#EFEDE0',
          }}>
            Planning an event?<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s make it exceptional.</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
            color: 'rgba(239,237,224,0.65)', marginTop: '20px', maxWidth: '480px',
          }}>
            Marvic Hospitality Group works with individuals, businesses, and organizations across New England. Get in touch to discuss your event or partnership.
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
                letterSpacing: '0.01em', color: '#EFEDE0',
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
              PLAN YOUR EVENT →
            </Link>
          </div>

          <div style={{
            marginTop: '48px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(239,237,224,0.32)',
          }}>
            MARVIC HOSPITALITY GROUP · A DR. MARLA COMPANY · NO. 07
          </div>
        </div>
      </section>
    </>
  )
}
