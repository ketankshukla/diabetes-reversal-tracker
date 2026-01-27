import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Diabetes Reversal Tracker";
export const size = {
  width: 600,
  height: 600,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #161b22 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo icon */}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00d4aa 0%, #00a080 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 50,
            boxShadow: "0 30px 80px rgba(0,212,170,0.4)",
          }}
        >
          <svg
            width="100"
            height="100"
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
            fontSize: 48,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          DIABETES
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "#00d4aa",
            textAlign: "center",
          }}
        >
          REVERSAL
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
