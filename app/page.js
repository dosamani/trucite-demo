export default function Home() {
  return (
    <main className="hero">
      <img className="logo" src="/logo.jpg" alt="TruCite Logo" />

      <h1 className="title">
        Welcome to <span>TruCite</span>
      </h1>

      <p className="subtitle">
        The world’s first <strong>Truth OS</strong> for AI — a cross-platform, real-time engine for evaluating and
        scoring truth.
      </p>

      <form className="inputRow" onSubmit={(e)=>e.preventDefault()}>
        <input
          className="inputEl"
          placeholder="Paste a claim, answer, or snippet"
          aria-label="Claim or snippet"
        />
        <button className="cta" type="submit">Check Truth</button>
      </form>

      <div className="pillRow" aria-label="Product benefits">
        <span className="pill">⚡ Fast</span>
        <span className="dot">·</span>
        <span className="pill">🔗 Transparent</span>
        <span className="dot">·</span>
        <span className="pill">✨ Plug &amp; Play</span>
      </div>

      <style jsx>{`
        :root {
          --gold: #f2c94c;
          --gold-200: #f6d87b;
          --gold-300: #f9e8a9;
          --ink: #e9e9ea;
          --muted: #c8c8cc;
          --panel: rgba(255,255,255,0.04);
          --panel-border: rgba(255,255,255,0.06);
          --shadow: 0 10px 30px rgba(0,0,0,0.35);
        }

        .hero {
          /* tighter top spacing under the header */
          padding: clamp(16px, 3vh, 28px) 18px 40px;
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        .logo {
          width: clamp(70px, 12vw, 120px);
          height: auto;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06) inset;
          margin: clamp(8px, 1.8vh, 18px) auto clamp(8px, 1.6vh, 14px);
          display: block;
        }

        .title {
          font-size: clamp(28px, 5.8vw, 56px);
          line-height: 1.12;
          letter-spacing: 0.2px;
          font-weight: 700;
          margin: 0;
          color: var(--ink);
        }
        .title span {
          color: var(--gold);
        }

        .subtitle {
          max-width: 820px;
          margin: clamp(10px, 2vh, 18px) auto clamp(16px, 2.8vh, 22px);
          font-size: clamp(16px, 3.6vw, 22px);
          line-height: 1.5;
          color: var(--muted);
        }
        .subtitle strong { color: var(--ink); }

        /* INPUT + BUTTON */
        .inputRow {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
          align-items: center;
          width: min(780px, 100%);
          margin: 0 auto clamp(12px, 3vh, 18px);
          padding: 10px;
          background: var(--panel);
          border: 1px solid var(--panel-border);
          border-radius: 16px;
          box-shadow: var(--shadow);
        }

        .inputEl {
          background: rgba(255,255,255,0.06);
          color: var(--ink);
          border: 1px solid rgba(255,255,255,0.08);
          outline: none;
          border-radius: 12px;
          height: 48px;
          padding: 0 14px;
          font-size: clamp(15px, 3.8vw, 18px);
          text-align: center; /* center the text as you type */
        }
        .inputEl::placeholder { 
          color: #b9b9bf;
          text-align: center; /* center the placeholder text */
        }

        .cta {
          height: 48px;
          padding: 0 18px;
          border-radius: 12px;
          border: 0;
          font-weight: 700;
          font-size: clamp(14px, 3.6vw, 18px);
          color: #1b1400;
          background: linear-gradient(135deg, var(--gold), var(--gold-200) 60%, var(--gold-300));
          box-shadow: 0 8px 20px rgba(242, 201, 76, 0.25);
          cursor: pointer;
          white-space: nowrap;
        }

        /* TAGLINE PILLS — aligned in a single centered row with breathing room */
        .pillRow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin: clamp(10px, 2.6vh, 20px) auto 0;
          color: var(--muted);
          font-size: clamp(14px, 3.6vw, 18px);
        }
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--panel-border);
          color: var(--ink);
        }
        .dot {
          opacity: 0.6;
          user-select: none;
        }

        /* Mobile tweaks */
        @media (max-width: 420px) {
          .inputRow {
            grid-template-columns: 1fr;
          }
          .cta {
            width: 100%;
          }
          .pillRow {
            gap: 10px;
          }
        }
      `}</style>
    </main>
  );
}
