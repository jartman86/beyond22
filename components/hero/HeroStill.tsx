import Link from "next/link";

export function HeroStill() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        backgroundColor: "var(--dusk)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero-walk.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
        role="img"
        aria-label="A veteran walks a forest road, pack on back, facing away from the camera"
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(15,18,16,0.85) 0%, rgba(15,18,16,0.3) 55%, rgba(15,18,16,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{ position: "relative", zIndex: 1, padding: "0 6vw", maxWidth: "900px" }}
      >
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(242, 237, 228, 0.5)",
            marginBottom: "1.75rem",
          }}
        >
          FIELD DISPATCH — 04:22 LOCAL
        </p>

        <h1
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
            fontWeight: 700,
            color: "var(--bone)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            maxWidth: "12ch",
          }}
        >
          Twenty-two.
          <br />
          Every day.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            fontSize: "clamp(1.0625rem, 2.5vw, 1.3125rem)",
            fontWeight: 300,
            color: "rgba(242, 237, 228, 0.8)",
            letterSpacing: "0.01em",
            marginBottom: "2.5rem",
          }}
        >
          We go beyond the statistic.
        </p>

        <Link
          href="/patriot-alert"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "var(--bone)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: "1.5px solid var(--flare)",
            paddingBottom: "0.3rem",
          }}
          className="hover:opacity-80 transition-opacity"
        >
          Activate the Network →
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "6vw",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.4,
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "var(--bone)",
          }}
        />
      </div>
    </div>
  );
}
