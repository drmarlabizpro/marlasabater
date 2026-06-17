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

const FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(401) 000-0000' },
]

const SERVICES = [
  { value: 'tax-strategy', label: 'Tax Strategy' },
  { value: 'accounting', label: 'Accounting & Bookkeeping' },
  { value: 'payroll', label: 'Payroll Services' },
  { value: 'business-advisory', label: 'Business Advisory' },
  { value: 'financial-planning', label: 'Financial Planning' },
  { value: 'not-sure', label: 'Not sure yet — I need a consultation' },
]

const QUICK_LINKS = [
  { label: 'Tax Strategy', href: '/ecosystem/corporation/tax-strategy' },
  { label: 'Accounting & Bookkeeping', href: '/ecosystem/corporation/accounting' },
  { label: 'Payroll Services', href: '/ecosystem/corporation/payroll' },
  { label: 'Business Advisory', href: '/ecosystem/corporation/business-advisory' },
  { label: 'Financial Planning', href: '/ecosystem/corporation/financial-planning' },
]

const STEPS = [
  { num: '01', title: 'We receive your inquiry', body: 'Your message goes directly to Dr. Marla\u2019s team. We review it and prepare for your specific situation before we reach back out.' },
  { num: '02', title: 'We schedule a call', body: 'Within one business day we respond to schedule an initial consultation. This first conversation is about understanding your needs, not selling you anything.' },
  { num: '03', title: 'We build a plan together', body: 'After the consultation we outline exactly what working together looks like — scope, timeline, and next steps. You decide if it is the right fit.' },
]

export default function CorporationContactPage() {
  const [sent, setSent] = useState(false)
  const [service, setService] = useState('')

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
        { name: 'Premium Services Corporation', url: 'https://marlasabater.com/ecosystem/corporation' },
        { name: 'Contact', url: 'https://marlasabater.com/ecosystem/corporation/contact' },
      ]} />

      {/* SECTION 1 — HERO */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(48px,7vh,80px)',
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(42,100,82,0.5), rgba(33,78,64,0) 55%), linear-gradient(168deg, #2A6452, #214E40)',
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
            <Link href="/ecosystem/corporation" style={{ color: 'inherit', textDecoration: 'none' }}>CORPORATION</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>CONTACT</span>
          </div>

          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: '16px',
          }}>
            PREMIUM SERVICES CORPORATION
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'var(--t-hero)', lineHeight: 'var(--lh-display)',
            letterSpacing: 'var(--ls-display)', color: 'var(--cream)',
            maxWidth: '640px', textWrap: 'balance',
          }}>
            Let&apos;s build the right <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>financial foundation.</em>
          </h1>

          <div style={{
            height: '2px', background: 'var(--gold)',
            width: 'clamp(80px,16vw,160px)',
            margin: '24px 0',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'var(--t-lead)', lineHeight: 'var(--lh-lead)',
            color: 'rgba(242,233,218,0.78)', maxWidth: '500px',
          }}>
            Schedule a consultation with Premium Services Corporation. Tax, accounting, payroll, advisory, and financial planning for business owners across New England.
          </p>
        </div>

        <div style={{
          position: 'absolute', bottom: '32px', left: 'var(--gut)', zIndex: 2,
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(242,233,218,0.35)',
        }}>
          PREMIUM SERVICES CORPORATION · NO. 03
        </div>
      </section>

      {/* SECTION 2 — CONTACT SPLIT */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(170deg, #2A6452, #214E40)',
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
          {/* LEFT — info + service links */}
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
              Premium Services Corporation serves business owners across New England.
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
                  OFFICE HOURS
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(15px,2vw,18px)', color: 'var(--cream)', lineHeight: 1.4,
                }}>
                  Monday – Friday, 9:00 AM – 5:00 PM
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(15px,2vw,18px)', color: 'var(--cream)', lineHeight: 1.4,
                }}>
                  Saturday by appointment
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
              CORPORATION SERVICES
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {QUICK_LINKS.map(item => (
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
                    color: 'rgba(242,233,218,0.65)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.color = 'var(--cream)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.color = 'rgba(242,233,218,0.65)' }}>
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
              SCHEDULE A CONSULTATION
            </div>

            <p style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
              fontSize: 'var(--t-body)', color: 'rgba(242,233,218,0.65)',
              lineHeight: 'var(--lh-body)', marginBottom: '28px',
            }}>
              Fill out the form and we will be in touch within one business day.
            </p>

            {sent ? (
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic',
                fontSize: 'clamp(18px,2.4vw,24px)', color: 'var(--cream)',
                background: 'rgba(242,233,218,0.08)',
                border: '1px solid rgba(242,233,218,0.2)',
                padding: 32,
              }}>
                Message received. We will be in touch within one business day.
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
                      className="corp-form-field"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="service" style={labelStyle}>Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={e => setService(e.target.value)}
                    style={inputStyle}
                    className="corp-form-field"
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map(s => (
                      <option key={s.value} value={s.value} style={{ background: '#214E40', color: 'var(--cream)' }}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="business" style={labelStyle}>Business Name (optional)</label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    placeholder="Your business name"
                    style={inputStyle}
                    className="corp-form-field"
                  />
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Tell us about your situation</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Brief description of what you need help with..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    className="corp-form-field"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'var(--gold)',
                    color: '#214E40',
                    border: 'none',
                    padding: '15px 32px',
                    fontFamily: 'var(--sans)',
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase' as const,
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--gold-soft)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--gold)' }}
                >
                  SCHEDULE A CONSULTATION
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
        borderTop: '1px solid var(--ink-15)',
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
          From first contact to <em style={{ fontStyle: 'italic', color: '#214E40' }}>first meeting.</em>
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

      {/* SECTION 4 — ENDORSEMENT CLOSE */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(165deg, #2A6452, #214E40)',
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
              Premium Services <em style={{ color: 'var(--gold-soft)' }}>Corporation.</em>
            </div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'rgba(242,233,218,0.4)', marginTop: '6px',
            }}>
              FINANCIAL & WEALTH MANAGEMENT · NO. 03
            </div>
          </div>

          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.3)', textAlign: 'center',
          }}>
            356 MANTON AVE · PROVIDENCE RI · (401) 321-3781
          </div>

          <Link href="/ecosystem/corporation" style={{
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
            ← BACK TO CORPORATION
          </Link>
        </div>
      </section>
    </>
  )
}
