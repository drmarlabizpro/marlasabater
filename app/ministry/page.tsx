import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ministry & Community | Dr. Marla Sabater | Providence, RI',
  description: 'Derribando Murallas Christian Center and Shekinah Praise Agency. Community, faith, worship, and service in Providence, Rhode Island.',
  openGraph: {
    title: 'Ministry & Community | Dr. Marla Sabater',
    description: 'Derribando Murallas Christian Center and Shekinah Praise Agency. Faith and community in Providence, RI.',
    url: 'https://marlasabater.com/ministry',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ministry & Community | Dr. Marla Sabater',
    description: 'Derribando Murallas Christian Center and Shekinah Praise Agency. Faith and community in Providence, RI.',
  },
  alternates: { canonical: 'https://marlasabater.com/ministry' },
}

const DM_INFO = [
  { label: 'FOCUS', value: 'Ministry, worship, outreach, and community support' },
  { label: 'LOCATION', value: 'Providence, Rhode Island' },
  { label: 'LANGUAGE', value: 'English and Spanish' },
  { label: 'TYPE', value: 'Christian Center · Independent' },
]

const SPA_INFO = [
  { label: 'FOCUS', value: 'Worship, praise, and music ministry' },
  { label: 'RELATIONSHIP', value: 'Ministry arm of Derribando Murallas Christian Center' },
  { label: 'LOCATION', value: 'Providence, Rhode Island' },
  { label: 'TYPE', value: 'Worship & Praise Agency' },
]

function InfoBlock({ label, value, isLast }: { label: string; value: string; isLast: boolean }) {
  return (
    <div style={{
      paddingTop: '20px',
      paddingBottom: '20px',
      borderBottom: isLast ? 'none' : '1px solid var(--ink-15)',
    }}>
      <div style={{
        fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
        letterSpacing: '0.26em', textTransform: 'uppercase',
        color: 'var(--ink-45)', marginBottom: '8px',
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 16,
        color: 'var(--ink-70)', lineHeight: 1.5,
      }}>
        {value}
      </div>
    </div>
  )
}

