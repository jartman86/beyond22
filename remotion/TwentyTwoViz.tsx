import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const DOT_COUNT = 22;
const DOT_APPEAR_START = 4.5; // seconds
const DOT_INTERVAL_S = 0.055; // 55ms per dot

export function TwentyTwoViz() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const toFrame = (s: number) => s * fps;

  // Phase timings
  const ruleOpacity = interpolate(frame, [toFrame(0.2), toFrame(1)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const numberDrop = interpolate(frame, [toFrame(1.5), toFrame(2.2)], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (t) => {
      // gravity easing: accelerates then settles
      if (t < 0.7) return t * t * 2;
      const b = 0.7;
      const r = (t - b) / 0.3;
      return 0.98 + r * r * (1 - 0.98) * 0.5;
    },
  });

  const numberOpacity = interpolate(frame, [toFrame(1.5), toFrame(2.0)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const labelOpacity = interpolate(frame, [toFrame(3.5), toFrame(4.5)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Dots: each appears in sequence starting at DOT_APPEAR_START
  const dots = Array.from({ length: DOT_COUNT }, (_, i) => {
    const dotStartFrame = toFrame(DOT_APPEAR_START + i * DOT_INTERVAL_S);
    const opacity = interpolate(frame, [dotStartFrame, dotStartFrame + fps * 0.08], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return opacity;
  });

  const allDotsLanded = frame >= toFrame(DOT_APPEAR_START + DOT_COUNT * DOT_INTERVAL_S + 0.1);

  const closingRuleOpacity = interpolate(
    frame,
    [toFrame(DOT_APPEAR_START + DOT_COUNT * DOT_INTERVAL_S + 0.1), toFrame(DOT_APPEAR_START + DOT_COUNT * DOT_INTERVAL_S + 0.4)],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#F2EDE4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5% 8%",
      }}
    >
      {/* Opening hairline rule */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "1px",
          backgroundColor: "rgba(26, 28, 27, 0.18)",
          marginBottom: "3rem",
          opacity: ruleOpacity,
        }}
      />

      {/* The number */}
      <div
        style={{
          fontSize: "clamp(140px, 22vw, 240px)",
          fontFamily: "'Fraunces', Georgia, serif",
          fontWeight: 700,
          color: "#D94F2A",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          transform: `translateY(${numberDrop * 40}px)`,
          opacity: numberOpacity,
          userSelect: "none",
        }}
      >
        22
      </div>

      {/* Label */}
      <p
        style={{
          fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
          fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(26, 28, 27, 0.55)",
          marginTop: "1rem",
          marginBottom: "2.5rem",
          opacity: labelOpacity,
          textAlign: "center",
        }}
      >
        Veterans lost each day — U.S.
      </p>

      {/* Dot grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(11, 1fr)",
          gap: "10px",
          maxWidth: "300px",
          width: "100%",
        }}
        aria-hidden="true"
      >
        {dots.map((opacity, i) => (
          <div
            key={i}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "rgba(26, 28, 27, 0.65)",
              opacity,
              justifySelf: "center",
            }}
          />
        ))}
      </div>

      {/* Closing rule */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "1px",
          backgroundColor: "rgba(26, 28, 27, 0.18)",
          marginTop: "2rem",
          opacity: closingRuleOpacity,
        }}
      />
    </AbsoluteFill>
  );
}
