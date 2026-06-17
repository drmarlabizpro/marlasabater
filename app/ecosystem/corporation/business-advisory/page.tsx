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
    q: 'What does a business advisor actually do for a small business?',
    a: 'A business advisor helps you make better decisions. Not just financial decisions — structural decisions, hiring decisions, growth decisions, exit decisions. The value is having someone in your corner who has seen the patterns before. Most small business owners make expensive mistakes that an advisor would have caught immediately. The right advisor pays for themselves many times over.',
    slug: 'what-does-business-advisor-do',
  },
  {
    q: 'When is the right time to hire a business advisor?',
    a: 'Earlier than most people think. The most common answer is "when things get complicated" but by then you are already behind. The best time is before you make a major decision — before you hire your first employee, before you sign a lease, before you take on a partner, before you change your business structure. Advisory is most valuable when it shapes decisions before they are made, not after.',
    slug: 'when-to-hire-business-advisor',
  },
  {
    q: 'How is business advisory different from consulting?',
    a: 'Consulting typically means bringing someone in to solve a specific problem and then they leave. Advisory is an ongoing relationship. An advisor knows your business, your history, your goals, and your patterns over time. That context is what makes the guidance useful. Anyone can give generic advice. An advisor who knows your business gives you counsel that is specific to your actual situation.',
    slug: 'business-advisory-vs-consulting',
  },
  {
    q: 'Can a business advisor help me decide what business structure to use?',
    a: 'Yes and this is one of the highest-value conversations an advisor can have with you. Your business structure affects your taxes, your liability, your ability to bring in partners or investors, and your options when you eventually want to exit or pass the business on. Getting the structure right at the beginning is far cheaper than restructuring later. Premium Services Corporation has guided hundreds of business owners through this decision.',
    slug: 'business-structure-advice',
  },
  {
    q: 'What industries does Premium Services Corporation advise?',
    a: 'Over thirty years Premium Services Corporation has worked with business owners across nine industries including construction, food and hospitality, media and entertainment, automotive, real estate, professional services, retail, healthcare adjacent businesses, and nonprofits. The fundamentals of good business advisory — cash flow, structure, planning, and decision-making — apply across industries even when the specifics differ.',
    slug: 'industries-business-advisory',
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
  { title: 'Pattern Recognition', body: 'After thirty years the patterns are clear. The mistakes most business owners make are predictable and avoidable with the right guidance.' },
  { title: 'Cross-Industry Perspective', body: 'Having built in construction, finance, food, media, hospitality, and automotive gives a perspective that single-industry advisors cannot offer.' },
  { title: 'Bilingual Advisory', body: 'Business advisory in English and Spanish. The same quality of guidance in both languages.' },
]

const PILLARS = [
  { num: '01', title: 'Structure', body: 'The legal, financial, and operational structure of your business determines everything that comes after. We start here.' },
  { num: '02', title: 'Planning', body: 'Annual planning for revenue targets, expenses, hiring, and capital needs. A real plan, not a wish list.' },
  { num: '03', title: 'Decisions', body: 'When you face a major decision — a new hire, a new location, a new partner — you have someone to think it through with who has context.' },
  { num: '04', title: 'Execution', body: 'Plans without execution are just documents. We stay engaged through implementation and adjust when reality differs from the plan.' },
]

const CLIENT_TYPES = [
  { title: 'Pre-launch', body: 'You are planning to start a business and want to build the right structure before you open.' },
  { title: 'Early Stage', body: 'You have been operating for one to three years and need a plan for sustainable growth.' },
  { title: 'Growing', body: 'Revenue is increasing but margins are not. You need help understanding why and what to do.' },
  { title: 'Multi-entity', body: 'You own more than one business and need someone who can see the full picture and advise on the whole.' },
  { title: 'Transition', body: 'You are planning to exit, sell, or pass your business on and need to prepare it properly.' },
]

const STEPS = [
  { num: '01', title: 'Discovery', body: 'We start by understanding your business completely. History, current state, goals, concerns, and what you have tried before. No assumptions.' },
  { num: '02', title: 'Assessment', body: 'We review your financials, your structure, your operations, and your market position. We identify what is working, what is not, and what is missing.' },
  { num: '03', title: 'Strategy', body: 'We build a plan together. Not a generic framework. A specific plan for your business with priorities, timelines, and clear decisions to make.' },
  { num: '04', title: 'Ongoing Advisory', body: 'We stay engaged. Monthly or quarterly check-ins, available when major decisions arise, and adjusting the plan as your business evolves.' },
]

const RELATED = [
  { href: '/ecosystem/corporation/tax-strategy', title: 'Tax Strategy', body: 'Planning ahead so less goes to the government.' },
  { href: '/ecosystem/corporation/accounting', title: 'Accounting & Bookkeeping', body: 'Clean books, accurate financials, CFO-level advisory.' },
  { href: '/ecosystem/corporation/financial-planning', title: 'Financial Planning', body: 'Long-term financial structure for individuals and businesses.' },
]

