import type { Metadata } from "next";
import Link from "next/link";
import { board } from "@/content/board";
import { caseManagement } from "@/content/caseManagement";
import { JoesStory } from "@/components/sections/JoesStory";
import { BoardGrid } from "@/components/sections/BoardGrid";

export const metadata: Metadata = {
  title: "About",
  description:
    "Beyond22's mission, founding story, board of directors, and organizational structure.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--charcoal)",
          color: "var(--bone)",
          padding: "8rem 2rem 6rem",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--bone) 45%, transparent)",
              marginBottom: "2rem",
            }}
          >
            About Beyond22
          </p>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(2.25rem, 6vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--bone)",
              maxWidth: "22ch",
              margin: 0,
            }}
          >
            We don&apos;t honor the fallen by watching more fall.
          </h1>
        </div>
      </section>

      {/* Joe's Story */}
      <JoesStory variant="full" />

      {/* The Why */}
      <section
        style={{
          backgroundColor: "var(--bone)",
          padding: "6rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div style={{ maxWidth: "680px" }}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.6875rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--patrol)",
                marginBottom: "2rem",
              }}
            >
              The Why
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "var(--charcoal)",
                marginBottom: "1.5rem",
              }}
            >
              Awareness has not saved the 22. The bracelets didn&apos;t. The
              push-up challenges didn&apos;t. The silent hashtags didn&apos;t.
              Veterans are still dying at a rate that would be called an epidemic
              if it happened in any other population.
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "var(--charcoal)",
                marginBottom: "1.5rem",
              }}
            >
              We started Beyond22 because we ran out of patience. The tools
              exist. The people exist. The will exists. What was missing was the
              framework — a system that treats a veteran in crisis with the same
              urgency as a child abduction, and pairs trained peer intervention
              with emergency response.
            </p>
            <p
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "1.25rem",
                lineHeight: 1.65,
                fontWeight: 600,
                color: "var(--charcoal)",
                margin: 0,
              }}
            >
              We&apos;re building that framework.
            </p>
          </div>
        </div>
      </section>

      {/* Board */}
      <BoardGrid />

      {/* Org structure */}
      <section
        style={{
          backgroundColor: "var(--paper)",
          padding: "6rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
        aria-label="Organizational Structure"
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              marginBottom: "1.5rem",
            }}
          >
            How We&apos;re Built
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              marginBottom: "1rem",
            }}
          >
            A chain of command that serves the mission.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--patrol)",
              maxWidth: "58ch",
              marginBottom: "3rem",
            }}
          >
            Every nonprofit claims to be lean. We&apos;re structured to prove it. Board
            → Executive → Three working teams: Legislative Advocacy, Education &amp;
            Awareness, Resource &amp; Support. Volunteers move between them as mission
            needs dictate.
          </p>

          {/* Org chart */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1.5rem",
              maxWidth: "600px",
            }}
            role="list"
            aria-label="Organizational hierarchy"
          >
            {[
              { level: 0, label: "Board of Directors", sub: "Governance & oversight" },
              { level: 1, label: "Executive Team", sub: "Operations & strategy" },
              { level: 2, label: "Legislative Advocacy", sub: "Patriot Alert campaign" },
              { level: 2, label: "Education & Awareness", sub: "Public outreach" },
              { level: 2, label: "Resource & Support", sub: "Direct veteran services" },
              { level: 2, label: "Volunteers", sub: "Battle Buddies & community" },
            ].map((item) => (
              <div
                key={item.label}
                role="listitem"
                style={{
                  marginLeft: `${item.level * 2}rem`,
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {item.level > 0 && (
                  <div
                    style={{
                      width: "20px",
                      height: "1px",
                      backgroundColor: "color-mix(in srgb, var(--charcoal) 25%, transparent)",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                )}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontSize: item.level === 0 ? "1.0625rem" : "0.9375rem",
                      fontWeight: item.level === 0 ? 600 : 500,
                      color: "var(--charcoal)",
                      margin: 0,
                      marginBottom: "0.125rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: "0.625rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--patrol)",
                      margin: 0,
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Management — Phase 2 */}
      <section
        style={{
          backgroundColor: "var(--bone)",
          padding: "5rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
        aria-label="Phase Two: Case Management"
      >
        <div className="max-w-7xl mx-auto">
          <div className="phase-card" style={{ maxWidth: "640px" }}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.625rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--brass)",
                marginBottom: "1.25rem",
              }}
            >
              Phase Two
            </p>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "clamp(1.375rem, 3vw, 1.75rem)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "var(--charcoal)",
                marginBottom: "0.875rem",
                marginTop: 0,
              }}
            >
              {caseManagement.headline}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--patrol)",
                margin: 0,
              }}
            >
              {caseManagement.description}
            </p>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section
        style={{
          backgroundColor: "var(--paper)",
          padding: "5rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
        aria-label="Transparency"
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              marginBottom: "1.5rem",
            }}
          >
            Transparency
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              marginBottom: "0.875rem",
            }}
          >
            The paperwork is public.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--patrol)",
              maxWidth: "55ch",
              marginBottom: "2rem",
            }}
          >
            Nonprofits earn trust by opening the books. Bylaws, annual reports,
            Form 990s, and board meeting minutes live here.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="/docs/bylaws.pdf"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--charcoal)",
                textDecoration: "none",
                border: "1px solid color-mix(in srgb, var(--charcoal) 25%, transparent)",
                padding: "0.625rem 1.25rem",
                borderRadius: "2px",
                letterSpacing: "0.02em",
              }}
              className="hover:opacity-70 transition-opacity"
            >
              Download Bylaws (PDF)
            </a>
            <button
              disabled
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--patrol)",
                background: "none",
                border: "1px solid color-mix(in srgb, var(--patrol) 30%, transparent)",
                padding: "0.625rem 1.25rem",
                borderRadius: "2px",
                letterSpacing: "0.02em",
                cursor: "not-allowed",
                opacity: 0.6,
              }}
              aria-label="IRS Determination Letter — pending"
            >
              IRS Determination Letter — pending
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          backgroundColor: "var(--charcoal)",
          color: "var(--bone)",
          padding: "5rem 2rem",
        }}
        aria-label="Contact"
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--bone) 45%, transparent)",
              marginBottom: "1.5rem",
            }}
          >
            Reach Us
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--bone)",
              marginBottom: "0.875rem",
            }}
          >
            Someone from the team reads every message.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "color-mix(in srgb, var(--bone) 70%, transparent)",
              maxWidth: "55ch",
              marginBottom: "2rem",
            }}
          >
            For crisis support, call{" "}
            <a href="tel:988" style={{ color: "var(--flare)" }}>
              988 and press 1
            </a>
            . For everything else — partnerships, press, legislative inquiries,
            program referrals — use the form below or email{" "}
            <a
              href="mailto:contact@beyond22.org"
              style={{ color: "color-mix(in srgb, var(--bone) 80%, transparent)" }}
            >
              contact@beyond22.org
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
