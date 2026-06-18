'use client'

import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{
    '@type': 'Question',
    name: 'What is the difference between tax preparation and tax strategy?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Tax preparation is reporting what already happened. Tax strategy is planning what will happen so that your tax liability is reduced before the year ends. A tax preparer files your return. A tax strategist helps you make decisions throughout the year — on payroll, purchases, structure, and timing — that reduce what you owe at filing time.',
    },
  }],
}

const TAKEAWAYS = [
  {
    title: 'Preparation is backward-looking',
    body: 'Tax preparation reports what happened in the prior year. By the time your return is filed most planning opportunities have already closed.',
  },
  {
    title: 'Strategy is forward-looking',
    body: 'Tax strategy works throughout the year — identifying opportunities before December 31 when they can still be acted on.',
  },
  {
    title: 'The year-end deadline is real',
    body: 'Most tax planning moves — retirement contributions, equipment purchases, entity elections — must happen before the tax year ends. April is too late.',
  },
  {
    title: 'Same rules, different outcomes',
    body: 'Two businesses with identical revenue can pay dramatically different taxes based on structure and planning. The tax code rewards deliberate decisions.',
  },
]

const RELATED = [
  { q: 'How much can a small business save with a tax strategy?', href: '/ecosystem/corporation/tax-strategy/how-much-can-you-save' },
  { q: 'Should my business be an LLC or S-Corp?', href: '/ecosystem/corporation/tax-strategy/llc-vs-scorp' },
  { q: 'When should I start thinking about tax strategy?', href: '/ecosystem/corporation/tax-strategy/when-to-start-tax-planning' },
  { q: 'Does Premium Services Corporation offer tax strategy in Spanish?', href: '/ecosystem/corporation/tax-strategy/bilingual-tax-strategy' },
]

