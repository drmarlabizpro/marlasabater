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
    q: 'What is the difference between financial planning and financial advising?',
    a: 'Financial advising typically focuses on investment products and portfolio management. Financial planning is broader — it looks at your entire financial picture including income, expenses, debt, business equity, retirement strategy, insurance, and estate considerations. For business owners especially, a plan that only covers investments misses most of what actually determines long-term financial health. The business itself is usually the largest asset and it needs to be part of the plan.',
    slug: 'financial-planning-vs-advising',
  },
  {
    q: 'How do I know if I need a financial plan?',
    a: 'If you are making financial decisions one at a time without a framework connecting them, you need a plan. Signs include not knowing your personal net worth, having no retirement savings strategy, carrying debt without a payoff timeline, or making business decisions that affect your personal finances without understanding the full impact. A financial plan does not have to be complicated. It has to be honest and current.',
    slug: 'do-i-need-financial-plan',
  },
  {
    q: 'As a business owner, how do I separate personal and business finances?',
    a: 'The separation starts with structure — separate accounts, separate credit, separate bookkeeping. Beyond that it requires a plan for how money moves from the business to you: salary, distributions, retirement contributions, and equity. Many business owners under-pay themselves and over-invest in the business at the expense of personal financial security. A financial plan addresses both sides deliberately rather than letting circumstances decide.',
    slug: 'separate-personal-business-finances',
  },
  {
    q: 'When should a business owner start thinking about retirement planning?',
    a: 'The answer is always the same: now. A Solo 401k or SEP-IRA for a self-employed business owner can shelter a significant portion of income from taxes while building retirement savings. The earlier you start, the more compounding works in your favor. Many business owners assume the sale of their business will fund retirement. Sometimes it does. Having a separate retirement plan means you are not entirely dependent on that outcome.',
    slug: 'business-owner-retirement-planning',
  },
  {
    q: 'What does financial planning cost and how do I know if it is worth it?',
    a: 'The cost varies based on the complexity of your situation and the scope of planning needed. What determines whether it is worth it is simpler: if the plan helps you avoid one major financial mistake, pay less in taxes, or build wealth faster than you would have alone, it pays for itself many times over. Most people who work with a financial planner for the first time discover they were leaving significant money on the table without knowing it.',
    slug: 'financial-planning-cost-worth-it',
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
  { title: 'The Full Picture', body: 'Business finances and personal finances reviewed together, not in isolation.' },
  { title: 'Built to Evolve', body: 'A plan that adjusts as your business and life change — not a document that sits in a drawer.' },
  { title: 'Bilingual Planning', body: 'Financial planning conversations in English and Spanish, without anything lost in translation.' },
]

const AREAS = [
  { title: 'Cash Flow Planning', body: 'Understanding how money moves in and out so you are never caught short and always know what you can invest.' },
  { title: 'Retirement Strategy', body: 'Solo 401k, SEP-IRA, or other vehicles. Building retirement savings that work alongside the business.' },
  { title: 'Debt Management', body: 'A deliberate plan for business and personal debt — what to pay off, in what order, and how fast.' },
  { title: 'Tax-Advantaged Savings', body: 'Using legal structures to reduce taxable income while building long-term wealth.' },
  { title: 'Business Equity Planning', body: 'Understanding what your business is worth and how to maximize that value over time.' },
  { title: 'Estate Considerations', body: 'Ensuring that what you build passes to the right people in the right way.' },
]

const TIMELINE = [
  { label: 'YEAR ONE', title: 'Foundation', body: 'Accounts separated, cash flow understood, debt mapped, first retirement contribution made.' },
  { label: 'YEARS 2–3', title: 'Structure', body: 'Business equity growing, tax strategy optimized, retirement savings compounding.' },
  { label: 'YEARS 4–7', title: 'Acceleration', body: 'Personal wealth building alongside business. Plan adjusted as circumstances change.' },
  { label: 'YEAR 10+', title: 'Legacy', body: 'Business positioned for transition or sale. Personal wealth independent of business outcome.' },
]

const STEPS = [
  { num: '01', title: 'Full Financial Review', body: 'We start by understanding everything. Income, expenses, debt, savings, business equity, insurance, and any existing plans. Honest assessment before anything else.' },
  { num: '02', title: 'Build the Plan', body: 'We build a financial plan specific to your situation. Not a template. A real plan with specific numbers, timelines, and priorities ranked by impact.' },
  { num: '03', title: 'Implement Together', body: 'We help you execute the plan. Opening the right accounts, making the right elections, restructuring what needs restructuring.' },
  { num: '04', title: 'Annual Review and Adjust', body: 'Every year we review what changed — in your business, your life, and the tax environment — and update the plan accordingly.' },
]

