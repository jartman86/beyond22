"use client";

import { useEffect, useRef, useState } from "react";
import { HeroStill } from "./HeroStill";

export function HeroSequence() {
  const [reducedMotion, setReducedMotion] = useState(true);
  const [PlayerComponent, setPlayerComponent] = useState<React.ComponentType<{
    component: React.ComponentType;
    durationInFrames: number;
    fps: number;
    compositionWidth: number;
    compositionHeight: number;
    style?: React.CSSProperties;
    autoPlay?: boolean;
    loop?: boolean;
    controls?: boolean;
  }> | null>(null);
  const [HeroComp, setHeroComp] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!reducedMotion) {
      Promise.all([
        import("@remotion/player").then((m) => m.Player),
        import("@/remotion/HeroSequence").then((m) => m.HeroSequence),
      ]).then(([Player, HeroComp]) => {
        setPlayerComponent(() => Player as React.ComponentType<{
          component: React.ComponentType;
          durationInFrames: number;
          fps: number;
          compositionWidth: number;
          compositionHeight: number;
          style?: React.CSSProperties;
          autoPlay?: boolean;
          loop?: boolean;
          controls?: boolean;
        }>);
        setHeroComp(() => HeroComp as React.ComponentType);
      });
    }
  }, [reducedMotion]);

  if (reducedMotion || !PlayerComponent || !HeroComp) {
    return <HeroStill />;
  }

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100svh" }}>
      <PlayerComponent
        component={HeroComp}
        durationInFrames={240}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
        style={{
          width: "100%",
          height: "100svh",
          display: "block",
        }}
        autoPlay
        loop
        controls={false}
      />
    </div>
  );
}
