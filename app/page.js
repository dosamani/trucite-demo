export default function Home() {
  return (
    <main className="content">
      {/* HERO LOGO (responsive via CSS) */}
      <img src="/logo.jpg" alt="TruCite logo" className="hero-logo" />

      <h1 className="hero-title">
        Welcome to <span className="brand-accent">TruCite</span>
      </h1>

      <p className="tagline">
        The world’s first <strong>Truth OS</strong> for AI — a cross-platform, real-time
        engine for evaluating and scoring truth.
      </p>

      <div className="cta">
        <input
          className="cta-input"
          placeholder="Paste a claim, answer, or snippet"
          aria-label="Claim input"
        />
        <button className="cta-button">Check{"\n"}Truth</button>
      </div>

      <p className="pill-row">
        <span>⚡ Fast</span> · <span>🔗 Transparent</span> · <span>✨ Plug & Play</span>
      </p>
    </main>
  );
}
