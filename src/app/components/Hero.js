export default function Hero() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Dark hero top */}
      <div
        style={{
          background: "#1F1D1B",
          padding: "60px 60px 180px 60px",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "40px",
          }}
        >
          {/* Left content */}
          <div style={{ flex: 1, paddingTop: "20px" }}>
            <h1
              style={{
                color: "#FFFFFF",
                fontSize: "3.5rem",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "20px",
                fontFamily: "var(--font-nunito), sans-serif",
              }}
            >
              Call dibs on
              <br />
              your space.
            </h1>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "1rem",
                opacity: 0.7,
                marginBottom: "28px",
                fontFamily: "var(--font-nunito), sans-serif",
              }}
            >
              Hey John, manage shared spaces with ease.
            </p>
            <button
              style={{
                backgroundColor: "#FFFFFF",
                color: "#1F1D1B",
                fontSize: "1rem",
                fontWeight: 700,
                border: "none",
                borderRadius: "12px",
                padding: "14px 32px",
                cursor: "pointer",
                fontFamily: "var(--font-nunito), sans-serif",
                marginBottom: "12px",
              }}
            >
              Get Started
            </button>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "0.8rem",
                opacity: 0.5,
                fontFamily: "var(--font-nunito), sans-serif",
                marginBottom: "32px",
              }}
            >
              Free &amp; Easy to Use
            </p>
            {/* Colored dots */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#E5484D" }} />
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#D4A017" }} />
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#2A7A4A" }} />
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#1a5c35" }} />
            </div>
            <p
              style={{
                color: "#1A1A18",
                fontSize: "0.95rem",
                fontWeight: 700,
                fontFamily: "var(--font-nunito), sans-serif",
              }}
            >
              Trusted by thousands of users
            </p>
          </div>

          {/* Right — phone mockup overlapping */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
              minHeight: "500px",
            }}
          >
            <img
              src="/images/screenshots/home_in_frame.png"
              alt="EasyDibs app home screen"
              style={{
                position: "absolute",
                top: "0",
                width: "300px",
                height: "auto",
                transform: "rotate(2deg)",
                zIndex: 10,
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
              }}
            />
          </div>
        </div>
      </div>

      {/* Light section underneath — the hero bg transitions here */}
      <div
        style={{
          background: "#F2F0EC",
          padding: "120px 60px 60px 60px",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          marginTop: "-120px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Features */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "480px",
            }}
          >
            {/* Claim Spaces */}
            <div style={featureCardStyle}>
              <div style={{ ...iconCircleStyle, background: "#F0F7F3" }}>
                <span style={{ fontSize: "1.2rem" }}>&#10003;</span>
              </div>
              <div>
                <p style={featureTitleStyle}>Claim Spaces</p>
                <p style={featureDescStyle}>
                  Easily reserve spaces when you need them.
                </p>
              </div>
            </div>

            {/* Avoid Conflicts */}
            <div style={featureCardStyle}>
              <div style={{ ...iconCircleStyle, background: "#FEF9EC" }}>
                <span style={{ fontSize: "1.2rem", color: "#D4A017" }}>&#9888;</span>
              </div>
              <div>
                <p style={featureTitleStyle}>Avoid Conflicts</p>
                <p style={featureDescStyle}>
                  Prevent double-booking and space squabbles.
                </p>
              </div>
            </div>

            {/* Stay Organized */}
            <div style={featureCardStyle}>
              <div style={{ ...iconCircleStyle, background: "#FEF0F0" }}>
                <span style={{ fontSize: "1.2rem", color: "#E5484D" }}>&#128197;</span>
              </div>
              <div>
                <p style={featureTitleStyle}>Stay Organized</p>
                <p style={featureDescStyle}>
                  Keep track of who&apos;s using what and when.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const featureCardStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",
  background: "#FFFFFF",
  borderRadius: "16px",
  padding: "20px 24px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const iconCircleStyle = {
  width: "44px",
  height: "44px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const featureTitleStyle = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#1A1A18",
  marginBottom: "4px",
  fontFamily: "var(--font-nunito), sans-serif",
};

const featureDescStyle = {
  fontSize: "0.85rem",
  color: "#888780",
  fontFamily: "var(--font-nunito), sans-serif",
  lineHeight: 1.4,
};
