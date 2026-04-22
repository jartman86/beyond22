import { InteriorHero } from "@/components/layout/InteriorHero";

type PlaceholderProps = {
  label: string;
  headline: string;
  subheadline?: string;
  note?: string;
  dark?: boolean;
  crisisWarning?: boolean;
  referralNote?: boolean;
};

export function PlaceholderPage({
  label,
  headline,
  subheadline,
  note,
  dark,
  crisisWarning,
  referralNote,
}: PlaceholderProps) {
  return (
    <>
      <InteriorHero
        label={label}
        headline={headline}
        subheadline={subheadline}
        dark={dark}
        crisisWarning={crisisWarning}
      />
      <section
        style={{
          backgroundColor: "var(--bone)",
          padding: "4rem 2rem 6rem",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {referralNote && (
            <div
              style={{
                backgroundColor: "var(--paper)",
                border: "1px solid color-mix(in srgb, var(--patrol) 30%, transparent)",
                borderRadius: "3px",
                padding: "1.25rem 1.5rem",
                marginBottom: "2.5rem",
                maxWidth: "640px",
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
                External Referral Directory
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
                Beyond22 does not operate clinical services directly. This is a
                vetted referral directory. Listings are not endorsements.
              </p>
            </div>
          )}

          <div
            className="placeholder-card"
            style={{ maxWidth: "640px" }}
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
              {note ?? "Full resource list and directory coming. Check back soon."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
