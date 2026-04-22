import type { Metadata } from "next";
import { InteriorHero } from "@/components/layout/InteriorHero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Beyond22 terms of use.",
};

export default function TermsPage() {
  return (
    <>
      <InteriorHero label="Terms" headline="Terms of Use" />
      <section style={{ backgroundColor: "var(--bone)", padding: "4rem 2rem 7rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div className="placeholder-card" style={{ marginBottom: "2.5rem" }}>
            <p style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.625rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              marginBottom: "0.75rem",
            }}>
              Full terms coming soon
            </p>
            <p style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--patrol)",
              margin: 0,
            }}>
              Complete terms of use are in preparation. By using this site you agree to use it
              in good faith and in accordance with applicable law.
            </p>
          </div>

          {[
            {
              heading: "Not a crisis service",
              body: "Beyond22.org is an informational and organizational site. It is not a crisis intervention service. If you or someone you know is in crisis, call or text 988 and press 1 for the Veterans Crisis Line.",
            },
            {
              heading: "Referral directories",
              body: "Program and resource listings are provided for informational purposes only. Beyond22 makes no warranties regarding the accuracy, completeness, or suitability of any listed provider. Always verify credentials independently.",
            },
            {
              heading: "No medical advice",
              body: "Nothing on this site constitutes medical, clinical, or psychiatric advice. Consult a licensed provider for any health-related decisions.",
            },
            {
              heading: "Contact",
              body: "Questions about these terms: contact@beyond22.org",
            },
          ].map((section) => (
            <div key={section.heading} style={{ marginBottom: "1.75rem" }}>
              <p style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "var(--charcoal)",
                marginBottom: "0.5rem",
              }}>
                {section.heading}
              </p>
              <p style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--patrol)",
                margin: 0,
              }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
