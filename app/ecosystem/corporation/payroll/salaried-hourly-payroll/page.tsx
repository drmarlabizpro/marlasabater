import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'Can you handle payroll for businesses with both salaried and hourly employees?'

const ANSWER_PLAIN = 'Yes. Premium Services Corporation handles payroll for any combination of employee types — salaried, hourly, part-time, tipped, commissioned, and contractor arrangements within the same business. The calculations and compliance requirements differ by employee type but the underlying systems handle all of them within a single payroll run. Salaried payroll is fixed amount per period. Hourly requires accurate time tracking and FLSA overtime by workweek. Tipped employees involve tip credit rules. Mixed workforces are the norm, not the exception.'

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
  { title: 'All types handled', body: 'Salaried, hourly, part-time, tipped, commissioned — all managed within a single payroll engagement.' },
  { title: 'Exempt status requires care', body: 'Misclassifying a non-exempt employee as salaried exempt creates wage and hour liability.' },
  { title: 'Overtime by workweek', body: 'FLSA overtime is calculated per workweek, not per pay period — a common error in manual payroll.' },
  { title: 'Time data flows in', body: 'You submit hours. We handle calculations, compliance, deposits, and filings.' },
]

const RELATED = [
  { q: 'How much does payroll cost for a small business?', href: '/ecosystem/corporation/payroll/payroll-cost-small-business' },
  { q: 'What happens if I make a payroll tax mistake?', href: '/ecosystem/corporation/payroll/payroll-tax-mistake-consequences' },
  { q: 'Do I need a payroll service for one employee?', href: '/ecosystem/corporation/payroll/payroll-service-one-employee' },
  { q: 'What is the difference between an employee and a contractor?', href: '/ecosystem/corporation/payroll/employee-vs-contractor-payroll' },
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

export default function SalariedHourlyPayrollPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Payroll', url: 'https://marlasabater.com/ecosystem/corporation/payroll' },
        { name: 'Salaried and Hourly Payroll', url: 'https://marlasabater.com/ecosystem/corporation/payroll/salaried-hourly-payroll' },
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
          <h2 style={firstHeadingStyle}>Yes — and the complexity is manageable with the right systems</h2>
          <p style={bodyStyle}>
            Premium Services Corporation handles payroll for any combination of employee types — salaried, hourly, part-time, tipped, commissioned, and contractor arrangements within the same business. The calculations and compliance requirements differ by employee type but the underlying systems handle all of them within a single payroll run.
          </p>

          <h2 style={headingStyle}>Salaried employee payroll</h2>
          <p style={bodyStyle}>
            Salaried employees receive a fixed amount per pay period regardless of hours worked. The withholding calculation is straightforward: divide the annual salary by the number of pay periods in the year to get gross pay, then calculate federal and state income tax withholding based on the employee&apos;s W-4 elections, withhold Social Security and Medicare at the standard rates, and net pay is what remains.
          </p>
          <p style={bodyStyle}>
            The complexity with salaried employees tends to arise around exempt versus non-exempt status. Under the Fair Labor Standards Act, employees classified as exempt from overtime must be paid on a salary basis at or above the current minimum salary threshold and must meet the duties test for executive, administrative, or professional exemptions. Misclassifying a non-exempt employee as exempt and failing to pay overtime is a wage and hour violation that can result in back pay, penalties, and in some cases class action liability.
          </p>

          <h2 style={headingStyle}>Hourly employee payroll</h2>
          <p style={bodyStyle}>
            Hourly employees are paid based on hours worked. This requires accurate time tracking — either through a time clock system, a time tracking application, or manual timesheets. Overtime rules under the FLSA require time-and-a-half for hours worked beyond 40 in a workweek. Rhode Island follows the federal overtime standard.
          </p>
          <p style={bodyStyle}>
            Common errors in hourly payroll include failing to count all compensable time — pre-shift preparation, post-shift cleanup, required training, and travel between job sites during the workday can all be compensable — and calculating overtime based on the pay period rather than the workweek, which the FLSA does not permit.
          </p>

          <h2 style={headingStyle}>Tipped employees</h2>
          <p style={bodyStyle}>
            Rhode Island allows a tip credit — employers can pay tipped employees a cash wage below the regular minimum wage as long as tips bring the employee&apos;s total hourly compensation up to or above the standard minimum. If tips in any workweek do not bring the employee to minimum wage, the employer must make up the difference. Tip pooling arrangements have specific legal requirements. Proper documentation of tip income and compliance with tip credit rules requires careful payroll management.
          </p>

          <h2 style={headingStyle}>Mixed workforces in practice</h2>
          <p style={bodyStyle}>
            The most common challenge with mixed workforces is not the calculations themselves but the coordination. When some employees are salaried and some are hourly, payroll requires collecting time data for hourly employees while applying fixed amounts for salaried employees, applying different overtime rules by classification, maintaining separate records by employee type, and producing a single payroll run that accounts for all of it correctly.
          </p>
          <p style={bodyStyle}>
            Premium Services Corporation manages all of this through the payroll engagement. You submit time data for hourly employees on the schedule we establish together. We handle all calculations, compliance checks, and filings. You review and approve before payroll runs. Employees are paid on time every cycle regardless of how complex the workforce mix is.
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
