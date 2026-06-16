import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Dr. Marla Sabater | Providence, RI',
  description: 'Schedule a consultation with Dr. Marla Sabater. Tax, accounting, investments, construction, food, media, hospitality, and automotive. Providence, RI.',
  openGraph: {
    title: 'Contact | Dr. Marla Sabater',
    description: 'Schedule a consultation across any division of the Dr. Marla ecosystem.',
    url: 'https://marlasabater.com/contact',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/contact' },
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

const ECOSYSTEM_LINKS = [
  { label: 'Premium Services Enterprise', href: '/ecosystem/enterprise' },
  { label: 'Premium Services Corporation', href: '/ecosystem/corporation' },
  { label: 'Premium Services Group', href: '/ecosystem/group' },
  { label: 'Flavor Movement', href: '/ecosystem/flavor' },
  { label: 'Legacy Production House', href: '/ecosystem/legacy' },
  { label: 'Marvic Hospitality Group', href: '/ecosystem/marvic' },
  { label: 'PSG Motor Group', href: '/ecosystem/psg' },
]

const CREDENTIALS = ['MBA', 'TH.D', 'PUBLISHED AUTHOR', 'LICENSED REAL ESTATE', 'EST. 1996']

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--sans)',
  fontWeight: 600,
  fontSize: 10,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: 'var(--gold-deep)',
}

const valueStyle: React.CSSProperties = {
  fontFamily: 'var(--serif)',
  fontWeight: 400,
  fontSize: 'clamp(16px, 2vw, 19px)',
  color: 'var(--ink)',
  lineHeight: 1.4,
}

