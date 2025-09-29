export default function Home() {
  return (
    <main className="hero">
      {/* centered logo */}
      <img className="logo" src="/logo.jpg" alt="TruCite Logo" />

      <h1 className="title">
        Welcome to <span>TruCite</span>
      </h1>

      <p className="tagline">
        The world’s first <strong>Truth OS</strong> for AI — a cross-platform,
        real-time engine for evaluating and scoring truth.
      </p>

      {/* claim input + CTA */}
      <form
        className="checker"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: wire up to mock/API
        }}
      >
        <input
          className="claim"
          type="text"
          placeholder="Paste a claim, answer, or snippet"
          aria-label="Claim text"
        />
        <button className="cta" type="submit">Check Truth</button>
      </form>

      <p className="value">⚡ Fast · 🔗 Transparent · ✨ Plug & Play</p>

      {/* page styles */}
      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(to bottom, #000, #111);
          color: #fff;
          text-align: center;
          padding: 3rem 1rem 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo {
          width: 14vw;
          max-width: 72px;
          min-width: 44px;
          height: auto;
          object-fit: contain;
          margin-bottom: 0.75rem;
        }

        .title {
          font-weight: 800;
          font-size: clamp(1.9rem, 5.5vw, 3rem);
          margin: 0.2rem 0 0.75rem;
          line-height: 1.15;
        }
        .title span { color: #f2c94c; }

        .tagline {
          max-width: 680px;
          margin: 0 auto 1.5rem;
          font-size: clamp(1rem, 2.6vw, 1.25rem);
          line-height: 1.6;
          color: #eaeaea;
          padding: 0 0.25rem;
        }

        .checker {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 0;
          margin: 0.75rem 0 1.75rem;
          width: 100%;
          max-width: 720px;
          padding: 0 1rem;
        }

        .claim {
          flex: 1;
          border: none;
          outline: none;
          background: #2b2b2b;
          color: #fff;
          padding: 0.9rem 1rem;
          font-size: 1rem;
          border-radius: 10px 0 0 10px;
          min-width: 0; /* prevent overflow */
        }

        .cta {
          border: none;
          cursor: pointer;
          padding: 0 1.15rem;
          font-weight: 700;
          font-size: 1rem;
          color: #1a1a1a;
          background: linear-gradient(90deg, #f2c94c, #f2994a);
          border-radius: 0 10px 10px 0;
          white-space: nowrap;
        }

        .value {
          color: #d7d7d7;
          font-weight: 500;
          font-size: clamp(0.95rem, 2.2vw, 1.05rem);
          margin-top: 0.5rem;
        }

        /* Small phones: stack the input and button */
        @media (max-width: 480px) {
          .hero { padding-top: 2.25rem; }
          .checker {
            flex-direction: column;
            gap: 0.6rem;
            max-width: 520px;
            padding: 0 1rem;
          }
          .claim { border-radius: 10px; }
          .cta {
            border-radius: 10px;
            padding: 0.9rem 1rem;
          }
        }
      `}</style>
    </main>
  );
}
