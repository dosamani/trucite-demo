// app/page.js
"use client";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(null);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setRes(null);
    if (!query.trim()) {
      setError("Please paste a claim, answer, or snippet.");
      return;
    }
    setLoading(true);
    try {
      const r = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data?.error || "Request failed");
      setRes(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="hero">
      {/* Center logo */}
      <img src="/logo.jpg" alt="TruCite" className="hero-logo" />

      <h1 className="title">
        Welcome to <span>TruCite</span>
      </h1>

      <p className="subtitle">
        The world’s first <strong>Truth OS</strong> for AI — a cross-platform, real-time engine for
        evaluating and scoring truth.
      </p>

      <form className="checker" onSubmit={onSubmit}>
        <input
          placeholder="Paste a claim, answer, or snippet"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
          aria-label="Claim input"
        />
        <button disabled={loading} aria-label="Check truth">
          {loading ? "Checking…" : "Check Truth"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {res && (
        <section className="card">
          <div className="scoreWrap">
            <div className="score" data-score={res.truthScore}>
              {res.truthScore}
            </div>
            <div className="verdict">{res.verdict}</div>
            <div className="latency">~{res.latencyMs} ms</div>
          </div>

          <div className="evidence">
            <h3>Evidence Summary</h3>
            <p>{res.evidenceSummary}</p>

            <h4>Citations</h4>
            <ul className="cites">
              {res.citations.map((c) => (
                <li key={c.url}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>

            <h4>Risk Flags</h4>
            <div className="badges">
              {res.risks.map((r, i) => (
                <span key={i} className="badge">{r}</span>
              ))}
            </div>

            <p className="notes">{res.modelNotes}</p>
          </div>
        </section>
      )}

      <p className="pillars">
        ⚡ Fast · 🔗 Transparent · ✨ Plug & Play
      </p>

      <style jsx>{`
        .hero {
          min-height: calc(100dvh - 64px);
          padding: 3.5rem 1.25rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #eee;
          background: radial-gradient(1000px 600px at 50% -200px, rgba(255,215,0,0.06), transparent 60%),
                      linear-gradient(#0b0b0b, #0b0b0b);
        }
        .hero-logo {
          width: 78px;
          height: 78px;
          object-fit: contain;
          margin: 8px 0 22px;
          border-radius: 12px;
          box-shadow: 0 0 0 1px rgba(242,196,76,0.12), 0 6px 24px rgba(0,0,0,0.4);
        }
        .title {
          font-size: clamp(28px, 6.4vw, 54px);
          line-height: 1.1;
          margin: 0 0 10px;
          letter-spacing: 0.2px;
          color: #e9e9e9;
        }
        .title span {
          color: #f2c94c;
          text-shadow: 0 0 24px rgba(242,201,76,0.18);
        }
        .subtitle {
          max-width: 860px;
          color: #cfcfcf;
          font-size: clamp(16px, 3.4vw, 22px);
          line-height: 1.55;
          margin: 6px auto 18px;
        }
        .checker {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 14px auto 14px;
          max-width: 900px;
          width: min(92vw, 900px);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 10px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.35);
          backdrop-filter: blur(4px);
        }
        .checker input {
          flex: 1;
          background: rgba(0,0,0,0.4);
          color: #ddd;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 14px 16px;
          font-size: 16px;
          outline: none;
          border-radius: 12px;
        }
        .checker input:disabled {
          opacity: 0.7;
        }
        .checker button {
          background: linear-gradient(135deg, #f6cf63, #e7a93a);
          color: #1a1a1a;
          border: none;
          font-weight: 800;
          padding: 14px 18px;
          border-radius: 12px;
          min-width: 128px;
          cursor: pointer;
          box-shadow: 0 6px 22px rgba(242,196,76,0.25);
        }
        .checker button[disabled] {
          opacity: 0.75;
          cursor: not-allowed;
        }
        .error {
          color: #ff8877;
          margin: 8px 0 0;
          font-size: 14px;
        }
        .card {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 20px;
          width: min(980px, 92vw);
          margin: 18px auto 0;
          padding: 18px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 18px 60px rgba(0,0,0,0.45);
        }
        @media (max-width: 680px) {
          .card { grid-template-columns: 1fr; }
        }
        .scoreWrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .score {
          --val: attr(data-score number, 50);
          width: 96px;
          height: 96px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          font-weight: 900;
          font-size: 28px;
          color: #1b1b1b;
          background: conic-gradient(#f2c94c calc(var(--val) * 1%), #333 calc(var(--val) * 1%));
          box-shadow: inset 0 0 0 6px #111, 0 10px 30px rgba(0,0,0,0.4);
        }
        .verdict {
          font-weight: 800;
          color: #f2c94c;
          letter-spacing: 0.3px;
        }
        .latency {
          font-size: 12px;
          color: #aaa;
        }
        .evidence h3 {
          margin: 6px 0 8px;
          font-size: 18px;
          color: #f1f1f1;
        }
        .evidence h4 {
          margin: 14px 0 6px;
          font-size: 14px;
          color: #d7d7d7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .evidence p {
          margin: 0;
          color: #d8d8d8;
          line-height: 1.5;
        }
        .cites {
          margin: 4px 0 0 18px;
          padding: 0;
          color: #cfcfcf;
        }
        .cites li { margin: 4px 0; }
        .cites a {
          color: #f2c94c;
          text-decoration: none;
        }
        .cites a:hover { text-decoration: underline; }
        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
        }
        .badge {
          background: rgba(242,201,76,0.12);
          border: 1px solid rgba(242,201,76,0.35);
          color: #f2c94c;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
        }
        .notes {
          margin-top: 10px;
          font-size: 12px;
          color: #9e9e9e;
        }
        .pillars {
          margin: 18px 0 0;
          color: #c9c9c9;
        }
      `}</style>
    </main>
  );
}
