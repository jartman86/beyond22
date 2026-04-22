import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero } from "@/components/layout/InteriorHero";

export const metadata: Metadata = {
  title: "Resources",
  description: "External directory of vetted resources for veterans in crisis and their families.",
};

export default function ResourcesPage() {
  return (
    <>
      <InteriorHero
        label="Resources"
        headline="External directory. Vetted. Updated."
        subheadline="Beyond22 maintains a directory of outside resources we trust. These are not endorsements — they're starting points. If a listed resource fails you, tell us. We'll update the directory."
        crisisWarning
      />
      <section style={{ backgroundColor: "var(--bone)", padding: "4rem 2rem 6rem" }}>
        <div className="max-w-7xl mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              maxWidth: "720px",
            }}
          >
            {[
              {
                href: "/resources/crisis-intervention",
                title: "Crisis Intervention Team",
                desc: "Immediate resources for veterans in active crisis.",
                number: "01",
              },
              {
                href: "/resources/support",
                title: "Support",
                desc: "For families, peers, and the long road after crisis.",
                number: "02",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "2rem",
                  backgroundColor: "var(--paper)",
                  border: "1px solid color-mix(in srgb, var(--charcoal) 8%, transparent)",
                  borderRadius: "3px",
                  textDecoration: "none",
                }}
                className="hover:opacity-85 transition-opacity"
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "0.625rem",
                    letterSpacing: "0.1em",
                    color: "var(--brass)",
                  }}
                >
                  {card.number}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.1875rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--charcoal)",
                    margin: 0,
                  }}
                >
                  {card.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--patrol)",
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.8125rem",
                    color: "var(--flare)",
                    fontWeight: 600,
                    marginTop: "auto",
                  }}
                >
                  View resources →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
