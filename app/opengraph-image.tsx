import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #f5f9fc 0%, #ffffff 100%)",
          color: "#0b1625",
          fontFamily: "Inter, system-ui, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -80,
            top: -90,
            width: 360,
            height: 360,
            borderRadius: "999px",
            background: "rgba(24,165,88,0.18)"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -80,
            width: 320,
            height: 320,
            borderRadius: "999px",
            background: "rgba(245,191,47,0.22)"
          }}
        />
        <div
          style={{
            margin: "72px",
            width: 1056,
            height: 486,
            borderRadius: 30,
            border: "1px solid rgba(15,79,168,0.18)",
            background: "white",
            padding: "52px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 54,
                fontWeight: 700,
                letterSpacing: "-0.02em"
              }}
            >
              PT CHEM ENERGY SEMESTA
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                fontSize: 33,
                color: "#0f4fa8",
                fontWeight: 600
              }}
            >
              Solusi Lingkungan, Migas, dan Industri
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 30,
                fontSize: 30,
                color: "rgba(11,22,37,0.78)",
                fontWeight: 500
              }}
            >
              Konsultasi PROPER • HAZOP Study Indonesia • Distributor Gas Detector
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 430,
              height: 62,
              borderRadius: 999,
              background: "#0f4fa8",
              color: "white",
              fontSize: 26,
              fontWeight: 600
            }}
          >
            Premium Corporate Solutions
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
