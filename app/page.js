// app/page.js
export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="heroCard">
          <img src="/trucite.png" alt="TruCite logo" className="heroImg" />
        </div>

        <h1 className="title">
          Welcome to <b>TruCite</b>
        </h1>

        <p className="tagline">
          The world’s first <b>Truth OS</b> — a cross-platform, real-time engine for
          evaluating and scoring truth.
        </p>

        <div className="chips">
          <div className="chip">⚡ Fast</div>
          <div className="chip">🔗 Transparent</div>
          <div className="chip">✨ Plug & Play</div>
        </div>

        <div className="inputRow">
          <input placeholder="Paste a claim, answer, or snippet" />
          <button>Check Truth</button>
        </div>
      </section>

      <div className="footer">
        <nav className="footerNav">
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
          <a href="#">Suggestions</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Disclaimer</a>
        </nav>
      </div>
    </>
  );
}
