import Image from "next/image";

export default function Hero() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #1F1D1B, #3A3632)",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "80px 60px",
        gap: "60px",
      }}
    >
      {/* Left column */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "20px",
            opacity: 0.7,
            fontFamily: "var(--font-nunito), sans-serif",
          }}
        >
          for roommates and households
        </p>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "3rem",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "24px",
            fontFamily: "var(--font-nunito), sans-serif",
          }}
        >
          No texts. No drama.
          <br />
          Just dibs.
        </h1>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: "1.1rem",
            opacity: 0.75,
            marginBottom: "40px",
            maxWidth: "480px",
            lineHeight: 1.6,
            fontFamily: "var(--font-nunito), sans-serif",
          }}
        >
          Claim a space without starting a conversation. Everyone sees it.
          Nobody has to ask.
        </p>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          <button
            style={{
              color: "#FFFFFF",
              fontSize: "0.875rem",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "9999px",
              padding: "12px 24px",
              background: "transparent",
              cursor: "pointer",
              fontFamily: "var(--font-nunito), sans-serif",
            }}
          >
            App Store
          </button>
          <button
            style={{
              color: "#FFFFFF",
              fontSize: "0.875rem",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "9999px",
              padding: "12px 24px",
              background: "transparent",
              cursor: "pointer",
              fontFamily: "var(--font-nunito), sans-serif",
            }}
          >
            Google Play
          </button>
        </div>
      </div>

      {/* Right column — phone mockup */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "270px",
            height: "580px",
            background: "#111111",
            border: "2px solid rgba(255,255,255,0.15)",
            borderRadius: "2.8rem",
            overflow: "hidden",
            boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          }}
        >
          {/* Notch */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "12px",
              paddingBottom: "4px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "20px",
                background: "#000000",
                borderRadius: "9999px",
              }}
            />
          </div>
          {/* Screen */}
          <div
            style={{
              position: "relative",
              flex: 1,
              margin: "0 12px 12px 12px",
              borderRadius: "2.2rem",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/screenshots/home.png"
              alt="EasyDibs app home screen"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="270px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
