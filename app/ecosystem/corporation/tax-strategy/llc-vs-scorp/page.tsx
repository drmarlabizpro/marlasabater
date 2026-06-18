'use client'

import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{
    '@type': 'Question',
    name: 'Should my small business be an LLC or S-Corp for tax purposes?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'It depends on your revenue and how you pay yourself. An S-Corp election can reduce self-employment tax significantly once your business generates consistent profit above approximately $50,000 annually. An LLC taxed as a sole proprietorship is simpler but more expensive at higher income levels. This decision should be made with a tax advisor who understands your full financial picture.',
    },
  }],
}

const TAKEAWAYS = [
  {
    title: 'S-Corp is a tax election not a legal entity',
    body: 'You do not form an S-Corp. You form an LLC or corporation and elect S-Corp tax treatment. The legal structure and the tax structure are separate decisions.',
  },
  {
    title: 'The break-even is roughly $50,000 net profit',
    body: 'Below this level the administrative cost of S-Corp compliance often exceeds the tax savings. Above it the savings grow proportionally with income.',
  },
  {
    title: 'Reasonable salary is required',
    body: 'The IRS requires S-Corp owners to pay themselves a reasonable salary before taking distributions. Getting this number wrong is the most common S-Corp compliance error.',
  },
  {
    title: 'Rhode Island has its own entity taxes',
    body: 'Rhode Island LLCs pay a $400 annual tax. S-Corps pay a minimum corporate tax. Factor state costs into the comparison alongside federal savings.',
  },
]

const RELATED = [
  { q: 'How much can a small business save with a tax strategy?', href: '/ecosystem/corporation/tax-strategy/how-much-can-you-save' },
  { q: 'What is the difference between tax preparation and tax strategy?', href: '/ecosystem/corporation/tax-strategy/tax-preparation-vs-strategy' },
  { q: 'When should I start thinking about tax strategy?', href: '/ecosystem/corporation/tax-strategy/when-to-start-tax-planning' },
  { q: 'Does Premium Services Corporation offer tax strategy in Spanish?', href: '/ecosystem/corporation/tax-strategy/bilingual-tax-strategy' },
]

