export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/trucite.png" alt="TruCite logo" />
        </div>
        <div>
          <a href="#">Home</a>
          <a href="#">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to <span style={{ color: "#f5c518" }}>TruCite</span></h1>
        <p>
          The world’s first <strong>Truth OS</strong> — a cross-platform,
          real-time engine for evaluating and scoring truth.
        </p>

        {/* Feature Chips */}
        <div className="chips">
          <div className="chip">⚡ Fast</div>
          <div className="chip">🔗 Transparent</div>
          <div className="chip">✨ Plug & Play</div>
        </div>

        {/* Input Row */}
        <div className="inputRow">
          <input type="text" placeholder="Paste a claim, answer, or snippet" />
          <button>Check Truth</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerNav">
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
          <a href="#">Suggestions</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Disclaimer</a>
        </div>
      </footer>
    </div>
  );
}
