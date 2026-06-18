import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'As a business owner, how do I separate personal and business finances?'

const ANSWER_PLAIN = 'The foundation is structural: a dedicated business checking account, a dedicated business credit card, and a commitment to running all business transactions through those accounts exclusively. Compensation structure — particularly the salary versus distribution split for S-Corp owners — is the highest-leverage decision. Personal financial security should be built independently of monthly business performance through a personal emergency fund and retirement accounts in your name. Separation requires ongoing maintenance, not a one-time setup.'

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
  { title: 'Structure first', body: 'Dedicated business checking and credit accounts are the non-negotiable foundation of financial separation.' },
  { title: 'Compensation is the key decision', body: 'How money moves from business to owner — salary vs distributions — is the highest-leverage financial planning decision for S-Corp owners.' },
  { title: 'Personal emergency fund', body: 'Personal financial security should not depend entirely on monthly business income. A personal emergency fund is essential.' },
  { title: 'Ongoing discipline required', body: 'Separation erodes without maintenance. Annual review of compensation structure and account hygiene is necessary.' },
]

const RELATED = [
  { q: 'What is the difference between planning and advising?', href: '/ecosystem/corporation/financial-planning/financial-planning-vs-advising' },
  { q: 'How do I know if I need a financial plan?', href: '/ecosystem/corporation/financial-planning/do-i-need-financial-plan' },
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

export default function SeparatePersonalBusinessFinancesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Financial Planning', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning' },
        { name: 'Separate Personal and Business Finances', url: 'https://marlasabater.com/ecosystem/corporation/financial-planning/separate-personal-business-finances' },
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
          <h2 style={firstHeadingStyle}>Why the separation matters</h2>
          <p style={bodyStyle}>
            Mixing personal and business finances creates problems that compound over time. It makes bookkeeping inaccurate because personal expenses appear in business records. It makes tax preparation more difficult and more expensive because every transaction has to be reviewed for business versus personal classification. It creates liability exposure because commingling funds can undermine the liability protection of an LLC or corporation — a concept called piercing the corporate veil. And it makes it impossible to see your business&apos;s true financial performance because the picture is contaminated with personal activity.
          </p>

          <h2 style={headingStyle}>The structural separation</h2>
          <p style={bodyStyle}>
            The foundation of financial separation is simple: a dedicated business checking account, a dedicated business credit card, and a commitment to running all business transactions through those accounts exclusively.
          </p>
          <p style={bodyStyle}>
            Business income goes into the business account. Business expenses are paid from the business account or the business credit card. Personal expenses are never paid from the business account. This sounds obvious but a significant percentage of small business owners either never set this up or let it erode over time.
          </p>
          <p style={bodyStyle}>
            The business account should also be the account from which payroll is funded — including your own salary if you are on payroll. This creates a clear, documented record of how money moves from the business to you.
          </p>

          <h2 style={headingStyle}>The compensation structure</h2>
          <p style={bodyStyle}>
            The most financially important dimension of separating business and personal finances is how money moves from the business to you. This is where most business owners have the most ambiguity — and where the financial planning conversation matters most.
          </p>
          <p style={bodyStyle}>
            For a sole proprietor or single-member LLC taxed as a disregarded entity, transfers from the business account to personal accounts are owner draws. They do not reduce your taxable income — your entire net business income is taxable regardless of how much you draw. The draw is just a movement of money between accounts you own.
          </p>
          <p style={bodyStyle}>
            For an S-Corp, compensation has two components: a reasonable salary that you pay yourself as a W-2 employee of your own business, and distributions from the business&apos;s after-tax profits. The salary is subject to payroll taxes. The distributions are not. Getting this split right — reasonable salary that satisfies the IRS standard, with the remainder taken as distributions — is one of the most valuable tax planning decisions available to small business owners and it requires deliberate structuring.
          </p>

          <h2 style={headingStyle}>Building personal financial stability independent of the business</h2>
          <p style={bodyStyle}>
            Separation is not just about structure — it is about building personal financial security that does not depend entirely on the business performing well in any given month. This means building a personal emergency fund that covers three to six months of personal expenses in a personal savings account separate from any business account. It means building retirement savings through accounts in your personal name — Solo 401k, SEP-IRA, or IRA — so that your retirement security does not depend entirely on your business income continuing.
          </p>
          <p style={bodyStyle}>
            Many business owners under-invest in personal financial security because every available dollar goes back into the business. This is understandable and sometimes correct. It is also a risk that compounds over time. A business that has a bad year should not also be a personal financial crisis.
          </p>

          <h2 style={headingStyle}>The ongoing maintenance</h2>
          <p style={bodyStyle}>
            Separation requires ongoing discipline. Periodically reviewing your business accounts to remove any personal transactions that crept in. Ensuring your compensation structure is reviewed annually as your business income changes. Keeping your personal and business financial plans connected — so that decisions about business investment are made with awareness of their effect on your personal financial position.
          </p>
          <p style={bodyStyle}>
            Premium Services Corporation addresses this as part of the financial planning engagement because the two sides are inseparable. A business plan that ignores your personal financial needs is incomplete. A personal financial plan that ignores your business is equally incomplete.
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
