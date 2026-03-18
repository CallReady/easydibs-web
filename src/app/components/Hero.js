export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Call dibs on<br />your space<span className="accent">.</span></h1>
          <p className="hero-sub">Hey John, manage shared spaces with ease.</p>
          <button className="btn-start">Get Started</button>
          <p className="hero-free">Free &amp; Easy to Use</p>
        </div>
        <div className="hero-illustration">
          <svg className="person-svg" viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="45" y="100" width="70" height="80" rx="16" fill="#3a7d5a" />
            <ellipse cx="80" cy="70" rx="30" ry="32" fill="#f5c89a" />
            <path d="M52 58 Q55 30 80 32 Q105 30 108 58 Q100 42 80 44 Q60 42 52 58Z" fill="#5a3a1a" />
            <ellipse cx="70" cy="68" rx="3.5" ry="4" fill="#2a1a0a" />
            <ellipse cx="90" cy="68" rx="3.5" ry="4" fill="#2a1a0a" />
            <path d="M70 82 Q80 90 90 82" stroke="#c07050" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <rect x="20" y="106" width="26" height="14" rx="7" fill="#3a7d5a" transform="rotate(-15 20 106)" />
            <rect x="114" y="100" width="26" height="14" rx="7" fill="#3a7d5a" transform="rotate(20 114 100)" />
            <rect x="110" y="112" width="18" height="28" rx="4" fill="#222" transform="rotate(20 114 100)" />
            <rect x="112" y="115" width="14" height="20" rx="2" fill="#4af" transform="rotate(20 114 100)" />
            <rect x="54" y="175" width="22" height="40" rx="10" fill="#2a5040" />
            <rect x="84" y="175" width="22" height="40" rx="10" fill="#2a5040" />
            <ellipse cx="65" cy="214" rx="14" ry="7" fill="#1a1a1a" />
            <ellipse cx="95" cy="214" rx="14" ry="7" fill="#1a1a1a" />
          </svg>
        </div>
      </section>

      {/* PHONE MOCKUP */}
      <section className="phone-section">
        <div className="phone-wrap">
          <div className="phone-header">
            <span className="app-logo">easy<span className="logo-accent">dibs</span></span>
          </div>
          <div className="phone-greeting">
            <h3>Hey John,</h3>
            <p>Manage shared spaces with ease.</p>
          </div>
          <div className="space-list">
            <div className="space-item">
              <div className="space-icon icon-washer">🫧</div>
              <div className="space-info">
                <div className="space-name">Washer</div>
                <div className="space-status-text">John until 3:24 PM</div>
              </div>
              <div className="status-dot dot-yellow"></div>
            </div>
            <div className="space-item">
              <div className="space-icon icon-dryer">🌀</div>
              <div className="space-info">
                <div className="space-name">Dryer</div>
                <div className="space-status-text">Free until 3:00 PM</div>
              </div>
              <div className="status-dot dot-green"></div>
            </div>
            <div className="space-item">
              <div className="space-icon icon-kitchen">🍳</div>
              <div className="space-info">
                <div className="space-name">Kitchen</div>
                <div className="space-status-text available">Available</div>
              </div>
              <div className="status-dot dot-green"></div>
            </div>
            <div className="space-item">
              <div className="space-icon icon-living">🛋️</div>
              <div className="space-info">
                <div className="space-name">Living Room</div>
                <div className="space-status-text available">Available</div>
              </div>
              <div className="status-dot dot-green"></div>
            </div>
            <div className="space-item">
              <div className="space-icon icon-tub">🛁</div>
              <div className="space-info">
                <div className="space-name">Hot Tub</div>
                <div className="space-status-text available">Available</div>
              </div>
              <div className="status-dot dot-green"></div>
            </div>
          </div>
          <div className="phone-footer">
            <button className="btn-easy">Easy grille</button>
          </div>
        </div>
      </section>

      {/* COLOR DOTS */}
      <div className="color-dots">
        <div className="cdot" style={{ background: "#e05252" }}></div>
        <div className="cdot" style={{ background: "#f4c842" }}></div>
        <div className="cdot" style={{ background: "#2d6a4f" }}></div>
        <div className="cdot" style={{ background: "#52b788" }}></div>
      </div>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <p>Trusted by thousands of users</p>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="feature-item">
          <div className="feature-icon fi-green">✔️</div>
          <div className="feature-text">
            <h4>Claim Spaces</h4>
            <p>Easily reserve spaces when you need them.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon fi-yellow">⚠️</div>
          <div className="feature-text">
            <h4>Avoid Conflicts</h4>
            <p>Prevent double-booking and space squabbles.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon fi-red">📅</div>
          <div className="feature-text">
            <h4>Stay Organized</h4>
            <p>Keep track of who&apos;s using what and when.</p>
          </div>
        </div>
      </div>

      {/* MAP PLACEHOLDER */}
      <div className="map-section">
        <div className="map-grid"></div>
        <div className="map-dot" style={{ top: "40%", left: "35%" }}></div>
        <div className="map-dot" style={{ top: "55%", left: "60%" }}></div>
        <div className="map-dot" style={{ top: "30%", left: "55%" }}></div>
        <div className="map-placeholder">Map area</div>
      </div>
    </>
  );
}
