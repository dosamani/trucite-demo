"use client";

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  function hashToScore(s) {
    // deterministic 0–100 “truth score”
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return (h % 101);
  }

  function labelFromScore(score) {
    if (score >= 80) return { label: "Likely True", color: "#16a34a" };
    if (score >= 60) return { label: "Needs Review", color: "#f59e0b" };
    if (score >= 40) return { label: "Uncertain", color: "#f59e0b" };
    if (score >= 20) return { label: "Likely False", color: "#ef4444" };
    return { label: "Unsupported", color: "#ef4444" };
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    // simulate latency
    setTimeout(() => {
      const score = hashToScore(query.trim());
      const meta = labelFromScore(score);
      setResult({
        score,
        ...meta,
        // mocked citations
        citations: [
          { title: "Source A", url: "#", verdict: "supports" },
          { title: "Source B", url: "#", verdict: "neutral" },
          { title: "Source C", url: "#", verdict: "disputes" },
        ],
      });
      setLoading(false);
    }, 500);
  };

  return (
    <main className="home">
      <h1 className="heroTitle">Welcome to <span>TruCite</span></h1>
      <p className="heroSubtitle">
        The world’s first <strong>Truth OS</strong> for AI — a cross-platform, real-time engine
        for evaluating and scoring truth.
      </p>

      {/* Mocked Demo */}
      <section className="demo">
        <form onSubmit={onSubmit} className="inputRow">
          <input
            className="queryInput"
            placeholder="Paste a claim, answer, or snippet to score its truth…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="ctaBtn" disabled={loading || !query.trim()}>
            {loading ? "Scoring…" : "Check Truth"}
          </button>
        </form>

        {result && (
          <div className="resultCard">
            <div className="scoreHeader">
              <div className="scoreValue" style={{ color: result.color }}>
                {result.score}
              </div>
              <div className="scoreMeta">
                <div className="scoreLabel" style={{ color: result.color }}>
                  {result.label}
                </div>
                <div className="scoreBar">
                  <div
                    className="scoreFill"
                    style={{ width: `${result.score}%`, background: result.color }}
                  />
                </div>
              </div>
            </div>

            <div className="citations">
              <div className="citationsTitle">Top Citations (mocked)</div>
              <ul>
                {result.citations.map((c, i) => (
                  <li key={i}>
                    <span className={`badge ${c.verdict}`}>
                      {c.verdict}
                    </span>
                    <a href={c.url}>{c.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="disclaimer">
              * Demo is mocked — no external calls. Real scoring uses retrieval evaluation,
              citation grounding, hallucination detection, and abstain/deferral logic.
            </div>
          </div>
        )}
      </section>

      <p className="pillars">
        ⚡ Fast · 🔗 Transparent · ✨ Plug &amp; Play
      </p>
    </main>
  );
}
