import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Flavor Movement | Food & Hospitality | Dr. Marla Sabater',
  description: 'Restaurants, catering, food products, and culinary experiences. Flavor Movement brings people together around the table. Providence, RI.',
  keywords: ['restaurant catering Providence RI', 'food hospitality Rhode Island', 'catering events Providence', 'culinary experiences New England', 'Flavor Movement'],
  openGraph: {
    title: 'Flavor Movement | Food & Hospitality',
    description: 'Restaurants, catering, and products with soul. Experiences that bring people together.',
    url: 'https://marlasabater.com/ecosystem/flavor',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flavor Movement | Food & Hospitality',
    description: 'Restaurants, catering, and products with soul. Experiences that bring people together.',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem/flavor' },
}

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function GrainOverlay() {
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      opacity: 0.06, mixBlendMode: 'multiply' as const,
      backgroundImage: GRAIN, zIndex: 1
    }} />
  )
}

const FEATURES = [
  { title: 'Dining & Restaurants', body: 'Restaurant concepts built around the experience of the meal, not just the menu.' },
  { title: 'Catering & Events', body: 'Full-service catering for private events, corporate functions, and community gatherings.' },
  { title: 'Food Products', body: 'Sauces, seasonings, and packaged products. The Flavor Movement pantry, available beyond the table.' },
]

const OFFERINGS = [
  { title: 'Dining Concepts', body: 'Restaurant and café concepts with atmosphere, story, and food that earns regulars.' },
  { title: 'Catering', body: 'Event catering from intimate dinners to large-scale community gatherings.' },
  { title: 'Food Trailers & Mobile', body: 'Mobile food concepts built for events, markets, and high-traffic locations.' },
  { title: 'Sauces & Seasonings', body: 'Packaged products that bring the Flavor Movement kitchen into homes and restaurants.' },
]

export default function Flavor() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Flavor Movement', url: 'https://marlasabater.com/ecosystem/flavor' },
      ]} />
      {/* SECTION 1 — HERO (light, cream-2 ground) */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(64px,10vh,110px)',
        background: 'var(--cream-2)',
        color: '#3A1418',
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(58,20,24,0.38)', marginBottom: '36px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/ecosystem" style={{ color: 'inherit', textDecoration: 'none' }}>ECOSYSTEM</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>FLAVOR</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-hero)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)', maxWidth: '640px', textWrap: 'balance',
          }}>
            <em style={{ fontStyle: 'italic', color: '#8A2330' }}>Flavor</em>
            {' '}
            <span style={{ color: '#3A1418' }}>Movement.</span>
          </h1>

          <div style={{
            margin: '32px 0',
            height: '2px',
            background: '#8A2330',
            width: 'clamp(120px,28vw,380px)',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(58,20,24,0.72)', maxWidth: '580px',
          }}>
            Restaurants, catering, and products with soul. Experiences that bring people together.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '40px', left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(58,20,24,0.32)',
        }}>
          A DR. MARLA COMPANY · ESTABLISHED 1996 · NO. 05
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
              color: '#8A2330', marginBottom: '20px',
            }}>
              FOOD & HOSPITALITY
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: '#3A1418', textWrap: 'balance',
            }}>
              Food is how<br />
              <em style={{ fontStyle: 'italic', color: '#8A2330' }}>community gathers.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'rgba(58,20,24,0.7)', marginTop: '24px', maxWidth: '520px',
            }}>
              Flavor Movement was built on a simple belief: the table is where relationships are made. Restaurants, catering, food products, sauces, seasonings, and mobile food concepts — each one an experience designed to bring people together.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'rgba(58,20,24,0.7)', marginTop: '16px', maxWidth: '520px',
            }}>
              From a dinner to an event to a product on a shelf, Flavor Movement creates the kind of food experiences that people remember and come back to.
            </p>
          </div>

          <div>
            {FEATURES.map((f, i) => {
              const isLast = i === FEATURES.length - 1
              return (
                <div key={f.title} style={{
                  paddingTop: '24px',
                  paddingBottom: '24px',
                  borderBottom: isLast ? 'none' : '1px solid rgba(58,20,24,0.12)',
                }}>
                  <div aria-hidden style={{
                    width: '24px', height: '2px',
                    background: '#8A2330', marginBottom: '16px',
                  }} />
                  <div style={{
                    fontFamily: 'var(--serif)', fontWeight: 400,
                    fontSize: 'var(--t-subhead)', lineHeight: 'var(--lh-headline)',
                    color: '#3A1418', marginBottom: '8px',
                  }}>
                    {f.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                    fontSize: 15, lineHeight: 1.55,
                    color: 'rgba(58,20,24,0.65)',
                  }}>
                    {f.body}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT IT OFFERS (dark wine ground) */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: '#8A2330',
        color: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <GrainOverlay />
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
            {OFFERINGS.map(card => (
              <div key={card.title} style={{
                background: 'rgba(242,233,218,0.07)',
                padding: '32px 28px',
                borderLeft: '3px solid var(--gold)',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-subhead)', lineHeight: 'var(--lh-headline)',
                  color: 'var(--cream-2)', marginBottom: '10px',
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

      {/* SECTION 4 — THE BELIEF */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: '#8A2330', marginBottom: '24px',
        }}>
          THE BELIEF
        </div>

        <div style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-headline)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: '#3A1418', maxWidth: '660px', textWrap: 'balance',
        }}>
          The table is where relationships are built.<br />
          <em style={{ fontStyle: 'italic', color: '#8A2330' }}>Food is the reason people stay.</em>
        </div>

        <div style={{
          marginTop: '28px',
          marginBottom: '28px',
          height: '2px', background: '#8A2330',
          width: 'clamp(80px,14vw,160px)',
        }} />

        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
          fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
          color: 'rgba(58,20,24,0.7)', maxWidth: '620px',
        }}>
          Flavor Movement was not built to compete in the food industry. It was built to serve the communities Dr. Marla has always been part of. Every concept, every product, every event is grounded in that belief.
        </div>
      </section>

      {/* SECTION 5 — CONTACT CTA */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--cream)',
        color: '#3A1418',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid rgba(58,20,24,0.12)',
      }}>
        <div style={{ maxWidth: '700px' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            letterSpacing: 'var(--ls-headline)', color: '#3A1418', textWrap: 'balance',
          }}>
            Interested in working together?<br />
            <em style={{ fontStyle: 'italic', color: '#8A2330' }}>Get in touch.</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
            color: 'rgba(58,20,24,0.65)', marginTop: '20px', maxWidth: '480px',
          }}>
            Whether you are planning an event, looking for catering, or want to carry Flavor Movement products, we want to hear from you.
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
                letterSpacing: '0.01em', color: '#3A1418',
              }}>
                {item}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link href="/contact" style={{
              border: '1px solid #8A2330',
              color: '#8A2330',
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
            color: 'rgba(58,20,24,0.32)',
          }}>
            FLAVOR MOVEMENT · A DR. MARLA COMPANY · NO. 05
          </div>
        </div>
      </section>
    </>
  )
}
