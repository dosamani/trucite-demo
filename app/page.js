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
          overflow: hidden;
        }
        .claim {
          flex: 1 1 auto;
          min-width: 7rem;
          padding: 0.9rem 1rem;
          border-radius: 10px;
          border: 0;
          outline: none;
          background: rgba(0, 0, 0, 0.35);
          color: #fff;
          font-size: clamp(0.95rem, 3.2vw, 1.05rem);
        }
        .claim::placeholder {
          color: #a9a9a9;
        }
        .cta {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
          min-width: 9.5rem;
          line-height: 1.1;
          border-radius: 10px;
          border: 0;
          font-weight: 700;
          font-size: clamp(0.95rem, 3vw, 1rem);
          cursor: pointer;
          color: #181818;
          background: linear-gradient(135deg, #ffd76a, #f2c94c, #d0a52a);
          box-shadow: 0 10px 30px rgba(242, 201, 76, 0.25);
          transition: transform 0.08s ease, filter 0.08s ease, box-shadow 0.08s ease;
          white-space: nowrap;
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

        /* Mobile fix */
        @media (max-width: 520px) {
          .checker {
            flex-direction: column;
            padding: 0.5rem;
            gap: 0.5rem;
          }
          .claim {
            width: 100%;
            padding: 0.95rem 1rem;
            font-size: 1rem;
          }
          .cta {
            width: 100%;
            min-width: 0;
            padding: 0.9rem 1rem;
            white-space: normal;
          }
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
    <div className="card">
      <div className="top">
        <div className="dial">
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
    </div>
  );
}

function clamp01(x) {
  if (typeof x !== "number" || Number.isNaN(x)) return 0;
  return Math.max(0, Math.min(1, x));
}

function scoreColor(s) {
  if (s >= 0.7) return "#3bd673";
  if (s >= 0.4) return "#f2c94c";
  return "#ff6b6b";
}