export default function Ministry() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(48px,7vh,80px)',
        background: 'var(--cream)',
        color: 'var(--ink)',
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'var(--ink-45)', marginBottom: '32px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>MINISTRY & COMMUNITY</span>
          </div>

          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--ink-45)', marginBottom: '20px',
          }}>
            FAITH · COMMUNITY · SERVICE
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(40px,7.5vw,96px)', lineHeight: 0.94,
            letterSpacing: '-0.022em', color: 'var(--ink)', maxWidth: '760px',
          }}>
            Ministry &amp;<br />
            <em style={{ fontStyle: 'italic', color: 'var(--ink-70)' }}>Community.</em>
          </h1>

          <div style={{
            height: '1px', background: 'var(--ink-15)',
            width: 'clamp(80px,16vw,180px)',
            margin: '28px 0',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(17px,2.2vw,22px)', lineHeight: 1.5,
            color: 'var(--ink-70)', maxWidth: '520px',
          }}>
            This work is separate from the business ecosystem. It is the part of Dr. Marla&apos;s life that started before any company and continues alongside all of them.
          </p>
        </div>
      </section>

      {/* SECTION 2 — THE SEPARATION NOTE */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
      }}>
        <div style={{ maxWidth: '680px' }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--ink-45)', marginBottom: '20px',
          }}>
            A NOTE
          </div>

          <p style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(17px,2.2vw,22px)', lineHeight: 1.65,
            color: 'var(--ink-70)', maxWidth: '640px',
          }}>
            The business companies in the Dr. Marla ecosystem operate independently of the ministry work. They share a founder and a set of values — service, community, long-term thinking — but they are not the same thing.
          </p>

          <p style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(17px,2.2vw,22px)', lineHeight: 1.65,
            color: 'var(--ink-70)', maxWidth: '640px', marginTop: '20px',
          }}>
            This page is here because the ministry is real, it has been real for decades, and it deserves its own space. Not as a business asset. As a record of commitment.
          </p>
        </div>
      </section>

      {/* SECTION 3 — DERRIBANDO MURALLAS */}
      <section style={{
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
      }}>
        <div data-cols="2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '64px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--ink-45)', marginBottom: '16px',
            }}>
              NO. 01 · CHRISTIAN CENTER
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.02,
              letterSpacing: '-0.018em', color: 'var(--ink)',
            }}>
              Derribando<br />
              Murallas.
            </h2>

            <div style={{
              height: '1px', background: 'var(--ink-15)',
              width: '60px', margin: '24px 0',
            }} />

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.65,
              color: 'var(--ink-70)', maxWidth: '460px',
            }}>
              Derribando Murallas Christian Center is a faith community rooted in Providence, Rhode Island. The name means Breaking Down Walls. The work is ministry, worship, outreach, and community support.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.65,
              color: 'var(--ink-70)', maxWidth: '460px', marginTop: '16px',
            }}>
              For Dr. Marla, this is not separate from who she is professionally. It is foundational to it. The belief that people deserve to be served well — in business and in life — comes from the same place.
            </p>
          </div>

          <div>
            {DM_INFO.map((b, i) => (
              <InfoBlock key={b.label} label={b.label} value={b.value} isLast={i === DM_INFO.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — SHEKINAH PRAISE AGENCY */}
      <section style={{
        background: 'var(--paper)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
      }}>
        <div data-cols="2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '64px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--ink-45)', marginBottom: '16px',
            }}>
              NO. 02 · WORSHIP & PRAISE
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.02,
              letterSpacing: '-0.018em', color: 'var(--ink)',
            }}>
              Shekinah<br />
              Praise Agency.
            </h2>

            <div style={{
              height: '1px', background: 'var(--ink-15)',
              width: '60px', margin: '24px 0',
            }} />

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.65,
              color: 'var(--ink-70)', maxWidth: '460px',
            }}>
              Shekinah Praise Agency is the worship and praise arm of the ministry. Dedicated to worship leadership, praise programming, and the musical and creative dimensions of faith community.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.65,
              color: 'var(--ink-70)', maxWidth: '460px', marginTop: '16px',
            }}>
              Where Derribando Murallas is the community, Shekinah Praise Agency is the expression. Together they form the ministry presence Dr. Marla has built alongside thirty years of business.
            </p>
          </div>

          <div>
            {SPA_INFO.map((b, i) => (
              <InfoBlock key={b.label} label={b.label} value={b.value} isLast={i === SPA_INFO.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — SHARED VALUES */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
      }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--ink-45)', marginBottom: '20px',
          }}>
            WHAT CONNECTS THEM
          </div>

          <div style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(26px,4vw,50px)', lineHeight: 1.06,
            letterSpacing: '-0.016em', color: 'var(--ink)', maxWidth: '680px',
          }}>
            Thirty years of business. Thirty years of ministry. They were never separate. They were always<br />
            <em style={{ fontStyle: 'italic', color: 'var(--ink-70)' }}>the same work.</em>
          </div>

          <div style={{
            height: '1px', background: 'var(--ink-15)',
            width: '60px', margin: '28px 0',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(16px,2vw,19px)', color: 'var(--ink-70)',
            maxWidth: '580px', lineHeight: 1.6,
          }}>
            The belief that communities deserve to be served well. That people deserve honest work, real expertise, and genuine care. That is the foundation of every company in the ecosystem. It is also the foundation of every ministry effort. Same source. Different expressions.
          </p>
        </div>
      </section>

      {/* SECTION 6 — QUIET CLOSE */}
      <section style={{
        background: 'var(--cream)',
        padding: 'clamp(48px,7vh,80px) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '32px',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 15,
            color: 'var(--ink-45)', lineHeight: 1.6, maxWidth: '400px',
          }}>
            For information about Derribando Murallas Christian Center or Shekinah Praise Agency, reach out directly.
          </p>
          <div style={{ marginTop: '16px' }}>
            <a href="mailto:Marla@msabater.com" style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '12px',
              letterSpacing: '0.16em', textTransform: 'uppercase' as const,
              color: 'var(--ink-70)', textDecoration: 'none',
            }}>
              Marla@msabater.com
            </a>
          </div>
        </div>

        <Link href="/" style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '10px',
          letterSpacing: '0.22em', textTransform: 'uppercase' as const,
          color: 'var(--ink-45)', textDecoration: 'none',
          border: '1px solid var(--ink-15)',
          padding: '10px 22px', display: 'inline-block',
        }}>
          ← RETURN TO MAIN SITE
        </Link>
      </section>
    </>
  )
}
