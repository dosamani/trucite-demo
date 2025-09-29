export default function HomePage() {
  return (
    <section className="hero">
      <h1>
        Welcome to <span className="highlight">TruCite</span>
      </h1>
      <p>
        The world’s first <strong>Truth OS</strong> for AI — a cross-platform,
        real-time engine for evaluating and scoring truth.
      </p>

      <div className="checker">
        <input
          type="text"
          placeholder="Paste a claim, answer, or snippet"
        />
        <button>Check Truth</button>
      </div>

      <div className="features">
        <span>⚡ Fast</span> · <span>🔗 Transparent</span> ·{" "}
        <span>✨ Plug & Play</span>
      </div>
    </section>
  );
}
