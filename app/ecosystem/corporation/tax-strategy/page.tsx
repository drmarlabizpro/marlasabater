import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Tax Strategy for Small Businesses | Providence RI | Premium Services Corporation',
  description: 'Tax strategy and planning for small business owners in Rhode Island and New England. Keep more in your business with a real tax plan. Premium Services Corporation.',
  keywords: [
    'tax strategy small business Rhode Island',
    'business tax planning Providence RI',
    'small business tax advisor Providence',
    'tax planning New England',
    'LLC tax strategy Rhode Island',
    'S-Corp tax planning Providence RI',
  ],
  openGraph: {
    title: 'Tax Strategy for Small Businesses | Premium Services Corporation',
    description: 'Tax strategy and planning for small business owners in Rhode Island and New England.',
    url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: {
    canonical: 'https://marlasabater.com/ecosystem/corporation/tax-strategy',
  },
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much can a small business save with a proper tax strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The amount varies by business structure, revenue, and industry, but most small business owners who work with a tax strategist rather than just a tax preparer find they reduce their tax liability by 10 to 30 percent annually. The difference is planning ahead rather than reporting after the fact.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between tax preparation and tax strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tax preparation is reporting what already happened. Tax strategy is planning what will happen so that your liability is reduced before the year ends. A tax preparer files your return. A tax strategist helps you make decisions throughout the year — on payroll, purchases, structure, and timing — that reduce what you owe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should my small business be an LLC or S-Corp for tax purposes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your revenue and how you pay yourself. An S-Corp election can reduce self-employment tax significantly once your business generates consistent profit, typically above $50,000 annually. An LLC taxed as a sole proprietorship is simpler but often more expensive at higher income levels. This decision should be made with a tax advisor who understands your full financial picture.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should a small business owner start thinking about tax strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Day one. The structure you choose when you start your business has tax implications for years. Most business owners wait until they owe more than they expected and then scramble. The owners who pay the least in taxes over time are the ones who plan from the beginning and revisit their strategy every year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Premium Services Corporation offer tax strategy in Spanish?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Premium Services Corporation provides full tax advisory services in both English and Spanish. Dr. Marla Sabater and her team serve bilingual business owners across Rhode Island and New England.',
      },
    },
  ],
}

const OUTCOMES = [
  { num: 'Year-round', label: 'TAX PLANNING', desc: 'Not just a return at the end — a strategy that runs alongside your business.' },
  { num: 'Structure', label: 'BUSINESS ENTITY REVIEW', desc: 'LLC, S-Corp, or C-Corp — the right structure at the right revenue level.' },
  { num: 'Bilingual', label: 'EN / ES SERVICE', desc: 'Full tax advisory in English and Spanish.' },
]

const CLIENT_CARDS = [
  { title: 'New Business Owners', body: 'You are just starting and want to build the right structure from day one — not fix a mess later.' },
  { title: 'Growing Businesses', body: 'Your revenue is increasing and your tax bill is growing faster than it should. Time to plan.' },
  { title: 'Multi-entity Owners', body: 'You own more than one company and need a strategy that looks at the full picture.' },
  { title: 'Self-employed Professionals', body: 'Freelancers, consultants, and independent contractors paying more in self-employment tax than necessary.' },
]

const STEPS = [
  { num: '01 / REVIEW', title: 'Full Financial Picture', body: 'We start by understanding your current structure, income, expenses, and goals. No assumptions.' },
  { num: '02 / PLAN', title: 'Annual Tax Strategy', body: 'We build a plan for the year — timing of income and expenses, deductions, entity decisions, retirement contributions.' },
  { num: '03 / EXECUTE', title: 'Quarterly Check-ins', body: 'We revisit throughout the year to adjust as your business changes. Not just once in April.' },
  { num: '04 / FILE', title: 'Accurate Returns', body: 'When filing time comes, everything is in order. No scrambling. No surprises.' },
]

const RELATED = [
  { href: '/ecosystem/corporation/accounting', title: 'Accounting & Bookkeeping' },
  { href: '/ecosystem/corporation/payroll', title: 'Payroll Services' },
  { href: '/ecosystem/corporation/business-advisory', title: 'Business Advisory' },
]

