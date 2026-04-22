"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

const SESSION_KEY = "crisis-bar-dismissed";

export function CrisisBar() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDismissed = sessionStorage.getItem(SESSION_KEY) === "true";
    setDismissed(isDismissed);
  }, []);

  function handleDismiss() {
    sessionStorage.setItem(SESSION_KEY, "true");
    setDismissed(true);
  }

  if (!mounted || dismissed) return null;

  return (
    <div
      role="banner"
      aria-label="Veterans Crisis Line"
      style={{
        backgroundColor: "var(--charcoal)",
        color: "var(--bone)",
        height: "40px",
      }}
      className="flex items-center justify-between px-4 sm:px-6 z-50 relative"
    >
      <a
        href="tel:988"
        className="flex items-center gap-2 text-xs sm:text-sm flex-1 hover:opacity-80 transition-opacity"
        aria-label="Call or text 988, press 1 for Veterans Crisis Line"
        style={{ letterSpacing: "0.04em" }}
      >
        <Phone
          size={14}
          className="flare-pulse flex-shrink-0"
          style={{ color: "var(--flare)" }}
          aria-hidden="true"
        />
        <span className="label-mono" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>
          <span style={{ color: "var(--flare)", fontWeight: 500 }}>In crisis?</span>
          {" "}Call or text{" "}
          <strong>988</strong>
          , press 1 for the Veterans Crisis Line.
        </span>
      </a>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss crisis bar"
        className="ml-4 flex-shrink-0 p-1 hover:opacity-60 transition-opacity"
        style={{ color: "color-mix(in srgb, var(--bone) 50%, transparent)" }}
      >
        <X size={14} aria-hidden="true" />
      </button>
    </div>
  );
}