const SECTIONS = [
  {
    heading: 'Understanding the question',
    body: `When people ask whether they should be an LLC or an S-Corp they are usually asking two different questions at once. The first is a legal question about entity structure. The second is a tax question about how the entity should be taxed. These are related but separate decisions and understanding the distinction is essential to making the right choice.\n\nAn LLC is a legal entity — a structure that provides liability protection and a clear separation between your personal assets and your business obligations. It says nothing by itself about how the business is taxed. By default a single-member LLC is taxed as a disregarded entity, meaning all income flows to your personal return and is subject to self-employment tax on net earnings.\n\nAn S-Corp is not a legal entity at all. It is a tax election. You cannot form an S-Corp the way you form an LLC. You form an LLC or a corporation and then elect S-Corp tax treatment by filing Form 2553 with the IRS. The legal structure and the tax structure are separate choices.`,
  },
  {
    heading: 'How self-employment tax works and why it matters',
    body: `Self-employment tax is the mechanism by which self-employed individuals pay into Social Security and Medicare. For employees these taxes are split between the employee and the employer — each pays 7.65 percent. A self-employed individual pays both sides — 15.3 percent on net earnings up to the Social Security wage base and 2.9 percent on earnings above it.\n\nOn $150,000 in net business profit a sole proprietor or single-member LLC owner pays approximately $21,000 in self-employment tax. This is in addition to income tax. It is one of the largest tax obligations most small business owners face and it is the primary target of the S-Corp election.`,
  },
  {
    heading: 'How the S-Corp election reduces self-employment tax',
    body: `When a business owner elects S-Corp tax treatment the business income is split into two categories: salary and distributions. Salary is subject to payroll taxes — the equivalent of self-employment tax split between employee and employer. Distributions from the business's remaining profit are not subject to payroll taxes.\n\nThis split is where the savings come from. If a business generates $150,000 in profit and the owner takes a reasonable salary of $80,000, payroll taxes apply only to the $80,000 salary. The remaining $70,000 taken as distributions avoids payroll tax entirely. At a combined rate of approximately 15.3 percent on the salary portion versus 15.3 percent on the full amount without the election, the savings on $70,000 in distributions is approximately $10,700 annually.\n\nThis calculation is why the S-Corp election is one of the most consistently valuable tax moves available to small business owners at the right income level.`,
  },
  {
    heading: 'The reasonable salary requirement',
    body: `The IRS is well aware of the S-Corp strategy and has rules to prevent abuse. The key rule is that S-Corp owner-employees must pay themselves a reasonable salary before taking distributions. You cannot pay yourself a $1 salary and take everything else as distributions — the IRS has the authority to reclassify unreasonably low salaries and assess back payroll taxes with penalties.\n\nReasonable salary is defined by what you would pay someone else to do the same work. For a business owner who is the primary operator a reasonable salary is typically in the range of 40 to 60 percent of the business's net profit, though the right number depends on the industry, the role, and what comparable positions pay in the market.\n\nGetting the reasonable salary calculation right is the most important compliance requirement for an S-Corp owner and one of the primary areas where professional guidance pays for itself.`,
  },
  {
    heading: 'When the S-Corp election makes sense',
    body: `The S-Corp election produces net savings when the reduction in self-employment tax exceeds the additional costs of operating an S-Corp. Those additional costs include running payroll for yourself — which requires either a payroll service or significant administrative time — more complex accounting, corporate formalities, and potentially higher professional fees for tax preparation.\n\nA rough threshold: the S-Corp election begins producing meaningful net savings at approximately $50,000 to $60,000 in annual net profit. Below that level the administrative costs often outweigh the tax savings. Above it the savings grow proportionally with income.\n\nFor a business generating $100,000 in net profit the annual savings after accounting for additional administrative costs is typically in the range of $3,000 to $6,000. At $200,000 in net profit the savings grow to $8,000 to $15,000 or more depending on how the salary is structured.`,
  },
  {
    heading: 'Rhode Island specific considerations',
    body: `Rhode Island charges a $400 annual LLC tax on single-member and multi-member LLCs regardless of income. S-Corps in Rhode Island are subject to the state corporate income tax and a minimum corporate tax. The specific state tax cost of each structure is part of the comparison that should be made for any Rhode Island business owner considering the election.\n\nAdditionally Rhode Island conforms to most federal S-Corp rules, meaning the federal election produces the same basic structure at the state level. Your state tax advisor can confirm the specific implications for your situation.\n\nPremium Services Corporation has advised Rhode Island business owners on this decision for thirty years. The state-specific layer is part of every structure analysis we do.`,
  },
  {
    heading: 'How to make the decision',
    body: `The LLC versus S-Corp decision is not one-size-fits-all and it is not static. The right answer at $80,000 in annual profit may not be the right answer at $200,000. The decision should be modeled against your specific income level, your current salary, and your state tax environment.\n\nThe questions to answer are: what is your current net business profit? What is a reasonable salary for your role? What would the payroll tax savings be on the distribution portion? What additional accounting and administrative costs would the S-Corp add? Does the savings exceed the cost at your current income level and projected growth?\n\nPremium Services Corporation walks through this analysis with every client for whom the question is relevant. The modeling is specific, the recommendation is grounded in numbers, and the implementation is handled completely so the election produces its intended results without administrative complications.`,
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
        { name: 'LLC vs S-Corp', url: 'https://marlasabater.com/ecosystem/corporation/tax-strategy/llc-vs-scorp' },
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
              { label:'LLC VS S-CORP', href:null },
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
            Should my small business be an LLC or S-Corp for tax purposes?
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
            Not sure if the S-Corp election is right for you?{' '}
            <em style={{ fontStyle:'italic', color:'var(--gold-soft)' }}>Let&apos;s model it.</em>
          </h2>
          <p style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontWeight:400, fontSize:'var(--t-lead)', lineHeight:'var(--lh-lead)', color:'rgba(242,233,218,0.72)', marginTop:'16px', maxWidth:'440px' }}>
            Premium Services Corporation walks through the LLC versus S-Corp analysis with every client for whom the question is relevant. The modeling is specific to your income, your role, and your state tax environment.
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
