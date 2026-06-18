'use client'

import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{
    '@type': 'Question',
    name: 'When should a small business owner start thinking about tax strategy?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Day one. The structure you choose when you start your business has tax implications for years. Most business owners wait until they owe more than they expected and then scramble. The owners who pay the least in taxes over time are the ones who plan from the beginning and revisit their strategy every year.',
    },
  }],
}

const TAKEAWAYS = [
  {
    title: 'Structure decisions compound',
    body: 'The entity structure you choose at launch affects your taxes every year you operate. Getting it right at the start costs almost nothing. Fixing it later costs time and money.',
  },
  {
    title: 'October is worth more than April',
    body: 'A tax conversation in October can still produce year-end moves that reduce your liability. A tax conversation in April can only report what already happened.',
  },
  {
    title: 'Quarterly estimates require planning',
    body: 'Underpayment of quarterly estimated taxes triggers IRS penalties. Accurate estimates require knowing your projected annual income — which requires ongoing financial awareness.',
  },
  {
    title: 'Never too late to start',
    body: 'Every year of better tax planning produces savings regardless of when you start. The cost of not starting is always higher than the cost of engaging now.',
  },
]

const RELATED = [
  { q: 'How much can a small business save with a tax strategy?', href: '/ecosystem/corporation/tax-strategy/how-much-can-you-save' },
  { q: 'What is the difference between tax preparation and tax strategy?', href: '/ecosystem/corporation/tax-strategy/tax-preparation-vs-strategy' },
  { q: 'Should my business be an LLC or S-Corp?', href: '/ecosystem/corporation/tax-strategy/llc-vs-scorp' },
  { q: 'Does Premium Services Corporation offer tax strategy in Spanish?', href: '/ecosystem/corporation/tax-strategy/bilingual-tax-strategy' },
]

const SECTIONS = [
  {
    heading: 'The answer is always now',
    body: `The most common answer business owners give when asked when they started thinking about tax strategy is some variation of when I started making real money or when I got hit with a big tax bill. Both of these are the wrong answer and following them costs money that is never recovered.\n\nThe right time to start thinking about tax strategy is when you start your business. Not when revenue hits a certain threshold. Not when taxes feel painful. From the first day you operate as a business owner, the decisions you make — about structure, about compensation, about expenses, about retirement — have tax implications that compound over the life of the business.`,
  },
  {
    heading: 'Why structure decisions made at launch matter for years',
    body: `The most consequential tax decision most business owners ever make is the one they make at the beginning — what structure to use. A sole proprietor who should have formed an LLC taxed as an S-Corp pays full self-employment tax on every dollar of profit from day one. Every year that passes before the correction is a year of excess taxes paid that cannot be recovered.\n\nIf the business generates $100,000 in net profit annually and the S-Corp election would have saved $8,000 per year, waiting five years to make the correction costs $40,000 in avoidable taxes before the fix even begins producing savings.\n\nThe structure conversation costs almost nothing to have at the start. It produces returns that compound indefinitely.`,
  },
  {
    heading: 'The quarterly estimated tax problem',
    body: `Self-employed business owners do not have taxes withheld from a paycheck. They are required to pay estimated taxes quarterly — in April, June, September, and January — based on their projected annual tax liability. Underpaying estimated taxes triggers an IRS underpayment penalty even if you pay the full amount owed when you file.\n\nAccurate estimated tax payments require knowing — with reasonable accuracy — what your annual income is going to be. That requires ongoing financial awareness throughout the year. Business owners who do not track their financials regularly either overpay estimated taxes, which is an interest-free loan to the government, or underpay and face penalties.\n\nA tax strategist helps you calibrate estimated payments quarterly so you are paying accurately rather than guessing. This is a concrete, immediate benefit of year-round tax engagement that begins producing value in the first quarter of operation.`,
  },
  {
    heading: 'The year-end window closes every December 31',
    body: `Tax planning has a hard deadline. December 31 closes most of the opportunities available for the current tax year. Retirement contributions for Solo 401k employee elections must be made by December 31. Section 179 equipment deductions require the purchase and placed-in-service date to be before December 31. Timing of income and expense payments requires decisions before the year closes.\n\nA business owner who begins engaging with a tax strategist in October still has time to act on most year-end opportunities. A business owner who begins the conversation in February is reviewing history — not shaping it.\n\nThe practical implication is that the sooner you establish a tax planning relationship the sooner you begin capturing year-end opportunities. Every year that begins without a plan in place is a year where December 31 arrives before the work is done.`,
  },
  {
    heading: 'What changes in year two versus year one',
    body: `The first year of a business relationship with a tax strategist establishes the foundation — structure review, accounting setup, estimated payment schedule, and identification of the most immediate planning opportunities. Some of those opportunities can be captured immediately. Others require a full year to build.\n\nBy year two the relationship produces compounding value. The strategist knows your business, your income patterns, and your goals. Planning conversations happen earlier in the year when there is more time to act. Retirement contributions are funded at the optimal level rather than estimated. Timing decisions are made deliberately rather than reactively.\n\nThis compounding is why business owners who engage with tax planning early — and maintain the relationship consistently — consistently outperform those who engage reactively. The knowledge that accumulates in the relationship produces increasingly specific and valuable guidance over time.`,
  },
  {
    heading: 'What if you have been operating without a tax strategy',
    body: `The question of when to start has one consistent answer regardless of when it is asked: now. If you have been operating for five years without a tax strategy you have almost certainly overpaid taxes during that period. Some of that cannot be recovered. Some of it can — through amended returns where legitimate deductions were missed and the statute of limitations has not expired.\n\nMore importantly the planning that begins today produces savings from this point forward. Every year of better tax decisions compounds. The cost of starting now is never higher than the cost of continuing to operate without a plan.\n\nPremium Services Corporation begins every new client relationship with a review of the prior year's return to identify missed opportunities and establish a baseline for the planning relationship going forward. The starting point is wherever you are, and the direction is always toward paying less than you would have paid without the plan.`,
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
        { name: 'When to Start Tax Planning', url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/when-to-start-tax-planning' },
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
              { label:'WHEN TO START', href:null },
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
            When should a small business owner start thinking about tax strategy?
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
            Ready to start planning instead of just filing?{' '}
            <em style={{ fontStyle:'italic', color:'var(--gold-soft)' }}>Let&apos;s talk.</em>
          </h2>
          <p style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontWeight:400, fontSize:'var(--t-lead)', lineHeight:'var(--lh-lead)', color:'rgba(242,233,218,0.72)', marginTop:'16px', maxWidth:'440px' }}>
            Premium Services Corporation works with business owners across New England on year-round tax strategy. The best time to start is now.
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
