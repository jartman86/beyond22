import type { Metadata } from "next";
import Link from "next/link";
import { LegislatorContactTool } from "@/components/sections/LegislatorContactTool";
import { BattleBuddyForm } from "@/components/sections/BattleBuddyForm";

export const metadata: Metadata = {
  title: "Patriot Alert",
  description:
    "Patriot Alert is a veteran-specific emergency alert protocol modeled on AMBER Alert. Learn how it works, apply as a Battle Buddy, or contact your legislator.",
};

const steps = [
  "Call received (family, neighbor, the veteran themselves)",
  "Dispatcher identifies veteran status and flags the case",
  "Law enforcement responds under standard protocol",
  "Patriot Alert activated if criteria met",
  "Reverse 911, social media, local media, LEO bulletins push alert",
  "Battle Buddies deploy on standby or in direct support",
  "Safe recovery. Warm handoff to clinical care.",
];

const phases = [
  {
    label: "Phase 1",
    name: "County Pilot",
    location: "Washington State",
    status: "In progress",
    active: true,
  },
  {
    label: "Phase 2",
    name: "State Legislation",
    location: "",
    status: "In development",
    active: false,
  },
  {
    label: "Phase 3",
    name: "Federal Model",
    location: "",
    status: "Future",
    active: false,
  },
];

