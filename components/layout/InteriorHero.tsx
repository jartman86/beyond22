type Props = {
  label: string;
  headline: string;
  subheadline?: string;
  dark?: boolean;
  crisisWarning?: boolean;
};

export function InteriorHero({ label, headline, subheadline, dark = false, crisisWarning = false }: Props) {
  return (
    <section
      style={{
        backgroundColor: dark ? "var(--charcoal)" : "var(--paper)",
        color: dark ? "var(--bone)" : "var(--charcoal)",
        padding: "7rem 2rem 5rem",
        borderBottom: `1px solid color-mix(in srgb, ${dark ? "var(--bone)" : "var(--charcoal)"} 10%, transparent)`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {crisisWarning && (
          <div className="content-warning" style={{ marginBottom: "2rem" }}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.65,
                color: "var(--charcoal)",
                margin: 0,
              }}
            >
              The following section discusses veteran suicide. Resources are
              available at the top of this page.{" "}
              <a href="tel:988" style={{ color: "var(--flare)", fontWeight: 600 }}>
                988, press 1
              </a>{" "}
              for the Veterans Crisis Line.
            </p>
          </div>
        )}
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: dark
              ? "color-mix(in srgb, var(--bone) 45%, transparent)"
              : "var(--patrol)",
            marginBottom: "1.5rem",
          }}
        >
          {label}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(1.875rem, 5vw, 3.25rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: dark ? "var(--bone)" : "var(--charcoal)",
            maxWidth: "24ch",
            marginBottom: subheadline ? "1.25rem" : 0,
          }}
        >
          {headline}
        </h1>
        {subheadline && (
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: dark
                ? "color-mix(in srgb, var(--bone) 72%, transparent)"
                : "var(--patrol)",
              maxWidth: "58ch",
              margin: 0,
            }}
          >
            {subheadline}
          </p>
        )}
      </div>
    </section>
  );
}
