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
    q: 'What kinds of businesses does Premium Services Enterprise acquire?',
    a: 'Premium Services Enterprise looks for businesses with real fundamentals — consistent revenue, a defensible market position, operational history of at least three years, and a clear reason why the business will be worth more in ten years than it is today. Industry is secondary to fundamentals. We have looked at businesses across construction, food service, hospitality, professional services, media, and automotive. What matters is the quality of the underlying business, not the sector.',
    slug: 'what-businesses-does-enterprise-acquire',
  },
  {
    q: 'What is the acquisition process from first contact to close?',
    a: 'The process begins with a conversation about the business — its history, financials, operations, and the owner\u2019s goals for the transition. If there is mutual interest we move into due diligence, which covers financial review, operational assessment, legal structure, and market position. If due diligence confirms the fundamentals, we structure an offer that works for both parties. Timelines vary but a straightforward acquisition typically takes three to six months from first conversation to close.',
    slug: 'acquisition-process-first-contact-to-close',
  },
  {
    q: 'Does Premium Services Enterprise acquire businesses to run them or to hold them?',
    a: 'Both, depending on the business. Some acquisitions are integrated into the ecosystem — a construction company that strengthens Premium Services Group, a food operation that expands Flavor Movement. Others are held as standalone investments with existing management in place. The decision is made based on the business itself and where it creates the most value within the broader portfolio.',
    slug: 'acquire-to-run-or-hold',
  },
  {
    q: 'What does Premium Services Enterprise look for in an acquisition target?',
    a: 'The criteria are consistent: three or more years of operating history, demonstrable revenue, a customer base that is not entirely dependent on the current owner, clean financials, and a story that makes sense for the next decade. We also look at the owner\u2019s motivation for selling. Owners who have built something real and want it to continue well tend to make the transition smoother than those who are simply exiting.',
    slug: 'acquisition-target-criteria',
  },
  {
    q: 'Is Premium Services Enterprise open to talking to business owners who are thinking about selling in the future?',
    a: 'Yes. Some of the best acquisitions begin as conversations that happen two or three years before any transaction. If you have built a business and are thinking about what comes next — whether that is retirement, a new venture, or simply wanting to know your options — having that conversation early creates more possibilities for everyone. There is no obligation attached to an initial conversation.',
    slug: 'future-sale-conversation',
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

const FEATURES = [
  { title: 'Fundamentals First', body: 'Three or more years operating, demonstrable revenue, and a market position that makes sense for the next decade.' },
  { title: 'Ecosystem Fit', body: 'We look for businesses that complement and strengthen the broader Dr. Marla portfolio.' },
  { title: 'Owner-Aligned', body: 'We work best with owners who have built something they are proud of and want to see continue well beyond them.' },
]

const CRITERIA = [
  { num: '01', title: 'Operating History', body: 'Minimum three years of consistent operation. We want to see how the business performs across market conditions, not just a single good year.' },
  { num: '02', title: 'Real Revenue', body: 'Demonstrated revenue that is not entirely dependent on the current owner\u2019s personal relationships. The business should be able to run without its founder.' },
  { num: '03', title: 'Clean Financials', body: 'Books that are accurate, current, and professionally maintained. Financial opacity is a disqualifier regardless of how promising the business looks otherwise.' },
  { num: '04', title: 'Market Position', body: 'A reason the business will still matter in ten years. A loyal customer base, a defensible niche, or a service that is genuinely difficult to replicate.' },
  { num: '05', title: 'Owner Alignment', body: 'Sellers who are motivated by continuity and legacy, not just price. The best transitions happen when both parties want the business to succeed long after the sale.' },
]

const STEPS = [
  { num: '01', title: 'Initial Conversation', body: 'No paperwork, no NDAs on day one. We start with a conversation about the business, its history, and what the owner is looking for. This takes thirty minutes and costs nothing.' },
  { num: '02', title: 'Preliminary Review', body: 'If there is mutual interest we review high-level financials and operational overview. This helps us determine fit before either party invests significant time.' },
  { num: '03', title: 'Letter of Intent', body: 'If the preliminary review confirms interest we issue a non-binding letter of intent outlining proposed terms, timeline, and due diligence scope.' },
  { num: '04', title: 'Due Diligence', body: 'Thorough review of financials, operations, legal structure, customer base, and market position. We are honest about what we find and expect the same in return.' },
  { num: '05', title: 'Negotiation and Structure', body: 'Based on due diligence findings we finalize deal structure, price, and transition terms. We work to find arrangements that work for both parties, not just the acquisition price.' },
  { num: '06', title: 'Close and Transition', body: 'Legal close followed by a managed transition period. We work with sellers to ensure continuity for employees, customers, and operations.' },
]

const AUDIENCE = [
  { title: 'Planning an Exit', body: 'You have built a business over many years and are ready to transition out. You want to sell to someone who will take care of what you built.' },
  { title: 'Thinking About the Future', body: 'You are not ready to sell now but you want to understand your options and start a conversation while there is no pressure.' },
  { title: 'Looking for a Partner', body: 'You want to keep running your business but need capital, operational support, or ecosystem access to reach the next level.' },
  { title: 'Estate or Succession Planning', body: 'You are planning for what happens to your business after you — whether that is family succession, a sale, or a structured transition to new ownership.' },
]

const RELATED = [
  { href: '/ecosystem/enterprise/real-estate', title: 'Real Estate Holdings', body: 'Commercial and residential property acquired for the long hold.' },
  { href: '/ecosystem/enterprise/investments', title: 'Strategic Investments', body: "Equity positions aligned with the ecosystem's long-term vision." },
  { href: '/ecosystem/enterprise/contact', title: 'Start a Conversation', body: 'No obligation. Just a conversation about what you have built.' },
]

export default function AcquisitionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [stepsVisible, setStepsVisible] = useState(false)
  const [criteriaVisible, setCriteriaVisible] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const criteriaRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const el = criteriaRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCriteriaVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
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
        { name: 'Business Acquisitions', url: 'https://marlasabater.com/ecosystem/enterprise/acquisitions' },
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
            <span>ACQUISITIONS</span>
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
            Acquiring businesses built to <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>outlast their founders.</em>
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
            Strategic business acquisitions across New England. Strong fundamentals, long holding horizon, and a portfolio built to compound.
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

      {/* SECTION 2 — THE APPROACH */}
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
          Acquire.
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
              HOW WE THINK ABOUT ACQUISITIONS
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
              textWrap: 'balance',
            }}>
              We are not buying businesses to sell them. We are buying them to make them <em style={{ fontStyle: 'italic', color: '#7C2230' }}>better.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '20px', maxWidth: '480px',
            }}>
              The acquisition strategy of Premium Services Enterprise is grounded in one principle: we acquire businesses that are already doing something real and we give them the resources, structure, and ecosystem support to do it better for longer.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '14px', maxWidth: '480px',
            }}>
              This is not a turnaround operation. We do not acquire distressed businesses and try to fix them. We acquire healthy businesses with strong foundations and help them reach their next level — whether that means integration into the ecosystem, capital access, operational support, or simply stable long-term ownership.
            </p>
          </div>

          <div>
            {FEATURES.map((f, i) => {
              const isLast = i === FEATURES.length - 1
              return (
                <div key={f.title} style={{
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  borderBottom: isLast ? 'none' : '1px solid var(--ink-15)',
                }}>
                  <div aria-hidden style={{
                    width: '24px', height: '2px',
                    background: 'var(--gold-deep)', marginBottom: '12px',
                  }} />
                  <div style={{
                    fontFamily: 'var(--serif)', fontWeight: 400,
                    fontSize: 'clamp(18px,2.2vw,24px)', color: 'var(--ink)',
                    lineHeight: 'var(--lh-headline)', marginBottom: '6px',
                  }}>
                    {f.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                    fontSize: 'var(--t-body)', color: 'var(--ink-70)',
                    lineHeight: 'var(--lh-body)',
                  }}>
                    {f.body}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ACQUISITION CRITERIA */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '16px',
        }}>
          WHAT WE LOOK FOR
        </div>

        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
          maxWidth: '560px', marginBottom: '48px', textWrap: 'balance',
        }}>
          The criteria that determine every <em style={{ fontStyle: 'italic', color: '#7C2230' }}>acquisition decision.</em>
        </h2>

        <div ref={criteriaRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2px',
        }}>
          {CRITERIA.map((c, i) => (
            <div key={c.num} style={{
              background: 'var(--paper)',
              padding: '32px 24px',
              borderTop: '3px solid var(--gold)',
              position: 'relative',
              overflow: 'hidden',
              opacity: criteriaVisible ? 1 : 0,
              transform: criteriaVisible ? 'none' : 'translateY(28px)',
              transition: `opacity 0.55s ease ${i * 120}ms, transform 0.55s ease ${i * 120}ms, box-shadow 0.2s ease`,
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
                {c.num}
              </div>
              <div style={{
                fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 10,
                letterSpacing: '0.24em', textTransform: 'uppercase',
                color: 'var(--gold-deep)', marginBottom: '12px',
                position: 'relative', zIndex: 1,
              }}>
                {c.num}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                lineHeight: 'var(--lh-headline)', marginBottom: '8px',
                position: 'relative', zIndex: 1,
              }}>
                {c.title}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 'var(--t-body)', color: 'var(--ink-70)',
                lineHeight: 'var(--lh-body)',
                position: 'relative', zIndex: 1,
              }}>
                {c.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — THE PROCESS */}
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
            FROM FIRST CONVERSATION TO CLOSE
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

      {/* SECTION 5 — WHO SHOULD REACH OUT */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div aria-hidden style={{
          position: 'absolute', top: 'var(--gut)', right: 'var(--gut)',
          fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
          fontSize: 'clamp(100px,16vw,180px)', lineHeight: 1,
          color: 'rgba(38,16,20,0.04)',
          userSelect: 'none', pointerEvents: 'none', zIndex: 0,
        }}>
          You.
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '16px',
          }}>
            WHO THIS IS FOR
          </div>

          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
            maxWidth: '560px', marginBottom: '48px', textWrap: 'balance',
          }}>
            If you have built something real and are thinking about <em style={{ fontStyle: 'italic', color: '#7C2230' }}>what comes next.</em>
          </h2>

          <div ref={cardsRef} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
          }}>
            {AUDIENCE.map((card, i) => (
              <div key={card.title} style={{
                background: 'var(--cream-2)',
                padding: '32px 24px',
                borderLeft: '3px solid var(--gold)',
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms`,
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                  lineHeight: 'var(--lh-headline)', marginBottom: '8px',
                }}>
                  {card.title}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 'var(--t-body)', color: 'var(--ink-70)',
                  lineHeight: 'var(--lh-body)',
                }}>
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ ACCORDION */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div ref={faqReveal.ref}>
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
            Questions about <em style={{ fontStyle: 'italic', color: '#7C2230' }}>business acquisitions.</em>
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
                      href={`/ecosystem/enterprise/acquisitions/${faq.slug}`}
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

      {/* SECTION 7 — RELATED */}
      <section style={{
        background: 'var(--cream)',
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

      {/* SECTION 8 — CTA */}
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
            Built something worth acquiring?<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s have that conversation.</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.72)', marginTop: '16px', maxWidth: '440px',
          }}>
            Premium Services Enterprise evaluates acquisition opportunities across New England. The first conversation is always straightforward and never obligates either party.
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
              START THE CONVERSATION →
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