export default function TaxStrategyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Tax Strategy', url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy' },
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
        <div style={{ position: 'relative', zIndex: 2 }}>
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
            <span>TAX STRATEGY</span>
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
            Tax strategy for businesses built to <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>last.</em>
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
            Planning ahead, not filing after. Real tax strategy for small business owners across New England.
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
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div data-cols="2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '64px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--gold-deep)', marginBottom: '16px',
            }}>
              WHAT TAX STRATEGY ACTUALLY MEANS
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
              textWrap: 'balance',
            }}>
              Most business owners are filing. <em style={{ fontStyle: 'italic', color: '#214E40' }}>Few are planning.</em>
            </h2>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '20px', maxWidth: '500px',
            }}>
              Tax preparation tells the government what happened last year. Tax strategy shapes what happens this year, next year, and the year after. The difference is not just money — it is control over your own financial picture.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
              color: 'var(--ink-70)', marginTop: '14px', maxWidth: '500px',
            }}>
              Premium Services Corporation works with business owners year-round, not just in April. We identify deductions you are missing, structure decisions that reduce your liability, and build a plan that compounds over time.
            </p>
          </div>

          <div>
            {OUTCOMES.map((o, i) => {
              const isLast = i === OUTCOMES.length - 1
              return (
                <div key={o.label} style={{
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  borderBottom: isLast ? 'none' : '1px solid var(--ink-15)',
                }}>
                  <div style={{
                    fontFamily: 'var(--sans)', fontWeight: 700,
                    fontSize: 'clamp(28px,4vw,40px)', lineHeight: 1,
                    color: 'var(--gold-deep)',
                  }}>
                    {o.num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: 'var(--ink-45)', marginTop: '8px',
                  }}>
                    {o.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                    fontSize: 15, lineHeight: 1.55,
                    color: 'var(--ink-70)', marginTop: '6px',
                  }}>
                    {o.desc}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHO IT'S FOR */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '20px',
        }}>
          WHO THIS IS FOR
        </div>

        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
          maxWidth: '600px', textWrap: 'balance',
        }}>
          Business owners who are tired of being <em style={{ fontStyle: 'italic', color: '#214E40' }}>surprised</em> at tax time.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2px', marginTop: '40px',
        }}>
          {CLIENT_CARDS.map(card => (
            <div key={card.title} style={{
              background: 'var(--paper)',
              padding: '28px 24px',
              borderTop: '2px solid var(--gold)',
            }}>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                lineHeight: 'var(--lh-headline)', marginBottom: '10px',
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
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
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
            color: 'var(--gold-soft)', marginBottom: '40px',
          }}>
            THE PROCESS
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2px',
          }}>
            {STEPS.map(step => (
              <div key={step.num} style={{
                background: 'rgba(242,233,218,0.06)',
                padding: '32px 28px',
                borderLeft: '3px solid var(--gold)',
              }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 11,
                  letterSpacing: '0.24em', textTransform: 'uppercase',
                  color: 'var(--gold-soft)', marginBottom: '12px',
                }}>
                  {step.num}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-subhead)', color: 'var(--cream)',
                  lineHeight: 'var(--lh-headline)', marginBottom: '10px',
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
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section style={{
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '20px',
        }}>
          COMMON QUESTIONS
        </div>

        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
          maxWidth: '600px', marginBottom: '48px', textWrap: 'balance',
        }}>
          Questions about <em style={{ fontStyle: 'italic', color: '#214E40' }}>tax strategy.</em>
        </h2>

        <div>
          {faqSchema.mainEntity.map((item, i) => {
            const isLast = i === faqSchema.mainEntity.length - 1
            return (
              <div key={i} style={{
                paddingTop: '24px',
                paddingBottom: '24px',
                borderBottom: isLast ? 'none' : '1px solid var(--ink-15)',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                  lineHeight: 'var(--lh-headline)', marginBottom: '10px',
                }}>
                  {item.name}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-body)', color: 'var(--ink-70)',
                  lineHeight: 'var(--lh-body)', maxWidth: '680px',
                }}>
                  {item.acceptedAnswer.text}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 6 — RELATED SERVICES */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '20px',
        }}>
          MORE FROM CORPORATION
        </div>

        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-headline)', lineHeight: 'var(--lh-headline)',
          color: 'var(--ink)', marginBottom: '36px',
        }}>
          Other services within Premium Services Corporation.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}>
          {RELATED.map(card => (
            <Link key={card.href} href={card.href} style={{
              background: 'var(--paper)',
              padding: '28px 24px',
              textDecoration: 'none',
              display: 'block',
              borderTop: '2px solid var(--gold)',
              transition: 'background 0.2s',
            }}>
              <div style={{
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                letterSpacing: '0.24em', textTransform: 'uppercase',
                color: 'var(--gold-deep)', marginBottom: '10px',
              }}>
                SERVICE
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                lineHeight: 'var(--lh-headline)', marginBottom: '8px',
              }}>
                {card.title}
              </div>
              <div style={{
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 12,
                color: 'var(--gold-deep)', marginTop: '16px', display: 'block',
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
            Ready to stop overpaying?<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Schedule a consultation.</em>
          </h2>

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.72)', marginTop: '16px', maxWidth: '440px',
          }}>
            Premium Services Corporation works with business owners across New England. Get in touch to start building your tax strategy.
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
              GET IN TOUCH →
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
