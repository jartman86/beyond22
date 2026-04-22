import Link from "next/link";
import { programs } from "@/content/programs";

export function ProgramsPreview() {
  return (
    <section
      style={{
        backgroundColor: "var(--bone)",
        padding: "7rem 0 7rem 2rem",
        borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        overflow: "hidden",
      }}
      aria-label="Programs"
    >
      <div className="max-w-7xl mx-auto" style={{ paddingRight: "0" }}>
        {/* Header */}
        <div style={{ paddingRight: "2rem", marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              marginBottom: "1rem",
            }}
          >
            Programs
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              margin: "0 0 1rem",
              maxWidth: "24ch",
            }}
          >
            We don&apos;t hand veterans a pamphlet. We walk them home.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--patrol)",
              maxWidth: "58ch",
            }}
          >
            From wilderness retreats to peptide therapy to family camps, Beyond22
            connects veterans and their families to vetted programs — operated
            directly, in partnership, or through our referral directory.
          </p>
        </div>

        {/* Horizontal scroll cards */}
        <div
          style={{
            display: "flex",
            gap: "1.5px",
            overflowX: "auto",
            paddingBottom: "1.5rem",
            paddingRight: "2rem",
            scrollbarWidth: "none",
          }}
          role="list"
          aria-label="Program cards"
        >
          {programs.map((program, i) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              role="listitem"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexShrink: 0,
                width: "260px",
                padding: "2rem 1.75rem",
                backgroundColor: i % 2 === 0 ? "var(--charcoal)" : "var(--forest)",
                color: "var(--bone)",
                textDecoration: "none",
                minHeight: "280px",
                position: "relative",
              }}
              className="hover:opacity-90 transition-opacity group"
            >
              {program.referralOnly && (
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "0.5625rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--flare)",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  Referral only
                </span>
              )}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "0.625rem",
                    letterSpacing: "0.1em",
                    color: "color-mix(in srgb, var(--bone) 40%, transparent)",
                    marginBottom: "0.75rem",
                    textTransform: "uppercase",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.1875rem",
                    fontWeight: 600,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                    color: "var(--bone)",
                    marginBottom: "1rem",
                    marginTop: 0,
                  }}
                >
                  {program.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.8125rem",
                    lineHeight: 1.65,
                    color: "color-mix(in srgb, var(--bone) 65%, transparent)",
                    margin: 0,
                  }}
                >
                  {program.shortDescription}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  fontSize: "0.8125rem",
                  color: "color-mix(in srgb, var(--bone) 50%, transparent)",
                  marginTop: "1.5rem",
                  display: "block",
                }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        {/* All programs link */}
        <div style={{ paddingRight: "2rem", marginTop: "2rem" }}>
          <Link
            href="/programs"
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--charcoal)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
            className="hover:opacity-70 transition-opacity"
          >
            View all programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
