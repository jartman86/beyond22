import type { Metadata } from "next";
import { InteriorHero } from "@/components/layout/InteriorHero";

export const metadata: Metadata = {
  title: "Crisis Intervention",
  description: "Immediate resources for veterans in active crisis. Veterans Crisis Line: 988, press 1.",
};

const resources = [
  {
    name: "Veterans Crisis Line",
    contact: "Call or text 988, press 1",
    href: "tel:988",
    hours: "Available 24/7",
    desc: "Confidential crisis support for veterans, service members, and their families.",
    priority: true,
  },
  {
    name: "Wounded Warrior Project Resource Center",
    contact: "1-888-997-2586",
    href: "tel:18889972586",
    hours: "Mon–Fri, 9am–9pm ET",
    desc: "Mental health support, peer programs, and resource navigation for combat veterans.",
    priority: false,
  },
  {
    name: "Vets4Warriors",
    contact: "1-855-838-8255",
    href: "tel:18558388255",
    hours: "Available 24/7",
    desc: "Peer support from veteran volunteers. No rank, no judgment.",
    priority: false,
  },
  {
    name: "Give an Hour",
    contact: "giveanhoour.org",
    href: "https://giveanhour.org",
    hours: "Network of licensed providers",
    desc: "Free mental health care for military and veteran communities.",
    priority: false,
  },
];

export default function CrisisInterventionPage() {
  return (
    <>
      <InteriorHero
        label="Crisis Intervention"
        headline="Get eyes on now."
        subheadline="Resources for veterans in active crisis, or for people reaching out on behalf of one."
        crisisWarning
      />
      <section style={{ backgroundColor: "var(--bone)", padding: "4rem 2rem 6rem" }}>
        <div className="max-w-7xl mx-auto">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              maxWidth: "680px",
            }}
          >
            {resources.map((r, i) => (
              <div
                key={r.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  paddingTop: "1.75rem",
                  paddingBottom: "1.75rem",
                  borderBottom: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
                  borderTop:
                    r.priority
                      ? "3px solid var(--flare)"
                      : i === 0
                      ? "none"
                      : undefined,
                }}
              >
                {r.priority && (
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: "0.5625rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--flare)",
                      margin: "0 0 0.25rem",
                    }}
                  >
                    First line of defense
                  </p>
                )}
                <h2
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--charcoal)",
                    margin: 0,
                  }}
                >
                  {r.name}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--patrol)",
                    margin: 0,
                  }}
                >
                  {r.desc}
                </p>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                  <a
                    href={r.href}
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: r.priority ? "var(--flare)" : "var(--charcoal)",
                      textDecoration: "none",
                    }}
                    className="hover:opacity-75 transition-opacity"
                    {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {r.contact}
                  </a>
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: "0.6875rem",
                      letterSpacing: "0.06em",
                      color: "var(--patrol)",
                    }}
                  >
                    {r.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.06em",
              color: "var(--patrol)",
              fontStyle: "italic",
              marginTop: "3rem",
            }}
          >
            Directory under active construction. Full resource list coming.
          </p>
        </div>
      </section>
    </>
  );
}
