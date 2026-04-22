"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--charcoal)",
        color: "var(--bone)",
        borderTop: "3px solid var(--forest)",
      }}
    >
      {/* Crisis strip */}
      <div
        style={{
          backgroundColor: "var(--forest)",
          padding: "0.875rem 1.5rem",
          textAlign: "center",
        }}
      >
        <a
          href="tel:988"
          className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label="Veterans Crisis Line: Call or text 988, press 1"
        >
          <Phone
            size={14}
            className="flare-pulse"
            style={{ color: "var(--flare)" }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.8125rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--bone)",
            }}
          >
            Veterans Crisis Line: Call or text{" "}
            <strong style={{ color: "var(--flare)" }}>988</strong>, press 1.
            Available 24/7.
          </span>
        </a>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Zone 1: Mission + mini-logo */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/beyond22-logo.svg"
                alt="Beyond22"
                style={{ maxHeight: "36px", width: "auto", filter: "brightness(0) invert(1) opacity(0.85)" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "1.125rem",
                lineHeight: 1.5,
                color: "color-mix(in srgb, var(--bone) 85%, transparent)",
                fontStyle: "italic",
                maxWidth: "28ch",
              }}
            >
              Forged in the Battle.
              <br />
              United in Purpose.
              <br />
              <span style={{ color: "var(--flare)", fontStyle: "normal" }}>
                Save the 22.
              </span>
            </p>
          </div>

          {/* Zone 2: Sitemap */}
          <div>
            <p
              className="label-mono mb-5"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: "var(--patrol)",
                fontSize: "0.625rem",
                letterSpacing: "0.12em",
              }}
            >
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[
                { label: "Resources", href: "/resources" },
                { label: "Mental Health", href: "/mental-health" },
                { label: "Programs", href: "/programs" },
                { label: "About", href: "/about" },
                { label: "Patriot Alert", href: "/patriot-alert" },
                { label: "Donate", href: "/donate" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.875rem",
                    color: "color-mix(in srgb, var(--bone) 65%, transparent)",
                    textDecoration: "none",
                  }}
                  className="hover:opacity-100 opacity-65 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Zone 3: Contact + socials */}
          <div>
            <p
              className="label-mono mb-5"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: "var(--patrol)",
                fontSize: "0.625rem",
                letterSpacing: "0.12em",
              }}
            >
              Contact
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.875rem",
                color: "color-mix(in srgb, var(--bone) 65%, transparent)",
                lineHeight: 1.7,
              }}
            >
              For crisis support:{" "}
              <a
                href="tel:988"
                style={{ color: "var(--flare)" }}
                className="hover:opacity-80 transition-opacity"
              >
                988, press 1
              </a>
              <br />
              General inquiries:
              <br />
              <a
                href="mailto:contact@beyond22.org"
                style={{ color: "color-mix(in srgb, var(--bone) 75%, transparent)" }}
                className="hover:opacity-100 transition-opacity"
              >
                contact@beyond22.org
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          borderTop: "1px solid color-mix(in srgb, var(--bone) 10%, transparent)",
          padding: "1rem 1.5rem",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              color: "color-mix(in srgb, var(--bone) 40%, transparent)",
              letterSpacing: "0.04em",
            }}
          >
            Beyond22 is a Washington State nonprofit corporation. 501(c)(3) status pending.
            EIN: [placeholder]. © {year} Beyond22.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Accessibility", href: "/accessibility" },
              { label: "Terms", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "0.6875rem",
                  color: "color-mix(in srgb, var(--bone) 40%, transparent)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
                className="hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
