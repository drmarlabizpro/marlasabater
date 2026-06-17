import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'How much does payroll service cost for a small business?'

const ANSWER_PLAIN = 'For most small businesses with one to ten employees running bi-weekly payroll, full-service payroll processing costs between $50 and $200 per month. That range reflects employee count, pay frequency, state filing complexity, and whether year-end W-2 preparation and quarterly reporting are included. The number that matters more than the monthly fee is what payroll errors cost — IRS penalties for late deposits run up to 15 percent of the unpaid tax per quarter, before Rhode Island adds its share.'

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
  { title: '$50–$200 monthly', body: 'Typical range for small businesses with one to ten employees on bi-weekly payroll.' },
  { title: 'Penalties dwarf the fee', body: 'IRS late deposit penalties reach 15% of unpaid tax. One mistake costs more than months of service.' },
  { title: 'Full service is complete', body: 'Calculations, deposits, filings, W-2s — everything handled, not just direct deposit.' },
  { title: 'Integrated approach', body: 'Payroll through Premium Services Corporation flows directly into accounting and tax preparation.' },
]

const RELATED = [
  { q: 'What happens if I make a payroll tax mistake?', href: '/ecosystem/corporation/payroll/payroll-tax-mistake-consequences' },
  { q: 'Do I need a payroll service if I only have one employee?', href: '/ecosystem/corporation/payroll/payroll-service-one-employee' },
  { q: 'What is the difference between an employee and a contractor?', href: '/ecosystem/corporation/payroll/employee-vs-contractor-payroll' },
  { q: 'Can you handle salaried and hourly employees?', href: '/ecosystem/corporation/payroll/salaried-hourly-payroll' },
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

export default function PayrollCostSmallBusinessPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Payroll', url: 'https://marlasabater.com/ecosystem/corporation/payroll' },
        { name: 'Payroll Cost Small Business', url: 'https://marlasabater.com/ecosystem/corporation/payroll/payroll-cost-small-business' },
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
            <Link href="/ecosystem/corporation/payroll" style={{ color: 'inherit', textDecoration: 'none' }}>PAYROLL</Link>
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
          <h2 style={firstHeadingStyle}>The honest range</h2>
          <p style={bodyStyle}>
            For most small businesses with one to ten employees running bi-weekly payroll, full-service payroll processing costs between $50 and $200 per month. That range reflects differences in employee count, pay frequency, state filing complexity, and whether the service includes year-end W-2 preparation and quarterly reporting.
          </p>
          <p style={bodyStyle}>
            The number that matters more than the monthly fee is what payroll errors cost. IRS penalties for late deposits run up to 15 percent of the unpaid tax per quarter. State penalties add on top of that. A single late deposit on a $10,000 payroll tax obligation costs $1,500 in federal penalties before Rhode Island adds its share. That is not a hypothetical — it is a common outcome for small businesses managing payroll on their own.
          </p>

          <h2 style={headingStyle}>What full-service payroll includes</h2>
          <p style={bodyStyle}>
            A full-service payroll provider handles more than just cutting checks or initiating direct deposits. Full service means calculating gross pay for every employee — including overtime, commissions, and variable compensation — withholding federal income tax, state income tax, Social Security, and Medicare from each paycheck, making tax deposits to the IRS and the Rhode Island Division of Taxation on the correct schedule, filing quarterly payroll tax returns (Form 941 federal, RI-941 state), filing unemployment insurance returns, and preparing and distributing W-2s at year end.
          </p>
          <p style={bodyStyle}>
            When a payroll service handles all of this, the penalty risk effectively transfers. If a deposit is late because of a processing error on the provider&apos;s side, that is their problem to resolve. When you manage payroll yourself, every error is your liability.
          </p>

          <h2 style={headingStyle}>What drives the cost up</h2>
          <p style={bodyStyle}>
            Several factors push payroll costs above the base range. Multiple pay frequencies — some employees weekly, some bi-weekly, some semi-monthly — add complexity. Multi-state employees require filings in each state where an employee works. Garnishments, levies, and child support orders require additional processing. Tip reporting for restaurant workers has specific requirements. Workers&apos; compensation integration, benefits deductions, and 401k contribution processing all add layers.
          </p>
          <p style={bodyStyle}>
            For most small businesses in Providence with a straightforward workforce, the base range is accurate. The more complex your payroll situation, the more the service is worth.
          </p>

          <h2 style={headingStyle}>The comparison that matters</h2>
          <p style={bodyStyle}>
            The question is not whether payroll service costs money. It is whether the cost of the service is less than the cost of the alternative. Time spent managing payroll yourself — learning the rules, staying current as they change, making deposits, filing returns, preparing W-2s — has a real cost even if it does not show up as a line item. Errors have a real cost that shows up as penalties. A payroll service that costs $100 a month and eliminates four hours of owner time and penalty risk is not an expense. It is a return.
          </p>

          <h2 style={headingStyle}>Premium Services Corporation&apos;s approach</h2>
          <p style={bodyStyle}>
            Payroll is handled as part of the broader financial relationship. You do not manage a separate vendor for payroll and another for accounting and another for tax. Everything runs through one relationship, which means payroll data flows directly into your bookkeeping and your tax preparation without translation errors or reconciliation gaps.
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
            More about payroll.
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
            Questions about your payroll? <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s talk.</em>
          </h2>
          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.72)', marginTop: '16px', maxWidth: '440px',
          }}>
            Premium Services Corporation handles payroll for businesses across New England.
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
