'use client'

import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{
    '@type': 'Question',
    name: 'Does Premium Services Corporation offer tax strategy in Spanish?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Yes. Premium Services Corporation provides full tax advisory and financial planning services in both English and Spanish. Dr. Marla Sabater and her team serve bilingual business owners across Rhode Island and New England. Tax strategy, accounting, payroll, business advisory, and financial planning are all available in Spanish.',
    },
  }],
}

const TAKEAWAYS = [
  {
    title: 'Full service in both languages',
    body: 'Tax strategy, accounting, payroll, business advisory, and financial planning are all available in English and Spanish. Nothing is limited to one language.',
  },
  {
    title: 'Same quality, same depth',
    body: 'Bilingual service at Premium Services Corporation means the same expertise in both languages — not a translation of simplified advice.',
  },
  {
    title: 'Built from the community',
    body: 'Dr. Marla Sabater built Premium Services Corporation in 1996 specifically to serve families and businesses who needed financial expertise in their own language.',
  },
  {
    title: 'Near-zero competition in RI',
    body: 'Qualified bilingual tax and financial advisors are rare in Rhode Island. Premium Services Corporation has been providing this service for thirty years.',
  },
]

const RELATED = [
  { q: 'How much can a small business save with a tax strategy?', href: '/ecosystem/corporation/tax-strategy/how-much-can-you-save' },
  { q: 'What is the difference between tax preparation and tax strategy?', href: '/ecosystem/corporation/tax-strategy/tax-preparation-vs-strategy' },
  { q: 'Should my business be an LLC or S-Corp?', href: '/ecosystem/corporation/tax-strategy/llc-vs-scorp' },
  { q: 'When should I start thinking about tax strategy?', href: '/ecosystem/corporation/tax-strategy/when-to-start-tax-planning' },
]

const SECTIONS = [
  {
    heading: 'Yes — full service in English and Spanish',
    body: `Premium Services Corporation provides complete tax strategy and financial advisory services in both English and Spanish. This is not a translation service or a simplified version of the full offering. Every service — tax strategy, accounting, payroll, business advisory, and financial planning — is available in full in both languages.\n\nDr. Marla Sabater is bilingual and has been serving English and Spanish-speaking business owners and families across Rhode Island since 1996. The bilingual capability is built into the practice, not added as an accommodation.`,
  },
  {
    heading: 'Why this matters for business owners',
    body: `Financial and tax advice is only as useful as it is understood. A tax strategy explained in a language that is not your primary language — or translated through someone else — loses precision at every step. The nuances of entity structure, retirement vehicle selection, and estimated tax calculations are not simple concepts. They require clear communication in the language the client thinks in.\n\nFor business owners who are more comfortable in Spanish, working with a financial advisor in English means every conversation has friction. Questions go unasked. Recommendations are partially understood. Decisions are made with incomplete information. The quality of the outcome is lower than it would be in a conversation that happens in the client's own language.\n\nPremium Services Corporation removes that friction entirely. The conversation happens in whatever language serves the client best.`,
  },
  {
    heading: 'The origin of the bilingual practice',
    body: `Dr. Marla Sabater built Premium Services Corporation in Providence in 1996 because the families and small businesses around her had no one who could explain finances clearly in their own language. The bilingual service was not a feature added later to expand the market. It was the founding reason the practice exists.\n\nProvidence has a significant Spanish-speaking population and a long history of entrepreneurship within that community. For thirty years Premium Services Corporation has served business owners across Rhode Island who needed a trusted financial partner who could advise them in Spanish — on taxes, on structure, on payroll, and on the long-term financial decisions that determine whether a business succeeds.`,
  },
  {
    heading: 'What bilingual tax strategy covers',
    body: `Every aspect of the tax strategy engagement is available in Spanish. The initial structure review and entity analysis. The quarterly planning conversations. The year-end tax planning session. The preparation and filing of federal and Rhode Island state returns. The explanation of any IRS or state correspondence. The ongoing advisory relationship.\n\nThis also extends to all other services within Premium Services Corporation. Bookkeeping and accounting. Payroll processing. Business advisory. Financial planning. If you are a bilingual business owner who needs comprehensive financial services and wants to work in Spanish — or in both languages depending on the context — Premium Services Corporation is structured to accommodate that entirely.`,
  },
  {
    heading: 'Serving the Rhode Island business community',
    body: `Rhode Island has one of the most diverse business communities in New England. Providence in particular has significant representation from Latin American, Caribbean, and other Spanish-speaking communities — many of whom have built businesses that serve their neighborhoods and the broader city.\n\nThese businesses face the same tax obligations, the same structural decisions, and the same financial planning challenges as any other small business. They deserve the same quality of advice — and they deserve to receive it without language being a barrier.\n\nPremium Services Corporation has been a part of this community for thirty years. The bilingual service is not a marketing position. It is a reflection of who we serve and who we have always served.`,
  },
  {
    heading: 'Getting started',
    body: `If you are looking for a bilingual tax advisor, accountant, or financial advisor in Providence or anywhere in Rhode Island and New England, Premium Services Corporation provides full service in English and Spanish.\n\nThe first conversation can happen in either language or both. There is no paperwork to fill out before that conversation and no obligation attached to it. Schedule a consultation through the contact page and indicate your language preference — or simply reach out in Spanish directly.`,
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
        { name: 'Bilingual Tax Strategy', url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/bilingual-tax-strategy' },
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
              { label:'BILINGUAL SERVICE', href:null },
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
            PREMIUM SERVICES CORPORATION · EN / ES
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-hero)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)',
            color: 'var(--cream)', maxWidth: '680px',
            textWrap: 'balance' as React.CSSProperties['textWrap'],
            margin: 0,
          }}>
            Does Premium Services Corporation offer tax strategy in Spanish?
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
            Ready to work with an advisor who speaks your language?{' '}
            <em style={{ fontStyle:'italic', color:'var(--gold-soft)' }}>Hablemos.</em>
          </h2>
          <p style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontWeight:400, fontSize:'var(--t-lead)', lineHeight:'var(--lh-lead)', color:'rgba(242,233,218,0.72)', marginTop:'16px', maxWidth:'440px' }}>
            Premium Services Corporation provides full tax strategy and financial advisory in English and Spanish. Schedule a consultation in either language.
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
