import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function Grain() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity: 0.06,
        mixBlendMode: "multiply",
        backgroundImage: GRAIN_URL,
      }}
    />
  );
}

const COMPANIES = [
  {
    no: "01",
    name: "Dr. Marla Biz Pro Corp",
    href: "/ecosystem",
    role: "LEADERSHIP & STRATEGY",
  },
  {
    no: "02",
    name: "Premium Services Enterprise",
    href: "/ecosystem/enterprise",
    role: "INVESTMENTS & ACQUISITIONS",
    flagship: true,
  },
  {
    no: "03",
    name: "Premium Services Corporation",
    href: "/ecosystem/corporation",
    role: "FINANCIAL & WEALTH MANAGEMENT",
  },
  {
    no: "04",
    name: "Premium Services Group",
    href: "/ecosystem/group",
    role: "CONSTRUCTION & DEVELOPMENT",
  },
  {
    no: "05",
    name: "Flavor Movement",
    href: "/ecosystem/flavor",
    role: "FOOD & HOSPITALITY",
  },
  {
    no: "06",
    name: "Legacy Production House",
    href: "/ecosystem/legacy",
    role: "MEDIA & TALENT",
  },
  {
    no: "07",
    name: "Marvic Hospitality Group",
    href: "/ecosystem/marvic",
    role: "HOSPITALITY & ENTERTAINMENT",
  },
  {
    no: "08",
    name: "PSG Motor Group",
    href: "/ecosystem/psg",
    role: "AUTOMOTIVE SALES & SERVICES",
  },
];

const SERVICES = [
  {
    no: "01",
    title: "Accounting",
    body: "Clean books, accurate reporting, and tax strategy. From monthly bookkeeping to full CFO advisory.",
  },
  {
    no: "02",
    title: "Payroll",
    body: "Accurate on-time payroll, direct deposit, tax filings, and compliance. Your team gets paid correctly, every time.",
  },
  {
    no: "03",
    title: "Business Advisory",
    body: "Strategic guidance for business owners at every stage. Financial planning, business structuring, and growth strategy.",
  },
];

const CONTACT_ITEMS = [
  "356 Manton Avenue, Suite 1A, Providence, RI 02909",
  "(401) 321-3781",
  "Marla@msabater.com",
  "@drmarlabizpro",
];

export const metadata: Metadata = {
  title: 'Dr. Marla Sabater | Business Strategist & Ecosystem Founder | Providence, RI',
  description: 'Dr. Marla Sabater is a business strategist, published author, and founder of eight companies spanning finance, construction, food, media, hospitality, and automotive. Based in Providence, RI. Serving nationwide since 1996.',
  keywords: ['Dr Marla Sabater', 'business strategist Providence RI', 'accounting payroll Rhode Island', 'bilingual business advisor', 'ecosystem founder', 'Premium Services Corporation'],
  openGraph: {
    title: 'Dr. Marla Sabater | Business Strategist & Ecosystem Founder',
    description: 'Eight companies. One vision. Thirty years building businesses in Providence, RI and nationwide.',
    url: 'https://marlasabater.com',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Marla Sabater | Business Strategist & Ecosystem Founder',
    description: 'Eight companies. One vision. Thirty years building businesses in Providence, RI and nationwide.',
  },
  alternates: {
    canonical: 'https://marlasabater.com',
  },
};

