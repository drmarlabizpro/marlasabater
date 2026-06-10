'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function Grain({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      opacity, mixBlendMode: 'multiply' as const, backgroundImage: GRAIN,
      zIndex: 1
    }} />
  )
}

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function revealStyle(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(22px)',
    transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
  }
}

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

const ROW_ACCENT: Record<string, string> = {
  '01': '#7C2230',
  '02': '#8A2738',
  '03': '#2A6452',
  '04': '#9A7A2C',
  '05': '#8A2330',
  '06': '#5A2F5E',
  '07': '#236460',
  '08': '#9A7A2C',
}

function WordReveal({ text, emText, style, emStyle }: {
  text: string
  emText?: string
  style?: React.CSSProperties
  emStyle?: React.CSSProperties
}) {
  const { ref, visible } = useReveal(0.15)
  const words = text.split(' ')
  const emWords = emText ? emText.split(' ') : []
  return (
    <div ref={ref} style={style}>
      {words.map((word, i) => (
        <span key={i} style={{
          display: 'inline-block',
          marginRight: '0.22em',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(16px)',
          transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
        }}>
          {word}
        </span>
      ))}
      {emWords.length > 0 && (
        <em style={{ fontStyle: 'italic', color: 'var(--crimson)', ...emStyle }}>
          {emWords.map((word, i) => (
            <span key={i} style={{
              display: 'inline-block',
              marginRight: i < emWords.length - 1 ? '0.22em' : '0',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(16px)',
              transition: `opacity 0.5s ease ${(words.length + i) * 80}ms, transform 0.5s ease ${(words.length + i) * 80}ms`,
            }}>
              {word}
            </span>
          ))}
        </em>
      )}
    </div>
  )
}

type EcoRow = {
  no: string
  name: string
  href: string
  purpose: string
  tag: string
  flagship?: boolean
}

const ECOSYSTEM: EcoRow[] = [
  {
    no: '01',
    name: 'Dr. Marla Biz Pro Corp',
    href: '/ecosystem',
    purpose: 'The leadership and strategy behind all eight. The vision that holds the house together.',
    tag: 'LEADERSHIP & STRATEGY',
  },
  {
    no: '02',
    name: 'Premium Services Enterprise',
    href: '/ecosystem/enterprise',
    purpose: 'Long-term investment strategy. Property, holdings, and the decades ahead.',
    tag: 'INVESTMENTS & ACQUISITIONS',
    flagship: true,
  },
  {
    no: '03',
    name: 'Premium Services Corporation',
    href: '/ecosystem/corporation',
    purpose: 'Financial stability and long-term growth for individuals and businesses.',
    tag: 'FINANCIAL & WEALTH MANAGEMENT',
  },
  {
    no: '04',
    name: 'Premium Services Group',
    href: '/ecosystem/group',
    purpose: 'Projects that strengthen businesses and communities across the region.',
    tag: 'CONSTRUCTION & DEVELOPMENT',
  },
  {
    no: '05',
    name: 'Flavor Movement',
    href: '/ecosystem/flavor',
    purpose: 'Memorable food experiences that bring people together.',
    tag: 'FOOD & HOSPITALITY',
  },
  {
    no: '06',
    name: 'Legacy Production House',
    href: '/ecosystem/legacy',
    purpose: 'Helping creatives develop sustainable platforms and professional visibility.',
    tag: 'MEDIA & TALENT',
  },
  {
    no: '07',
    name: 'Marvic Hospitality Group',
    href: '/ecosystem/marvic',
    purpose: 'Experiences that connect people and communities.',
    tag: 'HOSPITALITY & ENTERTAINMENT',
  },
  {
    no: '08',
    name: 'PSG Motor Group',
    href: '/ecosystem/psg',
    purpose: 'Reliable automotive solutions for business and individuals.',
    tag: 'AUTOMOTIVE SALES & SERVICES',
  },
]

