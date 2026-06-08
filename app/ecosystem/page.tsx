import type { Metadata } from 'next'
import Link from "next/link";

export const metadata: Metadata = {
  title: 'The Ecosystem | Eight Companies, One Vision | Dr. Marla Sabater',
  description: 'Dr. Marla Sabater has built eight companies spanning finance, construction, food, media, hospitality, and automotive. Explore the full ecosystem rooted in Providence, Rhode Island.',
  keywords: ['Dr Marla Sabater ecosystem', 'eight companies Providence RI', 'Premium Services Enterprise', 'business ecosystem Rhode Island', 'Marla Sabater companies'],
  openGraph: {
    title: 'The Ecosystem | Dr. Marla Sabater',
    description: 'Eight companies. One vision. Explore the full Dr. Marla ecosystem.',
    url: 'https://marlasabater.com/ecosystem',
    siteName: 'Dr. Marla Sabater',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ecosystem | Dr. Marla Sabater',
    description: 'Eight companies. One vision.',
  },
  alternates: { canonical: 'https://marlasabater.com/ecosystem' },
}

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

type Company = {
  no: string;
  name: string;
  href: string;
  role: string;
  color: string;
  flagship?: boolean;
  swatchBorder?: boolean;
};

const COMPANIES: Company[] = [
  {
    no: "01",
    name: "Dr. Marla Biz Pro Corp",
    href: "/ecosystem",
    role: "LEADERSHIP & STRATEGY",
    color: "#5A1A24",
  },
  {
    no: "02",
    name: "Premium Services Enterprise",
    href: "/ecosystem/enterprise",
    role: "INVESTMENTS & ACQUISITIONS",
    color: "#651E2A",
    flagship: true,
  },
  {
    no: "03",
    name: "Premium Services Corporation",
    href: "/ecosystem/corporation",
    role: "FINANCIAL & WEALTH MANAGEMENT",
    color: "#214E40",
  },
  {
    no: "04",
    name: "Premium Services Group",
    href: "/ecosystem/group",
    role: "CONSTRUCTION & DEVELOPMENT",
    color: "#D8CCB2",
    swatchBorder: true,
  },
  {
    no: "05",
    name: "Flavor Movement",
    href: "/ecosystem/flavor",
    role: "FOOD & HOSPITALITY",
    color: "#8A2330",
  },
  {
    no: "06",
    name: "Legacy Production House",
    href: "/ecosystem/legacy",
    role: "MEDIA & TALENT",
    color: "#3A2140",
  },
  {
    no: "07",
    name: "Marvic Hospitality Group",
    href: "/ecosystem/marvic",
    role: "HOSPITALITY & ENTERTAINMENT",
    color: "#193F3C",
  },
  {
    no: "08",
    name: "PSG Motor Group",
    href: "/ecosystem/psg",
    role: "AUTOMOTIVE SALES & SERVICES",
    color: "#E6DAC0",
    swatchBorder: true,
  },
];

export default function Ecosystem() {
  return (
    <>
      <style>{`
        .eco-row {
          text-decoration: none;
          color: inherit;
          transition: background 200ms ease;
          border-bottom: 1px solid var(--ink-15);
        }
        .eco-row:first-child { border-top: 1px solid var(--ink-15); }
        .eco-row:hover { background: rgba(38,16,20,0.03); }
        .eco-row .eco-arrow { transition: transform 200ms ease; }
        .eco-row:hover .eco-arrow { transform: translateX(4px); }
      `}</style>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "68vh",
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
              fontSize: 10,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(242,233,218,0.5)",
              marginBottom: 32,
            }}
          >
            Dr. Marla / Ecosystem
          </div>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(48px, 9vw, 118px)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              margin: 0,
            }}
          >
            Eight{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-soft)" }}>
              companies.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(18px, 2.4vw, 26px)",
              color: "rgba(242,233,218,0.75)",
              marginTop: 20,
              maxWidth: 600,
            }}
          >
            One founder. One vision. Each company built because her community
            needed a stronger answer.
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
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold-deep)",
            marginBottom: 40,
          }}
        >
          The Eight Companies
        </div>

        <div>
          {COMPANIES.map((c) => (
            <Link
              key={c.no}
              href={c.href}
              className="eco-row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                padding: "28px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 600,
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: "var(--gold-deep)",
                    minWidth: 36,
                    paddingTop: 6,
                  }}
                >
                  {c.no}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontWeight: 400,
                      fontSize: "clamp(20px, 2.8vw, 28px)",
                      color: "var(--ink)",
                    }}
                  >
                    {c.name}
                    {c.flagship && (
                      <span
                        style={{
                          background: "var(--bordeaux)",
                          color: "var(--cream)",
                          fontFamily: "var(--sans)",
                          fontWeight: 700,
                          fontSize: 9,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          padding: "3px 8px",
                          marginLeft: 12,
                          verticalAlign: "middle",
                        }}
                      >
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 600,
                      fontSize: 10,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--ink-45)",
                      marginTop: 6,
                    }}
                  >
                    {c.role}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flexShrink: 0,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: c.color,
                    border: c.swatchBorder
                      ? "1px solid var(--ink-15)"
                      : "none",
                    display: "inline-block",
                  }}
                />
                <span
                  className="eco-arrow"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 600,
                    color: "var(--ink-45)",
                    marginLeft: 12,
                  }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
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
            Built By One Founder
          </div>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(32px, 5.5vw, 64px)",
              lineHeight: 0.96,
              margin: 0,
            }}
          >
            Not a portfolio.{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-soft)" }}>
              A life&apos;s work.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontSize: "clamp(17px, 2.2vw, 22px)",
              color: "rgba(242,233,218,0.78)",
              maxWidth: 560,
              marginTop: 20,
            }}
          >
            Every division exists because Dr. Marla Sabater saw a need her
            community did not have a strong answer to. Thirty years of
            building, one company at a time.
          </p>
          <Link
            href="/about"
            style={{
              display: "inline-block",
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              padding: "14px 28px",
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginTop: 36,
            }}
          >
            Meet Dr. Marla →
          </Link>
        </div>
      </section>

      <section
        style={{
          background: "var(--cream-2)",
          padding: "clamp(40px, 6vh, 72px) var(--gut)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(20px, 3vw, 32px)",
            color: "var(--ink)",
          }}
        >
          Ready to build something?
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              background: "var(--bordeaux)",
              color: "var(--cream)",
              padding: "14px 28px",
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Schedule a Consultation
          </Link>
          <Link
            href="/contact"
            style={{
              border: "1px solid var(--ink-15)",
              color: "var(--ink-70)",
              padding: "14px 28px",
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
