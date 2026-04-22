"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function PatriotAlertIntro() {
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const show = visible || reducedMotion;
  const base = "transition-all duration-700 ease-out";

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "var(--charcoal)",
        padding: "7rem 2rem 7rem",
        overflow: "hidden",
        position: "relative",
      }}
      aria-label="Introducing Patriot Alert"
    >
      {/* Faint "22" watermark behind everything */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-2rem",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "clamp(260px, 35vw, 480px)",
          fontWeight: 700,
          lineHeight: 1,
          color: "color-mix(in srgb, var(--flare) 7%, transparent)",
          letterSpacing: "-0.04em",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        22
      </div>

      <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>

        {/* Label line */}
        <div
          className={base}
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "0ms",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--flare)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--bone) 50%, transparent)",
            }}
          >
            Introducing
          </span>
        </div>

        {/* Main headline — stacked */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            className={base}
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(28px)",
              transitionDelay: "120ms",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "var(--bone)",
                margin: 0,
              }}
            >
              Patriot
            </p>
          </div>
          <div
            className={base}
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(28px)",
              transitionDelay: "220ms",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "var(--flare)",
                margin: 0,
              }}
            >
              Alert.
            </p>
          </div>
        </div>

        {/* Horizontal rule */}
        <div
          className={base}
          style={{
            opacity: show ? 1 : 0,
            transitionDelay: "340ms",
            width: "100%",
            maxWidth: "640px",
            height: "1px",
            backgroundColor: "color-mix(in srgb, var(--bone) 12%, transparent)",
            marginBottom: "2.5rem",
          }}
        />

        {/* Body + CTA */}
        <div
          className={base}
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "420ms",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            maxWidth: "540px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.1875rem)",
              lineHeight: 1.75,
              color: "color-mix(in srgb, var(--bone) 72%, transparent)",
              margin: 0,
            }}
          >
            Like AMBER Alert — but built for veterans in crisis. A coordinated
            emergency response that deploys trained veteran peer responders
            alongside law enforcement when a veteran goes missing or is at risk.
          </p>

          <Link
            href="/patriot-alert"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--bone)",
              textDecoration: "none",
              borderBottom: "1.5px solid var(--flare)",
              paddingBottom: "0.3rem",
              alignSelf: "flex-start",
            }}
            className="hover:opacity-75 transition-opacity"
          >
            Read the full brief →
          </Link>
        </div>
      </div>
    </section>
  );
}
