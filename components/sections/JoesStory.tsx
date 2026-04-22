import Link from "next/link";

type Props = {
  variant?: "teaser" | "full";
};

export function JoesStory({ variant = "teaser" }: Props) {
  if (variant === "full") {
    return (
      <section
        id="joes-story"
        style={{
          padding: "6rem 2rem",
          backgroundColor: "var(--paper)",
        }}
        aria-label="Joe's Story"
      >
        <div className="max-w-7xl mx-auto">
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

          <div className="placeholder-card" style={{ maxWidth: "780px" }}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.625rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--flare)",
                marginBottom: "1.25rem",
              }}
            >
              JOE&apos;S STORY — AWAITING FOUNDER CONTRIBUTION
            </p>
            <p
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
                lineHeight: 1.7,
                fontStyle: "italic",
                color: "var(--patrol)",
                margin: 0,
              }}
            >
              [This page will carry the full story of Joe, whose life and loss
              gave rise to Beyond22. The founder will provide this narrative
              directly. It is the heart of this organization&apos;s &ldquo;why.&rdquo; Please
              provide narrative, photos, and any relevant dates.]
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        backgroundColor: "var(--bone)",
        padding: "7rem 2rem",
        borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
      }}
      aria-label="Joe's Story"
    >
      <div className="max-w-7xl mx-auto">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            maxWidth: "880px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              margin: 0,
            }}
          >
            The Why
          </p>

          <div>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--charcoal)",
                marginBottom: "2rem",
                marginTop: 0,
              }}
            >
              This started with Joe.
            </h2>

            {/* Placeholder — distinguished, not lorem ipsum */}
            <div
              className="placeholder-card"
              style={{ marginBottom: "2rem" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "0.5625rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--patrol)",
                  marginBottom: "0.75rem",
                }}
              >
                In Progress — Awaiting founder contribution
              </p>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  color: "var(--patrol)",
                  margin: 0,
                }}
              >
                [JOE&apos;S STORY — To be provided by founder. This section will tell
                the personal story that gave birth to Beyond22. It is the heart of
                this organization&apos;s &ldquo;why.&rdquo; Please provide narrative, photos, and
                any relevant dates.]
              </p>
            </div>

            <Link
              href="/about#joes-story"
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "var(--charcoal)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
              className="hover:opacity-70 transition-opacity"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
