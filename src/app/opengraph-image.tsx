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
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* D - Red, top-left */}
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 80,
            fontSize: 180,
            fontWeight: 900,
            color: "#e53935",
          }}
        >
          D
        </div>

        {/* R - Blue, center */}
        <div
          style={{
            position: "absolute",
            top: 210,
            left: 220,
            fontSize: 180,
            fontWeight: 900,
            color: "#1e88e5",
          }}
        >
          R
        </div>

        {/* T - Green, bottom-right */}
        <div
          style={{
            position: "absolute",
            top: 320,
            left: 360,
            fontSize: 180,
            fontWeight: 900,
            color: "#00c853",
          }}
        >
          T
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