export default function Contact() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '52vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(48px,7vh,80px)',
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(201,162,60,0.16), rgba(90,26,36,0) 55%), linear-gradient(165deg, #7C2230, #5A1A24 58%, #4A1620)',
        color: 'var(--cream)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.38)', marginBottom: '32px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>CONTACT</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(44px,8vw,96px)', lineHeight: 0.92,
            letterSpacing: '-0.024em', color: 'var(--cream)', maxWidth: '700px',
          }}>
            Let&apos;s talk about<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>your business.</em>
          </h1>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(17px,2.2vw,22px)', lineHeight: 1.45,
            color: 'rgba(242,233,218,0.72)', maxWidth: '520px', marginTop: '24px',
          }}>
            Schedule a consultation across any division of the Dr. Marla ecosystem. Tax, accounting, investments, construction, food, media, hospitality, or automotive.
          </p>
        </div>
      </section>

      {/* SECTION 2 — CONTACT SPLIT */}
      <section style={{
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div data-cols="2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(48px, 8vw, 96px)',
        }}>
          {/* LEFT — contact details */}
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--gold-deep)', marginBottom: '24px',
            }}>
              GET IN TOUCH
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(26px,4vw,44px)', lineHeight: 1.02,
              letterSpacing: '-0.018em', color: 'var(--ink)', marginBottom: '32px',
            }}>
              Dr. Marla works with business owners at every stage. From the first filing to a full ecosystem strategy.
            </h2>

            <div style={{
              height: '2px', background: 'var(--gold)',
              width: 'clamp(60px,10vw,100px)', marginBottom: '36px',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={labelStyle}>LOCATION</div>
                <div style={valueStyle}>356 Manton Avenue, Suite 1A</div>
                <div style={valueStyle}>Providence, RI 02909</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={labelStyle}>PHONE</div>
                <div style={valueStyle}>
                  <a href="tel:4013213781" style={{ color: 'var(--ink)', textDecoration: 'none' }}>(401) 321-3781</a>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={labelStyle}>EMAIL</div>
                <div style={valueStyle}>
                  <a href="mailto:Marla@msabater.com" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Marla@msabater.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={labelStyle}>INSTAGRAM</div>
                <div style={valueStyle}>
                  <a href="https://instagram.com/drmarlabizpro" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'none' }}>@drmarlabizpro</a>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={labelStyle}>ESTABLISHED</div>
                <div style={valueStyle}>Providence, RI · 1996</div>
              </div>
            </div>

            <div style={{
              marginTop: '36px', marginBottom: '36px',
              height: '1px', background: 'var(--ink-15)',
            }} />

            <div style={{ ...labelStyle, marginBottom: '16px' }}>
              ECOSYSTEM DIVISIONS
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {ECOSYSTEM_LINKS.map(item => (
                <Link key={item.href} href={item.href} style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--ink-70)', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  transition: 'color 0.2s',
                }}>
                  <span aria-hidden style={{
                    display: 'inline-block',
                    width: '4px', height: '4px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    flexShrink: 0,
                  }} />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--gold-deep)', marginBottom: '24px',
            }}>
              SCHEDULE A CONSULTATION
            </div>

            <p style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
              fontSize: 16, color: 'var(--ink-70)', lineHeight: 1.55,
              marginBottom: '32px',
            }}>
              Fill out the form and Dr. Marla&apos;s team will be in touch within one business day.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* SECTION 3 — OFFICE INFO */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
      }}>
        <div data-cols="2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
        }}>
          {/* Left — office */}
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--gold-deep)', marginBottom: '20px',
            }}>
              THE OFFICE
            </div>

            <h3 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(24px,3.5vw,40px)', lineHeight: 1.04,
              letterSpacing: '-0.015em', color: 'var(--ink)', marginBottom: '20px',
            }}>
              356 Manton Avenue<br />
              Suite 1A, Providence RI
            </h3>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 16,
              lineHeight: 1.65, color: 'var(--ink-70)',
            }}>
              The home of the Dr. Marla ecosystem since 1996. Located in Providence, Rhode Island — serving clients across New England and nationwide.
            </p>

            <div style={{ marginTop: '24px' }}>
              <div style={{
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                letterSpacing: '0.26em', textTransform: 'uppercase',
                color: 'var(--gold-deep)', marginBottom: '10px',
              }}>
                OFFICE HOURS
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 15,
                color: 'var(--ink-70)', lineHeight: 1.6,
              }}>
                Monday – Friday: 9:00 AM – 5:00 PM<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </div>
            </div>
          </div>

          {/* Right — founder */}
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--gold-deep)', marginBottom: '20px',
            }}>
              MBA · TH.D · PUBLISHED AUTHOR
            </div>

            <h3 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(24px,3.5vw,40px)', lineHeight: 1.04,
              letterSpacing: '-0.015em', color: 'var(--ink)', marginBottom: '20px',
            }}>
              Dr. Marla<br />
              <em style={{ fontStyle: 'italic', color: 'var(--crimson)' }}>Yanice Sabater.</em>
            </h3>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 16,
              lineHeight: 1.65, color: 'var(--ink-70)',
            }}>
              Founder and CEO of the Dr. Marla ecosystem. Thirty years building businesses, managing investments, and serving communities across New England.
            </p>

            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px',
            }}>
              {CREDENTIALS.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 9,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  border: '1px solid var(--ink-15)',
                  color: 'var(--ink-45)',
                  padding: '6px 12px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — ENDORSEMENT FOOTER */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(165deg, #7C2230, #5A1A24)',
        color: 'var(--cream)',
        padding: 'clamp(48px,7vh,80px) var(--gut)',
      }}>
        <Grain opacity={0.05} />
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '32px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
              fontSize: 'clamp(20px,2.8vw,28px)', letterSpacing: '-0.015em',
              color: 'var(--cream)',
            }}>
              Dr. <em style={{ color: 'var(--gold-soft)' }}>Marla</em>
            </div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'rgba(242,233,218,0.45)', marginTop: '6px',
            }}>
              MBA · TH.D · EST. 1996
            </div>
          </div>

          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.35)', textAlign: 'center',
          }}>
            356 MANTON AVE · PROVIDENCE RI · (401) 321-3781
          </div>

          <Link href="/ecosystem" style={{
            border: '1px solid rgba(242,233,218,0.3)',
            color: 'rgba(242,233,218,0.7)',
            padding: '10px 24px',
            fontFamily: 'var(--sans)',
            fontWeight: 600,
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            VIEW THE ECOSYSTEM →
          </Link>
        </div>
      </section>
    </>
  )
}
