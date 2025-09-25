export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Welcome to TruCite</h1>
          <p className="hero-sub">
            The world’s first <strong>Truth OS</strong> for AI — a cross-platform,
            real-time engine for evaluating and scoring truth.
          </p>

          {/* TAGLINE STRIP WITH ICONS */}
          <p className="hero-tagline">⚡ Fast • 🔗 Transparent • 🧩 Plug &amp; Play</p>
        </div>
      </section>

      <style jsx>{`
        :root {
          --bg: #0a0a0a;
          --gold: #f2c94c;
          --text: #111;
          --muted: #444;
          --maxw: 980px;
        }
        main {
          padding: 28px 18px 80px;
        }
        .hero {
          display: flex;
          justify-content: center;
        }
        .hero-inner {
          width: 100%;
          max-width: var(--maxw);
          text-align: center;
        }
        .hero-title {
          margin: 28px 0 14px;
          font-size: clamp(36px, 6vw, 56px);
          line-height: 1.1;
          color: var(--text);
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .hero-sub {
          margin: 0 auto;
          max-width: 760px;
          font-size: clamp(18px, 2.6vw, 22px);
          line-height: 1.55;
          color: var(--muted);
        }
        .hero-sub strong {
          color: var(--text);
        }
        .hero-tagline {
          margin: 12px 0 0;
          font-size: clamp(15px, 2.2vw, 18px);
          font-weight: 600;
          color: var(--gold);
          letter-spacing: 0.3px;
        }
      `}</style>
    </main>
  );
}
