"use client";

import { useEffect, useRef, useState } from "react";

const DOT_COUNT = 22;
const DOT_INTERVAL_MS = 60;

export function TwentyTwoCounter() {
  const [triggered, setTriggered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dotsVisible, setDotsVisible] = useState(0);
  const [numberVisible, setNumberVisible] = useState(false);
  const [labelVisible, setLabelVisible] = useState(false);
  const [ruleVisible, setRuleVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered || reducedMotion) return;

    // Number drops at 1.5s
    const t1 = setTimeout(() => setNumberVisible(true), 1500);
    // Label fades at 3.5s
    const t2 = setTimeout(() => setLabelVisible(true), 3500);
    // Dots start at 4.5s, one per DOT_INTERVAL_MS
    const dotTimers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      dotTimers.push(
        setTimeout(() => setDotsVisible((n) => n + 1), 4500 + i * DOT_INTERVAL_MS)
      );
    }
    // Closing rule after last dot
    const t3 = setTimeout(
      () => setRuleVisible(true),
      4500 + DOT_COUNT * DOT_INTERVAL_MS + 200
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      dotTimers.forEach(clearTimeout);
    };
  }, [triggered, reducedMotion]);

  const showAll = reducedMotion || !triggered;

  return (
    <section
      style={{ backgroundColor: "var(--bone)", paddingTop: "4rem" }}
      aria-label="22 veterans die by suicide every day"
    >
      <p className="sr-only">
        22 U.S. veterans die by suicide every day. We exist to stop this.
      </p>

      <div
        ref={containerRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4rem 2rem 2rem",
        }}
        aria-hidden="true"
      >
        {/* Opening rule */}
        <div
          style={{
            width: "100%",
            maxWidth: "480px",
            height: "1px",
            backgroundColor: "color-mix(in srgb, var(--charcoal) 15%, transparent)",
            marginBottom: "3rem",
            opacity: showAll || ruleVisible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* The number */}
        <div
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(120px, 22vw, 220px)",
            fontWeight: 700,
            color: "var(--flare)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            opacity: showAll || numberVisible ? 1 : 0,
            transform: showAll || numberVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.25s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
            userSelect: "none",
          }}
        >
          22
        </div>

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "color-mix(in srgb, var(--charcoal) 50%, transparent)",
            marginTop: "1rem",
            marginBottom: "2.5rem",
            opacity: showAll || labelVisible ? 1 : 0,
            transition: "opacity 0.5s ease",
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
        >
          {Array.from({ length: DOT_COUNT }, (_, i) => (
            <div
              key={i}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "color-mix(in srgb, var(--charcoal) 65%, transparent)",
                justifySelf: "center",
                opacity: showAll || i < dotsVisible ? 1 : 0,
                transform: showAll || i < dotsVisible ? "translateY(0)" : "translateY(-4px)",
                transition: "opacity 0.12s ease, transform 0.12s ease",
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
            backgroundColor: "color-mix(in srgb, var(--charcoal) 15%, transparent)",
            marginTop: "2rem",
            opacity: showAll || ruleVisible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>

      {/* Copy block */}
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "2rem 2rem 6rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
            lineHeight: 1.65,
            color: "var(--charcoal)",
            marginBottom: "1.5rem",
          }}
        >
          Twenty-two veterans die by suicide every day in the United States.
        </p>
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--patrol)",
            marginBottom: "1.5rem",
          }}
        >
          {`That's not a hashtag. That's a unit. A squad, lost before breakfast.`}
        </p>
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "var(--patrol)",
          }}
        >
          Beyond22 exists to close that number. Not with bracelets or push-ups
          — with infrastructure. Trained responders. Family lifelines. A legal
          framework that treats a veteran in crisis like the AMBER Alert treats a
          missing child.
        </p>
      </div>
    </section>
  );
}
