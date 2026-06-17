'use client'

import { useState, useEffect, useRef } from 'react'
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

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const FAQS = [
  {
    q: 'What types of real estate does Premium Services Enterprise acquire?',
    a: 'Premium Services Enterprise focuses on commercial and residential properties across New England selected for long-term value rather than short-term yield. This includes commercial properties such as office, retail, and mixed-use buildings, as well as residential properties with strong fundamentals and appreciation potential. Every acquisition is evaluated against a single question: will this be worth significantly more in twenty years?',
    slug: 'types-of-real-estate-acquired',
  },
  {
    q: 'What is the difference between a real estate investor and a real estate holder?',
    a: 'An investor buys and sells — the model depends on transaction volume and timing. A holder acquires and manages for the long term. Premium Services Enterprise is built on the holding model. Properties are selected for durability, location quality, and long-term appreciation. The goal is not to flip. The goal is to own assets that compound in value over decades and generate stable returns throughout the holding period.',
    slug: 'investor-vs-holder-real-estate',
  },
  {
    q: 'Does Premium Services Enterprise work with outside investors or partners?',
    a: 'Selectively. Premium Services Enterprise evaluates partnership and co-investment opportunities on a case-by-case basis. The criteria are alignment on holding strategy, time horizon, and values. Short-term or speculative arrangements are not a fit. Long-term partnerships with investors who share the same philosophy around building lasting value are considered.',
    slug: 'real-estate-partnerships-investors',
  },
  {
    q: 'How does real estate fit into the broader Dr. Marla ecosystem?',
    a: 'Real estate holdings through Premium Services Enterprise serve two functions in the ecosystem. First, they provide stable long-term assets that anchor the financial foundation of the whole operation. Second, they create infrastructure opportunities — properties that house or support the other companies. Construction through Premium Services Group, commercial operations through Flavor Movement and Marvic Hospitality, and workspace for Premium Services Corporation all benefit from having a real estate arm within the ecosystem.',
    slug: 'real-estate-ecosystem-role',
  },
  {
    q: 'Is Premium Services Enterprise a licensed real estate company?',
    a: 'Dr. Marla Sabater holds a real estate license and brings that credential to the acquisition and management work of Premium Services Enterprise. This means transactions are handled with professional oversight and full understanding of the legal, regulatory, and market dimensions of each property decision.',
    slug: 'licensed-real-estate-enterprise',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const STAT_BLOCKS = [
  { num: '1996', label: 'OPERATING SINCE' },
  { num: 'RI', label: 'HEADQUARTERED' },
  { num: 'Long', label: 'HOLDING HORIZON' },
  { num: 'Licensed', label: 'REAL ESTATE' },
]

const FOCUS_CARDS = [
  { title: 'Commercial Properties', body: 'Office, retail, and mixed-use commercial buildings with strong tenant potential and long-term location value.' },
  { title: 'Residential Holdings', body: 'Residential properties selected for appreciation trajectory, neighborhood trajectory, and rental yield during the holding period.' },
  { title: 'Mixed-Use Developments', body: 'Properties that combine commercial and residential uses, creating diversified income streams within a single acquisition.' },
  { title: 'Strategic Locations', body: 'Properties in corridors showing long-term growth indicators — infrastructure investment, demographic trends, and development activity.' },
]

const STEPS = [
  { num: '01', title: 'Sourcing', body: 'Properties are sourced through direct relationships, licensed agent access, and market monitoring. We are not reactive to listings — we are proactive about locations and asset types we want to own.' },
  { num: '02', title: 'Underwriting', body: 'Every prospective acquisition is underwritten against our twenty-year holding criteria. Location trajectory, structural quality, income potential, and carrying costs are all modeled.' },
  { num: '03', title: 'Due Diligence', body: 'Full inspection, title review, environmental assessment where applicable, and legal review. No shortcuts. A property with a hidden problem is not a bargain.' },
  { num: '04', title: 'Acquisition', body: 'Once underwriting and due diligence are complete, we move decisively. Delay in acquisition is often the most expensive mistake.' },
  { num: '05', title: 'Active Management', body: 'Acquired properties are actively managed for performance, maintenance, and value preservation. Long-term holding requires ongoing attention, not passive neglect.' },
]

const RELATED = [
  { href: '/ecosystem/enterprise/acquisitions', title: 'Business Acquisitions', body: 'Identifying and acquiring businesses with strong fundamentals.' },
  { href: '/ecosystem/enterprise/investments', title: 'Strategic Investments', body: "Equity positions aligned with the ecosystem's long-term vision." },
  { href: '/ecosystem/enterprise/contact', title: 'Get In Touch', body: 'Discuss a property, partnership, or acquisition opportunity.' },
]

export default function RealEstatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [stepsVisible, setStepsVisible] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCardsVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const el = stepsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStepsVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const heroReveal = useReveal()
  const whatReveal = useReveal()
  const faqReveal = useReveal()

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Enterprise', url: 'https://marlasabater.com/ecosystem/enterprise' },
        { name: 'Real Estate Holdings', url: 'https://marlasabater.com/ecosystem/enterprise/real-estate' },
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1 — HERO */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        minHeight: '72vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(48px,7vh,80px)',
        background: 'radial-gradient(100% 84% at 28% 28%, rgba(201,162,60,0.22), rgba(110,31,42,0) 56%), linear-gradient(160deg, #8A2738, #651E2A 58%, #531824)',
        color: 'var(--cream)',
      }}>
        <Grain opacity={0.06} />
        <div ref={heroReveal.ref} style={{
          position: 'relative', zIndex: 2,
          opacity: heroReveal.visible ? 1 : 0,
          transform: heroReveal.visible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.38)', marginBottom: '28px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/ecosystem/enterprise" style={{ color: 'inherit', textDecoration: 'none' }}>ENTERPRISE</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>REAL ESTATE</span>
          </div>

          <div style={{
            display: 'inline-block',
            marginBottom: '16px',
            fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 9,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            background: 'var(--gold-soft)', color: '#651E2A',
            padding: '5px 14px',
          }}>
            THE FLAGSHIP
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-hero)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)', color: 'var(--cream)',
            maxWidth: '640px', textWrap: 'balance',
          }}>
            Property acquired for the <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>long hold.</em>
          </h1>

          <div style={{
            height: '2px', background: 'var(--gold)',
            width: 'clamp(80px,16vw,160px)',
            margin: '24px 0',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.82)', maxWidth: '520px',
          }}>
            Commercial and residential real estate across New England. Selected for durability, location, and value that compounds over decades.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '32px', left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(242,233,218,0.35)',
        }}>
          PREMIUM SERVICES ENTERPRISE · NO. 02
        </div>
      </section>

      {/* SECTION 2 — THE PHILOSOPHY */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: 'var(--gut)', right: 'var(--gut)',
          fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
          fontSize: 'clamp(120px,18vw,220px)', lineHeight: 1,
          color: 'rgba(38,16,20,0.04)',
          userSelect: 'none', pointerEvents: 'none', zIndex: 0,
        }}>
          Hold.
        </div>

        <div ref={whatReveal.ref} data-cols="2" style={{
          position: 'relative', zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '64px',
          opacity: whatReveal.visible ? 1 : 0,
          transform: whatReveal.visible ? 'none' : 'translateY(18px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--gold-deep)', marginBottom: '16px',
            }}>
              THE HOLDING PHILOSOPHY
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
              textWrap: 'balance',
            }}>
              The best real estate decision is usually the one that involves <em style={{ fontStyle: 'italic', color: '#7C2230' }}>not selling.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '20px', maxWidth: '480px',
            }}>
              Premium Services Enterprise acquires real estate with a twenty-year mindset. The selection criteria are simple: strong fundamentals, quality location, and a clear path to appreciation over time. Properties that do not meet this standard are not acquired regardless of short-term opportunity.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '14px', maxWidth: '480px',
            }}>
              This approach requires patience and discipline. It also produces results that short-term strategies cannot. The portfolio grows in value, generates stable returns, and serves as the financial anchor for the broader ecosystem.
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
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
                    fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1,
                    color: 'var(--ink)',
                  }}>
                    {b.num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'var(--gold-deep)', marginTop: '8px',
                  }}>
                    {b.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROPERTY FOCUS */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '16px',
        }}>
          PROPERTY FOCUS
        </div>

        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
          maxWidth: '560px', marginBottom: '48px', textWrap: 'balance',
        }}>
          What we look for in every <em style={{ fontStyle: 'italic', color: '#7C2230' }}>acquisition.</em>
        </h2>

        <div ref={cardsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
        }}>
          {FOCUS_CARDS.map((card, i) => (
            <div key={card.title} style={{
              background: 'var(--paper)',
              padding: '32px 24px',
              borderTop: '2px solid var(--gold)',
              position: 'relative',
              overflow: 'hidden',
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? 'none' : 'translateY(24px)',
              transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms, box-shadow 0.2s ease`,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = '0 8px 32px rgba(38,16,20,0.08)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'none'
              el.style.boxShadow = 'none'
            }}>
              <div aria-hidden style={{
                position: 'absolute', bottom: '-8px', right: '12px',
                fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
                fontSize: '80px', lineHeight: 1,
                color: 'rgba(38,16,20,0.04)',
                userSelect: 'none', pointerEvents: 'none',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                lineHeight: 'var(--lh-headline)', marginBottom: '8px',
                position: 'relative', zIndex: 1,
              }}>
                {card.title}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 'var(--t-body)', color: 'var(--ink-70)',
                lineHeight: 'var(--lh-body)',
                position: 'relative', zIndex: 1,
              }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — HOW WE EVALUATE */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(100% 84% at 28% 28%, rgba(201,162,60,0.18), rgba(110,31,42,0) 56%), linear-gradient(160deg, #8A2738, #651E2A 58%, #531824)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '40px',
          }}>
            THE ACQUISITION PROCESS
          </div>

          <div ref={stepsRef} style={{
            position: 'relative',
            display: 'flex', flexDirection: 'column', gap: 0,
            maxWidth: '680px',
          }}>
            <div aria-hidden style={{
              position: 'absolute',
              left: '19px', top: 0, width: '2px',
              height: stepsVisible ? '100%' : '0%',
              background: 'linear-gradient(to bottom, var(--gold), rgba(201,162,60,0.15))',
              transition: 'height 1.2s ease 0.3s',
              zIndex: 0,
            }} />

            {STEPS.map(step => (
              <div key={step.num} style={{
                display: 'flex', gap: '28px',
                paddingBottom: '36px',
                position: 'relative', zIndex: 1,
              }}>
                <div style={{
                  width: '40px', height: '40px', flexShrink: 0,
                  borderRadius: '50%',
                  border: '2px solid var(--gold)',
                  background: 'radial-gradient(100% 84% at 28% 28%, rgba(201,162,60,0.15), rgba(110,31,42,0) 56%), linear-gradient(160deg, #8A2738, #651E2A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 11,
                    color: 'var(--gold-soft)',
                  }}>
                    {step.num}
                  </span>
                </div>

                <div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontWeight: 400,
                    fontSize: 'var(--t-subhead)', color: 'var(--cream)',
                    lineHeight: 'var(--lh-headline)', marginBottom: '8px',
                  }}>
                    {step.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                    fontSize: 'var(--t-body)', color: 'rgba(242,233,218,0.7)',
                    lineHeight: 'var(--lh-body)',
                  }}>
                    {step.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ ACCORDION */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: 'var(--gut)', right: 'var(--gut)',
          fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
          fontSize: 'clamp(120px,18vw,220px)', lineHeight: 1,
          color: 'rgba(38,16,20,0.04)',
          userSelect: 'none', pointerEvents: 'none', zIndex: 0,
        }}>
          ?
        </div>

        <div ref={faqReveal.ref} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '16px',
          }}>
            COMMON QUESTIONS
          </div>

          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            color: 'var(--ink)', maxWidth: '560px', marginBottom: '48px',
            textWrap: 'balance',
          }}>
            Questions about <em style={{ fontStyle: 'italic', color: '#7C2230' }}>real estate holdings.</em>
          </h2>

          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{
                borderBottom: '1px solid var(--ink-15)',
                opacity: faqReveal.visible ? 1 : 0,
                transform: faqReveal.visible ? 'none' : 'translateY(12px)',
                transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms`,
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '24px',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--serif)',
                    fontWeight: 400,
                    fontSize: 'var(--t-subhead)',
                    lineHeight: 'var(--lh-headline)',
                    color: 'var(--ink)',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontFamily: 'var(--sans)',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: 'var(--gold-deep)',
                    flexShrink: 0,
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.25s ease',
                    lineHeight: 1,
                    marginTop: '4px',
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  overflow: 'hidden',
                  maxHeight: openFaq === i ? '500px' : '0px',
                  transition: 'max-height 0.4s ease',
                }}>
                  <div style={{
                    paddingBottom: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}>
                    <p style={{
                      fontFamily: 'var(--serif)',
                      fontWeight: 400,
                      fontSize: 'var(--t-body)',
                      lineHeight: 'var(--lh-body)',
                      color: 'var(--ink-70)',
                      maxWidth: '680px',
                    }}>
                      {faq.a}
                    </p>
                    <Link
                      href={`/ecosystem/enterprise/real-estate/${faq.slug}`}
                      style={{
                        fontFamily: 'var(--sans)',
                        fontWeight: 600,
                        fontSize: '10px',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase' as const,
                        color: '#7C2230',
                        textDecoration: 'none',
                      }}
                    >
                      READ THE FULL ANSWER →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — RELATED */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '16px',
        }}>
          MORE FROM ENTERPRISE
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px', marginTop: '32px',
        }}>
          {RELATED.map(card => (
            <Link key={card.href} href={card.href} style={{
              background: 'var(--paper)',
              padding: '28px 24px',
              textDecoration: 'none',
              display: 'block',
              borderTop: '2px solid var(--gold)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'translateY(-3px)'
              el.style.boxShadow = '0 6px 24px rgba(38,16,20,0.07)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.transform = 'none'
              el.style.boxShadow = 'none'
            }}>
              <div style={{
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                letterSpacing: '0.24em', textTransform: 'uppercase',
                color: 'var(--gold-deep)', marginBottom: '8px',
              }}>
                FOCUS AREA
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                lineHeight: 'var(--lh-headline)', marginBottom: '6px',
              }}>
                {card.title}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 14, color: 'var(--ink-45)',
                lineHeight: 1.5,
              }}>
                {card.body}
              </div>
              <div style={{
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
                color: 'var(--gold-deep)', marginTop: '14px', display: 'block',
              }}>
                →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(201,162,60,0.16), rgba(90,26,36,0) 55%), linear-gradient(165deg, #7C2230, #5A1A24)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            letterSpacing: 'var(--ls-headline)', color: 'var(--cream)',
            textWrap: 'balance',
          }}>
            Interested in a property conversation?<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s talk.</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.72)', marginTop: '16px', maxWidth: '440px',
          }}>
            Premium Services Enterprise evaluates real estate opportunities across New England. Acquisitions, partnerships, and long-term holdings.
          </p>

          <div style={{ marginTop: '32px' }}>
            <Link href="/ecosystem/enterprise/contact" style={{
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
            marginTop: '40px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.35)',
          }}>
            PREMIUM SERVICES ENTERPRISE · A DR. MARLA COMPANY · NO. 02
          </div>
        </div>
      </section>
    </>
  )
}
