export default function Hero() {
  return (
    <div style={{ position: "relative", fontFamily: "var(--font-nunito), sans-serif" }}>
      {/* Dark hero background with rounded bottom */}
      <div
        style={{
          background: "#1F1D1B",
          borderRadius: "0 0 32px 32px",
          padding: "48px 40px 160px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
          {/* Headline */}
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "3rem",
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: "16px",
              maxWidth: "400px",
            }}
          >
            Call dibs on
            <br />
            your space.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.95rem",
              marginBottom: "24px",
            }}
          >
            Hey John, manage shared spaces with ease.
          </p>

          {/* Get Started button */}
          <button
            style={{
              background: "#FFFFFF",
              color: "#1F1D1B",
              fontSize: "0.95rem",
              fontWeight: 700,
              fontFamily: "var(--font-nunito), sans-serif",
              border: "none",
              borderRadius: "14px",
              padding: "14px 28px",
              cursor: "pointer",
              marginBottom: "10px",
              display: "block",
            }}
          >
            Get Started
          </button>

          {/* Free & Easy */}
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.75rem",
            }}
          >
            Free &amp; Easy to Use
          </p>

          {/* Character illustration placeholder */}
          <img
            src="/images/guy.png"
            alt="Person holding phone"
            style={{
              position: "absolute",
              top: "-20px",
              right: "0",
              width: "220px",
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* Middle zone — dots, trust line, and phone overlap */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "28px 40px 0 40px",
          position: "relative",
        }}
      >
        {/* Phone mockup — overlapping hero and this section */}
        <div
          style={{
            position: "absolute",
            top: "-260px",
            right: "40px",
            zIndex: 20,
          }}
        >
          <img
            src="/images/screenshots/home_in_frame.png"
            alt="EasyDibs app home screen"
            style={{
              width: "260px",
              height: "auto",
              filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.18))",
            }}
          />
        </div>

        {/* Colored dots */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#D94A4A" }} />
          <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#D4A017" }} />
          <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#4CAF50" }} />
          <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#2A7A4A" }} />
        </div>

        {/* Trust line */}
        <p
          style={{
            color: "#1A1A18",
            fontSize: "0.95rem",
            fontWeight: 700,
            marginBottom: "32px",
          }}
        >
          Trusted by thousands of users
        </p>
      </div>

      {/* Feature cards */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 40px 60px 40px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "460px",
          marginLeft: "40px",
        }}
      >
        {/* Claim Spaces */}
        <div style={cardStyle}>
          <div style={{ ...iconStyle, background: "#F0F7F3", color: "#2A7A4A" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#2A7A4A" />
              <path d="M6 10l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p style={cardTitleStyle}>Claim Spaces</p>
            <p style={cardDescStyle}>Easily reserve spaces when you need them.</p>
          </div>
        </div>

        {/* Avoid Conflicts */}
        <div style={cardStyle}>
          <div style={{ ...iconStyle, background: "#FEF9EC", color: "#D4A017" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L1 18h18L10 2z" fill="#D4A017" />
              <text x="10" y="16" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">!</text>
            </svg>
          </div>
          <div>
            <p style={cardTitleStyle}>Avoid Conflicts</p>
            <p style={cardDescStyle}>Prevent double-booking and space squabbles.</p>
          </div>
        </div>

        {/* Stay Organized */}
        <div style={cardStyle}>
          <div style={{ ...iconStyle, background: "#FEF0F0", color: "#E5484D" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="1" y="3" width="18" height="15" rx="3" fill="#E5484D" />
              <rect x="1" y="3" width="18" height="5" rx="3" fill="#C0393D" />
              <rect x="5" y="11" width="4" height="3" rx="1" fill="#fff" />
              <rect x="11" y="11" width="4" height="3" rx="1" fill="#fff" />
            </svg>
          </div>
          <div>
            <p style={cardTitleStyle}>Stay Organized</p>
            <p style={cardDescStyle}>Keep track of who&apos;s using what and when.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  background: "#FFFFFF",
  borderRadius: "16px",
  padding: "18px 20px",
  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
};

const iconStyle = {
  width: "42px",
  height: "42px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const cardTitleStyle = {
  fontSize: "0.95rem",
  fontWeight: 700,
  color: "#1A1A18",
  marginBottom: "2px",
  fontFamily: "var(--font-nunito), sans-serif",
};

const cardDescStyle = {
  fontSize: "0.8rem",
  color: "#888780",
  lineHeight: 1.4,
  fontFamily: "var(--font-nunito), sans-serif",
};
