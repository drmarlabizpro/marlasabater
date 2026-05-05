"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Companies", href: "#companies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [isMobileCtaHovered, setIsMobileCtaHovered] = useState(false);

  return (
    <>
      <style>{`
        .nav-desktop-links,
        .nav-desktop-lang {
          display: flex;
        }
        .nav-mobile-toggle {
          display: none;
        }
        .nav-cta-desktop {
          display: inline-block;
        }
        .nav-cta-mobile {
          display: none;
        }
        @media (max-width: 767px) {
          .nav-desktop-links,
          .nav-desktop-lang {
            display: none;
          }
          .nav-mobile-toggle {
            display: flex;
          }
          .nav-cta-desktop {
            display: none;
          }
          .nav-cta-mobile {
            display: inline-block;
          }
          .nav-inner {
            padding: 0 24px !important;
          }
        }
      `}</style>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--color-base)",
          borderBottom: "1px solid var(--color-border)",
          height: 72,
        }}
      >
        <div
          className="nav-inner"
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 48px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{ textDecoration: "none", display: "block" }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.15em",
                color: "var(--color-ink)",
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
                fontWeight: 400,
                marginTop: 3,
              }}
            >
              MBA. TH.D. PUBLIC ACCOUNTANT
            </div>
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
            }}
          >
            <div
              className="nav-desktop-links"
              style={{ alignItems: "center", gap: 40 }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color:
                      hoveredLink === link.href
                        ? "var(--color-ink)"
                        : "var(--color-ink-secondary)",
                    textDecoration: "none",
                    transition: "color 200ms",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div
              className="nav-desktop-lang"
              style={{ alignItems: "center" }}
            >
              <button
                type="button"
                onClick={() => setLang("EN")}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  color:
                    lang === "EN"
                      ? "var(--color-ink)"
                      : "var(--color-ink-muted)",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "0 8px",
                }}
              >
                EN
              </button>
              <span
                style={{
                  width: 1,
                  height: 14,
                  background: "var(--color-border)",
                  display: "inline-block",
                }}
              />
              <button
                type="button"
                onClick={() => setLang("ES")}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  color:
                    lang === "ES"
                      ? "var(--color-ink)"
                      : "var(--color-ink-muted)",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "0 8px",
                }}
              >
                ES
              </button>
            </div>

            <Link
              href="#contact"
              className="nav-cta-desktop"
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                fontWeight: 500,
                background: isCtaHovered
                  ? "var(--color-gold)"
                  : "var(--color-dark)",
                color: isCtaHovered
                  ? "var(--color-dark)"
                  : "var(--color-ink-light)",
                padding: "12px 24px",
                textDecoration: "none",
                borderRadius: 0,
                transition: "all 200ms ease",
              }}
            >
              BOOK A STRATEGY SESSION
            </Link>

            <Link
              href="#contact"
              className="nav-cta-mobile"
              onMouseEnter={() => setIsMobileCtaHovered(true)}
              onMouseLeave={() => setIsMobileCtaHovered(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                fontWeight: 500,
                background: isMobileCtaHovered
                  ? "var(--color-gold)"
                  : "var(--color-dark)",
                color: isMobileCtaHovered
                  ? "var(--color-dark)"
                  : "var(--color-ink-light)",
                padding: "10px 16px",
                textDecoration: "none",
                borderRadius: 0,
                transition: "all 200ms ease",
              }}
            >
              BOOK A STRATEGY SESSION
            </Link>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="nav-mobile-toggle"
              style={{
                flexDirection: "column",
                gap: 5,
                width: 20,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  background: "var(--color-ink)",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  background: "var(--color-ink)",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  background: "var(--color-ink)",
                }}
              />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            style={{
              background: "var(--color-base)",
              borderBottom: "1px solid var(--color-border)",
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  color: "var(--color-ink-secondary)",
                  textDecoration: "none",
                  transition: "color 200ms",
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                type="button"
                onClick={() => setLang("EN")}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  color:
                    lang === "EN"
                      ? "var(--color-ink)"
                      : "var(--color-ink-muted)",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "0 8px",
                }}
              >
                EN
              </button>
              <span
                style={{
                  width: 1,
                  height: 14,
                  background: "var(--color-border)",
                  display: "inline-block",
                }}
              />
              <button
                type="button"
                onClick={() => setLang("ES")}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  color:
                    lang === "ES"
                      ? "var(--color-ink)"
                      : "var(--color-ink-muted)",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "0 8px",
                }}
              >
                ES
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
