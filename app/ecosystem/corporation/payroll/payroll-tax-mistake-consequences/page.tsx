import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'What happens if I make a payroll tax mistake?'

const ANSWER_PLAIN = 'Payroll tax errors trigger IRS failure-to-deposit penalties that scale from 2 percent to 15 percent of the unpaid deposit, plus interest. Rhode Island assesses its own penalties on top. The most serious consequence is the Trust Fund Recovery Penalty, which can be assessed personally against individuals responsible for collecting and paying over payroll taxes and equals 100 percent of the unpaid trust fund taxes. Worker misclassification triggers a separate set of back taxes, penalties, and interest.'

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
  { title: 'Up to 15% penalty', body: 'IRS late deposit penalties reach 15% of the unpaid deposit amount per occurrence.' },
  { title: 'State adds on top', body: 'Rhode Island assesses separate penalties independently of federal penalties.' },
  { title: 'Personal liability possible', body: 'The Trust Fund Recovery Penalty can follow responsible individuals personally after a business closes.' },
  { title: 'Misclassification is audited', body: 'Rhode Island actively audits worker classification in construction, food service, and transportation.' },
]

const RELATED = [
  { q: 'How much does payroll cost for a small business?', href: '/ecosystem/corporation/payroll/payroll-cost-small-business' },
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

export default function PayrollTaxMistakeConsequencesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Payroll', url: 'https://marlasabater.com/ecosystem/corporation/payroll' },
        { name: 'Payroll Tax Mistake Consequences', url: 'https://marlasabater.com/ecosystem/corporation/payroll/payroll-tax-mistake-consequences' },
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
          <h2 style={firstHeadingStyle}>Payroll tax errors are the most expensive small business mistakes</h2>
          <p style={bodyStyle}>
            The IRS treats payroll tax compliance as a high priority. Payroll taxes — the amounts withheld from employee paychecks plus the employer&apos;s matching share — are technically held in trust for the government. When they are not deposited on time and in the correct amount, the IRS treats it as misappropriation of funds it is owed. The penalty structure reflects that seriousness.
          </p>

          <h2 style={headingStyle}>The federal penalty structure</h2>
          <p style={bodyStyle}>
            The IRS assesses failure-to-deposit penalties on a sliding scale based on how late the deposit is. Deposits one to five days late incur a 2 percent penalty. Six to fifteen days late: 5 percent. More than fifteen days late: 10 percent. Deposits received after the IRS issues a demand notice: 15 percent. These percentages apply to the amount of the late deposit, not to the total payroll. On a $15,000 payroll tax deposit that is three weeks late, the penalty is $1,500 before interest begins accruing.
          </p>
          <p style={bodyStyle}>
            Penalties compound quarterly. A business that misses deposits for a full year can accumulate penalties that exceed the original tax owed.
          </p>

          <h2 style={headingStyle}>State penalties add on top</h2>
          <p style={bodyStyle}>
            Rhode Island assesses its own penalties for late payroll tax deposits and late quarterly returns. The state and federal penalties are calculated and assessed independently — they do not offset each other. A late deposit that triggers both federal and state penalties can quickly become a significant liability.
          </p>

          <h2 style={headingStyle}>The Trust Fund Recovery Penalty</h2>
          <p style={bodyStyle}>
            The most serious consequence of payroll tax non-compliance is the Trust Fund Recovery Penalty. The IRS can assess this penalty personally against any individual who was responsible for collecting and paying over payroll taxes and who willfully failed to do so. This means the penalty can follow you personally even if the business closes, declares bankruptcy, or changes ownership. The Trust Fund Recovery Penalty equals 100 percent of the unpaid trust fund taxes — meaning the IRS can collect the full amount of employee withholding that was not paid over from the responsible individual personally.
          </p>
          <p style={bodyStyle}>
            This is not a worst-case theoretical. It is assessed in cases where a business has chronic payroll tax problems and the IRS determines that someone in the organization had decision-making authority over payments.
          </p>

          <h2 style={headingStyle}>Worker misclassification penalties</h2>
          <p style={bodyStyle}>
            A separate category of payroll error involves classifying employees as independent contractors. If the IRS or Rhode Island Department of Labor determines that workers you treated as contractors were actually employees, the back taxes, penalties, and interest on all payroll taxes that should have been withheld and matched can be substantial. Rhode Island has been particularly active in misclassification audits in construction, food service, and transportation industries.
          </p>

          <h2 style={headingStyle}>How a payroll service eliminates most of this risk</h2>
          <p style={bodyStyle}>
            When a payroll service handles deposits and filings, the mechanical compliance risk is managed by professionals whose job is to get it right every time. Deposit schedules are maintained automatically. Returns are filed on time. If an error occurs on the provider&apos;s side, they are responsible for resolving it with the taxing authority.
          </p>
          <p style={bodyStyle}>
            The risk that remains — worker classification, for example — requires advisory guidance, not just processing. Premium Services Corporation addresses classification questions as part of the broader advisory relationship so these decisions are made correctly before they become audit issues.
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
