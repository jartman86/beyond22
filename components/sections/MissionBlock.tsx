import { mission } from "@/content/mission";

export function MissionBlock() {
  return (
    <section
      style={{
        backgroundColor: "var(--forest)",
        color: "var(--bone)",
        padding: "7rem 2rem",
      }}
      aria-label="Mission"
    >
      <div className="max-w-7xl mx-auto">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>
          {/* Left: Mission label + statement */}
          <div style={{ maxWidth: "780px" }}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.6875rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "color-mix(in srgb, var(--bone) 50%, transparent)",
                marginBottom: "2rem",
              }}
            >
              Mission
            </p>

            <blockquote
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "clamp(1.1875rem, 2.5vw, 1.4375rem)",
                lineHeight: 1.65,
                fontStyle: "italic",
                color: "color-mix(in srgb, var(--bone) 85%, transparent)",
                margin: "0 0 4rem 0",
                padding: "0",
                borderLeft: "2px solid var(--flare)",
                paddingLeft: "1.75rem",
              }}
            >
              {mission.statement}
            </blockquote>

            {/* Slogan as pull quote */}
            <div>
              {mission.sloganFormatted.map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: i === 2 ? "var(--flare)" : "var(--bone)",
                    margin: "0",
                    marginBottom: i < 2 ? "0.15em" : "0",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
