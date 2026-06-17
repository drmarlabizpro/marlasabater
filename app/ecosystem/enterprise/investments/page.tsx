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
    q: 'What does Premium Services Enterprise look for in an investment opportunity?',
    a: 'The primary filter is alignment. We look for businesses where an equity position creates mutual value — where our network, operational experience, and ecosystem create real advantages for the business beyond just capital. A business that only needs money can find money anywhere. We invest where the broader relationship creates something money alone cannot.',
    slug: 'investment-opportunity-criteria',
  },
  {
    q: 'What is the difference between an investment and an acquisition?',
    a: 'In an acquisition Premium Services Enterprise takes full ownership and operational responsibility. In a strategic investment we take an equity position while the existing ownership continues to run the business. The investment structure is appropriate when the business has strong leadership that should remain in place and the value we add is strategic rather than operational.',
    slug: 'investment-vs-acquisition',
  },
  {
    q: 'What industries does Premium Services Enterprise invest in?',
    a: 'We invest across the same industries represented in the ecosystem — construction, financial services, food and hospitality, media and entertainment, automotive, and real estate. We also consider opportunities in adjacent industries where the strategic fit is clear. We do not invest in industries we do not understand or cannot add value to beyond capital.',
    slug: 'investment-industries',
  },
  {
    q: 'How long does Premium Services Enterprise typically hold an investment?',
    a: 'Our investment horizon matches our overall philosophy: long. We are not looking for a three-year exit. We invest in businesses we expect to be worth significantly more in ten years and we are prepared to hold for that duration. This shapes which opportunities we pursue and how we structure investments. Businesses looking for a quick exit partner are not the right fit.',
    slug: 'investment-holding-period',
  },
  {
    q: 'Does Premium Services Enterprise take board seats or active roles in portfolio companies?',
    a: 'Selectively. For most investments we prefer an advisory relationship rather than a governance role. We bring experience, network access, and ecosystem support without inserting ourselves into day-to-day operations. When a board seat makes sense for the business and the relationship supports it, we will consider it. But control is not the goal — value creation is.',
    slug: 'board-seats-portfolio-companies',
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

const THESIS_BLOCKS = [
  { title: 'Beyond Capital', body: 'Network access, operational experience, and ecosystem integration that money cannot buy alone.' },
  { title: 'Long Horizon', body: 'Ten-year minimum mindset. We invest for the decades ahead, not the next funding round.' },
  { title: 'Mutual Value', body: 'Investments that make the portfolio company stronger and the ecosystem more complete at the same time.' },
]

const PRINCIPLES = [
  { num: '01', title: 'Alignment First', body: 'We only invest where our ecosystem creates genuine strategic value for the business. Capital alone is not enough reason.' },
  { num: '02', title: 'Long Horizon', body: 'Ten years minimum. We structure investments for the long hold and we do not pursue opportunities that require a quick exit.' },
  { num: '03', title: 'Existing Strength', body: 'We invest in businesses that are already working. We are not a turnaround vehicle. Strong fundamentals are the starting point.' },
  { num: '04', title: 'Active Partnership', body: 'We bring more than money. Network, advisory, operational experience, and ecosystem access are part of every investment relationship.' },
  { num: '05', title: 'Shared Values', body: 'The businesses we invest in should reflect the same commitment to community, quality, and long-term thinking that defines the ecosystem.' },
]

const BRINGS = [
  { title: 'Ecosystem Access', body: 'Portfolio companies gain access to the full Dr. Marla network — clients, vendors, operators, and opportunities across all eight divisions.' },
  { title: 'Financial Structure', body: 'Premium Services Corporation brings financial advisory, tax strategy, and bookkeeping to every portfolio company as part of the relationship.' },
  { title: 'Operational Experience', body: 'Thirty years of building and running businesses across six industries. The patterns we have seen are applicable across sectors.' },
  { title: 'Network and Relationships', body: 'Access to the relationships Dr. Marla has built over three decades in Providence and across New England.' },
]

const STEPS = [
  { num: '01', title: 'Introduction', body: 'A conversation about the business, the ownership, and what both parties are looking for. No paperwork at this stage.' },
  { num: '02', title: 'Strategic Fit Assessment', body: 'We evaluate where the business fits within the ecosystem and what value the relationship creates for both sides.' },
  { num: '03', title: 'Financial Review', body: 'High-level financial review to confirm fundamentals before either party commits significant time to structuring.' },
  { num: '04', title: 'Structure and Terms', body: 'If fit and financials are confirmed we work together to structure an investment that aligns incentives for the long term.' },
  { num: '05', title: 'Partnership Begins', body: 'Post-investment the relationship activates. Ecosystem access, advisory support, and operational collaboration begin immediately.' },
]

const RELATED = [
  { href: '/ecosystem/enterprise/real-estate', title: 'Real Estate Holdings', body: 'Commercial and residential property acquired for the long hold.' },
  { href: '/ecosystem/enterprise/acquisitions', title: 'Business Acquisitions', body: 'Acquiring businesses with strong fundamentals and long-term potential.' },
  { href: '/ecosystem/enterprise/contact', title: 'Discuss an Opportunity', body: 'Start a conversation about an investment or partnership.' },
]

export default function InvestmentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [stepsVisible, setStepsVisible] = useState(false)
  const [principlesVisible, setPrinciplesVisible] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

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
    const el = principlesRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setPrinciplesVisible(true); obs.disconnect() } },
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
        { name: 'Strategic Investments', url: 'https://marlasabater.com/ecosystem/enterprise/investments' },
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
            <span>INVESTMENTS</span>
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
            Equity positions built for the <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>long horizon.</em>
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
            Strategic investments in businesses aligned with the ecosystem&apos;s vision and values. Not capital for its own sake. Partnership with purpose.
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

      {/* SECTION 2 — WHAT MAKES IT STRATEGIC */}
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
          Invest.
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
              THE INVESTMENT THESIS
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
              textWrap: 'balance',
            }}>
              Capital is the smallest thing we bring to an <em style={{ fontStyle: 'italic', color: '#7C2230' }}>investment.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '20px', maxWidth: '480px',
            }}>
              Premium Services Enterprise invests in businesses where the ecosystem itself creates value beyond the check. A construction company gains access to real estate opportunities. A hospitality operation gains financial structure and advisory. A media company gains a network of businesses that need content and production.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '14px', maxWidth: '480px',
            }}>
              This is what makes the investment strategic rather than simply financial. The businesses we invest in become part of something larger. The ecosystem grows stronger with each addition. That is the thesis.
            </p>
          </div>

          <div>
            {THESIS_BLOCKS.map((b, i) => {
              const isLast = i === THESIS_BLOCKS.length - 1
              return (
                <div key={b.title} style={{
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
                    {b.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                    fontSize: 'var(--t-body)', color: 'var(--ink-70)',
                    lineHeight: 'var(--lh-body)',
                  }}>
                    {b.body}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — INVESTMENT PRINCIPLES */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '16px',
        }}>
          INVESTMENT PRINCIPLES
        </div>

        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
          maxWidth: '560px', marginBottom: '48px', textWrap: 'balance',
        }}>
          The principles that guide every <em style={{ fontStyle: 'italic', color: '#7C2230' }}>decision.</em>
        </h2>

        <div ref={principlesRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2px',
        }}>
          {PRINCIPLES.map((p, i) => (
            <div key={p.num} style={{
              background: 'var(--paper)',
              padding: '36px 28px',
              borderTop: '3px solid var(--gold)',
              position: 'relative',
              overflow: 'hidden',
              opacity: principlesVisible ? 1 : 0,
              transform: principlesVisible ? 'none' : 'translateY(28px)',
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
                {p.num}
              </div>
              <div style={{
                fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 10,
                letterSpacing: '0.24em', textTransform: 'uppercase',
                color: 'var(--gold-deep)', marginBottom: '12px',
                position: 'relative', zIndex: 1,
              }}>
                {p.num}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                lineHeight: 'var(--lh-headline)', marginBottom: '8px',
                position: 'relative', zIndex: 1,
              }}>
                {p.title}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 'var(--t-body)', color: 'var(--ink-70)',
                lineHeight: 'var(--lh-body)',
                position: 'relative', zIndex: 1,
              }}>
                {p.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — WHAT WE BRING */}
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
            color: 'var(--gold-soft)', marginBottom: '16px',
          }}>
            WHAT WE BRING
          </div>

          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            letterSpacing: 'var(--ls-headline)', color: 'var(--cream)',
            maxWidth: '560px', marginBottom: '48px', textWrap: 'balance',
          }}>
            Beyond the <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>capital.</em>
          </h2>

          <div ref={cardsRef} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2px',
          }}>
            {BRINGS.map((card, i) => (
              <div key={card.title} style={{
                background: 'rgba(242,233,218,0.06)',
                padding: '32px 28px',
                borderLeft: '3px solid var(--gold)',
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms, background 0.2s ease`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(242,233,218,0.1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(242,233,218,0.06)'
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-subhead)', color: 'var(--cream)',
                  lineHeight: 'var(--lh-headline)', marginBottom: '8px',
                }}>
                  {card.title}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 'var(--t-body)', color: 'rgba(242,233,218,0.7)',
                  lineHeight: 'var(--lh-body)',
                }}>
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE PROCESS */}
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
          →
        </div>

        <div ref={stepsRef} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '40px',
          }}>
            HOW IT WORKS
          </div>

          <div style={{
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
                  background: 'var(--cream)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 11,
                    color: 'var(--gold-deep)',
                  }}>
                    {step.num}
                  </span>
                </div>

                <div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontWeight: 400,
                    fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                    lineHeight: 'var(--lh-headline)', marginBottom: '8px',
                  }}>
                    {step.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                    fontSize: 'var(--t-body)', color: 'var(--ink-70)',
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
            Questions about <em style={{ fontStyle: 'italic', color: '#7C2230' }}>strategic investments.</em>
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
                      href={`/ecosystem/enterprise/investments/${faq.slug}`}
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
            Aligned with what we are building?<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s talk.</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.72)', marginTop: '16px', maxWidth: '440px',
          }}>
            Premium Services Enterprise considers strategic investment opportunities across New England. The first conversation is always straightforward.
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