export default function BusinessAdvisoryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [stepsVisible, setStepsVisible] = useState(false)
  const [pillarsVisible, setPillarsVisible] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)

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
    const el = pillarsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setPillarsVisible(true); obs.disconnect() } },
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
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Business Advisory', url: 'https://marlasabater.com/ecosystem/corporation/business-advisory' },
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
        background: 'linear-gradient(168deg, #2A6452, #214E40)',
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
            <Link href="/ecosystem/corporation" style={{ color: 'inherit', textDecoration: 'none' }}>CORPORATION</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>BUSINESS ADVISORY</span>
          </div>

          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '16px',
          }}>
            PREMIUM SERVICES CORPORATION
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-hero)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)', color: 'var(--cream)',
            maxWidth: '640px', textWrap: 'balance',
          }}>
            Guidance from someone who has <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>built it.</em>
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
            Thirty years building eight companies across six industries. That experience is available to you.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '32px', left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(242,233,218,0.35)',
        }}>
          PREMIUM SERVICES CORPORATION · NO. 03
        </div>
      </section>

      {/* SECTION 2 — THE DIFFERENCE */}
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
          30
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
              WHAT MAKES THIS DIFFERENT
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
              textWrap: 'balance',
            }}>
              Most advisors have read about building a business. <em style={{ fontStyle: 'italic', color: '#214E40' }}>Dr. Marla has done it.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '20px', maxWidth: '480px',
            }}>
              Eight companies across six industries built over thirty years from a single office in Providence. The advisory that comes from that experience is not theoretical. It is the product of real decisions, real mistakes, and real outcomes at every scale.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '14px', maxWidth: '480px',
            }}>
              When you work with Premium Services Corporation on business advisory, you are drawing on that history. Not a framework. Not a methodology. Real experience applied to your actual situation.
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

      {/* SECTION 3 — THE FOUR PILLARS */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '16px',
        }}>
          WHAT WE FOCUS ON
        </div>

        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
          maxWidth: '560px', marginBottom: '48px', textWrap: 'balance',
        }}>
          The four pillars of every <em style={{ fontStyle: 'italic', color: '#214E40' }}>advisory engagement.</em>
        </h2>

        <div ref={pillarsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2px',
        }}>
          {PILLARS.map((p, i) => (
            <div key={p.num} style={{
              background: 'var(--paper)',
              padding: '36px 28px',
              borderTop: '3px solid var(--gold)',
              opacity: pillarsVisible ? 1 : 0,
              transform: pillarsVisible ? 'none' : 'translateY(28px)',
              transition: `opacity 0.55s ease ${i * 120}ms, transform 0.55s ease ${i * 120}ms`,
            }}>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
                fontSize: 'clamp(48px,7vw,80px)', lineHeight: 1,
                color: 'rgba(38,16,20,0.07)', marginBottom: '8px',
              }}>
                {p.num}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                lineHeight: 'var(--lh-headline)', marginBottom: '10px',
              }}>
                {p.title}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 'var(--t-body)', color: 'var(--ink-70)',
                lineHeight: 'var(--lh-body)',
              }}>
                {p.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — WHO WE WORK WITH */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(170deg, #2A6452, #214E40)',
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
            WHO THIS IS FOR
          </div>

          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            letterSpacing: 'var(--ls-headline)', color: 'var(--cream)',
            maxWidth: '560px', marginBottom: '48px', textWrap: 'balance',
          }}>
            Business owners at every <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>stage.</em>
          </h2>

          <div ref={cardsRef} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2px',
          }}>
            {CLIENT_TYPES.map((card, i) => (
              <div key={card.title} style={{
                background: 'rgba(242,233,218,0.06)',
                padding: '28px 24px',
                borderLeft: '3px solid var(--gold)',
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'none' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms, background 0.2s ease`,
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

      {/* SECTION 5 — HOW IT WORKS */}
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
          →
        </div>

        <div ref={stepsRef} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '40px',
          }}>
            THE ENGAGEMENT
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
                paddingBottom: '40px',
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
            Questions about <em style={{ fontStyle: 'italic', color: '#214E40' }}>business advisory.</em>
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
                  maxHeight: openFaq === i ? '400px' : '0px',
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
                      href={`/ecosystem/corporation/business-advisory/${faq.slug}`}
                      style={{
                        fontFamily: 'var(--sans)',
                        fontWeight: 600,
                        fontSize: '10px',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase' as const,
                        color: '#214E40',
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

      {/* SECTION 7 — RELATED SERVICES */}
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
          MORE FROM CORPORATION
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
                SERVICE
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
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(42,100,82,0.4), rgba(33,78,64,0) 55%), linear-gradient(165deg, #2A6452, #214E40)',
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
            Ready to build with someone who <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>has done it?</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.72)', marginTop: '16px', maxWidth: '440px',
          }}>
            Premium Services Corporation provides business advisory for owners across New England. Schedule a consultation to start the conversation.
          </p>

          <div style={{ marginTop: '32px' }}>
            <Link href="/ecosystem/corporation/contact" style={{
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
              SCHEDULE A CONSULTATION →
            </Link>
          </div>

          <div style={{
            marginTop: '40px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.35)',
          }}>
            PREMIUM SERVICES CORPORATION · A DR. MARLA COMPANY · NO. 03
          </div>
        </div>
      </section>
    </>
  )
}