const RELATED = [
  { href: '/ecosystem/corporation/tax-strategy', title: 'Tax Strategy', body: 'Planning ahead so less goes to the government.' },
  { href: '/ecosystem/corporation/business-advisory', title: 'Business Advisory', body: 'Strategic guidance at every stage of growth.' },
  { href: '/ecosystem/corporation/accounting', title: 'Accounting & Bookkeeping', body: 'Clean books, accurate financials, CFO-level advisory.' },
]

export default function FinancialPlanningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [stepsVisible, setStepsVisible] = useState(false)
  const [timelineVisible, setTimelineVisible] = useState(false)
  const cardsRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

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
    const el = timelineRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimelineVisible(true); obs.disconnect() } },
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
        { name: 'Financial Planning', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning' },
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
            <span>FINANCIAL PLANNING</span>
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
            A financial plan built for the <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>decades ahead.</em>
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
            Long-term financial structure for business owners and individuals who are serious about what they are building.
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

      {/* SECTION 2 — WHAT IT IS */}
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
          ∞
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
              WHAT FINANCIAL PLANNING MEANS
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
              textWrap: 'balance',
            }}>
              Most people manage money. Fewer people have a plan for <em style={{ fontStyle: 'italic', color: '#214E40' }}>it.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '20px', maxWidth: '480px',
            }}>
              Financial planning is the difference between reacting to money and directing it. It means knowing where you are, where you want to be, and exactly what needs to happen to get there. Not in general terms. In specific, actionable steps with timelines.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '14px', maxWidth: '480px',
            }}>
              For business owners, the plan has to cover both the business and the individual. Most advisors focus on one or the other. Premium Services Corporation looks at both because for most business owners, they are inseparable.
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

      {/* SECTION 3 — THE SIX AREAS */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '16px',
        }}>
          SIX AREAS OF FOCUS
        </div>

        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
          maxWidth: '560px', marginBottom: '48px', textWrap: 'balance',
        }}>
          A complete plan covers more than <em style={{ fontStyle: 'italic', color: '#214E40' }}>investments.</em>
        </h2>

        <div ref={cardsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
        }}>
          {AREAS.map((card, i) => (
            <div key={card.title} style={{
              background: 'var(--paper)',
              padding: '32px 24px',
              borderTop: '2px solid var(--gold)',
              position: 'relative',
              overflow: 'hidden',
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? 'none' : 'translateY(24px)',
              transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms, box-shadow 0.2s ease`,
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

      {/* SECTION 4 — THE TIMELINE */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(170deg, #2A6452, #214E40)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div ref={timelineRef} style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '16px',
          }}>
            HOW IT BUILDS OVER TIME
          </div>

          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            letterSpacing: 'var(--ls-headline)', color: 'var(--cream)',
            maxWidth: '560px', marginBottom: '56px', textWrap: 'balance',
          }}>
            Financial planning is not a one-time event. It is a <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>practice.</em>
          </h2>

          <div style={{ position: 'relative', overflowX: 'auto' }}>
            <div style={{
              position: 'relative', height: '2px',
              background: 'rgba(242,233,218,0.15)',
              marginBottom: '40px', marginTop: '8px',
            }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, height: '100%',
                background: 'var(--gold)',
                width: timelineVisible ? '100%' : '0%',
                transition: 'width 1.4s ease 0.2s',
              }} />
            </div>

            <div style={{
              display: 'flex', gap: 'clamp(32px,5vw,64px)', flexWrap: 'wrap',
            }}>
              {TIMELINE.map((node, i) => (
                <div key={node.label} style={{
                  flex: '1 1 180px',
                  opacity: timelineVisible ? 1 : 0,
                  transform: timelineVisible ? 'none' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${i * 200}ms, transform 0.5s ease ${i * 200}ms`,
                }}>
                  <div style={{
                    width: '12px', height: '12px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    marginBottom: '16px',
                    border: '2px solid rgba(242,233,218,0.3)',
                  }} />
                  <div style={{
                    fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                    letterSpacing: '0.24em', textTransform: 'uppercase',
                    color: 'var(--gold-soft)', marginBottom: '8px',
                  }}>
                    {node.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontWeight: 400,
                    fontSize: 'var(--t-subhead)', color: 'var(--cream)',
                    lineHeight: 'var(--lh-headline)', marginBottom: '8px',
                  }}>
                    {node.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                    fontSize: 'var(--t-body)', color: 'rgba(242,233,218,0.65)',
                    lineHeight: 'var(--lh-body)',
                  }}>
                    {node.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div ref={stepsRef} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '40px',
          }}>
            THE PROCESS
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
            Questions about <em style={{ fontStyle: 'italic', color: '#214E40' }}>financial planning.</em>
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
                      href={`/ecosystem/corporation/financial-planning/${faq.slug}`}
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
            Ready to build a plan for the <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>decades ahead?</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.72)', marginTop: '16px', maxWidth: '440px',
          }}>
            Premium Services Corporation works with business owners and individuals across New England on long-term financial planning. Schedule a consultation to get started.
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
