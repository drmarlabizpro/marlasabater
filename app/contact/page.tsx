import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Schedule a Consultation | Dr. Marla Sabater',
  description: 'Schedule a consultation with Dr. Marla Sabater. Accounting, payroll, investments, construction, food, media, hospitality, and automotive. 356 Manton Avenue, Providence, RI.',
  keywords: ['contact Dr Marla Sabater', 'schedule consultation Providence RI', 'accounting consultation Rhode Island', 'Dr Marla Sabater office'],
  openGraph: {
    title: 'Contact Dr. Marla Sabater',
    description: 'Schedule a consultation. 356 Manton Avenue, Suite 1A, Providence, RI.',
    url: 'https://marlasabater.com/contact',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  alternates: { canonical: 'https://marlasabater.com/contact' },
}

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const OFFICE = [
  "356 Manton Avenue, Suite 1A\nProvidence, RI 02909",
  "(401) 321-3781",
  "Marla@msabater.com",
  "@drmarlabizpro on Instagram",
]

const HOURS = [
  "Monday – Friday, 9am – 5pm",
  "Consultations by appointment",
]

const SERVICES = [
  { name: "Financial & Wealth Management", href: "/ecosystem/corporation" },
  { name: "Investments & Acquisitions", href: "/ecosystem/enterprise" },
  { name: "Construction & Development", href: "/ecosystem/group" },
  { name: "Food & Hospitality", href: "/ecosystem/flavor" },
  { name: "Media & Talent", href: "/ecosystem/legacy" },
  { name: "Hospitality & Entertainment", href: "/ecosystem/marvic" },
  { name: "Automotive Sales & Services", href: "/ecosystem/psg" },
  { name: "Leadership & Strategy", href: "/ecosystem" },
]

const detailRowStyle = {
  display: "flex",
  gap: 14,
  alignItems: "flex-start" as const,
}

const dotStyle = {
  width: 6,
  height: 6,
  borderRadius: "50%" as const,
  background: "var(--gold)",
  marginTop: 6,
  flexShrink: 0,
}

const detailTextStyle = {
  fontFamily: "var(--sans)",
  fontWeight: 500,
  fontSize: 15,
  color: "var(--ink-70)",
  lineHeight: 1.5,
  whiteSpace: "pre-line" as const,
}

const blockTitleStyle = {
  fontFamily: "var(--serif)",
  fontWeight: 400,
  fontSize: 22,
  color: "var(--ink)",
  marginBottom: 16,
}

export default function Contact() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .contact-body { grid-template-columns: 1fr 1fr !important; gap: 80px !important; }
        }
        .service-link { color: var(--ink-70); transition: color 0.2s; text-decoration: none; display: block; }
        .service-link:hover { color: var(--crimson); }
        .service-arrow { opacity: 0; transition: opacity 0.2s; }
        .service-link:hover .service-arrow { opacity: 1; }
      `}</style>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "52vh",
          background:
            "radial-gradient(100% 80% at 28% 26%, rgba(201,162,60,0.18), rgba(90,26,36,0) 56%), linear-gradient(165deg, #7C2230, #5A1A24 58%, #4A1620)",
          padding: "0 var(--gut)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.06,
            mixBlendMode: "multiply",
            backgroundImage: GRAIN,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 10,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(242,233,218,0.45)",
              marginBottom: 28,
            }}
          >
            Dr. Marla / Contact
          </div>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(44px, 8vw, 104px)",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              margin: 0,
            }}
          >
            Let&apos;s talk about your{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-soft)" }}>
              business.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(17px, 2.2vw, 24px)",
              color: "rgba(242,233,218,0.72)",
              marginTop: 18,
            }}
          >
            Schedule a consultation or reach out directly. We respond within
            one business day.
          </p>
        </div>
      </section>

      <section
        style={{
          background: "var(--cream-2)",
          padding: "clamp(64px, 10vh, 120px) var(--gut)",
        }}
      >
        <div
          className="contact-body"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 64,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold-deep)",
                marginBottom: 32,
              }}
            >
              Reach Us
            </div>

            <div style={{ marginBottom: 40 }}>
              <h2 style={blockTitleStyle}>The Office</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {OFFICE.map((item) => (
                  <div key={item} style={detailRowStyle}>
                    <span style={dotStyle} aria-hidden />
                    <span style={detailTextStyle}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 40 }}>
              <h2 style={blockTitleStyle}>Office Hours</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {HOURS.map((item) => (
                  <div key={item} style={detailRowStyle}>
                    <span style={dotStyle} aria-hidden />
                    <span style={detailTextStyle}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={blockTitleStyle}>What we can help with</h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {SERVICES.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="service-link"
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 500,
                        fontSize: 13,
                        lineHeight: 2,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.name}
                      <span className="service-arrow" aria-hidden>{" "}→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold-deep)",
                marginBottom: 24,
              }}
            >
              Send a Message
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--bordeaux)",
          color: "var(--cream)",
          padding: "40px var(--gut)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(18px, 2.4vw, 26px)",
            color: "rgba(242,233,218,0.85)",
          }}
        >
          Part of the Dr. Marla Ecosystem.
        </div>
        <div
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(242,233,218,0.5)",
          }}
        >
          Est. 1996 · Providence, RI
        </div>
      </section>
    </>
  )
}
