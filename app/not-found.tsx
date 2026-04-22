import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        backgroundColor: "var(--charcoal)",
        color: "var(--bone)",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 2rem",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--flare)",
            marginBottom: "2rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(2.25rem, 6vw, 4rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--bone)",
            marginBottom: "1.5rem",
            maxWidth: "18ch",
          }}
        >
          Page not found.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            color: "color-mix(in srgb, var(--bone) 65%, transparent)",
            maxWidth: "44ch",
            marginBottom: "3rem",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--bone)",
              textDecoration: "none",
              borderBottom: "1.5px solid var(--flare)",
              paddingBottom: "0.25rem",
            }}
          >
            ← Back to home
          </Link>
          <a
            href="tel:988"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "color-mix(in srgb, var(--bone) 50%, transparent)",
              textDecoration: "none",
            }}
          >
            Veterans Crisis Line: 988, press 1
          </a>
        </div>
      </div>
    </section>
  );
}
