import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'What is the difference between financial planning and financial advising?'

const ANSWER_PLAIN = 'Financial advising typically refers to investment portfolio management — recommending products, allocating assets, and monitoring performance. Financial planning is broader: it starts with your complete financial picture (income, debt, business equity, retirement, insurance, estate) and builds a comprehensive strategy. For business owners the distinction matters because the business itself is usually the largest financial asset, and a plan that ignores it is incomplete. Integrated planning that covers business and personal sides together produces better outcomes than coordinating between separate advisors.'

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
  { title: 'Advising focuses on investments', body: 'Traditional financial advising manages portfolios. It does not address the full financial picture.' },
  { title: 'Planning is comprehensive', body: 'Financial planning covers income, debt, business equity, retirement, insurance, and estate — all together.' },
  { title: 'Business owners need both sides', body: 'A plan that ignores business equity and business income structure is incomplete for any business owner.' },
  { title: 'Integration produces better plans', body: 'Having accounting, tax, and financial planning in one relationship eliminates coordination gaps.' },
]

const RELATED = [
  { q: 'How do I know if I need a financial plan?', href: '/ecosystem/corporation/financial-planning/do-i-need-financial-plan' },
  { q: 'How do I separate personal and business finances?', href: '/ecosystem/corporation/financial-planning/separate-personal-business-finances' },
  { q: 'When should I start retirement planning?', href: '/ecosystem/corporation/financial-planning/business-owner-retirement-planning' },
  { q: 'What does financial planning cost?', href: '/ecosystem/corporation/financial-planning/financial-planning-cost-worth-it' },
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

export default function FinancialPlanningVsAdvisingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Financial Planning', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning' },
        { name: 'Financial Planning vs Advising', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning/financial-planning-vs-advising' },
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
          <h2 style={firstHeadingStyle}>Two different scopes of work</h2>
          <p style={bodyStyle}>
            Financial advising and financial planning are related but distinct. Understanding the difference helps you know what you are actually getting when you engage either type of professional — and more importantly, what you might be missing.
          </p>
          <p style={bodyStyle}>
            Financial advising typically refers to the management of investment portfolios. A financial advisor in the traditional sense recommends investment products, manages asset allocation, and monitors portfolio performance relative to market benchmarks. The relationship is often centered on assets under management and the advisor&apos;s compensation is frequently tied to a percentage of those assets.
          </p>
          <p style={bodyStyle}>
            Financial planning is broader. It starts with your complete financial picture — income, expenses, debt, savings, business equity, real estate, insurance, and estate considerations — and builds a comprehensive strategy for how all of those pieces should work together over time. A financial plan is not a portfolio recommendation. It is a structured roadmap for how money should move through your life and your business.
          </p>

          <h2 style={headingStyle}>Why the distinction matters for business owners</h2>
          <p style={bodyStyle}>
            For most individuals without a business, the distinction between advising and planning is less critical. Their financial life is relatively straightforward — income from employment, some savings, investment accounts, a retirement fund, a home. A portfolio manager handles the investment piece and a tax preparer handles the filing. That covers most of it.
          </p>
          <p style={bodyStyle}>
            For a business owner the situation is fundamentally different. The business itself is usually the largest financial asset — often representing more value than all investment accounts combined. The business generates income in a way that creates specific tax planning opportunities. The business creates liability exposure that interacts with personal asset protection. The business will eventually be sold, transferred, or wound down, and how that happens has enormous financial implications.
          </p>
          <p style={bodyStyle}>
            A financial plan for a business owner that only covers investment accounts is missing the most important part of the picture. The business has to be in the plan.
          </p>

          <h2 style={headingStyle}>What a complete financial plan covers for a business owner</h2>
          <p style={bodyStyle}>
            A comprehensive financial plan for a business owner addresses the interaction between business finances and personal finances rather than treating them separately. It covers how money moves from the business to the owner — through salary, distributions, and retirement contributions — and how those choices affect both business taxes and personal taxes. It covers the owner&apos;s personal balance sheet including business equity, personal savings, debt, and real estate. It covers retirement strategy that accounts for the fact that business owners do not have employer matching — they have to build retirement savings intentionally through vehicles like Solo 401k, SEP-IRA, or SIMPLE IRA. It covers protection — life insurance, disability insurance, and business overhead insurance — structured appropriately for someone whose income depends on their ability to keep working. And it covers what happens to the business eventually — whether that is a sale, a transfer to family, a partner buyout, or an orderly wind-down.
          </p>

          <h2 style={headingStyle}>How Premium Services Corporation approaches financial planning</h2>
          <p style={bodyStyle}>
            Financial planning at Premium Services Corporation starts with both sides of the picture — the business and the individual — and builds the strategy with both in view. This is possible because the accounting and tax work is happening in the same relationship. The person helping you plan your retirement contributions is the same person who sees your business financials every month. That integration produces better plans than coordinating between separate advisors who each see only part of the picture.
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
