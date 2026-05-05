import Link from "next/link";

export default function Home() {
  return (
    <>
    <main>
      <section
        className="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="hero-left"
          style={{
            width: "55%",
            background: "var(--color-dark)",
            padding: "96px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                marginBottom: 48,
              }}
            >
              PROVIDENCE, RHODE ISLAND. SERVING NATIONWIDE.
            </div>

            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                lineHeight: 0.95,
                color: "var(--color-ink-light)",
                fontSize: "clamp(64px, 7vw, 96px)",
                opacity: 0,
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: "0s",
              }}
            >
              30 Years.
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                lineHeight: 0.95,
                color: "var(--color-ink-light)",
                fontSize: "clamp(64px, 7vw, 96px)",
                opacity: 0,
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: "0.15s",
              }}
            >
              1,000 Clients.
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                lineHeight: 0.95,
                color: "var(--color-ink-light)",
                fontSize: "clamp(64px, 7vw, 96px)",
                opacity: 0,
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: "0.3s",
              }}
            >
              One Standard:
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                lineHeight: 0.95,
                color: "var(--color-gold)",
                fontStyle: "italic",
                fontSize: "clamp(64px, 7vw, 96px)",
                opacity: 0,
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: "0.45s",
              }}
            >
              Yours.
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                lineHeight: 1.75,
                color: "#9AA4B8",
                maxWidth: 460,
                marginTop: 40,
              }}
            >
              Dr. Marla Sabater has spent three decades building businesses and
              serving clients across Rhode Island and beyond. Accounting.
              Payroll. Business advisory. Bilingual service in English and
              Spanish.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 32,
                marginTop: 48,
              }}
            >
              <Link
                href="#contact"
                className="cta-primary"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                  background: "var(--color-gold)",
                  color: "var(--color-dark)",
                  padding: "16px 32px",
                  textDecoration: "none",
                  borderRadius: 0,
                }}
              >
                BOOK A STRATEGY SESSION
              </Link>
              <Link
                href="#services"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--color-gold)",
                  textDecoration: "none",
                }}
              >
                EXPLORE SERVICES →
              </Link>
            </div>
          </div>

          <div
            style={{
              paddingTop: 48,
              borderTop: "1px solid rgba(201, 168, 76, 0.25)",
              display: "flex",
              gap: 48,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 52,
                  fontWeight: 600,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                }}
              >
                30+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "rgba(245, 240, 232, 0.5)",
                  textTransform: "uppercase",
                  marginTop: 8,
                }}
              >
                YEARS EXPERIENCE
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 52,
                  fontWeight: 600,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                }}
              >
                1,000+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "rgba(245, 240, 232, 0.5)",
                  textTransform: "uppercase",
                  marginTop: 8,
                }}
              >
                CLIENTS SERVED
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 52,
                  fontWeight: 600,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                }}
              >
                5
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "rgba(245, 240, 232, 0.5)",
                  textTransform: "uppercase",
                  marginTop: 8,
                }}
              >
                COMPANIES BUILT
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-right"
          style={{
            width: "45%",
            background: "var(--color-warm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            minHeight: "100%",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(120px, 15vw, 200px)",
                fontWeight: 300,
                color: "var(--color-gold)",
                opacity: 0.2,
                lineHeight: 1,
                textAlign: "center",
              }}
            >
              MS
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "var(--color-ink-muted)",
                textAlign: "center",
                marginTop: 16,
              }}
            >
              PHOTO COMING SOON
            </div>
            {/* TODO: Replace placeholder with <Image src="/marla.jpg" alt="Dr. Marla Sabater" fill className="object-cover object-top" priority /> wrapped in a div with position relative, width 100%, height 100% */}
          </div>
        </div>
      </section>

      <section
        className="trust-bar"
        style={{
          background: "var(--color-warm)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "0 64px",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-ink-secondary)",
            }}
          >
            Certified Public Accountant
          </span>
          <div
            style={{
              width: 1,
              height: 16,
              background: "var(--color-gold)",
              opacity: 0.5,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-ink-secondary)",
            }}
          >
            Faith-Forward Integrity
          </span>
          <div
            style={{
              width: 1,
              height: 16,
              background: "var(--color-gold)",
              opacity: 0.5,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-ink-secondary)",
            }}
          >
            Bilingual EN. ES.
          </span>
          <div
            style={{
              width: 1,
              height: 16,
              background: "var(--color-gold)",
              opacity: 0.5,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-ink-secondary)",
            }}
          >
            Serving Nationwide
          </span>
        </div>
      </section>

      <section
        id="services"
        className="services-section"
        style={{
          background: "var(--color-base)",
          padding: "96px 64px",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "var(--color-gold)",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            OUR SERVICES
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: 600,
              color: "var(--color-ink)",
              lineHeight: 1.1,
              maxWidth: 600,
              marginBottom: 64,
            }}
          >
            What We Do For Your Business.
          </div>

          <div
            className="service-cards"
            style={{ display: "flex", gap: 2, marginTop: 0 }}
          >
            <div
              className="service-card"
              style={{
                flex: 1,
                background: "white",
                padding: "48px 36px",
                display: "flex",
                flexDirection: "column",
                borderTop: "3px solid var(--color-gold)",
                position: "relative",
              }}
            >
              <div
                className="service-number"
                style={{
                  position: "absolute",
                  top: 32,
                  right: 32,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-gold)",
                  letterSpacing: "0.1em",
                }}
              >
                01
              </div>
              <div
                className="service-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 42,
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  lineHeight: 1.1,
                  marginBottom: 24,
                }}
              >
                Accounting
              </div>
              <div
                className="service-desc"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "var(--color-ink-secondary)",
                  flex: 1,
                }}
              >
                Clean books. Accurate reporting. Tax strategy that keeps more
                money in your business. From monthly bookkeeping to full CFO
                advisory, we handle the numbers so you can run your company.
              </div>
              <a
                href="#contact"
                className="service-link"
                style={{
                  marginTop: 40,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                LEARN MORE →
              </a>
            </div>

            <div
              className="service-card"
              style={{
                flex: 1,
                background: "white",
                padding: "48px 36px",
                display: "flex",
                flexDirection: "column",
                borderTop: "3px solid var(--color-gold)",
                position: "relative",
              }}
            >
              <div
                className="service-number"
                style={{
                  position: "absolute",
                  top: 32,
                  right: 32,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-gold)",
                  letterSpacing: "0.1em",
                }}
              >
                02
              </div>
              <div
                className="service-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 42,
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  lineHeight: 1.1,
                  marginBottom: 24,
                }}
              >
                Payroll
              </div>
              <div
                className="service-desc"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "var(--color-ink-secondary)",
                  flex: 1,
                }}
              >
                Accurate, on-time payroll for every employee. Direct deposit,
                tax filings, compliance, and reporting. We take the complexity
                off your plate and keep your team paid correctly.
              </div>
              <a
                href="#contact"
                className="service-link"
                style={{
                  marginTop: 40,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                LEARN MORE →
              </a>
            </div>

            <div
              className="service-card"
              style={{
                flex: 1,
                background: "white",
                padding: "48px 36px",
                display: "flex",
                flexDirection: "column",
                borderTop: "3px solid var(--color-gold)",
                position: "relative",
              }}
            >
              <div
                className="service-number"
                style={{
                  position: "absolute",
                  top: 32,
                  right: 32,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-gold)",
                  letterSpacing: "0.1em",
                }}
              >
                03
              </div>
              <div
                className="service-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 42,
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  lineHeight: 1.1,
                  marginBottom: 24,
                }}
              >
                Insurance
              </div>
              <div
                className="service-desc"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "var(--color-ink-secondary)",
                  flex: 1,
                }}
              >
                Understanding what coverage your business actually needs. We
                guide you through the options, explain the requirements, and
                connect you with the right providers for your industry.
              </div>
              <a
                href="#contact"
                className="service-link"
                style={{
                  marginTop: 40,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                LEARN MORE →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="companies"
        className="companies-section"
        style={{
          background: "var(--color-dark)",
          padding: "96px 64px",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "var(--color-gold)",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            THE PORTFOLIO
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: 600,
              color: "var(--color-ink-light)",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Built by Experience.
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: 600,
              color: "var(--color-ink-light)",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Proven by Results.
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.75,
              color: "var(--color-ink-muted)",
              maxWidth: 560,
              marginTop: 24,
              marginBottom: 64,
            }}
          >
            Dr. Marla Sabater does not just advise on building businesses. She
            has built five of them across accounting, construction, hospitality,
            food and beverage, and international trade.
          </div>

          <div
            className="company-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            <div
              className="company-tile"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(201, 168, 76, 0.15)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--color-gold)",
                  marginBottom: 24,
                }}
              >
                01
              </div>
              <div
                className="company-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 600,
                  color: "var(--color-ink-light)",
                  lineHeight: 1.2,
                  marginBottom: 8,
                }}
              >
                Premium Services Corporation
              </div>
              <div
                className="company-industry"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                ACCOUNTING. TAX. PAYROLL.
              </div>
              <div
                className="company-desc"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--color-ink-muted)",
                  flex: 1,
                }}
              >
                Full-service accounting, tax strategy, and payroll for small
                businesses in Rhode Island, Massachusetts, and nationwide.
              </div>
              <div
                style={{
                  marginTop: 32,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                }}
              >
                LEARN MORE →
              </div>
            </div>

            <div
              className="company-tile"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(201, 168, 76, 0.15)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--color-gold)",
                  marginBottom: 24,
                }}
              >
                02
              </div>
              <div
                className="company-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 600,
                  color: "var(--color-ink-light)",
                  lineHeight: 1.2,
                  marginBottom: 8,
                }}
              >
                Premium Services Group
              </div>
              <div
                className="company-industry"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                CONSTRUCTION. CONTRACTING.
              </div>
              <div
                className="company-desc"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--color-ink-muted)",
                  flex: 1,
                }}
              >
                General contracting and home improvement services across Rhode
                Island and Greater Boston.
              </div>
              <div
                style={{
                  marginTop: 32,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                }}
              >
                LEARN MORE →
              </div>
            </div>

            <div
              className="company-tile"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(201, 168, 76, 0.15)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--color-gold)",
                  marginBottom: 24,
                }}
              >
                03
              </div>
              <div
                className="company-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 600,
                  color: "var(--color-ink-light)",
                  lineHeight: 1.2,
                  marginBottom: 8,
                }}
              >
                Marvic Hospitality Group
              </div>
              <div
                className="company-industry"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                HOSPITALITY MANAGEMENT.
              </div>
              <div
                className="company-desc"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--color-ink-muted)",
                  flex: 1,
                }}
              >
                Hospitality operations and management services in Providence,
                Rhode Island.
              </div>
              <div
                style={{
                  marginTop: 32,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                }}
              >
                LEARN MORE →
              </div>
            </div>
          </div>

          <div
            className="company-grid-bottom"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
              marginTop: 2,
            }}
          >
            <div
              className="company-tile"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(201, 168, 76, 0.15)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--color-gold)",
                  marginBottom: 24,
                }}
              >
                04
              </div>
              <div
                className="company-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 600,
                  color: "var(--color-ink-light)",
                  lineHeight: 1.2,
                  marginBottom: 8,
                }}
              >
                Fire and Flavor Smokehouse
              </div>
              <div
                className="company-industry"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                RESTAURANT. CATERING.
              </div>
              <div
                className="company-desc"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--color-ink-muted)",
                  flex: 1,
                }}
              >
                Award-winning BBQ and smokehouse cuisine in Providence, Rhode
                Island. Online ordering and catering available.
              </div>
              <div
                style={{
                  marginTop: 32,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                }}
              >
                LEARN MORE →
              </div>
            </div>

            <div
              className="company-tile"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(201, 168, 76, 0.15)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--color-gold)",
                  marginBottom: 24,
                }}
              >
                05
              </div>
              <div
                className="company-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 600,
                  color: "var(--color-ink-light)",
                  lineHeight: 1.2,
                  marginBottom: 8,
                }}
              >
                Marla Imports and Associates
              </div>
              <div
                className="company-industry"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                INTERNATIONAL TRADE.
              </div>
              <div
                className="company-desc"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--color-ink-muted)",
                  flex: 1,
                }}
              >
                Import and export business advisory serving U.S. based companies
                with international operations.
              </div>
              <div
                style={{
                  marginTop: 32,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                }}
              >
                LEARN MORE →
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="video"
        className="video-section"
        style={{
          background: "var(--color-warm)",
          padding: "96px 64px",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "40%",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              HEAR FROM DR. MARLA
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 600,
                color: "var(--color-ink)",
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Her Expertise. Her Words. Her Vision.
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--color-ink-secondary)",
                marginBottom: 40,
              }}
            >
              Dr. Marla shares her insights on accounting, business strategy,
              and what it takes to build something that lasts. Available in
              English and Spanish.
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <button
                type="button"
                className="lang-btn lang-btn-active"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  padding: "8px 20px",
                  cursor: "pointer",
                  borderRadius: 0,
                  border: "none",
                  background: "var(--color-dark)",
                  color: "var(--color-ink-light)",
                }}
              >
                EN
              </button>
              <button
                type="button"
                className="lang-btn"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  padding: "8px 20px",
                  cursor: "pointer",
                  borderRadius: 0,
                  border: "1px solid var(--color-border)",
                  background: "transparent",
                  color: "var(--color-ink-secondary)",
                }}
              >
                ES
              </button>
              {/* TODO: Wire language toggle to swap video src when AI videos are ready */}
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="video-placeholder"
              style={{
                aspectRatio: "16 / 9",
                background: "var(--color-dark)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: "2px solid var(--color-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                    borderLeft: "20px solid var(--color-gold)",
                    marginLeft: 4,
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                }}
              >
                VIDEO COMING SOON
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--color-ink-muted)",
                  marginTop: 12,
                  textAlign: "center",
                  maxWidth: 280,
                }}
              >
                AI-generated video content featuring Dr. Marla will appear here.
              </div>
            </div>
            {/* TODO: Replace video-placeholder div with the following when ready:
            <iframe
              src="YOUR_VIDEO_URL"
              title="Dr. Marla Sabater - Expert Insights"
              style={{ width: '100%', aspectRatio: '16/9', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
        </div>
      </section>

      <section
        id="bilingual"
        className="bilingual-section"
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: 480,
        }}
      >
        <div
          className="bilingual-left"
          style={{
            width: "50%",
            background: "var(--color-dark)",
            padding: "80px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "var(--color-gold)",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            ENGLISH
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 600,
              color: "var(--color-ink-light)",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Serving small businesses across Rhode Island and the East Coast.
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--color-ink-muted)",
              marginBottom: 40,
            }}
          >
            30 years of trusted financial services for small business owners.
            Whether you are just starting out or scaling up, we bring the
            expertise your business deserves.
          </div>
          <Link
            href="#contact"
            className="bilingual-cta-dark"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.1em",
              fontWeight: 500,
              textDecoration: "none",
              textTransform: "uppercase",
              background: "var(--color-gold)",
              color: "var(--color-dark)",
              padding: "14px 32px",
              alignSelf: "flex-start",
            }}
          >
            BOOK A STRATEGY SESSION
          </Link>
        </div>

        <div
          className="bilingual-right"
          style={{
            width: "50%",
            background: "var(--color-gold)",
            padding: "80px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "var(--color-dark)",
              textTransform: "uppercase",
              marginBottom: 24,
              opacity: 0.7,
            }}
          >
            ESPANOL
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 600,
              color: "var(--color-dark)",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Sirviendo a pequenos negocios en Rhode Island y la Costa Este.
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--color-dark)",
              opacity: 0.75,
              marginBottom: 40,
            }}
          >
            30 anos de servicios financieros de confianza para duenos de
            pequenos negocios. Ya sea que este comenzando o creciendo, traemos
            la experiencia que su negocio merece.
          </div>
          <Link
            href="#contact"
            className="bilingual-cta-gold"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.1em",
              fontWeight: 500,
              textDecoration: "none",
              textTransform: "uppercase",
              background: "var(--color-dark)",
              color: "var(--color-ink-light)",
              padding: "14px 32px",
              alignSelf: "flex-start",
            }}
          >
            AGENDE SU CONSULTA
          </Link>
        </div>
      </section>

      <section
        id="contact"
        className="contact-section"
        style={{
          background: "var(--color-base)",
          padding: "96px 64px",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            gap: 96,
          }}
        >
          <div
            style={{
              width: "40%",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              GET IN TOUCH
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 600,
                color: "var(--color-ink)",
                lineHeight: 1.15,
                marginBottom: 40,
              }}
            >
              Let&apos;s talk about your business.
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {[
                "356 Manton Avenue, Suite 1A",
                "Providence, RI 02909",
                "(401) 321-3781",
                "Marla@msabater.com",
                "@drmarlabizpro on Instagram",
              ].map((text) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--color-gold)",
                      marginTop: 8,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "var(--color-ink-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="contact-form"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {/* TODO: Replace YOUR_WEB3FORMS_KEY with real key from web3forms.com - free account, takes 2 minutes */}
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_KEY"
              />
              <input
                type="hidden"
                name="subject"
                value="New inquiry from marlasabater.com"
              />
              <input type="hidden" name="redirect" value="false" />
              <input type="hidden" name="botcheck" value="" />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "var(--color-ink-secondary)",
                    textTransform: "uppercase",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="form-input"
                  style={{
                    width: "100%",
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--color-ink)",
                    background: "white",
                    border: "1px solid var(--color-border)",
                    padding: 16,
                    borderRadius: 0,
                    outline: "none",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "var(--color-ink-secondary)",
                    textTransform: "uppercase",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="form-input"
                  style={{
                    width: "100%",
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--color-ink)",
                    background: "white",
                    border: "1px solid var(--color-border)",
                    padding: 16,
                    borderRadius: 0,
                    outline: "none",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "var(--color-ink-secondary)",
                    textTransform: "uppercase",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(401) 000-0000"
                  className="form-input"
                  style={{
                    width: "100%",
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--color-ink)",
                    background: "white",
                    border: "1px solid var(--color-border)",
                    padding: 16,
                    borderRadius: 0,
                    outline: "none",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "var(--color-ink-secondary)",
                    textTransform: "uppercase",
                  }}
                >
                  Service Interest
                </label>
                <select
                  name="service"
                  className="form-input"
                  defaultValue=""
                  style={{
                    width: "100%",
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--color-ink)",
                    background: "white",
                    border: "1px solid var(--color-border)",
                    padding: 16,
                    borderRadius: 0,
                    outline: "none",
                  }}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="accounting">Accounting Services</option>
                  <option value="payroll">Payroll Services</option>
                  <option value="insurance">Insurance Advisory</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "var(--color-ink-secondary)",
                    textTransform: "uppercase",
                  }}
                >
                  Tell us about your business
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Brief description of your business and what you need help with"
                  className="form-input"
                  style={{
                    width: "100%",
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--color-ink)",
                    background: "white",
                    border: "1px solid var(--color-border)",
                    padding: 16,
                    borderRadius: 0,
                    outline: "none",
                    resize: "vertical",
                    minHeight: 120,
                  }}
                />
              </div>

              <button
                type="submit"
                className="form-submit"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  background: "var(--color-dark)",
                  color: "var(--color-ink-light)",
                  padding: "20px 32px",
                  border: "none",
                  borderRadius: 0,
                  cursor: "pointer",
                  width: "100%",
                  marginTop: 8,
                }}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer
      className="site-footer"
      style={{
        background: "var(--color-dark)",
        padding: "80px 64px 40px",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 48,
            paddingBottom: 64,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.15em",
                color: "var(--color-ink-light)",
                fontWeight: 500,
              }}
            >
              MARLA SABATER
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.12em",
                color: "var(--color-gold)",
                marginTop: 6,
              }}
            >
              MBA. TH.D. PUBLIC ACCOUNTANT
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--color-ink-muted)",
                marginTop: 20,
              }}
            >
              Full-service accounting, payroll, and business advisory.
              Providence, Rhode Island.
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--color-ink-muted)",
                marginTop: 16,
              }}
            >
              @drmarlabizpro
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              SERVICES
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <a
                href="#services"
                className="footer-link"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--color-ink-muted)",
                  textDecoration: "none",
                }}
              >
                Accounting Services
              </a>
              <a
                href="#services"
                className="footer-link"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--color-ink-muted)",
                  textDecoration: "none",
                }}
              >
                Payroll Services
              </a>
              <a
                href="#services"
                className="footer-link"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--color-ink-muted)",
                  textDecoration: "none",
                }}
              >
                Insurance Advisory
              </a>
              <a
                href="#contact"
                className="footer-link"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--color-ink-muted)",
                  textDecoration: "none",
                }}
              >
                Business Consulting
              </a>
              <a
                href="#contact"
                className="footer-link"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--color-ink-muted)",
                  textDecoration: "none",
                }}
              >
                Tax Strategy
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              LOCATIONS
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                "Providence, RI",
                "Cranston, RI",
                "Warwick, RI",
                "Boston, MA",
                "Worcester, MA",
                "Nationwide Remote",
              ].map((loc) => (
                <div
                  key={loc}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--color-ink-muted)",
                  }}
                >
                  {loc}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              CONNECT
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                "(401) 321-3781",
                "Marla@msabater.com",
                "356 Manton Ave, Providence RI",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--color-ink-muted)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-ink-muted)",
                }}
              >
                EN
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-ink-muted)",
                }}
              >
                {" / "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-ink-muted)",
                }}
              >
                ES
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "var(--color-ink-muted)",
            }}
          >
            2025 MARLA SABATER. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <Link
              href="/privacy"
              className="footer-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--color-ink-muted)",
                textDecoration: "none",
              }}
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms"
              className="footer-link"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--color-ink-muted)",
                textDecoration: "none",
              }}
            >
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
