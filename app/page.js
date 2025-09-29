export default function Home() {
  const BUILD = "v0.3 — hero tighten + mobile centering";
  return (
    <main className="hero">
      <img className="logo" src="/logo.jpg" alt="TruCite Logo" />

      <h1 className="title">
        Welcome to <span>TruCite</span>
      </h1>

      <p className="subtitle">
        The world’s first <strong>Truth OS</strong> for AI — a cross-platform, real-time
        engine for evaluating and scoring truth.
      </p>

      <form className="inputRow" onSubmit={(e) => e.preventDefault()}>
        <input
          className="inputEl truInput"
          placeholder="Paste a claim, answer, or snippet"
          aria-label="Claim or snippet"
        />
        <button className="cta" type="submit">Check Truth</button>
      </form>

      <div className="pillRow">
        <span className="pill">⚡ Fast</span>
        <span className="dot">·</span>
        <span className="pill">🔗 Transparent</span>
        <span className="dot">·</span>
        <span className="pill">✨ Plug &amp; Play</span>
      </div>

      <small className="buildTag">{BUILD}</small>

      <style jsx>{`
        :root{
          --gold:#f2c94c;--gold2:#f6d87b;--gold3:#f9e8a9;
          --ink:#e9e9ea;--muted:#c8c8cc;--panel:rgba(255,255,255,.04);--panelB:rgba(255,255,255,.06);
        }

        /* Layout / spacing */
        .hero{
          padding:6px 18px 40px;     /* tighter top padding */
          max-width:980px;margin:0 auto;text-align:center;
        }
        .logo{
          width:clamp(70px,12vw,120px);
          display:block;margin:2px auto 6px;   /* tighter under-header gap */
          border-radius:14px;
          box-shadow:0 6px 20px rgba(0,0,0,.35),0 0 0 1px rgba(255,255,255,.06) inset;
        }

        /* Heading */
        .title{font-size:clamp(28px,5.6vw,56px);line-height:1.12;margin:6px 0 0;color:var(--ink);font-weight:700;}
        .title span{color:var(--gold);}

        /* Subhead */
        .subtitle{
          max-width:820px;margin:8px auto 14px;
          font-size:clamp(16px,3.4vw,22px);line-height:1.5;color:var(--muted);
        }
        .subtitle strong{color:var(--ink);}

        /* Input + CTA */
        .inputRow{
          display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;
          width:min(740px,100%);margin:0 auto 14px;padding:10px;
          background:var(--panel);border:1px solid var(--panelB);
          border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.35);
        }
        .inputEl{
          min-width:0; /* ensures no overflow in grid */
          background:rgba(255,255,255,.06);color:var(--ink);
          border:1px solid rgba(255,255,255,.08);border-radius:12px;
          height:50px;padding:0 14px;
          font-size:clamp(15px,3.6vw,18px);
          text-align:center !important;
          -webkit-appearance:none;appearance:none;
        }
        /* cross-browser placeholder centering */
        .truInput::-webkit-input-placeholder{text-align:center !important;color:#b9b9bf;}
        .truInput::-moz-placeholder{text-align:center !important;color:#b9b9bf;opacity:1;}
        .truInput:-ms-input-placeholder{text-align:center !important;color:#b9b9bf;}
        .truInput::placeholder{text-align:center !important;color:#b9b9bf;}

        .cta{
          height:50px;padding:0 18px;border-radius:12px;border:0;font-weight:700;
          font-size:clamp(14px,3.4vw,18px);color:#1b1400;white-space:nowrap;min-width:126px;cursor:pointer;
          background:linear-gradient(135deg,var(--gold),var(--gold2) 60%,var(--gold3));
          box-shadow:0 8px 20px rgba(242,201,76,.25);
        }

        /* Feature pills */
        .pillRow{
          display:flex;align-items:center;justify-content:center;
          gap:12px;flex-wrap:wrap;margin:12px auto 0;
          color:var(--muted);font-size:clamp(14px,3.4vw,18px);
        }
        .pill{
          display:inline-flex;align-items:center;gap:8px;
          padding:6px 12px;border-radius:999px;
          background:rgba(255,255,255,.05);border:1px solid var(--panelB);color:var(--ink);
        }
        .dot{opacity:.6;user-select:none}

        /* Small phones: keep everything clean & centered, stack CTA */
        @media (max-width:420px){
          .hero{padding-top:4px;}
          .inputRow{gap:8px;padding:8px;}
          .cta{padding:0 14px;min-width:100%;}
          .inputRow{grid-template-columns:1fr;} /* CTA below input on very small screens */
        }

        /* Build tag to confirm fresh deploy */
        .buildTag{
          display:block;margin:10px auto 0;opacity:.35;font-size:12px;letter-spacing:.2px;
        }
      `}</style>
    </main>
  );
}
