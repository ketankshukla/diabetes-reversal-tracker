import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Diabetes Reversal Tracker";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(0,212,170,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(79,172,254,0.08)",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00d4aa 0%, #00a080 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
            boxShadow: "0 20px 60px rgba(0,212,170,0.3)",
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 12 10 16 18 8" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            background: "linear-gradient(90deg, #00d4aa, #4facfe)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          DIABETES REVERSAL
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            background: "linear-gradient(90deg, #00d4aa, #4facfe)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 30,
          }}
        >
          TRACKER
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#888888",
            marginBottom: 40,
          }}
        >
          Track your journey to health freedom
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#00d4aa",
            letterSpacing: "0.1em",
          }}
        >
          ZERO CARBS • 18:6 FASTING • METFORMIN FREEDOM
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
