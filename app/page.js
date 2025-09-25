// app/page.js
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <img
            src="/logo.jpg"           // uses the file you uploaded to /public
            alt="TruCite Logo"
            className="hero-logo"
          />
          <h1 className="hero-title">Truth OS for AI</h1>
          <p className="hero-sub">
            A cross-platform, real-time engine for evaluating and scoring truth.
          </p>

          <div className="hero-cta">
            <a href="#features" className="btn btn-primary">Explore Features</a>
            <a href="/about" className="btn btn-ghost">Learn More</a>
          </div>
        </div>
      </section>

{/* BENEFIT ICONS (Carrd-style strip) */}
      <section className="benefits">
        <div className="container benefits-grid">
          <div className="benefit">
            <span className="emoji">⚡</span>
            <div>
              <h4>Live Scoring</h4>
              <p>Stream claims; get truth scores in milliseconds.</p>
            </div>
          </div>
          <div className="benefit">
            <span className="emoji">🔗</span>
            <div>
              <h4>Evidence-First</h4>
              <p>Transparent citations with reasoning trails.</p>
            </div>
          </div>
          <div className="benefit">
            <span className="emoji">🧩</span>
            <div>
              <h4>Plug & Play</h4>
              <p>Simple APIs & SDKs for apps and agents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="section-title">Why TruCite</h2>
          <div className="grid">
            <div className="card">
              <h3>Real-Time Scoring</h3>
              <p>Stream, evaluate, and rank claims on the fly with low latency.</p>
            </div>
            <div className="card">
              <h3>Cross-Platform</h3>
              <p>SDKs & APIs to plug TruCite into apps, agents, and workflows.</p>
            </div>
            <div className="card">
              <h3>Transparent</h3>
              <p>Evidence-first outputs with clear citations and reasoning trails.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta">
        <div className="container cta-inner">
          <h3>Ready to try TruCite?</h3>
          <a href="/about" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} TruCite</span>
          <nav className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </div>
      </footer>

      {/* PAGE STYLES (scoped) */}
      <style jsx>{`
        :root {
          --bg: #0a0a0a;
          --surface: #0d0d0d;
          --text: #f6f6f6;
          --muted: #cfcfcf;
          --gold: #f5c518; /* brand gold */
          --gold-700: #d3a80e;
          --border: rgba(255,255,255,0.08);
          --shadow: 0 10px 30px rgba(0,0,0,0.35);
          --radius: 16px;
          --maxw: 1100px;
        }

        /* HERO */
        .hero {
          position: relative;
          min-height: 72vh;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, #000 0%, #0b0b0b 60%, #101010 100%);
          border-bottom: 2px solid var(--gold);
        }
        .hero-inner {
          text-align: center;
          padding: 80px 20px 60px;
          max-width: 820px;
        }
        .hero-logo {
          width: 72px;
          height: 72px;
          object-fit: contain;
          margin: 0 auto 18px;
          filter: drop-shadow(0 6px 18px rgba(0,0,0,0.45));
        }
        .hero-title {
          font-size: clamp(36px, 6vw, 64px);
          line-height: 1.05;
          margin: 0 0 12px;
          color: var(--text);
          letter-spacing: -0.02em;
        }
        .hero-sub {
          color: var(--muted);
          font-size: clamp(16px, 2.6vw, 20px);
          margin: 0 auto 28px;
          max-width: 720px;
        }
        .hero-cta {
          display: inline-flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* SHARED */
        .container { width: 100%; max-width: var(--maxw); margin: 0 auto; padding: 0 20px; }
        .section { background:#0b0b0b; padding: 56px 0; }
        .section-title {
          color: var(--text);
          font-size: clamp(22px, 4vw, 32px);
          margin: 0 0 22px;
          text-align: center;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        @media (max-width: 880px) { .grid { grid-template-columns: 1fr; } }

        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px;
          box-shadow: var(--shadow);
        }
        .card h3 {
          margin: 0 0 6px;
          color: var(--gold);
          font-size: 18px;
        }
        .card p { color: var(--muted); margin: 0; }

        /* CTA STRIP */
        .cta { background: #111; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .cta-inner {
          display: flex;
          gap: 16px;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          flex-wrap: wrap;
        }
        .cta h3 { color: var(--text); margin: 0; font-size: 20px; }

        /* FOOTER */
        .footer { background: #0a0a0a; }
        .footer-inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 0; color: var(--muted);
          border-top: 1px solid var(--border);
        }
        .footer-links { display: flex; gap: 16px; }
        .footer a { color: var(--muted); text-decoration: none; }
        .footer a:hover { color: var(--text); }

        /* BUTTONS */
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          height: 42px; padding: 0 18px;
          border-radius: 999px; text-decoration: none;
          font-weight: 600; letter-spacing: 0.2px;
          transition: transform 0.06s ease, box-shadow 0.2s ease, background 0.2s ease;
          box-shadow: var(--shadow);
        }
        .btn:hover { transform: translateY(-1px); }
        .btn:active { transform: translateY(0); }

        .btn-primary {
          background: var(--gold); color: #1a1a1a;
          border: 1px solid rgba(0,0,0,0.2);
        }
        .btn-primary:hover { background: var(--gold-700); }

        .btn-ghost {
          background: transparent; color: var(--text);
          border: 1px solid var(--border);
        }
        .btn-lg { height: 46px; padding: 0 22px; }

        /* BENEFITS */
.benefits {
  background:#0e0e0e; border-top:1px solid var(--border); border-bottom:1px solid var(--border);
}
.benefits-grid {
  display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:18px;
  padding: 20px 0;
}
@media (max-width:880px){ .benefits-grid { grid-template-columns: 1fr; } }

.benefit {
  display:flex; gap:14px; align-items:center;
  background:#0c0c0c; border:1px solid var(--border); border-radius: 14px; padding:14px 16px;
}
.emoji { font-size:22px; width:28px; text-align:center; }
.benefit h4 { margin:0 0 4px; color: var(--gold); font-size:16px; }
.benefit p { margin:0; color: var(--muted); font-size:14px; }
      `}</style>
    </>
  );
}
