import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const QUESTION = 'What does a business advisor actually do for a small business?'

const ANSWER_PLAIN = 'A business advisor helps you make better decisions across structure, hiring, growth, and exits. The work typically covers structural review, decision support before major commitments, performance review against goals and benchmarks, and growth planning. Advisory is an ongoing relationship rather than a one-off engagement — value compounds as the advisor develops context on your business. It is not coaching focused on mindset, and it is not project consulting. It is the strategic counterpart to your accountant and lawyer.'

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
  { title: 'Decision support', body: 'A business advisor helps you make better decisions before you make them — not just review what went wrong.' },
  { title: 'Ongoing relationship', body: 'Advisory value compounds over time as the advisor builds context on your business.' },
  { title: 'Fills the gap', body: 'Most small businesses have an accountant and a lawyer but nobody for the strategic questions in between.' },
  { title: 'Practical not motivational', body: 'Business advisory is grounded in actual numbers, structure, and market — not mindset work.' },
]

const RELATED = [
  { q: 'When is the right time to hire a business advisor?', href: '/ecosystem/corporation/business-advisory/when-to-hire-business-advisor' },
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

export default function WhatDoesBusinessAdvisorDoPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Business Advisory', url: 'https://marlasabater.com/ecosystem/corporation/business-advisory' },
        { name: 'What Does a Business Advisor Do', url: 'https://marlasabater.com/ecosystem/corporation/business-advisory/what-does-business-advisor-do' },
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
          <h2 style={firstHeadingStyle}>The core function</h2>
          <p style={bodyStyle}>
            A business advisor helps you make better decisions. Not just financial decisions — structural decisions, operational decisions, hiring decisions, growth decisions, and eventually exit decisions. The value is having someone in your corner who has seen the patterns before, who understands the consequences of different choices, and who can apply that experience to your specific situation.
          </p>
          <p style={bodyStyle}>
            Most small business owners make major decisions in isolation. They have an accountant for taxes, a lawyer for legal questions, and nobody for the strategic questions that do not fit cleanly into either category. A business advisor fills that gap.
          </p>

          <h2 style={headingStyle}>What a business advisor actually does day to day</h2>
          <p style={bodyStyle}>
            The work varies by engagement and by the stage of the business, but it typically covers several recurring areas.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Structural review</strong> means evaluating whether the legal and financial structure of the business is appropriate for its current size and trajectory. An LLC that made sense at $200,000 in revenue may not be the right structure at $1,500,000. A sole proprietorship that worked when the owner was doing everything alone may create liability exposure as the business grows. Structure decisions have tax, legal, and operational implications that compound over time.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Decision support</strong> means having someone to think through major decisions before you make them. Should you hire a full-time employee or keep using contractors? Should you sign a five-year lease or find a month-to-month arrangement? Should you take on a business partner? Should you pursue that contract that would double your revenue but require significant upfront investment? These decisions benefit from someone who has context on your business and can model the implications before you commit.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Performance review</strong> means regularly examining how the business is performing against its own goals and against reasonable benchmarks for its industry. Are your margins where they should be? Is your revenue growing at the rate you planned? Are your expenses in line with comparable businesses? A business advisor asks these questions systematically rather than letting performance drift without evaluation.
          </p>
          <p style={bodyStyle}>
            <strong style={{ color: 'var(--ink)' }}>Growth planning</strong> means working backward from where you want the business to be to determine what needs to happen in the next twelve to thirty-six months to get there. What do you need to hire? What do you need to invest in? What revenue milestone do you need to hit to justify the next level of overhead?
          </p>

          <h2 style={headingStyle}>What a business advisor is not</h2>
          <p style={bodyStyle}>
            A business advisor is not a business coach who focuses primarily on mindset and motivation. The work is practical and specific — grounded in your actual numbers, your actual structure, and your actual market. It is also not a consultant who comes in for a project and leaves. Advisory is an ongoing relationship that builds value as the advisor develops context on your business over time.
          </p>

          <h2 style={headingStyle}>The compounding value of the relationship</h2>
          <p style={bodyStyle}>
            The first engagement with a business advisor produces immediate value — a structure review, a decision framework, an identification of gaps. The deeper value compounds over time. An advisor who has worked with your business for three years understands your patterns, your market, your team, and your history in a way that produces qualitatively different guidance than someone who sees your financials for the first time.
          </p>
          <p style={bodyStyle}>
            This is why Premium Services Corporation structures advisory as an ongoing relationship rather than a series of one-off engagements. The goal is to be the advisor who knows your business as well as you do.
          </p>

          <h2 style={headingStyle}>The cost of not having one</h2>
          <p style={bodyStyle}>
            The most expensive mistakes small business owners make are almost always avoidable with the right guidance. The wrong business structure costs money in excess taxes for years. The wrong hire costs money, time, and in some cases legal exposure. The wrong lease locks a business into a commitment that constrains its options. The wrong pricing strategy erodes margins that looked fine on paper until they were not. A business advisor does not prevent all mistakes. But they substantially reduce the frequency and cost of the most common ones.
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
