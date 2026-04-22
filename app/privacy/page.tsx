import type { Metadata } from "next";
import { InteriorHero } from "@/components/layout/InteriorHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Beyond22 privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <InteriorHero label="Privacy Policy" headline="Privacy Policy" />
      <section style={{ backgroundColor: "var(--bone)", padding: "4rem 2rem 7rem" }}>
        <div className="max-w-7xl mx-auto" style={{ maxWidth: "680px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            <div className="placeholder-card">
              <p style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.625rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--patrol)",
                marginBottom: "0.75rem",
              }}>
                Full policy coming soon
              </p>
              <p style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--patrol)",
                margin: 0,
              }}>
                A full privacy policy is in preparation. In the meantime, here is what you should know:
              </p>
            </div>

            {[
              {
                heading: "Analytics",
                body: "Beyond22 uses Plausible Analytics — a privacy-respecting, GDPR-compliant analytics tool. Plausible does not use cookies, does not collect personal data, and does not track you across sites. No data is sold or shared with third parties.",
              },
              {
                heading: "Forms",
                body: "Information submitted through the Battle Buddy application or contact forms is used solely to respond to your inquiry or process your application. It is not sold, rented, or shared with outside parties.",
              },
              {
                heading: "Crisis resources",
                body: "Clicking the Veterans Crisis Line link (988) connects you directly to the Veterans Crisis Line. Beyond22 does not log or store any data associated with that action.",
              },
              {
                heading: "Contact",
                body: "Questions about privacy: contact@beyond22.org",
              },
            ].map((section) => (
              <div key={section.heading}>
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
        </div>
      </section>
    </>
  );
}