const SECTIONS = [
  {
    heading: 'The core distinction',
    body: `Tax preparation and tax strategy are not the same service. They are not even close to the same service. Understanding the difference is the first step toward understanding why two businesses with identical revenue can end up paying dramatically different amounts in taxes.\n\nTax preparation is a reporting function. A tax preparer takes the financial activity that occurred during the year — revenue, expenses, payroll, depreciation — and translates it into a tax return that accurately reports that activity to the government. The work requires knowledge of the tax code, accuracy, and attention to detail. A good tax preparer produces a correct return. That is the scope of the job.\n\nTax strategy is a planning function. A tax strategist works with you throughout the year to make decisions that reduce your liability before the year ends. The difference is timing: by the time your return is being prepared, almost every decision that affects your tax bill has already been made.`,
  },
  {
    heading: 'Why timing is everything',
    body: `The tax year closes on December 31. Most of the decisions that affect your tax liability for that year have to be made before that date. After December 31 you are reporting history — you cannot change it.\n\nThe retirement contribution that would have reduced your taxable income by $40,000 had to be funded before the Solo 401k deadline — which for employee contributions is December 31. The equipment purchase that would have generated a Section 179 deduction had to happen before year end. The S-Corp election that would have reduced your self-employment tax had to be made before the beginning of the tax year in most cases.\n\nA tax preparer working in March sees these opportunities after they have closed. A tax strategist identifies them in September and October when there is still time to act.`,
  },
  {
    heading: 'What tax strategy actually looks like in practice',
    body: `Tax strategy is not a single annual meeting. It is an ongoing conversation throughout the year that produces specific, timely decisions.\n\nIn the spring after filing, a tax strategist reviews what the prior year looked like and identifies structural opportunities — is the current entity election still optimal at the current income level? Are there changes to retirement contribution strategy that would produce better outcomes?\n\nIn the summer, the conversation turns to the current year's trajectory. Based on revenue and expenses through mid-year, what is the projected tax liability for the full year? Are there purchases or investments that would make sense to accelerate into this year? Are there income timing decisions that should be made?\n\nIn the fall, the year-end planning conversation happens with enough time to act. Retirement contributions are finalized. Timing decisions are made. Any remaining structural moves are executed before the window closes.\n\nIn the winter at filing, the return reflects decisions that were made deliberately throughout the year rather than a record of what happened without planning.`,
  },
  {
    heading: 'The same tax code, different outcomes',
    body: `The tax code is the same for every business. The difference between two businesses with identical revenue paying dramatically different taxes is not that one is doing something the other cannot. It is that one is making deliberate decisions within the rules and the other is not.\n\nThe deductions are available to both. The retirement vehicles are available to both. The entity structures are available to both. The timing strategies are available to both. The difference is whether someone is applying them intentionally on your behalf throughout the year.`,
  },
  {
    heading: 'What to look for in a tax strategist',
    body: `A tax strategist proactively contacts you before year end — not to ask for documents to prepare your return but to discuss decisions that should be made before the year closes. They review your financial position quarterly or at minimum twice per year with the current year in mind. They explain the reasoning behind recommendations rather than just telling you what to do. And they connect your tax decisions to your broader financial picture — retirement savings, business structure, and personal financial goals.\n\nPremium Services Corporation integrates tax strategy into the ongoing financial relationship so that the year-end planning conversation happens when it can still produce results, not after the opportunities have closed.`,
  },
]

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Tax Strategy', url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy' },
        { name: 'Tax Preparation vs Strategy', url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/tax-preparation-vs-strategy' },
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        minHeight: '48vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(100px,14vh,160px) var(--gut) clamp(40px,6vh,72px)',
        background: 'linear-gradient(168deg, #2A6452, #214E40)',
        color: 'var(--cream)',
      }}>
        <div aria-hidden style={{ position:'absolute',inset:0,pointerEvents:'none',opacity:0.06,mixBlendMode:'multiply',backgroundImage:GRAIN,zIndex:1 }} />
        <div style={{ position:'relative', zIndex:2 }}>
          <div style={{ display:'flex', gap:'8px', alignItems:'center', marginBottom:'24px', flexWrap:'wrap' }}>
            {[
              { label:'DR. MARLA', href:'/' },
              { label:'CORPORATION', href:'/ecosystem/corporation' },
              { label:'TAX STRATEGY', href:'/ecosystem/corporation/tax-strategy' },
              { label:'PREPARATION VS STRATEGY', href:null },
            ].map((crumb, i, arr) => (
              <span key={i} style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                {crumb.href ? (
                  <Link href={crumb.href} style={{ fontFamily:'var(--sans)', fontWeight:600, fontSize:'10px', letterSpacing:'0.26em', textTransform:'uppercase', color:'rgba(242,233,218,0.42)', textDecoration:'none' }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ fontFamily:'var(--sans)', fontWeight:600, fontSize:'10px', letterSpacing:'0.26em', textTransform:'uppercase', color:'rgba(242,233,218,0.65)' }}>
                    {crumb.label}
                  </span>
                )}
                {i < arr.length - 1 && <span style={{ color:'rgba(242,233,218,0.25)', fontSize:'10px' }}>/</span>}
              </span>
            ))}
          </div>

          <div style={{ fontFamily:'var(--sans)', fontWeight:600, fontSize:'10px', letterSpacing:'0.32em', textTransform:'uppercase', color:'var(--gold-soft)', marginBottom:'16px' }}>
            PREMIUM SERVICES CORPORATION
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-hero)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)',
            color: 'var(--cream)', maxWidth: '680px',
            textWrap: 'balance' as React.CSSProperties['textWrap'],
            margin: 0,
          }}>
            What is the difference between tax preparation and tax strategy?
          </h1>

          <div style={{ height:'2px', background:'var(--gold)', width:'clamp(80px,16vw,160px)', margin:'24px 0 0' }} />
        </div>
      </section>

      {/* ARTICLE */}
      <article style={{ background:'var(--cream)', padding:'var(--section-pad) var(--gut)' }}>
        <div style={{ maxWidth:'720px' }}>
          {SECTIONS.map((section, i) => (
            <div key={i}>
              <h2 style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
                letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
                marginBottom: '16px', marginTop: i === 0 ? '0' : '48px',
                textWrap: 'balance' as React.CSSProperties['textWrap'],
              }}>
                {section.heading}
              </h2>
              {section.body.split('\n\n').map((para, j) => (
                <p key={j} style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)',
                  color: 'var(--ink-70)', marginBottom: '16px',
                }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </article>

      {/* KEY TAKEAWAYS */}
      <section style={{ background:'var(--cream-2)', padding:'var(--section-pad) var(--gut)', borderTop:'1px solid var(--ink-15)' }}>
        <div style={{ maxWidth:'720px' }}>
          <div style={{ fontFamily:'var(--sans)', fontWeight:600, fontSize:'11px', letterSpacing:'0.32em', textTransform:'uppercase', color:'var(--gold-deep)', marginBottom:'24px' }}>
            KEY TAKEAWAYS
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'12px' }}>
            {TAKEAWAYS.map((t, i) => (
              <div key={i} style={{ background:'var(--paper)', padding:'24px', borderLeft:'3px solid var(--gold)' }}>
                <div style={{ fontFamily:'var(--serif)', fontWeight:400, fontSize:'var(--t-subhead)', lineHeight:'var(--lh-headline)', color:'var(--ink)', marginBottom:'8px' }}>
                  {t.title}
                </div>
                <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontWeight:400, fontSize:'var(--t-body)', lineHeight:'var(--lh-body)', color:'var(--ink-70)' }}>
                  {t.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED QUESTIONS */}
      <section style={{ background:'var(--cream)', padding:'var(--section-pad) var(--gut)', borderTop:'1px solid var(--ink-15)' }}>
        <div style={{ maxWidth:'720px' }}>
          <div style={{ fontFamily:'var(--sans)', fontWeight:600, fontSize:'11px', letterSpacing:'0.32em', textTransform:'uppercase', color:'var(--gold-deep)', marginBottom:'16px' }}>
            RELATED QUESTIONS
          </div>
          <h2 style={{ fontFamily:'var(--serif)', fontWeight:400, fontSize:'var(--t-headline)', lineHeight:'var(--lh-headline)', color:'var(--ink)', marginBottom:'32px' }}>
            More about tax strategy.
          </h2>
          {RELATED.map((r, i) => (
            <Link
              key={i}
              href={r.href}
              style={{ textDecoration:'none', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 0', borderBottom:'1px solid var(--ink-15)' }}
              onMouseEnter={e => { (e.currentTarget.querySelector('.rq-text') as HTMLElement).style.color = '#214E40' }}
              onMouseLeave={e => { (e.currentTarget.querySelector('.rq-text') as HTMLElement).style.color = 'var(--ink)' }}
            >
              <span className="rq-text" style={{ fontFamily:'var(--serif)', fontWeight:400, fontSize:'var(--t-subhead)', lineHeight:'var(--lh-headline)', color:'var(--ink)', transition:'color 0.2s' }}>
                {r.q}
              </span>
              <span style={{ fontFamily:'var(--sans)', fontWeight:600, fontSize:'12px', color:'var(--gold-deep)', flexShrink:0, marginLeft:'16px' }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        position:'relative', overflow:'hidden',
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(42,100,82,0.4), rgba(33,78,64,0) 55%), linear-gradient(165deg, #2A6452, #214E40)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div aria-hidden style={{ position:'absolute',inset:0,pointerEvents:'none',opacity:0.06,mixBlendMode:'multiply',backgroundImage:GRAIN,zIndex:1 }} />
        <div style={{ position:'relative', zIndex:2, maxWidth:'560px' }}>
          <h2 style={{ fontFamily:'var(--serif)', fontWeight:400, fontSize:'var(--t-display)', lineHeight:'var(--lh-headline)', letterSpacing:'var(--ls-headline)', color:'var(--cream)', textWrap:'balance' as React.CSSProperties['textWrap'] }}>
            Ready to plan ahead instead of report after?{' '}
            <em style={{ fontStyle:'italic', color:'var(--gold-soft)' }}>Let&apos;s talk.</em>
          </h2>
          <p style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontWeight:400, fontSize:'var(--t-lead)', lineHeight:'var(--lh-lead)', color:'rgba(242,233,218,0.72)', marginTop:'16px', maxWidth:'440px' }}>
            Premium Services Corporation works with business owners across New England on year-round tax strategy — not just annual filing.
          </p>
          <Link href="/ecosystem/corporation/contact" style={{
            display:'inline-block', marginTop:'28px',
            border:'1px solid var(--gold)', color:'var(--gold)',
            padding:'14px 36px', fontFamily:'var(--sans)', fontWeight:600,
            fontSize:'11px', letterSpacing:'0.22em', textTransform:'uppercase',
            textDecoration:'none',
          }}>
            SCHEDULE A CONSULTATION →
          </Link>
          <div style={{ fontFamily:'var(--sans)', fontWeight:600, fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'rgba(242,233,218,0.35)', marginTop:'32px' }}>
            PREMIUM SERVICES CORPORATION · NO. 03
          </div>
        </div>
      </section>
    </>
  )
}
