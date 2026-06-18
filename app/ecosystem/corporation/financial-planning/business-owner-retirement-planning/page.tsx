import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'When should a business owner start thinking about retirement planning?'

const ANSWER_PLAIN = 'Now. The earlier retirement savings begin, the longer compounding works. Business owners face a particular challenge — there is no automatic employer-sponsored plan, so every contribution has to be deliberately funded. The most powerful vehicles for self-employed and small business owners are the Solo 401k and SEP-IRA, both of which offer substantially higher contribution limits than a standard IRA and reduce taxable income in the year contributed. The most financially secure business owners build retirement savings independent of the business exit and treat the eventual sale as a supplement, not the foundation.'

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
  { title: 'Start now', body: 'Every year of delay has a permanent cost. Compounding cannot be recreated retroactively.' },
  { title: 'Solo 401k for most self-employed', body: 'Higher contribution limits and Roth option make the Solo 401k the strongest vehicle for most self-employed owners.' },
  { title: 'Contributions reduce taxes', body: 'Retirement contributions reduce taxable income dollar for dollar — they are simultaneously savings and tax planning.' },
  { title: 'Exit is a supplement not a plan', body: 'Build retirement savings independent of the business exit. Treat the sale as a supplement to security you have already built.' },
]

const RELATED = [
  { q: 'What is the difference between planning and advising?', href: '/ecosystem/corporation/financial-planning/financial-planning-vs-advising' },
  { q: 'How do I know if I need a financial plan?', href: '/ecosystem/corporation/financial-planning/do-i-need-financial-plan' },
  { q: 'How do I separate personal and business finances?', href: '/ecosystem/corporation/financial-planning/separate-personal-business-finances' },
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

export default function BusinessOwnerRetirementPlanningPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Financial Planning', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning' },
        { name: 'Business Owner Retirement Planning', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning/business-owner-retirement-planning' },
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
          <h2 style={firstHeadingStyle}>Now. Always now.</h2>
          <p style={bodyStyle}>
            The answer to when a business owner should start thinking about retirement planning is the same regardless of when the question is asked. The earlier retirement savings begin, the longer compounding works. Every year of delay has a cost that is not recoverable — not because the money cannot be saved later, but because the years of growth on those earlier contributions cannot be recreated.
          </p>

          <h2 style={headingStyle}>The business owner&apos;s retirement challenge</h2>
          <p style={bodyStyle}>
            Business owners face a retirement planning challenge that employees do not. An employee participates in an employer-sponsored retirement plan — a 401k with employer matching, a pension, or both. The structure exists and contributions happen automatically with payroll. The employer contributes on their behalf. The benefit accumulates whether or not the employee is thinking about it.
          </p>
          <p style={bodyStyle}>
            A business owner has none of this by default. There is no automatic contribution mechanism. There is no employer match — or rather, the owner is both the employer and the employee and the match only happens if they set it up deliberately. Every dollar of retirement savings has to be actively chosen and funded. For most business owners, that means retirement savings consistently lose the competition against reinvestment in the business.
          </p>

          <h2 style={headingStyle}>The available vehicles</h2>
          <p style={bodyStyle}>
            The most powerful retirement savings vehicles for self-employed business owners and small business owners are the Solo 401k and the SEP-IRA.
          </p>
          <p style={bodyStyle}>
            A <strong style={{ color: 'var(--ink)' }}>Solo 401k</strong> is available to self-employed individuals with no employees other than a spouse. It allows contributions in two roles simultaneously — as an employee making elective deferrals up to the annual limit, and as the employer making profit-sharing contributions as a percentage of compensation. The combined contribution limit is substantially higher than a standard IRA. A Solo 401k also allows Roth contributions and loans against the balance, features not available in all retirement vehicles.
          </p>
          <p style={bodyStyle}>
            A <strong style={{ color: 'var(--ink)' }}>SEP-IRA</strong> is simpler to administer and available to businesses with employees as well as the self-employed. Contributions are made only by the employer — there are no employee elective deferrals. The contribution limit is a percentage of compensation up to an annual maximum. For self-employed individuals with no employees the Solo 401k typically allows higher contributions, but the SEP-IRA&apos;s simplicity makes it the right choice in some situations.
          </p>
          <p style={bodyStyle}>
            A <strong style={{ color: 'var(--ink)' }}>SIMPLE IRA</strong> is designed for businesses with up to 100 employees and requires employer contributions for all eligible employees. For a sole proprietor or small team, the Solo 401k or SEP-IRA is usually more appropriate.
          </p>

          <h2 style={headingStyle}>The tax benefit of retirement contributions</h2>
          <p style={bodyStyle}>
            Contributions to a Solo 401k or SEP-IRA reduce your taxable income in the year the contribution is made. For a business owner in a 22 or 24 percent federal tax bracket, a $20,000 retirement contribution reduces federal tax by $4,400 to $4,800. Add Rhode Island state income tax savings and the effective cost of the contribution is significantly less than the face value of the deposit. Retirement savings and tax planning are the same conversation.
          </p>

          <h2 style={headingStyle}>The business exit is not a retirement plan</h2>
          <p style={bodyStyle}>
            Many business owners plan to sell the business and use the proceeds to fund retirement. Sometimes this works. More often it is a plan built on assumptions that do not hold — the business is worth less at sale than expected, the market conditions at exit are unfavorable, the business cannot be sold without the owner staying involved, or the proceeds after tax are insufficient to support retirement.
          </p>
          <p style={bodyStyle}>
            The most financially secure business owners are those who build retirement savings independently of the business over time and treat the business exit as a supplement to that security rather than the foundation of it. Having both — retirement savings accumulated over time plus business equity realized at exit — produces resilience that neither provides alone.
          </p>

          <h2 style={headingStyle}>What Premium Services Corporation does</h2>
          <p style={bodyStyle}>
            Retirement planning at Premium Services Corporation is integrated with tax planning and financial planning rather than treated as a separate conversation. The contribution amount is optimized against your taxable income and your cash flow. The vehicle is selected based on your business structure, employee situation, and contribution goals. And the plan is reviewed annually as your income and business evolve.
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
