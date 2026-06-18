import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'How do I know if I need a financial plan?'

const ANSWER_PLAIN = 'If you are a business owner without a written financial plan that covers both business and personal finances, you need one. The clearest signs are: making financial decisions one at a time without a framework, not knowing your personal net worth, having no retirement savings strategy, carrying debt without a payoff plan, and feeling reactive rather than in control. A financial plan is not a budget or a goal list — it is a living strategy that connects your current position to where you want to be and identifies the actions to get there.'

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
  { title: 'Decisions without a framework', body: 'Making financial decisions one at a time without a connecting strategy is the clearest sign you need a plan.' },
  { title: 'Know your net worth', body: 'If you cannot state your net worth including business equity, you do not have a clear starting point.' },
  { title: 'Retirement beyond the exit', body: 'Depending entirely on a business sale for retirement security is a fragile single-point-of-failure plan.' },
  { title: 'Reactive to intentional', body: 'A financial plan shifts your relationship with money from reactive management to intentional direction.' },
]

const RELATED = [
  { q: 'What is the difference between planning and advising?', href: '/ecosystem/corporation/financial-planning/financial-planning-vs-advising' },
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

export default function DoINeedFinancialPlanPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Financial Planning', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning' },
        { name: 'Do I Need a Financial Plan', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning/do-i-need-financial-plan' },
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
          <h2 style={firstHeadingStyle}>The honest answer</h2>
          <p style={bodyStyle}>
            If you are a business owner and you do not have a written financial plan that covers both your business and your personal finances, you need one. The question is not really whether you need it — it is how much the absence of one is currently costing you.
          </p>

          <h2 style={headingStyle}>The clearest signs you need a financial plan</h2>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>You make financial decisions one at a time without a framework.</strong> You decided to take that equipment loan without knowing how it fit into your overall debt picture. You decided to hire without modeling what it would do to your cash flow for the next six months. You decided on your salary without knowing the optimal split between salary and distributions for your tax situation. These are not bad decisions necessarily — but decisions made in isolation rather than within a coherent plan accumulate into a financial position that is harder to change than one that was built intentionally.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>You do not know your personal net worth.</strong> If you cannot state with reasonable confidence what you own minus what you owe — including business equity, personal savings, real estate equity, and debt — you do not have a clear financial picture. You cannot plan from a starting point you cannot see.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>You have no retirement savings strategy.</strong> Business owners who plan to sell the business and live on the proceeds have a retirement strategy that depends entirely on a single exit event going well at the right time. That is a fragile plan. Most financial planners recommend building retirement savings independently of the business exit so that the sale is a supplement to retirement security rather than the entirety of it.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>You are carrying debt without a payoff plan.</strong> Business debt and personal debt both have costs. Interest compounds. Carrying high-interest debt while simultaneously holding savings in low-yield accounts is a common pattern that a financial plan addresses directly.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>You feel reactive rather than in control of your finances.</strong> This is the most common description of small business owners who do not have a plan. Money comes in, money goes out, and you manage in the moment rather than from a strategy. A financial plan does not eliminate uncertainty — it gives you a framework for making decisions within it.
          </p>

          <h2 style={headingStyle}>What a financial plan is not</h2>
          <p style={bodyStyle}>
            A financial plan is not a budget spreadsheet. It is not a list of financial goals. It is not a one-time document produced at a meeting and filed away. A real financial plan is a living strategy that gets reviewed and updated as your business and life change. It connects your current financial position to where you want to be and identifies the specific actions required to close the gap.
          </p>

          <h2 style={headingStyle}>What changes when you have one</h2>
          <p style={bodyStyle}>
            Business owners who engage in genuine financial planning consistently report the same shift — from reactive to intentional. They know what their business needs to generate for them to hit their personal financial goals. They know what levers to pull when performance is above or below plan. They make decisions about hiring, investment, and structure within a framework rather than in isolation. The financial picture is no longer something that happens to them — it is something they are directing.
          </p>

          <h2 style={headingStyle}>Where to start</h2>
          <p style={bodyStyle}>
            The starting point is an honest assessment of your current position — business financials, personal balance sheet, debt structure, and retirement savings. Premium Services Corporation begins every financial planning engagement with this assessment before making any recommendations. You cannot plan from a position you have not clearly seen.
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
