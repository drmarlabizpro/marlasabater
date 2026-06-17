import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'What does monthly bookkeeping actually include?'

const ANSWER_PLAIN = 'Monthly bookkeeping covers every financial transaction your business makes — categorized, reconciled, and organized so your books reflect reality. At the end of each month you know exactly where your money went, what came in, and where you stand. The work includes transaction categorization, bank reconciliation, monthly profit and loss statements, balance sheets, and cash flow reporting. Together these deliverables form the foundation of every other financial decision your business makes.'

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
  { title: 'Monthly close', body: 'Books are closed and reconciled every month without exception. No backlogs.' },
  { title: 'Five core deliverables', body: 'Transaction categorization, bank reconciliation, P&L, balance sheet, and cash flow reporting.' },
  { title: 'Decisions require data', body: 'Clean monthly books are the foundation of every good business decision.' },
  { title: 'Tax readiness', body: 'When books are current year-round, tax season is never a scramble.' },
]

const RELATED = [
  { q: 'How is a bookkeeper different from an accountant?', href: '/ecosystem/corporation/accounting/bookkeeper-vs-accountant' },
  { q: 'Do I need an accountant if I use QuickBooks?', href: '/ecosystem/corporation/accounting/do-i-need-accountant-with-quickbooks' },
  { q: 'What are CFO services for a small business?', href: '/ecosystem/corporation/accounting/cfo-services-small-business' },
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

export default function WhatDoesBookkeepingIncludePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Accounting', url: 'https://marlasabater.com/ecosystem/corporation/accounting' },
        { name: 'What Does Bookkeeping Include', url: 'https://marlasabater.com/ecosystem/corporation/accounting/what-does-bookkeeping-include' },
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
          <h2 style={firstHeadingStyle}>The short answer</h2>
          <p style={bodyStyle}>
            Monthly bookkeeping covers every financial transaction your business makes — categorized, reconciled, and organized so your books reflect reality. At the end of each month you know exactly where your money went, what came in, and where you stand. No guessing. No scrambling at tax time.
          </p>

          <h2 style={headingStyle}>What gets done every month</h2>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Transaction categorization.</strong> Every dollar that moves through your business accounts gets assigned to the correct category. Office supplies go to supplies. A client payment goes to revenue. A vendor payment goes to cost of goods or operating expenses depending on what it was for. This sounds simple until you have 200 transactions a month across three accounts and a business credit card. Getting this right is the foundation of everything else. If transactions are miscategorized your financial statements are wrong, your tax return is wrong, and every decision you make based on those numbers is based on bad information.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Bank reconciliation.</strong> Every month your bookkeeper reconciles your books against your actual bank statements. This means matching every transaction in your accounting software to the corresponding entry on your bank statement until the two agree exactly. Reconciliation catches errors, catches duplicate entries, catches fraudulent charges, and confirms that your records match reality. A business whose books have never been reconciled is flying blind.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Profit and loss statement.</strong> The P&amp;L shows your revenue, your expenses, and your net income for the month. It is the single most important financial document a small business has. It tells you whether you are actually making money, what your margins look like, and whether your cost structure is sustainable. Most business owners who do not have monthly bookkeeping are making decisions about hiring, pricing, and investment without ever seeing a current P&amp;L.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Balance sheet.</strong> The balance sheet shows what you own (assets), what you owe (liabilities), and what is left (equity) at a specific point in time. It is the complement to the P&amp;L. Together they give you the complete financial picture of your business.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Cash flow reporting.</strong> Cash flow is not the same as profit. A business can be profitable on paper and still run out of cash. Monthly cash flow reporting shows you the movement of actual cash — what came in, what went out, and what your cash position looks like going forward. This is what tells you whether you can make payroll next month, whether you can afford that piece of equipment, or whether you need to accelerate collections.
          </p>

          <h2 style={headingStyle}>What good bookkeeping makes possible</h2>
          <p style={bodyStyle}>
            When your books are clean and current every month, everything downstream becomes easier and more accurate. Your tax preparer has real numbers to work with. Your banker can see a real financial history when you apply for a loan. Your business advisor can give you real guidance based on real data. You can make decisions with confidence because you know what the numbers actually say.
          </p>

          <h2 style={headingStyle}>What happens when bookkeeping is neglected</h2>
          <p style={bodyStyle}>
            Most small business owners who do their own bookkeeping — or who let it slide — discover the problem at the worst possible time. Tax season arrives and the books are months behind. A loan application requires two years of financial statements that do not exist. A partnership opportunity requires due diligence on financials that are unreliable. The cost of catching up is always higher than the cost of staying current.
          </p>

          <h2 style={headingStyle}>Premium Services Corporation&apos;s approach</h2>
          <p style={bodyStyle}>
            Every client gets a monthly close. Books are reconciled, statements are produced, and a brief summary is sent with the key numbers and anything that needs attention. You do not need to ask for your financials. They arrive every month without fail.
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
