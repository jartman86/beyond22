import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Beyond22 — Save the 22";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          backgroundColor: "#1A1C1B",
          padding: "60px 72px",
          position: "relative",
        }}
      >
        {/* Background texture accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#D94F2A",
          }}
        />

        {/* "22" watermark */}
        <div
          style={{
            position: "absolute",
            right: "40px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "360px",
            fontWeight: 700,
            color: "rgba(217, 79, 42, 0.08)",
            lineHeight: 1,
            fontFamily: "serif",
            userSelect: "none",
          }}
        >
          22
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(242, 237, 228, 0.45)",
              margin: 0,
            }}
          >
            BEYOND22 · SAVE THE 22
          </p>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "64px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#F2EDE4",
              margin: 0,
              maxWidth: "16ch",
            }}
          >
            Twenty-two.{"\n"}Every day.
          </h1>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "22px",
              lineHeight: 1.5,
              color: "rgba(242, 237, 228, 0.65)",
              margin: 0,
              maxWidth: "48ch",
            }}
          >
            Veteran-founded nonprofit building the infrastructure to stop veteran suicide.
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "36px",
            right: "72px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#D94F2A",
            }}
          />
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(242, 237, 228, 0.45)",
              margin: 0,
            }}
          >
            beyond22.org
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
