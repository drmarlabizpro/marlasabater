import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'How often will we meet to review my financials?'

const ANSWER_PLAIN = 'Most small businesses should review financials with their accountant at least quarterly. A quarterly review covers profit and loss, cash flow, what changed since last review, and forward-looking decisions. Monthly reviews make sense for businesses in active growth, tight cash flow situations, major transition periods, or lender preparation. Premium Services Corporation builds an explicit cadence into every engagement so reviews happen reliably — not only when a problem appears.'

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
  { title: 'Quarterly minimum', body: 'Every small business should sit down with their accountant at least four times a year — not just at tax time.' },
  { title: 'Monthly for complexity', body: 'Active growth, tight cash flow, major transitions, or lender prep all warrant monthly reviews.' },
  { title: 'Consistency builds clarity', body: 'A predictable cadence keeps decisions ahead of problems rather than reacting after them.' },
  { title: 'Always-on access', body: 'Between scheduled reviews, you have access to your advisor when major decisions arise.' },
]

const RELATED = [
  { q: 'What does monthly bookkeeping include?', href: '/ecosystem/corporation/accounting/what-does-bookkeeping-include' },
  { q: 'How is a bookkeeper different from an accountant?', href: '/ecosystem/corporation/accounting/bookkeeper-vs-accountant' },
  { q: 'Do I need an accountant if I use QuickBooks?', href: '/ecosystem/corporation/accounting/do-i-need-accountant-with-quickbooks' },
  { q: 'What are CFO services for a small business?', href: '/ecosystem/corporation/accounting/cfo-services-small-business' },
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

export default function HowOftenFinancialReviewPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Accounting', url: 'https://marlasabater.com/ecosystem/corporation/accounting' },
        { name: 'Financial Review Cadence', url: 'https://marlasabater.com/ecosystem/corporation/accounting/how-often-financial-review' },
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
            <Link href="/ecosystem/corporation/accounting" style={{ color: 'inherit', textDecoration: 'none' }}>ACCOUNTING</Link>
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
          <h2 style={firstHeadingStyle}>The minimum standard: quarterly</h2>
          <p style={bodyStyle}>
            Most small business owners review their financials too rarely. Many sit down with their accountant once a year — at tax time — and treat that meeting as both a tax filing and a financial review. By then, the year is already over. The decisions that could have improved it have already been made or missed.
          </p>
          <p style={bodyStyle}>
            The minimum standard for any small business should be a quarterly financial review. Four times a year, you sit down with your accountant or advisor and look at where the business actually is — not where you think it is, not where you hoped it would be when you set your goals in January, but where the numbers say it is right now.
          </p>

          <h2 style={headingStyle}>What a quarterly review covers</h2>
          <p style={bodyStyle}>
            A useful quarterly review is not just opening the books and reading numbers aloud. It is a structured conversation that covers four things.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>The profit and loss statement.</strong> Revenue, cost of goods, operating expenses, and net profit — for the quarter and year to date. The point is not just the totals; it is the trends. Is revenue accelerating or decelerating? Are expenses growing faster than revenue? Are margins holding?
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Cash flow.</strong> Cash position, expected inflows and outflows for the next quarter, and any tight points on the horizon. Profitable businesses run out of cash all the time. Reviewing cash flow quarterly catches problems while there is still time to address them.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>What changed since last review.</strong> Major wins, new client relationships, lost accounts, hires, expense increases, anything that shifted. Context matters. A 20 percent revenue jump means different things depending on whether it came from one new client or from broad-based growth.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Forward-looking decisions.</strong> What is coming up. A planned hire. A potential expansion. A tax payment due. A loan application. The review surfaces decisions before they are urgent so the financial implications can be considered properly.
          </p>

          <h2 style={headingStyle}>When monthly reviews make sense</h2>
          <p style={bodyStyle}>
            Quarterly is the floor. Some businesses benefit from monthly reviews.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Active growth.</strong> When revenue is climbing fast and the business is changing month to month, quarterly reviews leave too much time between checkpoints. Monthly keeps the conversation current.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Tight cash flow.</strong> When the business is cash-constrained — paying for growth, recovering from a slow stretch, carrying significant receivables — monthly cash forecasting prevents the surprises that come from a quarterly cadence.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Major transitions.</strong> A new location, a large hire, an acquisition, a system migration. Periods of change deserve closer attention than steady-state operations.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Lender or investor preparation.</strong> When you are working toward a loan application, an investor conversation, or a sale, monthly reviews build the financial history and discipline that those parties want to see.
          </p>

          <h2 style={headingStyle}>The value of consistency</h2>
          <p style={bodyStyle}>
            The cadence matters more than the exact frequency. What undermines most small businesses is not the choice between monthly and quarterly — it is the fact that reviews happen only when something goes wrong. Reactive reviews tell you what already happened. Scheduled reviews shape what happens next.
          </p>
          <p style={bodyStyle}>
            A consistent cadence also changes the way the business runs between reviews. When you know a review is coming, you keep your books current, you stay aware of your numbers, and you bring forward questions instead of letting them accumulate.
          </p>

          <h2 style={headingStyle}>What you will always have access to</h2>
          <p style={bodyStyle}>
            Premium Services Corporation builds an explicit review cadence into every accounting engagement — quarterly at minimum, monthly when the business calls for it. Between scheduled reviews, you have access to your advisor when major decisions arise. A new opportunity comes up. A vendor proposes terms. A staff question turns into a financial one. You do not wait for the next scheduled meeting to get input on the things that matter.
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
            More about accounting.
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
            Questions about your accounting? <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s talk.</em>
          </h2>
          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.72)', marginTop: '16px', maxWidth: '440px',
          }}>
            Premium Services Corporation handles accounting and bookkeeping for businesses across New England.
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
