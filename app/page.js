"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setResult(null);

    const trimmed = query.trim();
    if (!trimmed) {
      setError("Please paste a claim, answer, or snippet.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const data = await res.json();
      // Be permissive with field names from the mock API
      const normalized = {
        score: clamp01(
          data.score ??
            data.truthScore ??
            (typeof data.confidence === "number" ? data.confidence : 0.0)
        ),
        verdict: data.verdict ?? data.label ?? "Unknown",
        citations: Array.isArray(data.citations) ? data.citations : [],
        risks: Array.isArray(data.risks) ? data.risks : [],
        notes: data.notes ?? "",
      };
      setResult(normalized);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      // console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="hero">
      <div className="hero-inner">
        <div className="mark">
          <img src="/logo.jpg" alt="TruCite" width="96" height="96" />
        </div>

        <h1 className="headline">
          Welcome to <span className="brand-grad">TruCite</span>
        </h1>

        <p className="tagline">
          The world’s first <strong>Truth OS</strong> for AI — a cross-platform,
          real-time engine for evaluating and scoring truth.
        </p>

        <form className="checker" onSubmit={onSubmit}>
          <input
            className="claim"
            placeholder="Paste a claim, answer, or snippet"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={loading}
            aria-label="Claim or snippet"
          />
          <button className="cta" type="submit" disabled={loading}>
            {loading ? "Checking…" : "Check Truth"}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        {result && <ResultCard result={result} />}
        <p className="pills">
          <span>⚡ Fast</span> · <span>🔗 Transparent</span> ·{" "}
          <span>✨ Plug &amp; Play</span>
        </p>
      </div>

      <style jsx>{`
        .hero {
          min-height: calc(100vh - 64px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem 4rem;
          color: #fff;
          background: radial-gradient(1200px 600px at 50% -200px, #1b1b1b, #0e0e0e 60%, #000 100%);
        }
        .hero-inner {
          width: 100%;
          max-width: 900px;
          text-align: center;
        }
        .mark {
          display: flex;
          justify-content: center;
          margin: 0 auto 1.25rem;
          filter: drop-shadow(0 6px 20px rgba(255, 205, 72, 0.12));
        }
        .headline {
          font-size: clamp(2rem, 4.8vw, 3.8rem);
          line-height: 1.05;
          margin: 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .brand-grad {
          background: linear-gradient(180deg, #ffd76a 0%, #f2c94c 60%, #d0a52a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .tagline {
          max-width: 48rem;
          margin: 1rem auto 1.75rem;
          font-size: clamp(1rem, 2.6vw, 1.3rem);
          color: #d9d9d9;
        }

        .checker {
          display: flex;
          gap: 0.75rem;
          align-items: stretch;
          justify-content: center;
          margin: 0 auto 1rem;
          max-width: 52rem;
          padding: 0.35rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
        }
        .claim {
          flex: 1;
          min-width: 8rem;
          padding: 1rem 1.1rem;
          border-radius: 10px;
          border: 0;
          outline: none;
          background: rgba(0, 0, 0, 0.35);
          color: #fff;
          font-size: 1rem;
        }
        .claim::placeholder {
          color: #a9a9a9;
        }
        .cta {
          white-space: nowrap;
          padding: 0 1.1rem;
          border-radius: 10px;
          border: 0;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          color: #181818;
          background: linear-gradient(135deg, #ffd76a, #f2c94c, #d0a52a);
          box-shadow: 0 10px 30px rgba(242, 201, 76, 0.25);
          transition: transform 0.08s ease, filter 0.08s ease, box-shadow 0.08s ease;
        }
        .cta:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .cta:not(:disabled):active {
          transform: translateY(1px);
          filter: brightness(0.97);
          box-shadow: 0 6px 18px rgba(242, 201, 76, 0.2);
        }

        .error {
          margin: 0.5rem auto 0;
          max-width: 42rem;
          color: #ff9b9b;
          font-size: 0.95rem;
        }

        .pills {
          margin-top: 1rem;
          color: #d8d8d8;
        }
        .pills span {
          display: inline-block;
          margin: 0 0.15rem;
        }
      `}</style>
    </main>
  );
}

function ResultCard({ result }) {
  const scorePct = Math.round((result.score ?? 0) * 100);
  const color = scoreColor(result.score ?? 0);

  return (
    <div className="card" role="status" aria-live="polite">
      <div className="top">
        <div className="dial" aria-label={`Truth score ${scorePct} out of 100`}>
          <div
            className="ring"
            style={{
              background: `conic-gradient(${color} ${scorePct * 3.6}deg, rgba(255,255,255,0.08) 0deg)`,
            }}
          />
          <div className="center">
            <div className="pct">{scorePct}</div>
            <div className="label">/100</div>
          </div>
        </div>

        <div className="verdict">
          <div className="badge" style={{ color, borderColor: color }}>
            {result.verdict}
          </div>
          {result.notes && <p className="notes">{result.notes}</p>}
        </div>
      </div>

      {Array.isArray(result.citations) && result.citations.length > 0 && (
        <div className="section">
          <h3>Citations</h3>
          <ul className="list">
            {result.citations.map((c, i) => (
              <li key={i}>
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.title || c.url || "Source"}
                </a>
                {typeof c.confidence === "number" && (
                  <span className="small"> · conf {Math.round(c.confidence * 100)}%</span>
                )}
                {c.source && <span className="muted"> · {c.source}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(result.risks) && result.risks.length > 0 && (
        <div className="section">
          <h3>Risks & Flags</h3>
          <div className="chips">
            {result.risks.map((r, i) => (
              <span className="chip" key={i}>
                {r}
              </span>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .card {
          margin: 1rem auto 0.75rem;
          max-width: 860px;
          text-align: left;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1rem;
          box-shadow: 0 16px 60px rgba(0, 0, 0, 0.5);
        }
        .top {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 1rem;
          align-items: center;
        }
        @media (max-width: 640px) {
          .top {
            grid-template-columns: 1fr;
            text-align: center;
            justify-items: center;
          }
        }
        .dial {
          position: relative;
          width: 120px;
          height: 120px;
        }
        .ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          padding: 8px;
          background-origin: border-box;
          mask: radial-gradient(#0000 55%, #000 56%);
          -webkit-mask: radial-gradient(#0000 55%, #000 56%);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .center {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border-radius: 50%;
          background: #111;
        }
        .pct {
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .label {
          font-size: 0.75rem;
          color: #bbb;
        }
        .verdict .badge {
          display: inline-block;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          border: 1px solid;
          font-weight: 700;
          letter-spacing: 0.02em;
          background: rgba(0, 0, 0, 0.35);
        }
        .notes {
          margin: 0.5rem 0 0;
          color: #ddd;
        }
        .section {
          margin-top: 1rem;
        }
        .section h3 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
          color: #f2c94c;
        }
        .list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .list li {
          margin: 0.35rem 0;
          line-height: 1.4;
        }
        .list a {
          color: #eaeaea;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .small {
          color: #cfcfcf;
          font-size: 0.85rem;
        }
        .muted {
          color: #a9a9a9;
          font-size: 0.9rem;
        }
        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .chip {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          font-size: 0.9rem;
          color: #eee;
        }
      `}</style>
    </div>
  );
}

/* helpers */
function clamp01(x) {
  if (typeof x !== "number" || Number.isNaN(x)) return 0;
  return Math.max(0, Math.min(1, x));
}

function scoreColor(s) {
  // green -> yellow -> red
  const t = clamp01(s);
  if (t >= 0.7) return "#3bd673";
  if (t >= 0.4) return "#f2c94c";
  return "#ff6b6b";
}
```0
