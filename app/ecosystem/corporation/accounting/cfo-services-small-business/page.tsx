import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'What are CFO services for a small business?'

const ANSWER_PLAIN = 'CFO services for a small business deliver the strategic financial oversight a Chief Financial Officer would provide — cash flow forecasting, financial planning, pricing and margin analysis, growth planning, and lender or investor preparation — without the cost of a full-time hire. Fractional CFO advisory is most valuable for businesses navigating growth, capital decisions, or complex financial structures. Premium Services Corporation integrates CFO-level advisory into the monthly accounting relationship.'

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
  { title: 'Strategic oversight', body: 'CFO services cover cash flow, planning, pricing, growth decisions, and lender preparation — not just recordkeeping.' },
  { title: 'No full-time hire required', body: 'Fractional CFO advisory delivers the thinking without the cost of a senior full-time employee.' },
  { title: 'Built into the relationship', body: 'Premium Services Corporation integrates advisory into the monthly accounting engagement.' },
  { title: 'For growing businesses', body: 'Most valuable when a business is navigating growth, capital decisions, or complex financial structures.' },
]

const RELATED = [
  { q: 'What does monthly bookkeeping include?', href: '/ecosystem/corporation/accounting/what-does-bookkeeping-include' },
  { q: 'How is a bookkeeper different from an accountant?', href: '/ecosystem/corporation/accounting/bookkeeper-vs-accountant' },
  { q: 'Do I need an accountant if I use QuickBooks?', href: '/ecosystem/corporation/accounting/do-i-need-accountant-with-quickbooks' },
  { q: 'How often will we review my financials?', href: '/ecosystem/corporation/accounting/how-often-financial-review' },
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

export default function CfoServicesSmallBusinessPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Accounting', url: 'https://marlasabater.com/ecosystem/corporation/accounting' },
        { name: 'CFO Services for Small Business', url: 'https://marlasabater.com/ecosystem/corporation/accounting/cfo-services-small-business' },
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
          <h2 style={firstHeadingStyle}>What a CFO actually does</h2>
          <p style={bodyStyle}>
            A Chief Financial Officer is the senior financial leader of a company. In a large business the CFO oversees all financial operations, manages financial risk, produces reports for the board and investors, leads financial planning and analysis, and advises the CEO on every major financial decision. The CFO is the person who answers the question: what does our financial position mean for what we should do next?
          </p>
          <p style={bodyStyle}>
            Most small businesses cannot afford a full-time CFO. Many do not need one. What they do need is the thinking — the strategic financial oversight — that a CFO provides. That is what fractional or outsourced CFO services deliver.
          </p>

          <h2 style={headingStyle}>What CFO-level advisory looks like for a small business</h2>
          <p style={bodyStyle}>
            For a small business, CFO-level advisory typically covers several areas that go beyond standard bookkeeping and tax preparation.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Cash flow forecasting</strong> means projecting your cash position weeks and months ahead based on your current revenue patterns, upcoming expenses, and known receivables. Most business owners discover cash problems when they arrive. Cash flow forecasting lets you see them coming and make adjustments before they become crises.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Financial planning</strong> means setting revenue targets, building expense budgets, and tracking performance against those targets throughout the year. Not a spreadsheet that gets forgotten in January — an active plan that gets reviewed and updated as your business evolves.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Pricing and margin analysis</strong> means understanding whether your prices are covering your costs at the level of detail that matters. Many small businesses are profitable overall but losing money on specific services, products, or client types without knowing it. Margin analysis by service line or product reveals where the real profitability is.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Growth planning</strong> means evaluating the financial implications of major decisions before you make them. Should you hire a full-time employee or keep using contractors? Can you afford a second location? What does the cash flow look like if revenue grows 30 percent but you have to invest in capacity first? These questions require financial modeling and someone who understands both the numbers and the business.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Lender and investor preparation</strong> means having your financial house in order when you need capital. Banks and investors evaluate businesses based on financial statements, financial history, and financial projections. A CFO-level advisor helps you present your business in the strongest possible terms and prepares the documentation lenders require.
          </p>

          <h2 style={headingStyle}>Who needs fractional CFO services</h2>
          <p style={bodyStyle}>
            Fractional CFO services are most valuable for businesses that have moved past the startup phase and are navigating growth, that are considering significant capital investment or debt, that have complex financial structures including multiple entities or revenue streams, or that are preparing for a major transaction such as a sale, acquisition, or partnership.
          </p>
          <p style={bodyStyle}>
            They are also valuable for business owners who feel like they are always reacting to their finances rather than directing them — who want to move from operating on instinct to operating on information.
          </p>

          <h2 style={headingStyle}>How Premium Services Corporation delivers this</h2>
          <p style={bodyStyle}>
            Premium Services Corporation integrates CFO-level advisory into the accounting relationship. Your books are kept current every month. Your financials are reviewed by an advisor who understands your business across time, not just at tax season. Quarterly strategy reviews cover cash flow, performance against plan, and decisions on the horizon. You have access to financial guidance when major decisions arise — not just an annual meeting with a tax preparer.
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