export default function Home() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const cardsRef = useRef<HTMLDivElement>(null)
  const [cardsVisible, setCardsVisible] = useState(false)
  useEffect(() => {
    const el = cardsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCardsVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const count30 = useCountUp(30, 1600, statsVisible)
  const count8 = useCountUp(8, 1200, statsVisible)
  const count1000 = useCountUp(1000, 2000, statsVisible)

  const heroReveal = useReveal()
  const quoteReveal = useReveal()
  const { ref: ecosystemRef, visible: ecosystemVisible } = useReveal()
  const communityReveal = useReveal()
  const aboutReveal = useReveal()
  const featuredReveal = useReveal()

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .home-stats-row { flex-wrap: nowrap !important; }
          .home-stats-block { padding-right: clamp(32px, 6vw, 96px); }
          .home-stats-block:not(:last-child) { border-right: 1px solid var(--ink-15); }
          .home-eco-intro { display: grid !important; grid-template-columns: 1fr 1fr; gap: 64px; }
          .home-eco-right { display: block !important; }
          .home-impact-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .home-about-grid { grid-template-columns: 0.9fr 1.1fr !important; }
          .home-featured-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .home-contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 767px) {
          .home-stats-block { border-right: none !important; }
          .home-eco-right { display: none; }
          .home-eco-row { padding-left: 0 !important; }
        }
        @keyframes wordIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* SECTION 1: HERO */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '92vh',
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(201,162,60,0.18), rgba(90,26,36,0) 56%), linear-gradient(165deg, #7C2230, #5A1A24 58%, #4A1620)',
        color: 'var(--cream)',
        padding: 'clamp(120px,16vh,180px) var(--gut) clamp(64px,10vh,120px)',
      }}>
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.55)', marginBottom: 28,
            opacity: 0,
            animation: 'fadeUp 0.5s ease forwards',
            animationDelay: '0ms',
          }}>
            DR. MARLA ECOSYSTEM · EST. 1996
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(52px,9.5vw,128px)',
            lineHeight: 0.93, letterSpacing: '-0.022em',
            color: 'var(--cream)', maxWidth: '900px',
            margin: '0 0 0 0',
          }}>
            {['Thirty', 'years', 'building.', 'Eight', 'companies.'].map((word, i) => (
              <span key={i} style={{
                display: 'inline-block',
                marginRight: '0.22em',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `wordIn 0.55s ease forwards`,
                animationDelay: `${i * 80}ms`,
              }}>
                {word}
              </span>
            ))}
            {' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>
              {['One', 'vision.'].map((word, i) => (
                <span key={i} style={{
                  display: 'inline-block',
                  marginRight: i < 1 ? '0.22em' : '0',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  animation: `wordIn 0.55s ease forwards`,
                  animationDelay: `${(5 + i) * 80}ms`,
                }}>
                  {word}
                </span>
              ))}
            </em>
          </h1>

          <div style={{
            margin: '32px 0',
            borderTop: '2px solid var(--gold)',
            borderBottom: '1px solid var(--gold)',
            paddingTop: 5,
            width: 'clamp(120px,28vw,380px)',
            opacity: 0,
            animation: 'fadeUp 0.5s ease forwards',
            animationDelay: '520ms',
          }} />

          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(18px,2.4vw,26px)', lineHeight: 1.45,
            color: 'rgba(242,233,218,0.82)', maxWidth: 580, marginBottom: 40,
            opacity: 0,
            animation: 'fadeUp 0.5s ease forwards',
            animationDelay: '620ms',
          }}>
            Helping people build stronger businesses, stronger communities, and stronger futures.
          </p>

          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            opacity: 0,
            animation: 'fadeUp 0.5s ease forwards',
            animationDelay: '740ms',
          }}>
            <Link href="/contact" style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              background: 'var(--gold)', color: '#261014',
              padding: '15px 32px', textDecoration: 'none', display: 'inline-block',
            }}>
              SCHEDULE A CONSULTATION
            </Link>
            <Link href="/ecosystem" style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              border: '1px solid rgba(242,233,218,0.45)', color: 'var(--cream)',
              padding: '15px 32px', textDecoration: 'none', display: 'inline-block',
            }}>
              EXPLORE THE ECOSYSTEM →
            </Link>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: 36, left: 'var(--gut)',
          fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(242,233,218,0.38)', zIndex: 2,
          opacity: 0,
          animation: 'fadeUp 0.5s ease forwards',
          animationDelay: '860ms',
        }}>
          MBA · TH.D · PUBLISHED AUTHOR · 30 YEARS BUILDING BUSINESSES
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'clamp(56px,9vh,96px) var(--gut)',
      }}>
        <div ref={statsRef}>
          <div ref={heroReveal.ref} style={revealStyle(heroReveal.visible)}>
            <div className="home-stats-row" style={{
              display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,6vw,96px)',
            }}>
              {[
                { num: count30, suffix: '', label: 'YEARS OF LEADERSHIP', ctx: 'Building since 1996 from Providence, RI' },
                { num: count8, suffix: '', label: 'COMPANIES BUILT', ctx: 'Finance, construction, food, media, hospitality, automotive' },
                { num: count1000, suffix: '+', label: 'BUSINESSES AND FAMILIES SERVED', ctx: 'Across Rhode Island, Puerto Rico, and nationwide' },
              ].map((s, i) => (
                <div key={i} className="home-stats-block">
                  <div style={{
                    fontFamily: 'var(--serif)', fontWeight: 400,
                    fontSize: 'clamp(56px,9vw,96px)', lineHeight: 1,
                    letterSpacing: '-0.02em', color: 'var(--ink)',
                  }}>
                    {s.num}{s.suffix}
                  </div>
                  <div style={{
                    height: '2px',
                    background: 'var(--gold)',
                    width: statsVisible ? '60px' : '0px',
                    transition: 'width 0.6s ease',
                    transitionDelay: `${i * 200}ms`,
                    marginTop: '10px',
                    marginBottom: '4px',
                  }} />
                  <div style={{
                    fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: 'var(--gold-deep)', marginTop: 10,
                  }}>
                    {s.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 13,
                    lineHeight: 1.5, color: 'var(--ink-45)',
                    marginTop: 6, maxWidth: 180,
                  }}>
                    {s.ctx}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 'clamp(40px,6vh,64px)',
              borderTop: '1px solid var(--ink-15)',
              paddingTop: 28,
              fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 14,
              lineHeight: 1.6, color: 'var(--ink-70)', maxWidth: 680,
            }}>
              From a single practice at 356 Manton Avenue in Providence to a network of eight companies serving clients across nine industries. The ecosystem did not begin as a plan. It began as a response to what her community needed.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP PHILOSOPHY (PULL QUOTE) */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(170deg, #7C2230, #5A1A24)',
        color: 'var(--cream)',
        padding: 'clamp(72px,12vh,130px) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div aria-hidden style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          zIndex: 2,
        }} />
        <div ref={quoteReveal.ref} style={{ position: 'relative', zIndex: 2, ...revealStyle(quoteReveal.visible) }}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--gold-soft)', marginBottom: 32,
          }}>
            LEADERSHIP PHILOSOPHY
          </div>

          <div style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(28px,4.5vw,58px)', lineHeight: 1.08,
            letterSpacing: '-0.015em', color: 'var(--cream)', maxWidth: 820,
          }}>
            {(() => {
              const before = ['“The', 'foundation', 'you', 'choose', 'determines']
              const emWord = 'everything'
              const after = ['that', 'gets', 'built', 'on', 'top', 'of', 'it.”']
              let idx = 0
              const span = (word: string, key: string, isEm: boolean) => {
                const i = idx++
                return (
                  <span key={key} style={{
                    display: 'inline-block',
                    marginRight: '0.22em',
                    opacity: quoteReveal.visible ? 1 : 0,
                    transform: quoteReveal.visible ? 'none' : 'translateY(20px)',
                    transition: `opacity 0.55s ease ${i * 80}ms, transform 0.55s ease ${i * 80}ms`,
                    color: isEm ? 'var(--gold-soft)' : undefined,
                  }}>
                    {word}
                  </span>
                )
              }
              return (
                <>
                  {before.map((w, i) => span(w, `b${i}`, false))}
                  {span(emWord, 'em', true)}
                  {after.map((w, i) => span(w, `a${i}`, false))}
                </>
              )
            })()}
          </div>

          <div style={{
            margin: '28px 0',
            height: 2, background: 'var(--gold)',
            width: 'clamp(80px,16vw,160px)',
          }} />

          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'rgba(242,233,218,0.55)',
          }}>
            STRUCTURAL INTEGRITY — DR. MARLA SABATER
          </div>

          <div style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16,
            color: 'rgba(242,233,218,0.68)', marginTop: 8,
          }}>
            A practical guide to choosing the right foundation for your business. Published by Dr. Marla Sabater.
          </div>
        </div>
      </section>

      {/* SECTION 4: THE ECOSYSTEM */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'clamp(72px,11vh,120px) var(--gut)',
      }}>
        <div>
          <div ref={ecosystemRef} style={revealStyle(ecosystemVisible)}>
            <div className="home-eco-intro" style={{ display: 'block' }}>
              <div>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.3em', textTransform: 'uppercase',
                  color: 'var(--gold-deep)', marginBottom: 20,
                }}>
                  THE ECOSYSTEM · EIGHT DIVISIONS
                </div>
                <WordReveal
                  text="Eight companies."
                  emText="One house."
                  style={{
                    fontFamily: 'var(--serif)', fontWeight: 400,
                    fontSize: 'clamp(34px,5.5vw,68px)', lineHeight: 1,
                    letterSpacing: '-0.018em', color: 'var(--ink)',
                  }}
                />
                <p style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.62,
                  color: 'var(--ink-70)', marginTop: 20, maxWidth: 480,
                }}>
                  Each division was built because a real need existed in a community Dr. Marla knew personally. Finance came first. Construction followed. Then food, media, hospitality, automotive. Not a portfolio assembled for appearance. Eight answers to eight specific problems.
                </p>
                <div style={{
                  height: '1px',
                  background: 'var(--gold)',
                  width: ecosystemVisible ? '80px' : '0px',
                  transition: 'width 0.7s ease 0.3s',
                  marginTop: '28px',
                }} />
              </div>
              <div className="home-eco-right">
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 15, lineHeight: 1.7, color: 'var(--ink-45)', paddingTop: 8,
                }}>
                  The goal is for visitors to understand that all divisions work together to help individuals, businesses, and communities grow stronger — financially, professionally, and personally.
                </div>
              </div>
            </div>
          </div>

          <div style={{
            margin: '40px 0',
            height: 1, background: 'var(--ink-15)', width: '100%',
          }} />

          <div>
            {ECOSYSTEM.map((c, idx) => {
              const isHover = hoveredRow === c.no
              const isLast = idx === ECOSYSTEM.length - 1
              return (
                <Link
                  key={c.no}
                  href={c.href}
                  className="home-eco-row"
                  onMouseEnter={() => setHoveredRow(c.no)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '22px 0',
                    paddingLeft: '16px',
                    borderBottom: isLast ? 'none' : '1px solid var(--ink-15)',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    gap: 24,
                    transition: 'padding-left 0.2s ease',
                  }}
                >
                  <span aria-hidden style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3px',
                    height: isHover ? '100%' : '0%',
                    background: ROW_ACCENT[c.no],
                    transition: 'height 0.22s ease',
                    borderRadius: '0 2px 2px 0',
                  }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                      <span style={{
                        fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                        letterSpacing: '0.18em', textTransform: 'uppercase',
                        color: 'var(--gold-deep)',
                      }}>
                        No. {c.no}
                      </span>
                      {c.flagship && (
                        <span style={{
                          fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 9,
                          letterSpacing: '0.3em', textTransform: 'uppercase',
                          color: 'var(--gold-soft)',
                        }}>
                          THE FLAGSHIP
                        </span>
                      )}
                      <span style={{
                        fontFamily: 'var(--serif)', fontWeight: 400,
                        fontSize: 'clamp(18px,2.8vw,28px)', letterSpacing: '-0.01em',
                        color: isHover ? ROW_ACCENT[c.no] : 'var(--ink)',
                        transition: 'color 0.2s ease',
                      }}>
                        {c.name}
                      </span>
                    </div>
                    <div style={{
                      fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 13,
                      lineHeight: 1.5, marginTop: 4,
                      color: 'var(--ink-45)',
                    }}>
                      {c.purpose}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', whiteSpace: 'nowrap' }}>
                    <span style={{
                      fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                      letterSpacing: '0.22em', textTransform: 'uppercase',
                      color: 'var(--gold-deep)',
                    }}>
                      {c.tag}
                    </span>
                    <span style={{
                      fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 16,
                      marginLeft: 10,
                      color: isHover ? 'var(--gold-deep)' : 'var(--ink-45)',
                      transition: 'color 0.2s ease',
                    }}>
                      →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div style={{ marginTop: 40 }}>
            <Link href="/ecosystem" style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              border: '1px solid var(--ink-15)', color: 'var(--ink-70)',
              padding: '13px 28px', textDecoration: 'none', display: 'inline-block',
            }}>
              VIEW ALL DIVISIONS →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMMUNITY IMPACT */}
      <section style={{
        background: 'var(--cream)',
        padding: 'clamp(72px,11vh,120px) var(--gut)',
      }}>
        <div ref={communityReveal.ref} style={revealStyle(communityReveal.visible)}>
          <div style={{ marginBottom: 48 }}>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--gold-deep)', marginBottom: 16,
            }}>
              COMMUNITY IMPACT
            </div>
            <WordReveal
              text="Built for the community."
              emText="Rooted in it."
              style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'clamp(30px,4.5vw,52px)', lineHeight: 1.05,
                letterSpacing: '-0.015em', color: 'var(--ink)',
              }}
            />
          </div>

          <div className="home-impact-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr', gap: 2,
          }}>
            {[
              { num: '30', label: 'YEARS SERVING PROVIDENCE', body: 'Serving clients across Rhode Island, Puerto Rico, and nationwide since 1996. A practice built on the belief that real communities deserve real financial expertise.' },
              { num: '9', label: 'INDUSTRIES SERVED', body: 'Finance, construction, food, media, hospitality, automotive, real estate, payroll, and business advisory. The ecosystem covers what a growing business actually needs.' },
              { num: '8', label: 'COMPANIES BUILT WITH PURPOSE', body: 'Each company exists because Dr. Marla saw a gap in her community and built the answer. Not a portfolio. A life\u2019s work in eight chapters.' },
            ].map((b, i) => (
              <div key={i} style={{
                background: 'var(--cream-2)', padding: '36px 32px',
                borderTop: '2px solid var(--gold)',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1, color: 'var(--ink)',
                }}>
                  {b.num}
                </div>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--gold-deep)', marginTop: 10,
                }}>
                  {b.label}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 16, lineHeight: 1.6,
                  color: 'var(--ink-70)', marginTop: 14,
                }}>
                  {b.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ABOUT BRIDGE */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(100% 80% at 72% 26%, rgba(201,162,60,0.14), rgba(90,26,36,0) 54%), linear-gradient(165deg, #7C2230, #5A1A24 58%, #4A1620)',
        color: 'var(--cream)',
        padding: 'clamp(72px,11vh,120px) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div ref={aboutReveal.ref} className="home-about-grid" style={{
          position: 'relative', zIndex: 2,
          display: 'grid', gridTemplateColumns: '1fr', gap: 80,
          ...revealStyle(aboutReveal.visible),
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--gold-soft)', marginBottom: 20,
            }}>
              THE FOUNDER
            </div>
            <WordReveal
              text="Dr. Marla"
              emText="Yanice Sabater."
              style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 'clamp(32px,5vw,60px)', lineHeight: 1.02,
                letterSpacing: '-0.018em', color: 'var(--cream)',
              }}
              emStyle={{ color: 'var(--gold-soft)' }}
            />

            <div style={{
              margin: '24px 0',
              height: 2, background: 'var(--gold)',
              width: 'clamp(80px,18vw,200px)',
            }} />

            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24,
            }}>
              {['MBA', 'TH.D', 'PUBLISHED AUTHOR', 'EST. 1996'].map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 9,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  border: '1px solid rgba(242,233,218,0.3)',
                  color: 'rgba(242,233,218,0.7)',
                  padding: '6px 14px',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/about" style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              border: '1px solid var(--gold)', color: 'var(--gold)',
              padding: '13px 28px', textDecoration: 'none', display: 'inline-block',
              marginTop: 8,
            }}>
              READ THE FULL STORY →
            </Link>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.65,
              color: 'rgba(242,233,218,0.82)', maxWidth: 520,
            }}>
              Dr. Marla Yanice Sabater started Premium Services Corporation in Providence, Rhode Island in 1996. The work began because the families and small businesses around her had no one who could explain the numbers clearly, in their language, with their future in mind.
            </p>

            <p style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
              fontSize: 'clamp(16px,1.9vw,18px)', lineHeight: 1.6,
              color: 'rgba(242,233,218,0.68)', marginTop: 20,
            }}>
              What followed was not a strategic plan. Each new company was built because a need showed up that the community did not have a strong answer to. Thirty years later, the answer is eight companies, two published books, and over a thousand clients served.
            </p>

            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'rgba(242,233,218,0.38)', marginTop: 24,
            }}>
              MBA · TH.D · PUBLISHED AUTHOR · PROVIDENCE, RI
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FEATURED COMPANIES */}
      <section style={{
        background: 'var(--cream-2)',
        padding: 'clamp(72px,11vh,120px) var(--gut)',
      }}>
        <div ref={featuredReveal.ref} style={revealStyle(featuredReveal.visible)}>
          <div style={{
            fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--gold-deep)', marginBottom: 16,
          }}>
            FEATURED DIVISIONS
          </div>
          <WordReveal
            text="Where to"
            emText="start."
            style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.05,
              color: 'var(--ink)', marginBottom: 48,
            }}
          />

          <div ref={cardsRef} className="home-featured-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr', gap: 16,
          }}>
            {/* Card 1: PSE */}
            <div style={{
              position: 'relative', overflow: 'hidden',
              background: 'linear-gradient(160deg, #8A2738, #651E2A 58%, #531824)',
              color: 'var(--cream)', padding: '40px 32px',
              minHeight: 340, display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? 'none' : 'translateY(28px)',
              transition: `opacity 0.55s ease 0ms, transform 0.55s ease 0ms`,
            }}>
              <Grain opacity={0.06} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 9,
                  letterSpacing: '0.32em', textTransform: 'uppercase',
                  color: 'var(--gold-soft)', marginBottom: 12,
                }}>
                  THE FLAGSHIP
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(22px,3vw,32px)', letterSpacing: '-0.015em',
                  color: 'var(--cream)',
                }}>
                  Premium Services <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Enterprise.</em>
                </div>
                <div style={{
                  borderTop: '2px solid var(--gold)',
                  borderBottom: '1px solid var(--gold)',
                  paddingTop: 4, margin: '20px 0', width: 100,
                }} />
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15,
                  color: 'rgba(242,233,218,0.78)',
                }}>
                  Property, holdings, and the long view.
                </div>
              </div>
              <Link href="/ecosystem/enterprise" style={{
                position: 'relative', zIndex: 2,
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--gold-soft)', textDecoration: 'none',
                marginTop: 'auto', paddingTop: 24, display: 'block',
              }}>
                INVESTMENTS & ACQUISITIONS →
              </Link>
            </div>

            {/* Card 2: Corporation */}
            <div style={{
              position: 'relative', overflow: 'hidden',
              background: 'linear-gradient(168deg, #2A6452, #214E40)',
              color: 'var(--cream)', padding: '40px 32px',
              minHeight: 340, display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? 'none' : 'translateY(28px)',
              transition: `opacity 0.55s ease 150ms, transform 0.55s ease 150ms`,
            }}>
              <Grain opacity={0.06} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 9,
                  letterSpacing: '0.32em', textTransform: 'uppercase',
                  color: 'var(--gold-soft)', marginBottom: 12,
                }}>
                  FINANCIAL & WEALTH
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(22px,3vw,32px)', letterSpacing: '-0.015em',
                  color: 'var(--cream)',
                }}>
                  Premium Services <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Corporation.</em>
                </div>
                <div style={{
                  borderTop: '2px solid var(--gold)',
                  borderBottom: '1px solid var(--gold)',
                  paddingTop: 4, margin: '20px 0', width: 100,
                }} />
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15,
                  color: 'rgba(242,233,218,0.78)',
                }}>
                  Tax, accounting, and financial strategy. Built on the right foundation.
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
                  {[
                    { num: '30', label: 'YEARS' },
                    { num: '1,000+', label: 'CLIENTS' },
                    { num: '9', label: 'INDUSTRIES' },
                  ].map(f => (
                    <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <div style={{
                        fontFamily: 'var(--serif)', fontWeight: 400,
                        fontSize: 'clamp(20px,2.5vw,28px)', color: 'var(--gold-soft)',
                      }}>
                        {f.num}
                      </div>
                      <div style={{
                        fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 9,
                        letterSpacing: '0.16em', textTransform: 'uppercase',
                        color: 'rgba(242,233,218,0.55)',
                      }}>
                        {f.label}
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/ecosystem/corporation" style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--gold-soft)', textDecoration: 'none',
                  paddingTop: 8, display: 'block',
                }}>
                  FINANCIAL & WEALTH MANAGEMENT →
                </Link>
              </div>
            </div>

            {/* Card 3: Legacy */}
            <div style={{
              position: 'relative', overflow: 'hidden',
              background: 'radial-gradient(120% 92% at 50% 0%, #5A2F5E, #3A2140 48%, #281530)',
              color: 'var(--cream)', padding: '40px 32px',
              minHeight: 340, display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between', alignItems: 'center',
              textAlign: 'center',
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? 'none' : 'translateY(28px)',
              transition: `opacity 0.55s ease 300ms, transform 0.55s ease 300ms`,
            }}>
              <Grain opacity={0.06} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.24em', textTransform: 'uppercase',
                  color: 'var(--gold-soft)', marginBottom: 12,
                }}>
                  ARTIST DEVELOPMENT · MUSIC · PRODUCTION
                </div>
                <div style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 'clamp(22px,3vw,32px)', letterSpacing: '-0.015em',
                  color: 'var(--cream)', textAlign: 'center',
                }}>
                  Legacy <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Production House.</em>
                </div>
                <div style={{
                  borderTop: '2px solid var(--gold)',
                  borderBottom: '1px solid var(--gold)',
                  paddingTop: 4, margin: '20px auto', width: 100,
                }} />
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 15,
                  color: 'rgba(242,233,218,0.78)', textAlign: 'center',
                }}>
                  A way up for talent without access.
                </div>
              </div>
              <Link href="/ecosystem/legacy" style={{
                position: 'relative', zIndex: 2,
                fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--gold-soft)', textDecoration: 'none',
                marginTop: 'auto', paddingTop: 24, display: 'block',
                textAlign: 'center',
              }}>
                MEDIA & TALENT →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: 'radial-gradient(100% 80% at 28% 26%, rgba(201,162,60,0.14), rgba(90,26,36,0) 55%), linear-gradient(165deg, #7C2230, #5A1A24)',
        color: 'var(--cream)',
        padding: 'clamp(72px,11vh,120px) var(--gut)',
      }}>
        <Grain opacity={0.06} />
        <div className="home-contact-grid" style={{
          position: 'relative', zIndex: 2,
          display: 'grid', gridTemplateColumns: '1fr', gap: 80,
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--gold-soft)', marginBottom: 20,
            }}>
              GET IN TOUCH
            </div>
            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(30px,4.5vw,56px)', lineHeight: 1.04,
              letterSpacing: '-0.018em', color: 'var(--cream)',
            }}>
              Let&apos;s talk about your <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>business.</em>
            </h2>
            <p style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400,
              fontSize: 'clamp(16px,2vw,19px)', lineHeight: 1.55,
              color: 'rgba(242,233,218,0.75)', marginTop: 20, maxWidth: 440,
            }}>
              Schedule a consultation. Dr. Marla works with business owners at every stage, from structuring a new company to managing a growing ecosystem.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 32 }}>
              {[
                '356 Manton Avenue, Suite 1A',
                'Providence, RI 02909',
                '(401) 321-3781',
                'Marla@msabater.com',
                '@drmarlabizpro',
              ].map(item => (
                <div key={item} style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 13,
                  letterSpacing: '0.01em', color: 'var(--cream)',
                }}>
                  {item}
                </div>
              ))}
            </div>

            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'rgba(242,233,218,0.38)', marginTop: 32,
            }}>
              DR. MARLA SABATER · A HOUSE OF EIGHT COMPANIES · EST. 1996
            </div>
          </div>

          <div>
            <ContactForm dark={true} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        position: 'relative', overflow: 'hidden',
        background: '#48141E', color: 'var(--cream)',
        padding: 'clamp(48px,8vh,80px) var(--gut) clamp(32px,5vh,56px)',
      }}>
        <Grain opacity={0.05} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-start', flexWrap: 'wrap', gap: 40,
            paddingBottom: 32,
            borderBottom: '1px solid rgba(242,233,218,0.12)',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
                fontSize: 'clamp(22px,3vw,32px)', letterSpacing: '-0.015em',
                color: 'var(--cream)',
              }}>
                Dr. Marla
              </div>
              <div style={{
                fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 12,
                color: 'rgba(242,233,218,0.45)', marginTop: 4,
              }}>
                MBA · Th.D · Published Author
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 32px' }}>
              {[
                { label: 'Ecosystem', href: '/ecosystem' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
              ].map(item => (
                <Link key={item.label} href={item.href} style={{
                  fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'rgba(242,233,218,0.65)', textDecoration: 'none',
                }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: 20,
            paddingTop: 28,
          }}>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 10,
              letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'rgba(242,233,218,0.35)',
            }}>
              THE HOUSE · EST. 1996 · 356 MANTON AVE, PROVIDENCE RI
            </div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 11,
              color: 'rgba(242,233,218,0.35)',
            }}>
              © 2026 Dr. Marla Sabater. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
