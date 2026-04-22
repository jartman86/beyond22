import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
} from "remotion";

export function HeroSequence() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Timeline (all in frames at 30fps)
  // 0-2s: Black + timestamp
  // 2-4s: Photo fade in
  // 4-5.5s: H1 crossfade
  // 5.5-7s: H2 fade in
  // 7-8s: CTA rise

  const timestampOpacity = interpolate(frame, [0, fps * 0.6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const photoOpacity = interpolate(frame, [fps * 2, fps * 3.5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const photoScale = interpolate(frame, [fps * 2, fps * 8], [1, 1.03], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const h1Opacity = interpolate(frame, [fps * 4, fps * 5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const h1Tracking = interpolate(frame, [fps * 4, fps * 5.5], [-0.04, -0.01], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const h2Opacity = interpolate(frame, [fps * 5.5, fps * 6.5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaY = interpolate(frame, [fps * 7, fps * 8], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaOpacity = interpolate(frame, [fps * 7, fps * 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0F1210", overflow: "hidden" }}>
      {/* Grain texture overlay */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
          opacity: 0.35,
          mixBlendMode: "overlay",
        }}
      />

      {/* Timestamp */}
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "0 0 60% 6%",
          opacity: timestampOpacity,
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(242, 237, 228, 0.55)",
          }}
        >
          FIELD DISPATCH — 04:22 LOCAL
        </span>
      </AbsoluteFill>

      {/* Photo */}
      <AbsoluteFill
        style={{
          opacity: photoOpacity,
          transform: `scale(${photoScale})`,
        }}
      >
        <Img
          src={staticFile("/images/hero-walk.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Dark vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(15,18,16,0.75) 0%, rgba(15,18,16,0.2) 50%, rgba(15,18,16,0.55) 100%)",
          }}
        />
      </AbsoluteFill>

      {/* H1 */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 6%",
          gap: "1.25rem",
        }}
      >
        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 700,
            color: "#F2EDE4",
            letterSpacing: `${h1Tracking}em`,
            lineHeight: 1.05,
            opacity: h1Opacity,
            maxWidth: "14ch",
            margin: 0,
          }}
        >
          Twenty-two.
          <br />
          Every day.
        </h1>

        {/* H2 */}
        <p
          style={{
            fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.375rem)",
            fontWeight: 300,
            color: "rgba(242, 237, 228, 0.8)",
            letterSpacing: "0.02em",
            opacity: h2Opacity,
            margin: 0,
          }}
        >
          We go beyond the statistic.
        </p>

        {/* CTA */}
        <div
          style={{
            opacity: ctaOpacity,
            transform: `translateY(${ctaY}px)`,
            marginTop: "0.5rem",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "#F2EDE4",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderBottom: "1px solid rgba(217, 79, 42, 0.8)",
              paddingBottom: "0.25rem",
            }}
          >
            Activate the Network →
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
