import Link from "next/link";
import { board, type BoardMember } from "@/content/board";

function BoardCard({ member }: { member: BoardMember }) {
  if (!member.filled) {
    return (
      <article
        style={{
          border: "1.5px dashed color-mix(in srgb, var(--patrol) 40%, transparent)",
          borderRadius: "3px",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          minHeight: "220px",
        }}
        aria-label={`Open board seat: ${member.position}`}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.625rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              marginBottom: "0.5rem",
            }}
          >
            Seat Open
          </p>
          <p
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "var(--patrol)",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {member.position}
          </p>
        </div>
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "color-mix(in srgb, var(--patrol) 70%, transparent)",
            flex: 1,
            margin: 0,
          }}
        >
          This seat is open. Beyond22 is looking for the right person — not a
          figurehead. A working board member who leads this function.
        </p>
        <Link
          href="/about#contact"
          style={{
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "var(--patrol)",
            textDecoration: "none",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            display: "inline-block",
          }}
          className="hover:opacity-70 transition-opacity"
        >
          Nominate someone →
        </Link>
      </article>
    );
  }

  return (
    <article
      style={{
        backgroundColor: "var(--paper)",
        border: "1px solid color-mix(in srgb, var(--charcoal) 8%, transparent)",
        borderRadius: "3px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        minHeight: "220px",
      }}
      aria-label={`${member.name}, ${member.position}`}
    >
      {member.headshot && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={member.headshot}
          alt={`${member.name}`}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            objectFit: "cover",
            filter: "grayscale(30%)",
          }}
        />
      )}
      <div>
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "0.625rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--patrol)",
            marginBottom: "0.25rem",
          }}
        >
          {member.position}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "1.1875rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--charcoal)",
            margin: 0,
          }}
        >
          {member.name}
        </h3>
      </div>
      {member.bio && (
        <p
          style={{
            fontFamily: "var(--font-ibm-plex-sans), sans-serif",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "var(--patrol)",
            flex: 1,
            margin: 0,
          }}
        >
          {member.bio}
        </p>
      )}
      {member.why && (
        <blockquote
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "0.9375rem",
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "var(--forest)",
            borderLeft: "2px solid var(--brass)",
            paddingLeft: "0.875rem",
            margin: 0,
          }}
        >
          &ldquo;{member.why}&rdquo;
        </blockquote>
      )}
    </article>
  );
}

export function BoardGrid() {
  return (
    <section
      style={{
        backgroundColor: "var(--bone)",
        padding: "7rem 2rem",
        borderTop: "1px solid color-mix(in srgb, var(--charcoal) 10%, transparent)",
      }}
      aria-label="Board of Directors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--patrol)",
              marginBottom: "1rem",
            }}
          >
            Leadership
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              margin: "0 0 1rem",
            }}
          >
            The people answering the call.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-ibm-plex-sans), sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--patrol)",
              maxWidth: "58ch",
              margin: 0,
            }}
          >
            Beyond22 is governed by a volunteer board of veterans, family
            members, and community advocates. Some seats are open. If you&apos;re
            reading this and thinking &ldquo;that&apos;s me&rdquo; — it probably is.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {board.map((member) => (
            <BoardCard
              key={member.position}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
