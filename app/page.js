export const metadata = {
  title: "TruCite",
  description:
    "Truth OS — real-time engine for evaluating and scoring truth.",
};

import "./globals.css";

/**
 * 🔗 Update these with your real destinations.
 * You said you’ll provide the doc/form links; drop them here once you have them.
 */
const LINKS = {
  faq:        "https://<PUT-URL-HERE>",
  contact:    "https://<PUT-URL-HERE>",
  suggestions:"https://<PUT-URL-HERE>",
  terms:      "https://<PUT-URL-HERE>",
  privacy:    "https://<PUT-URL-HERE>",
  disclaimer: "https://<PUT-URL-HERE>",
};

export default function Page() {
  return (
    <main>
      {/* Header */}
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="/">
            <img
              src="/logo.png"
              alt="TruCite"
              className="brand_logo"
              draggable="false"
            />
            <span className="brand_name">TruCite</span>
          </a>

          <nav className="nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="heroLogoWrap">
          {/* 👉 If you upload a transparent PNG/SVG to /public/logo.png,
              this will render with no visible outline. */}
          <img
            src="/logo.png"
            alt="TruCite logo"
            className="heroLogo"
            draggable="false"
          />
        </div>

        <h1>Welcome to TruCite</h1>
        <p className="lead">
          The world’s first <strong>Truth OS</strong> — a cross-platform,
          real-time engine for evaluating and scoring truth.
        </p>

        <div className="chips">
          <div className="chip">
            <span className="icon">⚡</span> Fast
          </div>
          <div className="chip">
            <span className="icon">🔗</span> Transparent
          </div>
          <div className="chip">
            <span className="icon">✨</span> Plug &amp; Play
          </div>
        </div>

        {/* Input + CTA */}
        <div className="inputRow">
          <input
            className="claim-input"
            type="text"
            placeholder="Paste a claim, answer, or snippet"
            aria-label="Claim input"
          />
          <button className="cta">Check Truth</button>
        </div>

        {/* Footer links */}
        <footer className="footer">
          <nav className="footer-links">
            <a href={LINKS.faq} target="_blank" rel="noreferrer">FAQ</a>
            <a href={LINKS.contact} target="_blank" rel="noreferrer">Contact Us</a>
            <a href={LINKS.suggestions} target="_blank" rel="noreferrer">Suggestions</a>
            <a href={LINKS.terms} target="_blank" rel="noreferrer">Terms</a>
            <a href={LINKS.privacy} target="_blank" rel="noreferrer">Privacy</a>
            <a href={LINKS.disclaimer} target="_blank" rel="noreferrer">Disclaimer</a>
          </nav>
        </footer>
      </section>
    </main>
  );
}
