import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'Do I need a payroll service if I only have one employee?'

const ANSWER_PLAIN = 'Yes. The compliance requirements for one employee are essentially the same as for twenty — federal and state withholding, Social Security and Medicare, federal and state unemployment insurance, quarterly payroll tax returns, and year-end W-2 preparation. A business owner managing payroll for one employee typically spends two to four hours per month on it, and first-time employers make payroll mistakes at a high rate. A payroll service for a single employee usually pays for itself in time saved and penalties avoided.'

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
  { title: 'Same rules apply', body: 'One employee triggers the same federal and state compliance requirements as twenty.' },
  { title: 'First hire creates obligations', body: 'EIN, state registration, deposit schedule, quarterly filings, and W-2 — all required from day one.' },
  { title: 'Time cost is real', body: 'Two to four hours per month managing payroll for one employee adds up to 24–48 hours annually.' },
  { title: 'Errors are common', body: 'First-time employers make payroll mistakes at a high rate. The penalty cost exceeds the service cost.' },
]

const RELATED = [
  { q: 'How much does payroll cost for a small business?', href: '/ecosystem/corporation/payroll/payroll-cost-small-business' },
  { q: 'What happens if I make a payroll tax mistake?', href: '/ecosystem/corporation/payroll/payroll-tax-mistake-consequences' },
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

export default function PayrollServiceOneEmployeePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Payroll', url: 'https://marlasabater.com/ecosystem/corporation/payroll' },
        { name: 'Payroll Service One Employee', url: 'https://marlasabater.com/ecosystem/corporation/payroll/payroll-service-one-employee' },
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
          <h2 style={firstHeadingStyle}>The short answer is yes</h2>
          <p style={bodyStyle}>
            The compliance requirements for one employee are essentially the same as for twenty. The IRS does not scale its expectations based on your workforce size. Federal income tax withholding, Social Security and Medicare withholding and matching, federal unemployment tax, Rhode Island income tax withholding, Rhode Island unemployment insurance, quarterly federal and state payroll tax returns, and year-end W-2 preparation all apply to a business with a single employee.
          </p>

          <h2 style={headingStyle}>What hiring your first employee actually requires</h2>
          <p style={bodyStyle}>
            Before you pay your first employee you need a federal Employer Identification Number if you do not already have one. You need to have the employee complete a W-4 so you know how much federal income tax to withhold. You need to register with Rhode Island as an employer for state income tax withholding purposes. You need to register for Rhode Island unemployment insurance. You need to set up a deposit schedule with the IRS — either monthly or semi-weekly depending on your payroll tax liability.
          </p>
          <p style={bodyStyle}>
            Once those pieces are in place, every pay period requires calculating the employee&apos;s gross pay, calculating withholding for federal income tax based on their W-4, calculating the employee share of Social Security (6.2 percent) and Medicare (1.45 percent), calculating your matching employer share, and initiating payment to the employee. Then on a deposit schedule you make payroll tax deposits to the IRS. Quarterly you file Form 941. Annually you file Form 940 for federal unemployment tax and prepare and file the W-2.
          </p>

          <h2 style={headingStyle}>The time cost of doing it yourself</h2>
          <p style={bodyStyle}>
            A business owner managing payroll for one employee is typically spending two to four hours per month on payroll-related tasks — running calculations, initiating deposits, tracking deposit schedules, and staying current on rate changes. Rhode Island&apos;s state minimum wage, withholding rate tables, and unemployment insurance rates all change periodically. Staying current is part of the job.
          </p>
          <p style={bodyStyle}>
            Over the course of a year that is 24 to 48 hours of owner time spent on a compliance function rather than on running the business. At any reasonable valuation of an owner&apos;s time, a payroll service that costs $50 to $80 per month for a single employee pays for itself.
          </p>

          <h2 style={headingStyle}>The error cost of doing it yourself</h2>
          <p style={bodyStyle}>
            First-time employers make payroll mistakes at a high rate. The most common are incorrect withholding calculations, missed deposit deadlines, and incorrect quarterly return filings. Each of these triggers penalties. A single missed deposit deadline for a first-time employer typically results in a penalty notice and the associated stress of resolving it with the IRS — which takes time, often requires professional help, and costs more than the original penalty amount in total resolution cost.
          </p>

          <h2 style={headingStyle}>When does it make sense to manage payroll yourself</h2>
          <p style={bodyStyle}>
            It rarely makes sense for a business owner to manage payroll personally at any scale. The exception is a sole proprietor with no employees who is paying themselves through owner draws from a single-member LLC — in that structure there is no payroll in the traditional sense and no payroll tax compliance requirement. The moment you hire your first W-2 employee, the compliance burden justifies professional handling.
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
