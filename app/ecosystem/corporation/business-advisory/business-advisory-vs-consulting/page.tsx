import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'How is business advisory different from consulting?'

const ANSWER_PLAIN = 'Consulting is project-based — a defined problem, a deliverable, an end. Advisory is relationship-based and ongoing. Consulting fits bounded problems with focused expertise and a clear deliverable. Advisory fits the strategic questions that evolve continuously. The most valuable thing an advisor accumulates over time is context — about your patterns, your market, your team — which produces qualitatively different guidance than project consulting. The strongest businesses use both at different stages.'

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
  { title: 'Project vs relationship', body: 'Consulting has a defined end. Advisory is ongoing and compounds in value over time.' },
  { title: 'Context is the premium', body: 'An advisor who knows your history, patterns, and market gives qualitatively different guidance than a project consultant.' },
  { title: 'Bounded vs evolving', body: 'Consulting fits bounded problems. Advisory fits the strategic questions that evolve continuously.' },
  { title: 'Both have a place', body: 'Consulting and advisory serve different needs. The strongest businesses use both appropriately.' },
]

const RELATED = [
  { q: 'What does a business advisor do?', href: '/ecosystem/corporation/business-advisory/what-does-business-advisor-do' },
  { q: 'When is the right time to hire an advisor?', href: '/ecosystem/corporation/business-advisory/when-to-hire-business-advisor' },
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

export default function BusinessAdvisoryVsConsultingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Business Advisory', url: 'https://marlasabater.com/ecosystem/corporation/business-advisory' },
        { name: 'Business Advisory vs Consulting', url: 'https://marlasabater.com/ecosystem/corporation/business-advisory/business-advisory-vs-consulting' },
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
          <h2 style={firstHeadingStyle}>The structural difference</h2>
          <p style={bodyStyle}>
            Consulting is project-based. A consultant comes in to solve a defined problem — redesign your operations, build a financial model, evaluate a market opportunity, train your team on a new system. The engagement has a start, a deliverable, and an end. The consultant leaves and the work continues or does not based on what you do with the output.
          </p>
          <p style={bodyStyle}>
            Advisory is relationship-based. An advisor works with your business over time, developing context and continuity that produces qualitatively different guidance than any single project engagement can. The value of advisory compounds because the advisor&apos;s understanding of your business deepens with every conversation.
          </p>

          <h2 style={headingStyle}>What consulting does well</h2>
          <p style={bodyStyle}>
            Consulting is the right structure when you have a specific, bounded problem that requires focused expertise for a defined period. You need someone to evaluate three potential markets and recommend which one to enter. You need a financial model built for a bank application. You need an operational assessment before you scale. These are consulting problems — they have defined outputs and a natural conclusion point.
          </p>
          <p style={bodyStyle}>
            The consulting model works well when the problem is clear, the expertise required is specialized, and the output is something the business can act on independently after the engagement ends.
          </p>

          <h2 style={headingStyle}>What advisory does differently</h2>
          <p style={bodyStyle}>
            Advisory works differently because the problems it addresses are not bounded. Strategic questions do not resolve at the end of an engagement. They evolve. The question of whether to hire shifts into the question of who to hire, which shifts into the question of whether the hire is working, which shifts into the question of what comes next. An advisor who has been with you through that progression gives you guidance that is grounded in actual history rather than a snapshot assessment.
          </p>
          <p style={bodyStyle}>
            Advisory also works better for the decisions that do not feel like problems until they are. A business advisor who knows your revenue pattern, your cost structure, and your market will notice that your margins have been compressing for three quarters before you notice it. They will flag the implications of a contract you are about to sign that looks fine on the surface. They will tell you that the way you are handling owner compensation is creating a tax problem you have not seen yet. These are not consulting deliverables. They are the product of ongoing attention from someone who knows your business.
          </p>

          <h2 style={headingStyle}>The context premium</h2>
          <p style={bodyStyle}>
            The most valuable thing an advisor accumulates over time is context. Context about your patterns — what you tend to underestimate, where you tend to overinvest, what kinds of decisions you make well and which ones you need a check on. Context about your market — what has changed, what has not, what the competitive landscape looks like over multiple years. Context about your team — who has grown into their role, who is a constraint on growth, what the culture can absorb.
          </p>
          <p style={bodyStyle}>
            This context is not something a consultant can develop in a project engagement. It is the product of an ongoing relationship maintained over years. It is why businesses that work with the same advisor over a long period consistently outperform their peers who engage advisors episodically.
          </p>

          <h2 style={headingStyle}>When you need consulting versus advisory</h2>
          <p style={bodyStyle}>
            If you have a specific, bounded problem with a clear deliverable, you likely need consulting. If you want someone who will know your business, challenge your thinking, and be available when decisions arise — not just when you schedule a project — you want advisory.
          </p>
          <p style={bodyStyle}>
            Many businesses benefit from both at different stages. Consulting for specific high-stakes decisions. Advisory as the ongoing strategic relationship. Premium Services Corporation provides the advisory relationship and can recommend specialized consultants for specific project needs that fall outside the advisory scope.
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
