import type { Metadata } from "next";
import Link from "next/link";
import { InteriorHero } from "@/components/layout/InteriorHero";

export const metadata: Metadata = {
  title: "Mental Health Services",
  description:
    "External referral directory of mental health providers with documented experience treating veterans.",
};

const subpages = [
  { href: "/mental-health/veteran-services", title: "Veteran Services", desc: "VA-familiar providers and peer support networks.", number: "01" },
  { href: "/mental-health/counseling", title: "Counseling", desc: "Individual and group counseling for veterans.", number: "02" },
  { href: "/mental-health/family-therapy", title: "Family Therapy + Crisis Intervention", desc: "For the whole family — not just the veteran.", number: "03" },
  { href: "/mental-health/short-term-housing", title: "Short Term Housing", desc: "Safe housing during crisis and transition.", number: "04" },
  { href: "/mental-health/continuum-of-care", title: "Continuum of Care", desc: "Coordinated care across the recovery arc.", number: "05" },
];

export default function MentalHealthPage() {
  return (
    <>
      <InteriorHero
        label="Mental Health Services"
        headline="External referral directory."
        subheadline="Beyond22 does not operate clinical services directly. We maintain a vetted referral directory of providers, programs, and networks with documented experience treating veterans. Direct case management launches in Phase 2."
        crisisWarning
      />

      {/* Referral disclaimer */}
      <section style={{ backgroundColor: "var(--paper)", padding: "2rem 2rem 0" }}>
        <div className="max-w-7xl mx-auto">
          <div
            style={{
              border: "1px solid color-mix(in srgb, var(--patrol) 30%, transparent)",
              borderRadius: "3px",
              padding: "1.25rem 1.5rem",
              maxWidth: "700px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.625rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--patrol)",
                marginBottom: "0.5rem",
              }}
            >
              External referral directory — not direct care
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.65,
                color: "var(--patrol)",
                margin: 0,
              }}
            >
              Beyond22 does not provide clinical care. Listings are referral
              resources and are not endorsements. Always verify credentials with
              any provider before beginning treatment.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--paper)", padding: "3rem 2rem 6rem" }}>
        <div className="max-w-7xl mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {subpages.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  padding: "2rem",
                  backgroundColor: "var(--bone)",
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
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--charcoal)",
                    margin: 0,
                    lineHeight: 1.3,
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
                    flex: 1,
                  }}
                >
                  {card.desc}
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
                  View directory →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
