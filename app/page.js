export default function Home() {
  return (
    <main className="hero">
      <img className="logo" src="/logo.jpg" alt="TruCite Logo" />

      <h1 className="title">
        Welcome to <span>TruCite</span>
      </h1>

      <p className="subtitle">
        The world’s first <strong>Truth OS</strong> for AI — a cross-platform, real-time engine for evaluating and scoring truth.
      </p>

      <form className="inputRow" onSubmit={(e)=>e.preventDefault()}>
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

      <style jsx>{`
        :root{
          --gold:#f2c94c;--gold2:#f6d87b;--gold3:#f9e8a9;
          --ink:#e9e9ea;--muted:#c8c8cc;--panel:rgba(255,255,255,.04);--panelB:rgba(255,255,255,.06);
        }
        .hero{padding:8px 18px 40px;max-width:980px;margin:0 auto;text-align:center;}
        .logo{width:clamp(70px,12vw,120px);display:block;margin:6px auto 8px;border-radius:14px;box-shadow:0 6px 20px rgba(0,0,0,.35),0 0 0 1px rgba(255,255,255,.06) inset;}
        .title{font-size:clamp(28px,5.8vw,56px);line-height:1.12;margin:4px 0 0;color:var(--ink);font-weight:700;}
        .title span{color:var(--gold);}
        .subtitle{max-width:820px;margin:8px auto 14px;font-size:clamp(16px,3.6vw,22px);line-height:1.5;color:var(--muted);}
        .subtitle strong{color:var(--ink);}

        .inputRow{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;width:min(780px,100%);margin:0 auto 14px;padding:10px;background:var(--panel);border:1px solid var(--panelB);border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.35);}
        .inputEl{background:rgba(255,255,255,.06);color:var(--ink);border:1px solid rgba(255,255,255,.08);border-radius:12px;height:48px;padding:0 14px;font-size:clamp(15px,3.8vw,18px);text-align:center !important;}
        /* strongest placeholder centering */
        .truInput::-webkit-input-placeholder{text-align:center !important;color:#b9b9bf;}
        .truInput::-moz-placeholder{text-align:center !important;color:#b9b9bf;opacity:1;}
        .truInput:-ms-input-placeholder{text-align:center !important;color:#b9b9bf;}
        .truInput::placeholder{text-align:center !important;color:#b9b9bf;}
        .cta{height:48px;padding:0 18px;border-radius:12px;border:0;font-weight:700;font-size:clamp(14px,3.6vw,18px);color:#1b1400;background:linear-gradient(135deg,var(--gold),var(--gold2) 60%,var(--gold3));box-shadow:0 8px 20px rgba(242,201,76,.25);white-space:nowrap;min-width:126px;cursor:pointer;}

        .pillRow{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin:10px auto 0;color:var(--muted);font-size:clamp(14px,3.6vw,18px);}
        .pill{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,.05);border:1px solid var(--panelB);color:var(--ink);}
        .dot{opacity:.6;user-select:none}

        @media (max-width:420px){
          .hero{padding-top:6px;}
          .inputRow{gap:8px;padding:8px;}
          .cta{padding:0 14px;min-width:112px;}
        }
      `}</style>
    </main>
  );
}