export default function PatriotAlertPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--charcoal)",
          color: "var(--bone)",
          padding: "8rem 2rem 6rem",
          borderBottom: `3px solid var(--flare)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--flare)",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--flare)",
              }}
              aria-hidden="true"
            />
            The Patriot Alert
          </p>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(2.25rem, 6vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--bone)",
              maxWidth: "22ch",
              marginBottom: "2rem",
            }}
          >
            Like AMBER Alert. But for the ones who came home different.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "color-mix(in srgb, var(--bone) 75%, transparent)",
              maxWidth: "58ch",
              margin: 0,
            }}
          >
            Every day, 22 U.S. veterans die by suicide. Many of them are missing
            — from family, from community, from themselves — in the hours before
            they&apos;re lost permanently. Patriot Alert is the system that closes
            that window.
          </p>
        </div>
      </section>

      {/* What It Is */}
      <section
        style={{
          backgroundColor: "var(--paper)",
          padding: "6rem 2rem",
        }}
        aria-label="What Patriot Alert Is"
      >
        <div className="max-w-7xl mx-auto">
          <div style={{ maxWidth: "780px" }}>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "0.6875rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--patrol)",
                marginBottom: "1.5rem",
              }}
            >
              What It Is
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "var(--charcoal)",
                marginBottom: "1.5rem",
              }}
            >
              A county-level emergency alert protocol. Activated when a veteran
              is missing under concerning circumstances, in verified mental health
              crisis, or at credible risk of self-harm. Once activated, the alert
              deploys three assets in coordinated response:
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              role="list"
            >
              {[
                {
                  n: "01",
                  title: "Law Enforcement",
                  desc: "Maintains incident command, ensures scene safety.",
                },
                {
                  n: "02",
                  title: "Trained Veteran Peer Responders (Battle Buddies)",
                  desc: "Provide de-escalation, cultural fluency, and trust.",
                },
                {
                  n: "03",
                  title: "Integrated Support Services",
                  desc: "VA, Vet Centers, and behavioral health on warm-handoff standby.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  role="listitem"
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    paddingTop: "1rem",
                    borderTop:
                      "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      fontSize: "0.625rem",
                      letterSpacing: "0.1em",
                      color: "var(--flare)",
                      flexShrink: 0,
                      paddingTop: "0.2rem",
                    }}
                  >
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-fraunces), serif",
                        fontSize: "1.0625rem",
                        fontWeight: 600,
                        color: "var(--charcoal)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: 1.65,
                        color: "var(--patrol)",
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Gets Activated */}
      <section
        style={{
          backgroundColor: "var(--bone)",
          padding: "6rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
        aria-label="How Patriot Alert Gets Activated"
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              marginBottom: "1.5rem",
            }}
          >
            Activation Protocol
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2.125rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              marginBottom: "3rem",
            }}
          >
            How It Gets Activated
          </h2>
          <ol
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              listStyle: "none",
              padding: 0,
              margin: 0,
              maxWidth: "640px",
            }}
          >
            {steps.map((step, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  paddingTop: "1.25rem",
                  paddingBottom: "1.25rem",
                  borderBottom:
                    "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.1em",
                    color: "var(--flare)",
                    flexShrink: 0,
                    paddingTop: "0.15rem",
                    minWidth: "2rem",
                  }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: "var(--charcoal)",
                    margin: 0,
                  }}
                >
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Battle Buddy Qualifications */}
      <section
        style={{
          backgroundColor: "var(--forest)",
          color: "var(--bone)",
          padding: "6rem 2rem",
        }}
        aria-label="Battle Buddy Qualifications"
      >
        <div className="max-w-7xl mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "4rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "color-mix(in srgb, var(--bone) 50%, transparent)",
                  marginBottom: "1.5rem",
                }}
              >
                Who Qualifies
              </p>
              <ul
                style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}
              >
                {[
                  "Honorably discharged veteran (preferred)",
                  "Passes background check",
                  "Completes required certifications (CIT, ASIST, trauma-informed care, LEO coordination)",
                  "Demonstrates mental stability and leadership",
                  "Strong communication skills",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "color-mix(in srgb, var(--bone) 80%, transparent)",
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "var(--brass)", flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "color-mix(in srgb, var(--bone) 50%, transparent)",
                  marginBottom: "1.5rem",
                }}
              >
                What Battle Buddies Do NOT Do
              </p>
              <ul
                style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}
              >
                {[
                  "Do not carry weapons",
                  "Do not perform law enforcement duties",
                  "Do not engage in physical intervention",
                  "Operate under incident commander direction, period.",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "color-mix(in srgb, var(--bone) 80%, transparent)",
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "var(--flare)", flexShrink: 0 }}>×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Phase tracker */}
      <section
        style={{
          backgroundColor: "var(--bone)",
          padding: "6rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
        aria-label="Phase Progress"
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              marginBottom: "2rem",
            }}
          >
            Where We Are
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5px",
              backgroundColor: "color-mix(in srgb, var(--charcoal) 10%, transparent)",
            }}
          >
            {phases.map((phase) => (
              <div
                key={phase.label}
                style={{
                  backgroundColor: "var(--bone)",
                  padding: "2rem",
                  borderTop: phase.active ? "3px solid var(--flare)" : "3px solid transparent",
                }}
                aria-current={phase.active ? "step" : undefined}
              >
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "0.625rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: phase.active ? "var(--flare)" : "var(--patrol)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {phase.label} {phase.active && "— Active"}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--charcoal)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {phase.name}
                </p>
                {phase.location && (
                  <p
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--patrol)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {phase.location}
                  </p>
                )}
                <p
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.06em",
                    color: phase.active
                      ? "var(--flare)"
                      : "color-mix(in srgb, var(--patrol) 65%, transparent)",
                  }}
                >
                  {phase.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three asks */}
      <section
        style={{
          backgroundColor: "var(--paper)",
          padding: "6rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
        aria-label="How to Help"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              marginBottom: "3rem",
            }}
          >
            How to stand up for it
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "3rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "0.625rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--patrol)",
                  marginBottom: "0.75rem",
                }}
              >
                For Veterans
              </p>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--charcoal)",
                  marginBottom: "1.25rem",
                }}
              >
                If you&apos;re honorably discharged, mentally solid, and willing to train
                hard for a role that may someday keep another veteran breathing
                — apply as a Battle Buddy.
              </p>
              <Link
                href="#volunteer"
                style={{
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--flare)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
                className="hover:opacity-75 transition-opacity"
              >
                Apply →
              </Link>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "0.625rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--patrol)",
                  marginBottom: "0.75rem",
                }}
              >
                For Everyone
              </p>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--charcoal)",
                  marginBottom: "1.25rem",
                }}
              >
                Patriot Alert becomes real when voters demand it. We drafted the
                letter. You sign and send.
              </p>
              <Link
                href="#advocate"
                style={{
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--flare)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
                className="hover:opacity-75 transition-opacity"
              >
                Contact your legislator →
              </Link>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  fontSize: "0.625rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--patrol)",
                  marginBottom: "0.75rem",
                }}
              >
                For Funders
              </p>
              <p
                style={{
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--charcoal)",
                  marginBottom: "1.25rem",
                }}
              >
                The pilot costs ~$100,000. Foundations, corporate sponsors, and
                individual donors fuel every phase.
              </p>
              <Link
                href="/donate"
                style={{
                  fontFamily: "var(--font-ibm-plex-sans), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--flare)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
                className="hover:opacity-75 transition-opacity"
              >
                Donate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Battle Buddy Application */}
      <section
        id="volunteer"
        style={{
          backgroundColor: "var(--bone)",
          padding: "6rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
        aria-label="Battle Buddy Application"
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              marginBottom: "1.5rem",
            }}
          >
            Apply
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              marginBottom: "0.75rem",
            }}
          >
            Apply to be a Battle Buddy
          </h2>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--patrol)",
              maxWidth: "58ch",
              marginBottom: "3rem",
            }}
          >
            This is not a volunteer sign-up. It&apos;s an application for a trained
            crisis response role. Expect a background check, a vetting
            conversation, and ~40 hours of certification training before your
            first deployment.
          </p>
          <BattleBuddyForm />
        </div>
      </section>

      {/* Legislator Contact Tool */}
      <section
        id="advocate"
        style={{
          backgroundColor: "var(--paper)",
          padding: "6rem 2rem",
          borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
        }}
        aria-label="Contact Your Legislator"
      >
        <div className="max-w-7xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              marginBottom: "1.5rem",
            }}
          >
            Advocate
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              marginBottom: "0.75rem",
            }}
          >
            Send the letter.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--patrol)",
              maxWidth: "58ch",
              marginBottom: "3rem",
            }}
          >
            We wrote the letter. Enter your ZIP. It finds your rep. You review,
            personalize if you want, and send.
          </p>
          <LegislatorContactTool />
        </div>
      </section>
    </>
  );
}
