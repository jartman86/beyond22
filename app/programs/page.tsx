import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Programs",
  description: "Veterans heal where the clinic can't reach. Beyond22 connects veterans and families to camps, retreats, excursions, and specialized programs.",
};

export default function ProgramsPage() {
  return (
    <>
      <InteriorHero
        label="Programs"
        headline="Where veterans actually heal."
        subheadline="These programs meet veterans and their families where the clinic can't — in the woods, in the cold water, around a fire, at the edge of their own limits. Some we partner with. Some we refer to. Where the distinction matters, we say so plainly."
      />
      <section style={{ backgroundColor: "var(--bone)", padding: "4rem 2rem 6rem" }}>
        <div className="max-w-7xl mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {programs.map((program, i) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "2rem",
                  backgroundColor: "var(--paper)",
                  border: "1px solid color-mix(in srgb, var(--charcoal) 8%, transparent)",
                  borderRadius: "3px",
                  textDecoration: "none",
                  position: "relative",
                }}
                className="hover:opacity-85 transition-opacity"
              >
                {program.referralOnly && (
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: "0.5625rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--flare)",
                    }}
                  >
                    Referral directory only
                  </span>
                )}
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "0.625rem",
                    letterSpacing: "0.1em",
                    color: "var(--brass)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--charcoal)",
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {program.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--patrol)",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {program.shortDescription}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.8125rem",
                    color: "var(--charcoal)",
                    fontWeight: 600,
                    marginTop: "auto",
                  }}
                >
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
