import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Fund the Beyond22 network. Every dollar trains a responder, equips a family, or advances the Patriot Alert bill.",
};

const tiers = [
  { amount: 22, label: "One day of impact" },
  { amount: 154, label: "One week ($22 × 7)" },
  { amount: 660, label: "One month" },
  { amount: 2200, label: "One hundred veterans, one shot" },
];

const allocation = [
  { label: "Direct program", pct: 70, desc: "Battle Buddy training, family support, crisis response" },
  { label: "Legislative advocacy", pct: 15, desc: "Patriot Alert campaign" },
  { label: "Education and awareness", pct: 10, desc: "Public outreach" },
  { label: "Administration", pct: 5, desc: "" },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--charcoal)",
          color: "var(--bone)",
          padding: "8rem 2rem 6rem",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--bone) 45%, transparent)",
              marginBottom: "2rem",
            }}
          >
            Donate
          </p>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(2.25rem, 6vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--bone)",
              marginBottom: "1.5rem",
            }}
          >
            Fund the network.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "color-mix(in srgb, var(--bone) 75%, transparent)",
              maxWidth: "52ch",
              margin: 0,
            }}
          >
            Beyond22 runs lean on purpose. Every dollar funds responder training,
            family support, or legislative advancement. We publish where it went.
          </p>
        </div>
      </section>

      {/* Donation tiers */}
      <section
        style={{ backgroundColor: "var(--bone)", padding: "6rem 2rem" }}
        aria-label="Donation options"
      >
        <div className="max-w-7xl mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5px",
              backgroundColor: "color-mix(in srgb, var(--charcoal) 12%, transparent)",
              marginBottom: "2rem",
            }}
          >
            {tiers.map((tier) => (
              <button
                key={tier.amount}
                style={{
                  backgroundColor: "var(--bone)",
                  padding: "2rem 1.5rem",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
                className="hover:bg-paper transition-colors"
                aria-label={`Donate $${tier.amount} — ${tier.label}`}
              >
                <span
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    fontWeight: 700,
                    color: "var(--flare)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  ${tier.amount}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--patrol)",
                    lineHeight: 1.4,
                  }}
                >
                  {tier.label}
                </span>
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div style={{ maxWidth: "400px" }}>
            <label
              htmlFor="custom-amount"
              style={{
                display: "block",
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.6875rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--patrol)",
                marginBottom: "0.5rem",
              }}
            >
              Custom Amount
            </label>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <div style={{ position: "relative", flex: 1 }}>
                <span
                  style={{
                    position: "absolute",
                    left: "0.875rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--patrol)",
                  }}
                  aria-hidden="true"
                >
                  $
                </span>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  placeholder="Amount"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem 0.75rem 1.75rem",
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--charcoal)",
                    backgroundColor: "var(--paper)",
                    border: "1px solid color-mix(in srgb, var(--charcoal) 20%, transparent)",
                    borderRadius: "2px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <button
                style={{
                  backgroundColor: "var(--flare)",
                  color: "var(--bone)",
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  padding: "0.75rem 1.5rem",
                  border: "none",
                  borderRadius: "2px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                className="hover:opacity-90 transition-opacity"
              >
                Donate →
              </button>
            </div>
          </div>

          {/* Stub note */}
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.06em",
              color: "var(--patrol)",
              marginTop: "1.5rem",
              fontStyle: "italic",
            }}
          >
            [Wire donation buttons to payment processor — Stripe, PayPal Giving Fund, or fiscal sponsor portal]
          </p>
        </div>
      </section>

      {/* Allocation breakdown */}
      <section
        style={{
          backgroundColor: "var(--paper)",
          padding: "6rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
        aria-label="How donations are allocated"
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
            Where It Goes
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              maxWidth: "560px",
            }}
          >
            {allocation.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  paddingTop: "1.25rem",
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "var(--flare)",
                    letterSpacing: "-0.02em",
                    minWidth: "3.5rem",
                    lineHeight: 1,
                  }}
                >
                  {item.pct}%
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "var(--charcoal)",
                      margin: "0 0 0.125rem",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.desc && (
                    <p
                      style={{
                        fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                        fontSize: "0.8125rem",
                        color: "var(--patrol)",
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax status */}
      <section
        style={{
          backgroundColor: "var(--bone)",
          padding: "4rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              color: "var(--patrol)",
              maxWidth: "58ch",
            }}
          >
            Beyond22 is a Washington State nonprofit corporation with 501(c)(3)
            status pending IRS determination. Once approved, donations will be
            tax-deductible retroactively to organization formation. Current EIN:{" "}
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.8125rem",
              }}
            >
              [placeholder]
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
