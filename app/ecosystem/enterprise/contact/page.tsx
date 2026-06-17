'use client'

import { useState } from 'react'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function Grain({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      opacity, mixBlendMode: 'multiply' as const,
      backgroundImage: GRAIN, zIndex: 1
    }} />
  )
}

const INQUIRY_TYPES = [
  { value: 'real-estate', label: 'Real Estate Holdings' },
  { value: 'acquisition', label: 'Business Acquisition — I am looking to sell' },
  { value: 'investment', label: 'Strategic Investment — I am looking for a partner' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'general', label: 'General Inquiry' },
]

const FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(401) 000-0000' },
]

const FOCUS_LINKS = [
  { label: 'Real Estate Holdings', href: '/ecosystem/enterprise/real-estate' },
  { label: 'Business Acquisitions', href: '/ecosystem/enterprise/acquisitions' },
  { label: 'Strategic Investments', href: '/ecosystem/enterprise/investments' },
]

const STEPS = [
  { num: '01', title: 'We review your inquiry', body: 'Every inquiry is reviewed personally. We take the time to understand the opportunity before responding.' },
  { num: '02', title: 'We schedule a call', body: 'Within one business day we reach out to schedule a brief introductory call. No commitment required on either side.' },
  { num: '03', title: 'We explore fit', body: 'The call is about mutual fit. If there is an opportunity worth pursuing we outline what next steps look like. If there is not we say so honestly.' },
]

