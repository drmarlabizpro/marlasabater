import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'What is the difference between an employee and an independent contractor for payroll?'

const ANSWER_PLAIN = 'Employees require federal and state withholding, employer tax matching, unemployment insurance contributions, workers compensation coverage, and W-2 forms. Independent contractors receive their full payment without withholding and get a 1099-NEC at year end if paid $600 or more. The IRS uses a multi-factor behavioral, financial, and relationship test for classification. Rhode Island uses the ABC test for unemployment and workers compensation. Misclassification triggers substantial back taxes, penalties, and interest.'

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
  { title: 'Contract language is not enough', body: 'A worker who is functionally an employee is an employee regardless of what a contract says.' },
  { title: 'Rhode Island uses the ABC test', body: 'The B prong — work outside usual business — is difficult for many RI businesses to satisfy.' },
  { title: 'Back taxes plus penalties', body: 'Misclassification triggers back withholding, employer taxes, unemployment, workers comp, and interest.' },
  { title: 'Classify before you hire', body: 'Evaluating the relationship before classification is far less costly than correcting it after an audit.' },
]

const RELATED = [
  { q: 'How much does payroll cost for a small business?', href: '/ecosystem/corporation/payroll/payroll-cost-small-business' },
  { q: 'What happens if I make a payroll tax mistake?', href: '/ecosystem/corporation/payroll/payroll-tax-mistake-consequences' },
  { q: 'Do I need a payroll service for one employee?', href: '/ecosystem/corporation/payroll/payroll-service-one-employee' },
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

export default function EmployeeVsContractorPayrollPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Payroll', url: 'https://marlasabater.com/ecosystem/corporation/payroll' },
        { name: 'Employee vs Contractor', url: 'https://marlasabater.com/ecosystem/corporation/payroll/employee-vs-contractor-payroll' },
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
          <h2 style={firstHeadingStyle}>Why the distinction matters so much</h2>
          <p style={bodyStyle}>
            How you classify a worker determines your entire payroll and tax obligation to them. Employees require withholding, employer tax matching, unemployment insurance contributions, workers&apos; compensation coverage, and W-2 forms. Independent contractors receive their full payment without withholding and get a 1099-NEC at year end if you pay them $600 or more. The difference in cost and administrative burden is significant. The consequences of getting it wrong are more significant.
          </p>

          <h2 style={headingStyle}>The IRS test for worker classification</h2>
          <p style={bodyStyle}>
            The IRS uses a multi-factor test built around three categories of evidence. Behavioral control examines whether the business controls how the worker does their job — not just what the outcome is, but the method, the tools, the schedule, and the sequence of work. Financial control examines whether the business controls the economic aspects of the worker&apos;s job — whether they are paid a fixed salary or by the job, whether they can work for other clients, whether they have a significant investment in their own tools and equipment. The type of relationship examines whether there is a written contract describing the relationship as independent, whether the work is a key aspect of the regular business, and how permanent the relationship is.
          </p>
          <p style={bodyStyle}>
            No single factor is determinative. The IRS weighs the totality of the relationship. A worker who signs a contract saying they are an independent contractor but who shows up every day, uses your equipment, follows your procedures, and works exclusively for you is almost certainly an employee in the IRS&apos;s view regardless of what the contract says.
          </p>

          <h2 style={headingStyle}>Rhode Island&apos;s classification rules</h2>
          <p style={bodyStyle}>
            Rhode Island uses the ABC test for unemployment insurance and workers&apos; compensation purposes. Under the ABC test, a worker is presumed to be an employee unless the employer can demonstrate all three of the following: the worker is free from control and direction in the performance of the work, the work is performed outside the usual course of the employer&apos;s business or outside all places of business of the employer, and the worker is customarily engaged in an independently established trade, occupation, profession, or business of the same nature as the work performed.
          </p>
          <p style={bodyStyle}>
            The B prong — that the work is outside the usual course of the employer&apos;s business — is particularly difficult for many Rhode Island businesses to satisfy. A construction company that uses subcontractors for carpentry work cannot easily argue that carpentry is outside the usual course of its business.
          </p>

          <h2 style={headingStyle}>The consequences of misclassification</h2>
          <p style={bodyStyle}>
            If the IRS or Rhode Island determines that workers you classified as independent contractors were actually employees, the back taxes owed include the employee&apos;s share of Social Security and Medicare that you should have withheld, your employer matching share of Social Security and Medicare, federal and state income taxes that should have been withheld (reduced by what the worker paid in self-employment tax), federal and state unemployment taxes, and interest on all of the above from the date each amount should have been paid.
          </p>
          <p style={bodyStyle}>
            Rhode Island additionally assesses penalties for failure to maintain workers&apos; compensation coverage for misclassified workers. The Department of Labor and Training has an active misclassification unit and conducts industry-specific audits.
          </p>

          <h2 style={headingStyle}>How to get classification right</h2>
          <p style={bodyStyle}>
            The safest approach is to evaluate every worker relationship against the IRS and Rhode Island tests before you classify them — not after a problem develops. When a relationship is genuinely ambiguous, a written independent contractor agreement that accurately reflects the actual working relationship (not just the preferred outcome) provides some protection. Premium Services Corporation reviews classification questions as part of the advisory relationship so these decisions are made correctly from the start.
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
