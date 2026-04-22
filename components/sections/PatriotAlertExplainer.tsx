import Link from "next/link";

const panels = [
  {
    number: "01",
    label: "What It Is",
    headline: "A civilian alert system for a military crisis.",
    body: "Patriot Alert is to veterans what AMBER Alert is to missing children. When a veteran goes missing in crisis, or is at credible risk of self-harm, Patriot Alert activates a coordinated response between law enforcement and trained veteran peer responders.",
  },
  {
    number: "02",
    label: "How It Works",
    headline: "Dispatch. Deploy. De-escalate.",
    body: "Law enforcement activates the alert. Trained Battle Buddies — honorably discharged veterans with crisis intervention certification — deploy alongside officers. They bring cultural fluency, trust, and the one thing no uniform can fake: they've been there.",
  },
  {
    number: "03",
    label: "Where We Are",
    headline: "Washington State, pilot phase.",
    body: "We're building the county-level proof of concept that becomes state law that becomes federal policy. Your representative can make the call.",
    cta: { label: "Contact your legislator →", href: "/patriot-alert#advocate" },
  },
];

export function PatriotAlertExplainer() {
  return (
    <section
      style={{
        backgroundColor: "var(--paper)",
        padding: "7rem 2rem",
        borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
      }}
      aria-label="Patriot Alert"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
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
              Patriot Alert
            </p>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "color-mix(in srgb, var(--charcoal) 10%, transparent)",
              }}
              aria-hidden="true"
            />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              maxWidth: "20ch",
              margin: 0,
            }}
          >
            Like AMBER Alert.
            <br />
            Built for veterans.
          </h2>
        </div>

        {/* Three panels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "0",
          }}
        >
          {panels.map((panel, i) => (
            <div
              key={panel.number}
              style={{
                padding: "2.5rem",
                borderLeft: i > 0 ? "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)" : "none",
                borderTop: i > 0
                  ? "none"
                  : "3px solid var(--flare)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "0.625rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--flare)",
                  marginBottom: "0.5rem",
                }}
              >
                {panel.number} — {panel.label}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "clamp(1.1875rem, 2.2vw, 1.375rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  color: "var(--charcoal)",
                  marginBottom: "1rem",
                  marginTop: 0,
                }}
              >
                {panel.headline}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--patrol)",
                  marginBottom: panel.cta ? "1.5rem" : 0,
                }}
              >
                {panel.body}
              </p>
              {panel.cta && (
                <Link
                  href={panel.cta.href}
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--flare)",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                  }}
                  className="hover:opacity-75 transition-opacity"
                >
                  {panel.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Full page CTA */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)" }}>
          <Link
            href="/patriot-alert"
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "var(--charcoal)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            className="hover:opacity-70 transition-opacity"
          >
            Read the full Patriot Alert brief →
          </Link>
        </div>
      </div>
    </section>
  );
}