export default function EnterpriseContactPage() {
  const [sent, setSent] = useState(false)
  const [inquiryType, setInquiryType] = useState('')

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--sans)',
    fontWeight: 600,
    fontSize: 10,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'rgba(242,233,218,0.55)',
    display: 'block',
    marginBottom: 8,
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: '1px solid rgba(242,233,218,0.18)',
    background: 'rgba(242,233,218,0.07)',
    padding: '13px 16px',
    fontFamily: 'var(--sans)',
    fontSize: 14,
    color: 'var(--cream)',
    outline: 'none',
    borderRadius: 0,
    boxSizing: 'border-box' as const,
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Dr. Marla', url: 'https://marlasabater.com' },
        { name: 'Ecosystem', url: 'https://marlasabater.com/ecosystem' },
        { name: 'Premium Services Enterprise', url: 'https://marlasabater.com/ecosystem/enterprise' },
        { name: 'Contact', url: 'https://marlasabater.com/ecosystem/enterprise/contact' },
      ]} />

      {/* SECTION 1 — HERO */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(48px,7vh,80px)',
        background: 'radial-gradient(100% 84% at 28% 28%, rgba(201,162,60,0.28), rgba(110,31,42,0) 56%), linear-gradient(160deg, #8A2738, #651E2A 58%, #531824)',
        color: 'var(--cream)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.38)', marginBottom: '28px',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>DR. MARLA</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/ecosystem/enterprise" style={{ color: 'inherit', textDecoration: 'none' }}>ENTERPRISE</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>CONTACT</span>
          </div>

          <div style={{
            display: 'inline-block',
            marginBottom: '16px',
            fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 9,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            background: 'var(--gold-soft)', color: '#651E2A',
            padding: '5px 14px',
          }}>
            THE FLAGSHIP
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-hero)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)', color: 'var(--cream)',
            maxWidth: '640px', textWrap: 'balance',
          }}>
            Start the <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>conversation.</em>
          </h1>

          <div style={{
            height: '2px', background: 'var(--gold)',
            width: 'clamp(80px,16vw,160px)',
            margin: '24px 0',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.82)', maxWidth: '520px',
          }}>
            Whether you are selling a business, exploring a partnership, or have a real estate opportunity — the first conversation costs nothing and obligates nothing.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '32px', left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(242,233,218,0.35)',
        }}>
          PREMIUM SERVICES ENTERPRISE · NO. 02
        </div>
      </section>

      {/* SECTION 2 — CONTACT SPLIT */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(100% 84% at 72% 26%, rgba(201,162,60,0.12), rgba(110,31,42,0) 55%), linear-gradient(170deg, #7C2230, #5A1A24)',
        color: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <Grain opacity={0.04} />
        <div data-cols="2" style={{
          position: 'relative', zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(48px, 8vw, 96px)',
        }}>
          {/* LEFT — info */}
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--gold-soft)', marginBottom: '20px',
            }}>
              GET IN TOUCH
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
              letterSpacing: 'var(--ls-headline)', color: 'var(--cream)',
              marginBottom: '28px', textWrap: 'balance',
            }}>
              Every opportunity begins with a conversation.
            </h2>

            <div style={{
              height: '1px', background: 'rgba(201,162,60,0.4)',
              marginBottom: '32px',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: 'var(--gold-soft)', opacity: 0.7,
                }}>
                  LOCATION
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(15px,2vw,18px)', color: 'var(--cream)', lineHeight: 1.4,
                }}>
                  356 Manton Avenue, Suite 1A
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(15px,2vw,18px)', color: 'var(--cream)', lineHeight: 1.4,
                }}>
                  Providence, RI 02909
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: 'var(--gold-soft)', opacity: 0.7,
                }}>
                  PHONE
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(15px,2vw,18px)', color: 'var(--cream)', lineHeight: 1.4,
                }}>
                  <a href="tel:4013213781" style={{ color: 'var(--cream)', textDecoration: 'none' }}>(401) 321-3781</a>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: 'var(--gold-soft)', opacity: 0.7,
                }}>
                  EMAIL
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(15px,2vw,18px)', color: 'var(--cream)', lineHeight: 1.4,
                }}>
                  <a href="mailto:Marla@msabater.com" style={{ color: 'var(--cream)', textDecoration: 'none' }}>Marla@msabater.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: 'var(--gold-soft)', opacity: 0.7,
                }}>
                  RESPONSE TIME
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(15px,2vw,18px)', color: 'var(--cream)', lineHeight: 1.4,
                }}>
                  Within one business day
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '32px', marginBottom: '32px',
              height: '1px', background: 'rgba(242,233,218,0.12)',
            }} />

            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--gold-soft)', opacity: 0.7, marginBottom: '16px',
            }}>
              ENTERPRISE FOCUS AREAS
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {FOCUS_LINKS.map(item => (
                <Link key={item.href} href={item.href} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}>
                  <span aria-hidden style={{
                    width: '4px', height: '4px', borderRadius: '50%',
                    background: 'var(--gold)', flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'rgba(242,233,218,0.6)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.color = 'var(--cream)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.color = 'rgba(242,233,218,0.6)' }}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--gold-soft)', marginBottom: '16px',
            }}>
              SEND AN INQUIRY
            </div>

            <p style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
              fontSize: 'var(--t-body)', color: 'rgba(242,233,218,0.65)',
              lineHeight: 'var(--lh-body)', marginBottom: '28px',
            }}>
              Tell us about your opportunity and we will follow up within one business day.
            </p>

            {sent ? (
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic',
                fontSize: 'clamp(18px,2.4vw,24px)', color: 'var(--cream)',
                background: 'rgba(242,233,218,0.08)',
                border: '1px solid rgba(242,233,218,0.2)',
                padding: 32,
              }}>
                Inquiry received. We will be in touch within one business day.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
              >
                {FIELDS.map(f => (
                  <div key={f.name}>
                    <label htmlFor={f.name} style={labelStyle}>{f.label}</label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.name !== 'phone'}
                      style={inputStyle}
                      className="ent-form-field"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="inquiry" style={labelStyle}>Nature of Inquiry</label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={inquiryType}
                    onChange={e => setInquiryType(e.target.value)}
                    style={inputStyle}
                    className="ent-form-field"
                  >
                    <option value="" disabled>Select inquiry type</option>
                    {INQUIRY_TYPES.map(t => (
                      <option key={t.value} value={t.value} style={{ background: '#651E2A', color: 'var(--cream)' }}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="business" style={labelStyle}>Business or Property Name (optional)</label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    placeholder="Name of the business or property"
                    style={inputStyle}
                    className="ent-form-field"
                  />
                </div>

                <div>
                  <label htmlFor="revenue" style={labelStyle}>Annual Revenue Range (optional)</label>
                  <select
                    id="revenue"
                    name="revenue"
                    style={inputStyle}
                    className="ent-form-field"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a range</option>
                    <option value="under-250k" style={{ background: '#651E2A', color: 'var(--cream)' }}>Under $250,000</option>
                    <option value="250k-500k" style={{ background: '#651E2A', color: 'var(--cream)' }}>$250,000 – $500,000</option>
                    <option value="500k-1m" style={{ background: '#651E2A', color: 'var(--cream)' }}>$500,000 – $1,000,000</option>
                    <option value="1m-5m" style={{ background: '#651E2A', color: 'var(--cream)' }}>$1,000,000 – $5,000,000</option>
                    <option value="over-5m" style={{ background: '#651E2A', color: 'var(--cream)' }}>Over $5,000,000</option>
                    <option value="not-applicable" style={{ background: '#651E2A', color: 'var(--cream)' }}>Not applicable</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Tell us about the opportunity</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Brief description of the business, property, or opportunity..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    className="ent-form-field"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'var(--gold)',
                    color: '#651E2A',
                    border: 'none',
                    padding: '15px 32px',
                    fontFamily: 'var(--sans)',
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase' as const,
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--gold-soft)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--gold)' }}
                >
                  SEND INQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT HAPPENS NEXT */}
      <section style={{
        background: 'var(--cream)',
        padding: 'var(--section-pad) var(--gut)',
      }}>
        <div style={{
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: 'var(--gold-deep)', marginBottom: '16px',
        }}>
          WHAT TO EXPECT
        </div>

        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'var(--t-display)', lineHeight: 'var(--lh-headline)',
          letterSpacing: 'var(--ls-headline)', color: 'var(--ink)',
          maxWidth: '560px', marginBottom: '48px', textWrap: 'balance',
        }}>
          Simple. Confidential. <em style={{ fontStyle: 'italic', color: '#7C2230' }}>No pressure.</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2px',
        }}>
          {STEPS.map(step => (
            <div key={step.num} style={{
              background: 'var(--cream-2)',
              padding: '32px 28px',
              borderTop: '2px solid var(--gold)',
            }}>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
                fontSize: 'clamp(48px,7vw,72px)', lineHeight: 1,
                color: 'rgba(38,16,20,0.06)', marginBottom: '8px',
              }}>
                {step.num}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'var(--t-subhead)', color: 'var(--ink)',
                lineHeight: 'var(--lh-headline)', marginBottom: '8px',
              }}>
                {step.title}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 'var(--t-body)', color: 'var(--ink-70)',
                lineHeight: 'var(--lh-body)',
              }}>
                {step.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — A NOTE ON CONFIDENTIALITY */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'var(--section-pad) var(--gut)',
        borderTop: '1px solid var(--ink-15)',
      }}>
        <div style={{ maxWidth: '680px' }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: '16px',
          }}>
            CONFIDENTIALITY
          </div>

          <p style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(17px,2.2vw,22px)', lineHeight: 'var(--lh-body)',
            color: 'var(--ink-70)', maxWidth: '640px',
          }}>
            All inquiries to Premium Services Enterprise are treated with complete confidentiality. Information shared during the inquiry and evaluation process is used solely to assess fit and structure potential transactions. We do not share information about inquiring parties with third parties.
          </p>

          <p style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(17px,2.2vw,22px)', lineHeight: 'var(--lh-body)',
            color: 'var(--ink-70)', maxWidth: '640px', marginTop: '16px',
          }}>
            Formal NDAs are available upon request before any detailed financial information is exchanged. We understand that sharing information about your business requires trust and we take that seriously.
          </p>
        </div>
      </section>

      {/* SECTION 5 — ENDORSEMENT CLOSE */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(201,162,60,0.16), rgba(90,26,36,0) 55%), linear-gradient(165deg, #7C2230, #5A1A24)',
        color: 'var(--cream)',
        padding: 'clamp(48px,7vh,72px) var(--gut)',
      }}>
        <Grain opacity={0.05} />
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '32px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
              fontSize: 'clamp(20px,2.8vw,28px)', letterSpacing: '-0.015em',
              color: 'var(--cream)',
            }}>
              Premium Services <em style={{ color: 'var(--gold-soft)' }}>Enterprise.</em>
            </div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'rgba(242,233,218,0.4)', marginTop: '6px',
            }}>
              INVESTMENTS & ACQUISITIONS · NO. 02
            </div>
          </div>

          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.28)', textAlign: 'center',
          }}>
            356 MANTON AVE · PROVIDENCE RI · (401) 321-3781
          </div>

          <Link href="/ecosystem/enterprise" style={{
            border: '1px solid rgba(242,233,218,0.25)',
            color: 'rgba(242,233,218,0.65)',
            padding: '10px 24px',
            fontFamily: 'var(--sans)',
            fontWeight: 600,
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            ← BACK TO ENTERPRISE
          </Link>
        </div>
      </section>
    </>
  )
}
