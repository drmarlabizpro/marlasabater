import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'When is the right time to hire a business advisor?'

const ANSWER_PLAIN = 'Earlier than most business owners think. The highest-value advisory work happens before major decisions — choosing a business structure, signing a first major contract, hiring a first employee, or taking on debt or investment. Decisions made without a strategic framework accumulate over time and become harder to unwind. Engaging an advisor late is still worthwhile, but starting earlier means fewer compounded issues to correct. The best time is always now.'

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
  { title: 'Before major decisions', body: 'The highest-value advisory happens before structure, contracts, hires, and capital decisions — not after.' },
  { title: 'Structure first', body: 'Business structure decisions have compounding tax and legal implications. Getting them right early is the highest-leverage advisory work.' },
  { title: 'Decisions compound', body: 'Every year without a strategic framework accumulates choices that become harder to unwind over time.' },
  { title: 'Never too late', body: 'Starting advisory late is harder but almost always worthwhile. The best time is always now.' },
]

const RELATED = [
  { q: 'What does a business advisor do?', href: '/ecosystem/corporation/business-advisory/what-does-business-advisor-do' },
  { q: 'How is advisory different from consulting?', href: '/ecosystem/corporation/business-advisory/business-advisory-vs-consulting' },
  { q: 'Can an advisor help with business structure?', href: '/ecosystem/corporation/business-advisory/business-structure-advice' },
  { q: 'What industries does Corporation advise?', href: '/ecosystem/corporation/business-advisory/industries-business-advisory' },
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

export default function WhenToHireBusinessAdvisorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Business Advisory', url: 'https://marlasabater.com/ecosystem/corporation/business-advisory' },
        { name: 'When to Hire a Business Advisor', url: 'https://marlasabater.com/ecosystem/corporation/business-advisory/when-to-hire-business-advisor' },
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
            <Link href="/ecosystem/corporation/business-advisory" style={{ color: 'inherit', textDecoration: 'none' }}>BUSINESS ADVISORY</Link>
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
          <h2 style={firstHeadingStyle}>The standard answer is wrong</h2>
          <p style={bodyStyle}>
            The most common answer to this question is some version of when things get complicated. When revenue hits a certain level. When you hire employees. When you are thinking about expansion. This answer is understandable but it is wrong, and following it costs business owners money they never recover.
          </p>
          <p style={bodyStyle}>
            The right time to engage a business advisor is before you make the decisions that determine your trajectory — not after you have made them and are living with the consequences.
          </p>

          <h2 style={headingStyle}>Before you choose your business structure</h2>
          <p style={bodyStyle}>
            The decision between a sole proprietorship, LLC, S-Corp, C-Corp, and various partnership structures has tax, legal, and operational implications that compound over years. Most new business owners make this decision based on whatever their state&apos;s filing website makes easiest, or based on advice from someone who is not a financial professional. Getting the structure right at the start costs almost nothing. Restructuring later — after you have built the business on the wrong foundation — costs time, money, and in some cases creates tax events that are painful and unavoidable.
          </p>

          <h2 style={headingStyle}>Before you sign your first major contract</h2>
          <p style={bodyStyle}>
            Whether it is a commercial lease, a partnership agreement, a vendor contract, or a client contract with unusual terms, the time to review the financial implications is before you sign — not after. A business advisor does not replace a lawyer for contract review. But they can model the financial implications of what you are agreeing to. A five-year lease at a rent that is 40 percent of your current revenue looks very different if your revenue is growing than if it is flat.
          </p>

          <h2 style={headingStyle}>Before you hire your first employee</h2>
          <p style={bodyStyle}>
            The decision to hire your first W-2 employee changes your business fundamentally. It creates payroll tax obligations, unemployment insurance requirements, workers&apos; compensation requirements, and in most states additional regulatory compliance. It also changes your cash flow profile. Having a business advisor walk through the financial model of your first hire — including what revenue you need to sustain it, what the all-in cost is, and how it affects your tax position — before you make the offer is far less expensive than discovering the answers afterward.
          </p>

          <h2 style={headingStyle}>Before you take on debt or investment</h2>
          <p style={bodyStyle}>
            Whether you are considering a business loan, a line of credit, an investor, or a partner who is bringing capital, the financial and structural implications of taking on external money require careful analysis. What is the true cost of the capital? What obligations does it create? What does it do to your equity? What happens if the business underperforms? These are not questions to answer after the term sheet is signed.
          </p>

          <h2 style={headingStyle}>The accumulation problem</h2>
          <p style={bodyStyle}>
            Every year a business operates without advisory guidance is a year of decisions that accumulate without a strategic framework. Some of those decisions are reversible. Many are not. By the time a business owner feels the need for an advisor — when revenue is high enough to justify it, when the complexity is undeniable — they are also carrying the weight of years of structural decisions made without guidance. Starting earlier means fewer things to unwind.
          </p>

          <h2 style={headingStyle}>When it is never too late</h2>
          <p style={bodyStyle}>
            None of this means that engaging an advisor late is not worthwhile. Businesses restructure. Tax positions get cleaned up. Strategies get recalibrated. The work is harder and sometimes more expensive when starting from a complicated baseline, but it is almost always valuable. The point is not that you missed your window — the point is that the window has always been open and the best time to walk through it is now.
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
            More about business advisory.
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
            Questions about advisory? <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Let&apos;s talk.</em>
          </h2>
          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.72)', marginTop: '16px', maxWidth: '440px',
          }}>
            Premium Services Corporation provides business advisory for businesses across New England.
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
