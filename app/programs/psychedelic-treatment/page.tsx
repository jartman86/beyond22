import type { Metadata } from "next";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { psychedelicDisclaimer } from "@/content/programs";

export const metadata: Metadata = {
  title: "Psychedelic Treatment Centers",
  description:
    "Referral directory of legal psychedelic-assisted therapy providers. Beyond22 does not operate, fund, or administer these programs.",
};

export default function PsychedelicTreatmentPage() {
  return (
    <>
      {/* Prominent referral label */}
      <div
        style={{
          backgroundColor: "var(--forest)",
          color: "var(--bone)",
          padding: "0.875rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        role="banner"
        aria-label="Referral Directory Only"
      >
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--bone)",
            margin: 0,
            textAlign: "center",
          }}
        >
          Referral Directory Only — Beyond22 does not operate, fund, or
          administer these programs.
        </p>
      </div>

      <InteriorHero
        label="Programs — 05"
        headline="Psychedelic Treatment Centers"
        subheadline="Vetted directory of clinicians, retreat centers, and research programs operating within legal frameworks — Oregon and Colorado regulated programs, ketamine-assisted therapy providers, FDA-authorized clinical trials, and specific international programs. Listing is not endorsement."
      />

      <section
        style={{ backgroundColor: "var(--bone)", padding: "4rem 2rem 6rem" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* How to proceed */}
          <div style={{ maxWidth: "640px", marginBottom: "3rem" }}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--charcoal)",
                marginBottom: "1.25rem",
              }}
            >
              If you&apos;re exploring psychedelic-assisted therapy as part of your
              recovery, do three things first:
            </p>
            <ol
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "var(--charcoal)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                paddingLeft: "0",
                listStyle: "none",
                margin: "0 0 2rem",
              }}
            >
              {[
                "Talk to your current provider.",
                "Understand the legal status in your state.",
                "Vet the program beyond our directory — speak with alumni, verify credentials, confirm safety protocols.",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: "0.625rem",
                      letterSpacing: "0.1em",
                      color: "var(--patrol)",
                      flexShrink: 0,
                      paddingTop: "0.2rem",
                    }}
                  >
                    {i + 1}.
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          {/* Directory placeholder */}
          <div
            className="placeholder-card"
            style={{ maxWidth: "640px", marginBottom: "3rem" }}
          >
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.625rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--patrol)",
                marginBottom: "0.75rem",
              }}
            >
              Directory under active construction
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--patrol)",
                margin: 0,
              }}
            >
              Vetted provider directory coming. We are currently reviewing
              programs in Oregon, Colorado, and international contexts before
              listing.
            </p>
          </div>

          {/* Legal disclaimer */}
          <div
            className="referral-disclaimer"
            style={{ maxWidth: "640px" }}
            role="complementary"
            aria-label="Legal disclaimer"
          >
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                color: "var(--patrol)",
                margin: 0,
                fontStyle: "italic",
              }}
            >
              {psychedelicDisclaimer}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
