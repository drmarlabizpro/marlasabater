import Link from "next/link";

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

const CREDENTIALS = [
  { title: "MBA", label: "Business Administration" },
  { title: "Th.D", label: "Doctor of Theology" },
  { title: "Author", label: "Published Author" },
  { title: "1996", label: "Year Established" },
];

const BOOKS = [
  {
    no: "01",
    title: "Structural Integrity",
    subtitle: "Building Your Business on the Right Foundation",
    body: "A practical guide to choosing the right legal and operational structure for your business. Written from thirty years of working with founders who built on the wrong foundation and had to rebuild.",
  },
  {
    no: "02",
    title: "False Light",
    subtitle:
      "How Kabbalah, Mysticism, and New Age Christianity Are Leading Many Astray",
    body: "A theologically grounded examination of spiritual movements that blend Christian language with New Age practice. Written for believers navigating a landscape of distorted teaching.",
  },
];

export default function About() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .founder-grid { grid-template-columns: 1fr 1fr !important; }
          .creds-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .books-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "72vh",
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
            Dr. Marla Ecosystem → About
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
            Dr. Marla{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-soft)" }}>
              Yanice Sabater.
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
            MBA · Th.D · Published Author · Thirty years building businesses.
          </p>
        </div>
      </section>

      <section
        style={{
          background: "var(--cream)",
          padding: "clamp(64px, 10vh, 120px) var(--gut)",
        }}
      >
        <div
          className="founder-grid"
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
              The Founder
            </div>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontSize: "clamp(26px, 4vw, 46px)",
                lineHeight: 1.06,
                letterSpacing: "-0.015em",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              The foundation you choose determines everything that gets built on
              top of it.
            </p>
            <div
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 600,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold-deep)",
                marginTop: 18,
              }}
            >
              Structural Integrity, 2019
            </div>
            <div
              style={{
                height: 2,
                background: "var(--gold)",
                width: 80,
                marginTop: 20,
              }}
            />
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(17px, 2vw, 20px)",
                lineHeight: 1.55,
                color: "var(--ink-70)",
                margin: 0,
              }}
            >
              Dr. Marla Yanice Sabater is a business strategist, published
              author, and founder of eight companies spanning finance,
              construction, food, media, hospitality, and automotive. For
              thirty years she has served clients across Rhode Island, Puerto
              Rico, and nationwide — building companies that create real
              economic opportunity in real communities.
            </p>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(17px, 2vw, 20px)",
                lineHeight: 1.55,
                color: "var(--ink-70)",
                marginTop: 20,
              }}
            >
              Her career began in Providence, Rhode Island, where Premium
              Services Corporation became the cornerstone of a growing
              ecosystem. Each company that followed was built because she saw
              a need her community did not have a strong answer to. Not a
              portfolio. A vision, built one company at a time.
            </p>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(17px, 2vw, 20px)",
                lineHeight: 1.55,
                color: "var(--ink-70)",
                marginTop: 20,
              }}
            >
              Dr. Sabater holds an MBA and a Doctor of Theology. She is a
              bilingual speaker in English and Spanish, a published author of
              two books, and the founder of Derribando Murallas Christian
              Center. Her business philosophy is structural, disciplined, and
              grounded in thirty years of building real companies with real
              people.
            </p>
          </div>
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
              marginBottom: 40,
            }}
          >
            Credentials
          </div>
          <div
            className="creds-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 28,
            }}
          >
            {CREDENTIALS.map((c, i) => (
              <div
                key={c.title}
                style={{
                  borderRight:
                    i === CREDENTIALS.length - 1
                      ? "none"
                      : "1px solid rgba(242,233,218,0.15)",
                  paddingRight: 28,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "clamp(22px, 3.5vw, 36px)",
                    color: "var(--cream)",
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 600,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold-soft)",
                    marginTop: 10,
                  }}
                >
                  {c.label}
                </div>
              </div>
            ))}
          </div>
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
          Published Works
        </div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "var(--ink)",
            lineHeight: 1,
            margin: 0,
          }}
        >
          Written for the{" "}
          <em style={{ fontStyle: "italic", color: "var(--crimson)" }}>
            builder.
          </em>
        </h2>
        <div
          className="books-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 24,
            marginTop: 40,
          }}
        >
          {BOOKS.map((b) => (
            <div
              key={b.no}
              style={{
                background: "var(--paper)",
                border: "1px solid var(--ink-15)",
                padding: 32,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "var(--gold-deep)",
                }}
              >
                {b.no}
              </div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 400,
                  fontSize: "clamp(22px, 3vw, 32px)",
                  lineHeight: 1,
                  color: "var(--ink)",
                  marginTop: 14,
                  marginBottom: 0,
                }}
              >
                {b.title}
              </h3>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: 16,
                  color: "var(--ink-70)",
                  marginTop: 8,
                }}
              >
                {b.subtitle}
              </div>
              <div
                style={{
                  height: 1,
                  background: "var(--ink-15)",
                  margin: "20px 0",
                }}
              />
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "var(--ink-70)",
                  margin: 0,
                }}
              >
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(170deg, #7C2230, #5A1A24)",
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
            The Dr. Marla Ecosystem
          </div>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(34px, 6vw, 72px)",
              lineHeight: 0.96,
              margin: 0,
            }}
          >
            Eight companies.{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-soft)" }}>
              One vision.
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
            Each company exists because she saw a need her community did not
            have a strong answer to. Finance, construction, food, media,
            hospitality, automotive. Not a portfolio. A life&apos;s work.
          </p>
          <Link
            href="/ecosystem"
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
            Explore the Ecosystem →
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
            href="/#contact"
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
            href="/#contact"
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
