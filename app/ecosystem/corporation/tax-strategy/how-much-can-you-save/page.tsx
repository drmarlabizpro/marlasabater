'use client'

import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{
    '@type': 'Question',
    name: 'How much can a small business save with a proper tax strategy?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Most small business owners who move from reactive tax preparation to proactive tax strategy reduce their annual tax liability by 10 to 30 percent. Savings come from entity structure optimization, retirement contributions, timing of income and expenses, deduction identification, and home office and vehicle deductions. A business generating $200,000 in net profit overpaying by 10 percent is leaving $20,000 on the table annually.',
    },
  }],
}

const TAKEAWAYS = [
  {
    title: '10–30% reduction',
    body: 'Most small business owners reduce annual tax liability by 10 to 30 percent when moving from preparation to strategy.',
  },
  {
    title: 'Structure is the biggest lever',
    body: 'The S-Corp election alone can save $8,000 to $15,000 annually in self-employment tax at common small business income levels.',
  },
  {
    title: 'Savings compound',
    body: 'Structural improvements like S-Corp election and retirement contributions produce savings every year without additional effort.',
  },
  {
    title: 'Preparation vs strategy',
    body: 'Tax preparation reports what happened. Tax strategy shapes what happens — and it has to happen before December 31.',
  },
]

const RELATED = [
  { q: 'What is the difference between tax preparation and tax strategy?', href: '/ecosystem/corporation/tax-strategy/tax-preparation-vs-strategy' },
  { q: 'Should my business be an LLC or S-Corp?', href: '/ecosystem/corporation/tax-strategy/llc-vs-scorp' },
  { q: 'When should I start thinking about tax strategy?', href: '/ecosystem/corporation/tax-strategy/when-to-start-tax-planning' },
  { q: 'Does Premium Services Corporation offer tax strategy in Spanish?', href: '/ecosystem/corporation/tax-strategy/bilingual-tax-strategy' },
]

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Tax Strategy', url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy' },
        { name: 'How Much Can You Save', url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/how-much-can-you-save' },
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
              { label:'HOW MUCH CAN YOU SAVE', href:null },
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
            How much can a small business save with a proper tax strategy?
          </h1>

          <div style={{ height:'2px', background:'var(--gold)', width:'clamp(80px,16vw,160px)', margin:'24px 0 0' }} />
        </div>
      </section>

      {/* ARTICLE */}
      <article style={{ background:'var(--cream)', padding:'var(--section-pad) var(--gut)' }}>
        <div style={{ maxWidth:'720px' }}>

          {[
            {
              heading: 'The honest range',
              body: `Most small business owners who move from reactive tax preparation to proactive tax strategy reduce their annual tax liability by 10 to 30 percent. The range is wide because the savings depend on income level, business structure, industry, and how much planning opportunity has been left untouched over the years.\n\nA business generating $200,000 in net profit paying 10 percent more than necessary is overpaying by $20,000 annually. Over five years that is $100,000 in excess taxes — money that could have funded retirement savings, equipment, hiring, or the owner's personal financial goals. The number compounds every year the structure stays wrong.`,
            },
            {
              heading: 'Where the savings come from',
              body: `Tax savings come from several distinct categories of planning. Each one is legal, documented, and available to any business owner who plans deliberately rather than filing reactively.\n\nEntity structure optimization is frequently the largest single source of savings. A sole proprietor or single-member LLC paying full self-employment tax on $150,000 in net profit pays approximately $21,000 in self-employment tax annually. An S-Corp election with a reasonable salary of $80,000 and $70,000 in distributions reduces that to approximately $11,000 — a savings of $10,000 per year before income tax effects. The S-Corp adds accounting complexity but at this income level the savings substantially exceed the cost.\n\nRetirement contributions reduce taxable income dollar for dollar. A business owner making the maximum Solo 401k contribution reduces federal and state taxable income by the full contribution amount. At a combined federal and state marginal rate of 30 percent, a $40,000 contribution saves $12,000 in current-year taxes while simultaneously building retirement savings.\n\nTiming of income and expenses means deliberately managing when revenue is recognized and when deductible expenses are paid to shift taxable income between years. A tax strategist identifies these opportunities before December 31 — not after the year closes.\n\nDeduction identification covers the business expenses that are legitimately deductible but frequently missed — home office deductions calculated correctly, vehicle use documented and claimed, continuing education, professional memberships, and business-related travel. These are not aggressive positions. They are legitimate deductions the tax code allows that many business owners either do not know about or do not document properly.`,
            },
            {
              heading: 'The compounding effect',
              body: `Tax savings compound in two ways. First the savings themselves can be invested or deployed into the business rather than paid to the government. Second the habits and structures that produce savings in year one continue producing savings in every subsequent year without additional effort.\n\nA business owner who implements an S-Corp election saves on self-employment tax every year the business operates at that income level. A business owner who builds a retirement contribution habit saves on taxes every year while simultaneously building wealth. These are not one-time gains — they are structural improvements that pay indefinitely.`,
            },
            {
              heading: 'What tax preparation alone cannot do',
              body: `A tax preparer files your return accurately based on what happened. They do not advise you on what should have happened differently. By the time your return is being prepared the year is over and most planning opportunities have closed. The deduction for that equipment purchase had to be elected before year end. The retirement contribution had to be funded before the filing deadline. The S-Corp election had to be made before the tax year began.\n\nTax strategy works throughout the year — not just at filing time. The conversations that produce savings happen in the spring, the summer, and the fall. That is the structural difference between a tax preparer and a tax strategist, and it is the difference between reporting what happened and shaping what will happen.`,
            },
            {
              heading: 'Getting an honest assessment of your opportunity',
              body: `The starting point for understanding your specific savings opportunity is a review of your current structure, income level, and filing history. In most cases the opportunity becomes clear within the first conversation. Premium Services Corporation has worked with business owners across nine industries for thirty years — the patterns are recognizable, the opportunities are consistent, and the planning is specific to your situation rather than generic advice.`,
            },
          ].map((section, i) => (
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
            <Link key={i} href={r.href} style={{ textDecoration:'none', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 0', borderBottom:'1px solid var(--ink-15)' }}
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
            Ready to stop overpaying?{' '}
            <em style={{ fontStyle:'italic', color:'var(--gold-soft)' }}>Let&apos;s build your tax strategy.</em>
          </h2>
          <p style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontWeight:400, fontSize:'var(--t-lead)', lineHeight:'var(--lh-lead)', color:'rgba(242,233,218,0.72)', marginTop:'16px', maxWidth:'440px' }}>
            Premium Services Corporation works with business owners across New England on year-round tax planning.
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
