import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'What does financial planning cost and how do I know if it is worth it?'

const ANSWER_PLAIN = 'Financial planning costs vary by complexity, typically ranging from several hundred to several thousand dollars per year. At Premium Services Corporation it is integrated into the broader accounting and advisory relationship rather than priced separately. The more important question is return — for almost every business owner who engages in genuine financial planning, the returns exceed the cost, often significantly. Immediate returns come from tax optimization. Compounding returns come from better decisions made earlier — retirement contributions, structure changes, and protection built sooner.'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{
    '@type': 'Question',
    name: QUESTION,
    acceptedAnswer: { '@type': 'Answer', text: ANSWER_PLAIN },
  }],
}

const TAKEAWAYS = [
  { title: 'Cost varies by complexity', body: 'Expect several hundred to several thousand dollars annually depending on scope. At Corporation it is integrated into the advisory relationship.' },
  { title: 'Ask about return not cost', body: 'The right question is what financial planning returns — typically more than it costs, often significantly more.' },
  { title: 'Compounding over time', body: 'The largest returns from planning come from better decisions made earlier — retirement contributions, structure, and protection built sooner.' },
  { title: 'First engagement reveals gaps', body: 'Most first-time planning clients discover they were leaving money on the table in ways they were not aware of.' },
]

const RELATED = [
  { q: 'What is the difference between planning and advising?', href: '/ecosystem/corporation/financial-planning/financial-planning-vs-advising' },
  { q: 'How do I know if I need a financial plan?', href: '/ecosystem/corporation/financial-planning/do-i-need-financial-plan' },
  { q: 'How do I separate personal and business finances?', href: '/ecosystem/corporation/financial-planning/separate-personal-business-finances' },
  { q: 'When should I start retirement planning?', href: '/ecosystem/corporation/financial-planning/business-owner-retirement-planning' },
]

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--serif)', fontWeight: 400,
  fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
  letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
  marginTop: 48, marginBottom: 16,
}
const firstHeadingStyle: React.CSSProperties = { ...headingStyle, marginTop: 0 }
const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--serif)', fontWeight: 400,
  fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
  color: 'var(--ink-70)', marginBottom: 16,
}

export default function FinancialPlanningCostWorthItPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Financial Planning', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning' },
        { name: 'Financial Planning Cost', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning/financial-planning-cost-worth-it' },
      ]} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        minHeight: '48vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(100px,14vh,160px) var(--gut) clamp(40px,6vh,72px)',
        background: 'linear-gradient(168deg, #2A6452, #214E40)',
        color: 'var(--cream)',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          opacity: 0.06, mixBlendMode: 'multiply', backgroundImage: GRAIN, zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.38)', marginBottom: '24px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/ecosystem/corporation" style={{ color: 'inherit', textDecoration: 'none' }}>CORPORATION</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/ecosystem/corporation/financial-planning" style={{ color: 'inherit', textDecoration: 'none' }}>FINANCIAL PLANNING</Link>
          </div>

          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '14px',
          }}>
            PREMIUM SERVICES CORPORATION
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)', color: 'var(--cream)',
            maxWidth: '720px', textWrap: 'balance',
          }}>
            {QUESTION}
          </h1>

          <div style={{
            height: '2px', background: 'var(--gold)',
            width: 'clamp(80px,16vw,160px)',
            marginTop: '24px',
          }} />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <article style={{ background: 'var(--cream)', padding: 'var(--section-pad) var(--gut)' }}>
        <div style={{ maxWidth: '720px' }}>
          <h2 style={firstHeadingStyle}>The honest answer on cost</h2>
          <p style={bodyStyle}>
            Financial planning costs vary based on the complexity of your situation and the scope of work involved. For a straightforward engagement covering a small business owner&apos;s personal and business financial picture, initial planning work and an annual review relationship typically ranges from several hundred to several thousand dollars per year depending on the provider and the depth of engagement.
          </p>
          <p style={bodyStyle}>
            At Premium Services Corporation, financial planning is integrated into the broader accounting and advisory relationship rather than priced as a standalone service. This means the cost is part of a comprehensive engagement rather than a separate line item — and it means the planning is informed by current, accurate financial data rather than reconstructed from documents gathered for a planning meeting.
          </p>

          <h2 style={headingStyle}>The right question is not cost — it is return</h2>
          <p style={bodyStyle}>
            Asking what financial planning costs is the wrong starting point. The right question is: what does it return? And the answer, for almost every business owner who engages in genuine financial planning, is that it returns more than it costs — often significantly more.
          </p>
          <p style={bodyStyle}>
            The returns come from multiple sources. Tax optimization — finding legal ways to reduce what you owe to the IRS and Rhode Island — is frequently the most immediate source of return. A business owner who has never had a tax strategy review often discovers deductions they have been missing, a retirement contribution strategy they have not been using, or an entity structure that is costing them more in self-employment tax than necessary. Any one of these can produce annual savings that dwarf the cost of the planning engagement.
          </p>

          <h2 style={headingStyle}>The compounding returns over time</h2>
          <p style={bodyStyle}>
            The most significant returns from financial planning are not the immediate tax savings — they are the compounding effects of better decisions made over time. A business owner who starts making Solo 401k contributions ten years earlier than they would have otherwise accumulates a retirement balance that reflects a decade of compound growth. A business owner who restructures to an S-Corp at the right time saves on self-employment tax every year for as long as the business operates. A business owner who builds a personal emergency fund before they need it navigates a difficult business quarter without a personal financial crisis.
          </p>
          <p style={bodyStyle}>
            These outcomes are difficult to assign a precise dollar value to in advance. But the business owners who have worked with financial planners for a decade can usually point to specific decisions that produced returns of five to ten times the cost of the planning relationship.
          </p>

          <h2 style={headingStyle}>What you discover in the first engagement</h2>
          <p style={bodyStyle}>
            Most business owners who engage in financial planning for the first time discover that they were leaving money on the table in ways they were not aware of. The most common findings are retirement contributions not being maximized, entity structure not optimized for the current income level, personal and business finances intermingled in ways that create tax complications, no protection strategy in place despite significant liability exposure, and no plan for what happens to the business if something happens to the owner.
          </p>
          <p style={bodyStyle}>
            None of these are unusual. They are the default condition of a business owner who is focused on running the business rather than on building the financial structure around it. The value of financial planning is the attention it brings to the financial picture that is easy to neglect when the business is the priority.
          </p>

          <h2 style={headingStyle}>When financial planning clearly pays for itself</h2>
          <p style={bodyStyle}>
            Financial planning clearly pays for itself when you are paying more in taxes than you need to. When you have no retirement savings strategy and you are paying full self-employment tax on income that could be structured more efficiently. When you have business debt and personal savings in low-yield accounts simultaneously. When you have no plan for the business if you become unable to work. When you are making major financial decisions — a hire, a loan, an acquisition — without a framework for evaluating them. In any of these situations, the return on financial planning is not speculative. It is specific and traceable.
          </p>
        </div>
      </article>

      {/* KEY TAKEAWAYS */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
      }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '24px',
          }}>
            KEY TAKEAWAYS
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
          }}>
            {TAKEAWAYS.map(t => (
              <div key={t.title} style={{
                background: 'var(--paper)',
                padding: '24px',
                borderLeft: '3px solid var(--gold)',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                  lineHeight: 'var(--lh-headline)', marginBottom: '8px',
                }}>
                  {t.title}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 'var(--t-body)', color: 'var(--ink-70)',
                  lineHeight: 'var(--lh-body)',
                }}>
                  {t.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED QUESTIONS */}
      <section style={{
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
      }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '20px',
          }}>
            RELATED QUESTIONS
          </div>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-headline)', lineHeight: 'var(--lh-headline)',
            color: 'var(--ink)', marginBottom: '32px',
          }}>
            More about financial planning.
          </h2>
          <div>
            {RELATED.map(r => (
              <Link key={r.href} href={r.href} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '18px 0',
                borderBottom: '1px solid var(--ink-15)',
                textDecoration: 'none',
                gap: '16px',
              }}>
                <span style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                  lineHeight: 'var(--lh-headline)',
                }}>
                  {r.q}
                </span>
                <span style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 12,
                  color: 'var(--gold-deep)', flexShrink: 0,
                }}>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(42,100,82,0.4), rgba(33,78,64,0) 55%), linear-gradient(165deg, #2A6452, #214E40)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          opacity: 0.06, mixBlendMode: 'multiply', backgroundImage: GRAIN, zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '560px' }}>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
            color: 'var(--cream)', textWrap: 'balance',
          }}>
            Questions about financial planning? <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s talk.</em>
          </h2>
          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.72)', marginTop: '16px', maxWidth: '440px',
          }}>
            Premium Services Corporation provides financial planning for business owners across New England.
          </p>
          <div style={{ marginTop: '28px' }}>
            <Link href="/ecosystem/corporation/contact" style={{
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              padding: '14px 36px',
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '11px',
              letterSpacing: '0.22em', textTransform: 'uppercase' as const,
              textDecoration: 'none', display: 'inline-block',
            }}>
              SCHEDULE A CONSULTATION →
            </Link>
          </div>
          <div style={{
            marginTop: '32px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.35)',
          }}>
            PREMIUM SERVICES CORPORATION · NO. 03
          </div>
        </div>
      </section>
    </>
  )
}
