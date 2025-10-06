// app/page.js
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="heroLogoWrap">
          {/* NOTE: this file must exist at /public/trucite.png */}
          <img src="/trucite.png" alt="TruCite logo" className="heroLogo" />
        </div>

        <h1 className="h1">Welcome to TruCite</h1>
        <p className="lead">
          The world’s first <strong>Truth OS</strong> — a cross-platform, real-time engine for evaluating and scoring truth.
        </p>

        <div className="chips">
          <span className="chip"><span className="chip_icon">⚡</span> Fast</span>
          <span className="chip"><span className="chip_icon">🔗</span> Transparent</span>
          <span className="chip"><span className="chip_icon">✨</span> Plug &amp; Play</span>
        </div>

        <div className="inputRow">
          <input type="text" placeholder="Paste a claim, answer, or snippet" />
          <button className="cta">Check Truth</button>
        </div>
      </section>

      <footer className="site-footer">
        <nav className="footer-nav">
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact Us</a>
          <a href="/suggestions">Suggestions</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/disclaimer">Disclaimer</a>
        </nav>
      </footer>
    </>
  );
}
