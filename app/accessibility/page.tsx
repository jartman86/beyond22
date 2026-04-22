import type { Metadata } from "next";
import { InteriorHero } from "@/components/layout/InteriorHero";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Beyond22 accessibility statement.",
};

export default function AccessibilityPage() {
  return (
    <>
      <InteriorHero label="Accessibility" headline="Accessibility Statement" />
      <section style={{ backgroundColor: "var(--bone)", padding: "4rem 2rem 7rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.75rem" }}>

          <p style={{
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--charcoal)",
          }}>
            Beyond22 is committed to making this site accessible to everyone — including veterans
            with disabilities, TBI, vision impairment, or other access needs. We target
            WCAG 2.2 Level AA compliance.
          </p>

          {[
            {
              heading: "What we've built in",
              items: [
                "Semantic HTML — proper landmarks, headings, lists, and form labels throughout",
                "Full keyboard navigation — every interactive element is reachable and operable without a mouse",
                "Visible focus indicators — high-contrast orange outline on all focused elements",
                "Skip-to-content link — available on every page for screen reader and keyboard users",
                "Reduced motion support — all animations disabled when prefers-reduced-motion is set",
                "Dark mode support — full dark color scheme when prefers-color-scheme: dark is set",
                "Text alternatives — all images have meaningful alt text; decorative images are marked as such",
                "Screen reader equivalents for all animated content",
                "Color contrast — all text meets WCAG AA minimums (4.5:1 for body, 3:1 for large text)",
              ],
            },
          ].map((section) => (
            <div key={section.heading}>
              <p style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "var(--charcoal)",
                marginBottom: "1rem",
              }}>
                {section.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {section.items.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--brass)", flexShrink: 0, fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "0.875rem" }}>—</span>
                    <span style={{ fontFamily: "var(--font-ibm-plex-sans), sans-serif", fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--patrol)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={{
            borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
            paddingTop: "1.75rem",
          }}>
            <p style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "1.0625rem",
              fontWeight: 600,
              color: "var(--charcoal)",
              marginBottom: "0.5rem",
            }}>
              Found an issue?
            </p>
            <p style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--patrol)",
              margin: 0,
            }}>
              If you encounter an accessibility barrier on this site, email{" "}
              <a href="mailto:contact@beyond22.org" style={{ color: "var(--charcoal)", fontWeight: 500 }}>
                contact@beyond22.org
              </a>{" "}
              and describe the issue. We take these reports seriously and will respond promptly.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
