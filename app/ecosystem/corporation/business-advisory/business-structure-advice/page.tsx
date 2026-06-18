import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'Can a business advisor help me decide what business structure to use?'

const ANSWER_PLAIN = 'Yes — and this is one of the highest-value conversations an advisor can have with you. Sole proprietorship, single-member LLC, multi-member LLC, S-Corp election, and C-Corp each carry different tax, liability, and operational implications. The S-Corp election typically becomes worth analyzing once net profit exceeds approximately $50,000. Rhode Island adds entity-level costs — including a $400 annual LLC tax — that should factor into the analysis. Structure is not a one-time decision; it should be revisited as the business grows.'

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
  { title: 'Structure compounds', body: 'The wrong structure costs money in excess taxes and liability exposure for as long as it remains in place.' },
  { title: 'S-Corp at $50k+ profit', body: 'The S-Corp election becomes worth serious analysis once annual net profit exceeds approximately $50,000.' },
  { title: 'Rhode Island entity taxes', body: 'RI LLCs pay $400 annually regardless of income. Factor state costs into any structure comparison.' },
  { title: 'Revisit as you grow', body: 'The right structure at $200k may not be the right structure at $1M. Revisit as the business grows.' },
]

const RELATED = [
  { q: 'What does a business advisor do?', href: '/ecosystem/corporation/business-advisory/what-does-business-advisor-do' },
  { q: 'When is the right time to hire an advisor?', href: '/ecosystem/corporation/business-advisory/when-to-hire-business-advisor' },
  { q: 'How is advisory different from consulting?', href: '/ecosystem/corporation/business-advisory/business-advisory-vs-consulting' },
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

export default function BusinessStructureAdvicePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Business Advisory', url: 'https://marlasabater.com/ecosystem/corporation/business-advisory' },
        { name: 'Business Structure Advice', url: 'https://marlasabater.com/ecosystem/corporation/business-advisory/business-structure-advice' },
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
          <h2 style={firstHeadingStyle}>Yes — and this is one of the highest-value conversations an advisor can have with you</h2>
          <p style={bodyStyle}>
            Business structure is one of the decisions that looks simple on the surface and has compounding consequences for years. Getting it right at the start costs almost nothing. Getting it wrong costs money in excess taxes, creates unnecessary liability exposure, and in some cases creates legal complications when you eventually want to change.
          </p>

          <h2 style={headingStyle}>The main structures and what they mean</h2>
          <p style={bodyStyle}>
            A <strong style={{ color: 'var(--ink)' }}>sole proprietorship</strong> is the default structure for a one-person business with no formal registration. It is the simplest to operate but provides no liability protection — your personal assets are exposed to business debts and judgments. All business income is reported on your personal tax return and subject to self-employment tax.
          </p>
          <p style={bodyStyle}>
            A <strong style={{ color: 'var(--ink)' }}>single-member LLC</strong> provides liability protection — separating your personal assets from business liabilities — while maintaining the tax simplicity of a sole proprietorship. By default a single-member LLC is taxed as a disregarded entity, meaning all income flows to your personal return and is subject to self-employment tax on net earnings. For many new businesses this is the right starting point.
          </p>
          <p style={bodyStyle}>
            A <strong style={{ color: 'var(--ink)' }}>multi-member LLC</strong> works similarly but with multiple owners. Taxed as a partnership by default, with income and losses allocated among members according to the operating agreement.
          </p>
          <p style={bodyStyle}>
            An <strong style={{ color: 'var(--ink)' }}>S-Corp</strong> is not a legal entity type — it is a tax election that can be made by an eligible LLC or corporation. The S-Corp election allows business owners to split their income between salary and distributions. Salary is subject to payroll taxes. Distributions are not. At sufficient profit levels this split produces meaningful tax savings. The S-Corp election also creates more complexity — payroll requirements, stricter accounting, and restrictions on ownership structure.
          </p>
          <p style={bodyStyle}>
            A <strong style={{ color: 'var(--ink)' }}>C-Corp</strong> is a fully separate legal entity that pays its own taxes. Income is taxed at the corporate level and again when distributed to shareholders as dividends — the double taxation problem. C-Corps make sense for businesses seeking outside investment, businesses with complex ownership structures, or businesses planning to go public. For most small businesses they are not the right choice.
          </p>

          <h2 style={headingStyle}>The S-Corp threshold question</h2>
          <p style={bodyStyle}>
            The most common structure decision for growing small businesses is whether and when to make the S-Corp election. The answer depends primarily on net profit. At low profit levels the administrative cost of running payroll for yourself and the additional complexity of S-Corp accounting outweighs the tax savings. As profit grows the savings from reducing self-employment tax on the distribution portion of income becomes increasingly significant.
          </p>
          <p style={bodyStyle}>
            A rough rule: once your business is generating $50,000 or more in annual net profit, the S-Corp election is worth analyzing seriously. The break-even point varies based on your specific situation, your state tax environment, and what you pay yourself as salary.
          </p>

          <h2 style={headingStyle}>Rhode Island-specific considerations</h2>
          <p style={bodyStyle}>
            Rhode Island has a business entity tax on LLCs — currently $400 annually — regardless of income. S-Corps and C-Corps are subject to the corporate income tax and the minimum tax. These state-level costs factor into the structure analysis for Rhode Island businesses and are worth accounting for when modeling the after-tax benefit of different elections.
          </p>

          <h2 style={headingStyle}>When structure decisions need to be revisited</h2>
          <p style={bodyStyle}>
            Structure is not a one-time decision. As your business grows, your structure may need to evolve. An LLC that was right at $300,000 in revenue may benefit from an S-Corp election at $800,000. A single-member LLC that brought on a partner needs its operating agreement and potentially its tax classification revisited. A business planning to seek outside investment may need to restructure into a C-Corp to accommodate investor requirements.
          </p>
          <p style={bodyStyle}>
            Premium Services Corporation reviews structure as part of the advisory relationship — not just at the start but whenever the business reaches a milestone that warrants reconsideration.
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
