"use client";

import Link from "next/link";

const actions = [
  {
    number: "01",
    headline: "Donate",
    body: "Fund the network. Every dollar trains a responder, equips a family, advances the Patriot Alert bill.",
    cta: { label: "Donate →", href: "/donate" },
  },
  {
    number: "02",
    headline: "Become a Battle Buddy",
    body: "Honorably discharged. Mentally steady. Willing to show up at 2am. If that's you, apply to be a peer responder.",
    cta: { label: "Apply →", href: "/patriot-alert#volunteer" },
  },
  {
    number: "03",
    headline: "Contact Your Legislator",
    body: "Patriot Alert becomes law when enough voters say it should. We wrote the letter. You send it.",
    cta: { label: "Find your rep →", href: "/patriot-alert#advocate" },
  },
  {
    number: "04",
    headline: "Share the Mission",
    body: "The fastest way to save a life is to make sure a veteran who needs us can find us.",
    cta: { label: "Share →", href: "#share", isShare: true },
  },
];

export function TakeActionBlock() {
  return (
    <section
      style={{
        backgroundColor: "var(--charcoal)",
        padding: "7rem 2rem",
        color: "var(--bone)",
      }}
      aria-label="Take Action"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--bone) 45%, transparent)",
              marginBottom: "1rem",
            }}
          >
            Stand Up
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--bone)",
              margin: 0,
            }}
          >
            Four ways to join the line.
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5px",
            backgroundColor: "color-mix(in srgb, var(--bone) 8%, transparent)",
          }}
        >
          {actions.map((action) => (
            <div
              key={action.number}
              style={{
                backgroundColor: "var(--charcoal)",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "0.625rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--brass)",
                  margin: 0,
                }}
              >
                {action.number}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                  color: "var(--bone)",
                  margin: 0,
                }}
              >
                {action.headline}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "color-mix(in srgb, var(--bone) 65%, transparent)",
                  flex: 1,
                  margin: 0,
                }}
              >
                {action.body}
              </p>
              {action.cta.isShare ? (
                <ShareButton label={action.cta.label} />
              ) : (
                <Link
                  href={action.cta.href}
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--flare)",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    display: "inline-block",
                    marginTop: "auto",
                  }}
                  className="hover:opacity-75 transition-opacity"
                >
                  {action.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShareButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => {
        if (navigator.share) {
          navigator.share({
            title: "Beyond22 — Save the 22",
            text: "22 U.S. veterans die by suicide every day. Beyond22 is building the infrastructure to stop it.",
            url: "https://beyond22.org",
          });
        } else {
          // Fallback: copy to clipboard
          navigator.clipboard.writeText("https://beyond22.org");
          alert("Link copied to clipboard.");
        }
      }}
      style={{
        fontFamily: "var(--font-ibm-plex-sans), sans-serif",
        fontSize: "0.875rem",
        fontWeight: 600,
        color: "var(--flare)",
        textDecoration: "none",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        display: "inline-block",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        textAlign: "left",
      }}
      className="hover:opacity-75 transition-opacity"
    >
      {label}
    </button>
  );
}
