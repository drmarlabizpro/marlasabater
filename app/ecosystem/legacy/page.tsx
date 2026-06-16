import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legacy Production House | Media & Talent Development | Dr. Marla Sabater',
  description: 'Artist development, music production, video production, and talent management. A way up for talent without access. Providence, RI.',
  keywords: ['music production Providence RI', 'talent development Rhode Island', 'artist development New England', 'Legacy Production House', 'music label Providence'],
  openGraph: {
    title: 'Legacy Production House | Media & Talent Development',
    description: 'A way up for talent without access. Developing artists into platforms that last.',
    url: 'https://marlasabater.com/ecosystem/legacy',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy Production House | Media & Talent Development',
    description: 'A way up for talent without access. Developing artists into platforms that last.',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/legacy' },
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

const SERVICES = [
  { title: 'Artist Development', body: 'Building the artist beyond the music. Brand, presence, strategy, and sustainable platform.' },
  { title: 'Music Production', body: 'Production, recording, and arrangement. From concept to finished record.' },
  { title: 'Video Production', body: 'Visual content that matches the quality of the music. Directed and produced in-house.' },
  { title: 'Talent Management', body: 'Representation and career guidance for artists ready to take the next step professionally.' },
]

export default function Legacy() {
  return (
    <>
      {/* SECTION 1 — HERO (centered, spotlight aubergine) */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(64px,10vh,110px)',
        background: 'radial-gradient(120% 92% at 50% 0%, #5A2F5E, #3A2140 48%, #281530)',
        color: '#EFE6DA',
        textAlign: 'center',
      }}>
        <Grain opacity={0.06} />
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(239,230,218,0.38)', marginBottom: '36px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/ecosystem" style={{ color: 'inherit', textDecoration: 'none' }}>ECOSYSTEM</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>LEGACY</span>
          </div>

          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '24px', textAlign: 'center',
          }}>
            ARTIST DEVELOPMENT · MUSIC · PRODUCTION
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(44px,8.5vw,112px)', lineHeight: 0.92,
            letterSpacing: '-0.024em', color: '#EFE6DA',
            maxWidth: '820px', textAlign: 'center',
          }}>
            Legacy<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Production House.</em>
          </h1>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(19px,2.6vw,28px)', lineHeight: 1.42,
            color: 'rgba(239,230,218,0.72)', maxWidth: '560px',
            textAlign: 'center', marginTop: '28px',
          }}>
            A way up for talent without access. Developing artists into platforms that last.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '40px', left: 0, right: 0,
          textAlign: 'center', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(239,230,218,0.35)',
        }}>
          A DR. MARLA COMPANY · ESTABLISHED 1996 · NO. 06
        </div>
      </section>

      {/* SECTION 2 — WHAT IT IS */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: '#281530',
        color: '#EFE6DA',
        padding: 'var(--section-pad) var(--gut)',
        textAlign: 'center',
      }}>
        <Grain opacity={0.05} />
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: '760px', margin: '0 auto',
        }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '20px',
          }}>
            MEDIA & TALENT DEVELOPMENT
          </div>

          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(32px,5vw,62px)', lineHeight: 1,
            letterSpacing: '-0.018em', color: '#EFE6DA',
            textAlign: 'center',
          }}>
            Developing artists into<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>platforms that last.</em>
          </h2>

          <div style={{
            height: '2px', background: 'var(--gold)',
            width: 'clamp(80px,14vw,160px)',
            margin: '28px auto',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.65,
            color: 'rgba(239,230,218,0.72)',
            maxWidth: '620px', margin: '0 auto', textAlign: 'center',
          }}>
            Legacy Production House traces back to YJ Sounds, a production label with real roots in the music industry. Dr. Marla built it because talent without infrastructure goes nowhere. This company is the infrastructure.
          </p>

          <p style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.65,
            color: 'rgba(239,230,218,0.72)',
            maxWidth: '620px', margin: '24px auto 0', textAlign: 'center',
          }}>
            Artist development, music production, video production, distribution, creative branding, and content creation. A full platform for artists who are serious about building something that outlasts a single release.
          </p>
        </div>
      </section>

      {/* SECTION 3 — SERVICES */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(120% 80% at 50% 0%, #5A2F5E, #3A2140 56%, #281530)',
        color: '#EFE6DA',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '48px', textAlign: 'center',
          }}>
            SERVICES
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2px',
          }}>
            {SERVICES.map(card => (
              <div key={card.title} style={{
                background: 'rgba(239,230,218,0.06)',
                padding: '32px 28px',
                borderTop: '1px solid rgba(201,162,60,0.3)',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(18px,2.2vw,24px)', lineHeight: 1.1,
                  color: '#EFE6DA', marginBottom: '10px',
                }}>
                  {card.title}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 15, lineHeight: 1.55,
                  color: 'rgba(239,230,218,0.65)',
                }}>
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE ORIGIN */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: '#3A2140',
        color: '#EFE6DA',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.05} />
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: '760px', margin: '0 auto', textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '24px',
          }}>
            THE ORIGIN
          </div>

          <div style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(28px,4.5vw,56px)', lineHeight: 1.04,
            letterSpacing: '-0.018em', color: '#EFE6DA',
            maxWidth: '720px', margin: '0 auto',
          }}>
            Talent in this community had<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>no infrastructure.</em><br />
            Legacy was built to change that.
          </div>

          <div style={{
            height: '2px', background: 'var(--gold)',
            width: 'clamp(80px,14vw,160px)',
            margin: '28px auto',
          }} />

          <div style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(17px,2vw,21px)', lineHeight: 1.55,
            color: 'rgba(239,230,218,0.65)',
            maxWidth: '580px', margin: '28px auto 0', textAlign: 'center',
          }}>
            YJ Sounds was the beginning. Legacy Production House is what it became. A documented, long-running commitment to giving artists in Providence and across New England the professional platform they deserve.
          </div>

          <div style={{
            marginTop: '32px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
          }}>
            <div style={{
              width: '3px', height: '32px',
              background: 'var(--gold)', flexShrink: 0,
            }} />
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--gold-soft)',
            }}>
              DISTRIBUTION · CREATIVE BRANDING · CONTENT CREATION
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CONTACT CTA */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(120% 80% at 50% 0%, #5A2F5E, #281530 60%)',
        color: '#EFE6DA',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center',
          maxWidth: '660px', margin: '0 auto',
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(30px,5vw,58px)', lineHeight: 1.02,
            letterSpacing: '-0.018em', color: '#EFE6DA',
            textAlign: 'center',
          }}>
            Ready to build something<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>that lasts?</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.55,
            color: 'rgba(239,230,218,0.65)',
            marginTop: '20px', maxWidth: '480px', textAlign: 'center',
          }}>
            Legacy Production House works with artists and creatives who are serious about building a professional platform. Get in touch to start the conversation.
          </p>

          <div style={{
            display: 'flex', flexDirection: 'column', gap: '12px',
            marginTop: '32px', alignItems: 'center',
          }}>
            {[
              '356 Manton Avenue, Suite 1A, Providence, RI 02909',
              '(401) 321-3781',
              'Marla@msabater.com',
            ].map(item => (
              <div key={item} style={{
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 14,
                letterSpacing: '0.01em', color: '#EFE6DA',
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
              START THE CONVERSATION →
            </Link>
          </div>

          <div style={{
            marginTop: '48px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(239,230,218,0.32)',
          }}>
            LEGACY PRODUCTION HOUSE · A DR. MARLA COMPANY · NO. 06
          </div>
        </div>
      </section>
    </>
  )
}
