"use client";

import { useState } from "react";

const TEMPLATE_LETTER = `Dear [Representative / Senator name],

I'm writing as your constituent to urge your support for the Patriot Alert initiative — a veteran-specific emergency alert protocol modeled on the AMBER Alert and Silver Alert systems.

Every day, 22 U.S. veterans die by suicide. Many of them are missing in the hours before they're lost. Patriot Alert would activate a coordinated response between law enforcement and trained veteran peer responders, closing a gap our current emergency systems leave wide open.

Beyond22.org is piloting this model in Washington State. I'm asking you to:

1. Review the Patriot Alert proposal (https://beyond22.org/patriot-alert).
2. Engage the relevant county and state agencies in your jurisdiction.
3. Consider sponsoring enabling legislation at the state level.

This is a low-cost, high-impact policy that pairs existing emergency infrastructure with veteran-led peer intervention. It saves lives.

Thank you for your service to our state and our country.

Respectfully,
[Your Name]
[Your Address]`;

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "0.75rem 1rem",
  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
  fontSize: "0.9375rem",
  color: "var(--charcoal)",
  backgroundColor: "var(--bone)",
  border: "1px solid color-mix(in srgb, var(--charcoal) 20%, transparent)",
  borderRadius: "2px",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-ibm-plex-mono), monospace",
  fontSize: "0.6875rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--patrol)",
  marginBottom: "0.5rem",
};

export function LegislatorContactTool() {
  const [zip, setZip] = useState("");
  const [repLookupDone, setRepLookupDone] = useState(false);
  const [letter, setLetter] = useState(TEMPLATE_LETTER);
  const [copied, setCopied] = useState(false);

  function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    if (zip.length >= 5) {
      setRepLookupDone(true);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(letter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div style={{ maxWidth: "720px" }}>
      {/* Step 1: ZIP lookup */}
      {!repLookupDone ? (
        <form onSubmit={handleLookup} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-end" }}>
          <div style={{ flex: "0 0 200px" }}>
            <label htmlFor="zip" style={labelStyle}>
              Your ZIP Code
            </label>
            <input
              id="zip"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={5}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
              style={inputStyle}
              placeholder="98101"
              aria-required="true"
              autoComplete="postal-code"
            />
          </div>
          <button
            type="submit"
            disabled={zip.length < 5}
            style={{
              backgroundColor: zip.length >= 5 ? "var(--flare)" : "var(--patrol)",
              color: "var(--bone)",
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "2px",
              cursor: zip.length >= 5 ? "pointer" : "not-allowed",
              transition: "background-color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            Find My Rep →
          </button>
        </form>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Stub: rep lookup result */}
          <div
            style={{
              backgroundColor: "var(--bone)",
              border: "1px solid color-mix(in srgb, var(--charcoal) 12%, transparent)",
              borderRadius: "3px",
              padding: "1.25rem 1.5rem",
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
              Representative lookup — ZIP {zip}
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.875rem",
                color: "var(--patrol)",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              [Representative data will appear here — wire to a rep lookup API such as Google Civic Information API or openstates.org]
            </p>
          </div>

          {/* Editable letter */}
          <div>
            <label htmlFor="letter-text" style={{ ...labelStyle, marginBottom: "0.75rem" }}>
              Pre-written letter — edit before sending
            </label>
            <textarea
              id="letter-text"
              value={letter}
              onChange={(e) => setLetter(e.target.value)}
              rows={20}
              style={{
                ...inputStyle,
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.8125rem",
                lineHeight: 1.75,
                resize: "vertical",
              }}
              aria-label="Letter to legislator — editable"
            />
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={handleCopy}
              style={{
                backgroundColor: "var(--charcoal)",
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
              }}
              className="hover:opacity-80 transition-opacity"
            >
              {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
            <a
              href={`mailto:?subject=Support%20for%20Patriot%20Alert%20Legislation&body=${encodeURIComponent(letter)}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--flare)",
                color: "var(--bone)",
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "0.75rem 1.5rem",
                borderRadius: "2px",
                textDecoration: "none",
              }}
              className="hover:opacity-90 transition-opacity"
            >
              Open in Email →
            </a>
          </div>

          <button
            onClick={() => setRepLookupDone(false)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.08em",
              color: "var(--patrol)",
              cursor: "pointer",
              textDecoration: "underline",
              alignSelf: "flex-start",
            }}
          >
            ← Different ZIP
          </button>
        </div>
      )}
    </div>
  );
}