export default function Home() {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .nav-links, .nav-cta { display: none !important; }
        }
        @media (min-width: 768px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .home-eco-row { transition: background 200ms ease; }
        .home-eco-row:hover { background: rgba(242,233,218,0.05); }
        .home-eco-row .home-eco-arrow { opacity: 0; transition: opacity 200ms ease; }
        .home-eco-row:hover .home-eco-arrow { opacity: 1; }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--bordeaux)",
          padding: "20px var(--gut)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: 22,
            color: "var(--cream)",
            textDecoration: "none",
          }}
        >
          Dr. Marla
        </a>
        <nav
          className="nav-links"
          style={{ display: "flex", alignItems: "center", gap: 28 }}
        >
          {["Ecosystem", "About", "Contact"].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(242,233,218,0.7)",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="nav-cta"
          style={{
            border: "1px solid var(--gold)",
            color: "var(--gold)",
            padding: "10px 18px",
            fontFamily: "var(--sans)",
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Schedule a Consultation
        </Link>
      </header>

      <section
        id="top"
        style={{
          position: "relative",
          overflow: "hidden",
          height: "100vh",
          background:
            "radial-gradient(100% 80% at 28% 26%, rgba(201,162,60,0.18), rgba(90,26,36,0) 56%), linear-gradient(165deg, #7C2230, #5A1A24 58%, #4A1620)",
          padding: "0 var(--gut)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grain />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold-soft)",
              marginBottom: 24,
            }}
          >
            Dr. Marla Ecosystem
          </div>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(52px, 10vw, 130px)",
              lineHeight: 0.9,
              letterSpacing: "-0.025em",
              color: "var(--cream)",
              margin: 0,
            }}
          >
            Helping people build stronger{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-soft)" }}>
              communities.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(18px, 2.5vw, 26px)",
              color: "rgba(242,233,218,0.75)",
              marginTop: 24,
              maxWidth: 560,
            }}
          >
            Thirty years. Eight companies. One vision.
          </p>
          <div
            style={{
              margin: "36px 0",
              height: 2,
              background: "var(--gold)",
              width: "clamp(100px, 20vw, 240px)",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              href="/contact"
              style={{
                background: "transparent",
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                padding: "14px 28px",
                fontFamily: "var(--sans)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/ecosystem"
              style={{
                color: "rgba(242,233,218,0.65)",
                fontFamily: "var(--sans)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Explore the Ecosystem →
            </Link>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "28px var(--gut) 40px",
            borderTop: "1px solid rgba(242,233,218,0.2)",
            display: "flex",
            gap: "clamp(24px, 5vw, 64px)",
            zIndex: 1,
          }}
        >
          {[
            { num: "30", label: "Years Built" },
            { num: "8", label: "Companies" },
            { num: "1,000+", label: "Clients Served" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 5vw, 52px)",
                  color: "var(--cream)",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold-soft)",
                  marginTop: 8,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        style={{
          background: "var(--cream-2)",
          padding: "clamp(64px, 10vh, 120px) var(--gut)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold-deep)",
            marginBottom: 20,
          }}
        >
          Meet Dr. Marla
        </div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(34px, 5.5vw, 64px)",
            lineHeight: 1,
            letterSpacing: "-0.015em",
            color: "var(--ink)",
            margin: 0,
          }}
        >
          The builder behind the ecosystem.
        </h2>
        <p
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(17px, 2.2vw, 22px)",
            lineHeight: 1.45,
            color: "var(--ink-70)",
            maxWidth: 680,
            marginTop: 28,
          }}
        >
          Dr. Marla Yanice Sabater has spent three decades building businesses,
          serving clients, and creating opportunities across Rhode Island and
          nationwide. Across finance, construction, food, media, hospitality,
          and automotive, the work is one: making businesses, communities, and
          people stronger.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 36,
          }}
        >
          {["MBA", "Th.D", "Published Author", "30 Years"].map((chip) => (
            <span
              key={chip}
              style={{
                border: "1px solid var(--ink-15)",
                padding: "10px 18px",
                background: "var(--paper)",
                fontFamily: "var(--sans)",
                fontWeight: 600,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--ink-70)",
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section
        id="ecosystem"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--bordeaux)",
          color: "var(--cream)",
          padding: "clamp(64px, 10vh, 120px) var(--gut)",
        }}
      >
        <Grain />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold-soft)",
              marginBottom: 20,
            }}
          >
            The Ecosystem
          </div>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(36px, 6vw, 72px)",
              lineHeight: 0.96,
              margin: 0,
            }}
          >
            Eight companies.{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-soft)" }}>
              One house.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(242,233,218,0.72)",
              maxWidth: 560,
              marginTop: 16,
              marginBottom: 48,
            }}
          >
            Each company is independent in focus, unified in standard.
          </p>

          <div style={{ borderTop: "1px solid rgba(242,233,218,0.2)" }}>
            {COMPANIES.map((c) => (
              <Link
                key={c.no}
                href={c.href}
                className="home-eco-row"
                style={{
                  borderBottom: "1px solid rgba(242,233,218,0.15)",
                  padding: "20px 0",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  flexWrap: "wrap",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 600,
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: "var(--gold-soft)",
                    minWidth: 36,
                  }}
                >
                  No. {c.no}
                </span>
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "clamp(18px, 2.4vw, 26px)",
                    color: "var(--cream)",
                    flex: 1,
                    display: "flex",
                    alignItems: "baseline",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  {c.flagship && (
                    <span
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 700,
                        fontSize: 9,
                        letterSpacing: "0.24em",
                        background: "var(--gold-soft)",
                        color: "var(--bordeaux)",
                        padding: "3px 8px",
                      }}
                    >
                      FLAGSHIP
                    </span>
                  )}
                  {c.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 600,
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(242,233,218,0.55)",
                  }}
                >
                  {c.role}
                </span>
                <span
                  className="home-eco-arrow"
                  aria-hidden
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 600,
                    color: "var(--gold-soft)",
                  }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(100% 84% at 28% 28%, rgba(201,162,60,0.22), rgba(110,31,42,0) 56%), linear-gradient(160deg, #8A2738, #651E2A 58%, #531824)",
          color: "var(--cream)",
          padding: "clamp(64px, 10vh, 120px) var(--gut)",
        }}
      >
        <Grain />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--gold-soft)",
              marginBottom: 20,
            }}
          >
            The Flagship
          </div>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(42px, 8vw, 108px)",
              lineHeight: 0.92,
              margin: 0,
            }}
          >
            Premium Services{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-soft)" }}>
              Enterprise.
            </em>
          </h2>
          <div
            style={{
              height: 2,
              background: "var(--gold)",
              width: "clamp(120px, 26vw, 320px)",
              margin: "32px 0",
            }}
          />
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(18px, 2.5vw, 26px)",
              color: "rgba(242,233,218,0.82)",
              maxWidth: 520,
              margin: 0,
            }}
          >
            Property, holdings, and the long view. Building and acquiring for
            the decades ahead.
          </p>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 10,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(242,233,218,0.55)",
              marginTop: 40,
            }}
          >
            A Dr. Marla Company · Established 1996
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--cream)",
          padding: "clamp(64px, 10vh, 120px) var(--gut)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold-deep)",
            marginBottom: 20,
          }}
        >
          What We Do
        </div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(34px, 5vw, 60px)",
            lineHeight: 1,
            color: "var(--ink)",
            margin: 0,
            marginBottom: 48,
          }}
        >
          Expert services for{" "}
          <em style={{ fontStyle: "italic", color: "var(--crimson)" }}>
            every stage
          </em>{" "}
          of your business.
        </h2>
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.no}
              style={{
                border: "1px solid var(--ink-15)",
                padding: 28,
                background: "var(--paper)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: "var(--gold-deep)",
                  marginBottom: 14,
                }}
              >
                {s.no}
              </div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 400,
                  fontSize: 24,
                  color: "var(--ink)",
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 14,
                  color: "var(--ink-70)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          background: "var(--cream-2)",
          padding: "clamp(64px, 10vh, 120px) var(--gut)",
        }}
      >
        <div
          className="contact-grid"
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
                marginBottom: 20,
              }}
            >
              Get In Touch
            </div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontSize: "clamp(30px, 4.5vw, 52px)",
                lineHeight: 1,
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Let&apos;s talk about your{" "}
              <em style={{ fontStyle: "italic", color: "var(--crimson)" }}>
                business.
              </em>
            </h2>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {CONTACT_ITEMS.map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 14,
                    color: "var(--ink-70)",
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--gold)",
                      flexShrink: 0,
                      marginTop: 5,
                    }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer
        style={{
          background: "#48141E",
          color: "rgba(242,233,218,0.7)",
          padding: "clamp(48px, 8vh, 90px) var(--gut)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(28px, 4.5vw, 48px)",
            color: "var(--cream)",
            lineHeight: 0.95,
          }}
        >
          Dr. Marla
        </div>
        <div
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold-soft)",
            marginTop: 10,
          }}
        >
          MBA · Th.D · Published Author
        </div>

        <div style={{ marginTop: 40 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {[
              { label: "Ecosystem", href: "/ecosystem" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy", href: "#privacy" },
              { label: "Terms", href: "#terms" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(242,233,218,0.55)",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div
            style={{
              fontFamily: "var(--sans)",
              fontSize: 11,
              color: "rgba(242,233,218,0.45)",
              marginTop: 14,
            }}
          >
            © 2026 Dr. Marla Sabater. All rights reserved.
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(242,233,218,0.12)",
            marginTop: 40,
            paddingTop: 24,
            textAlign: "center",
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: 14,
            color: "rgba(242,233,218,0.35)",
          }}
        >
          A house of eight companies.
        </div>
      </footer>
    </>
  );
}
