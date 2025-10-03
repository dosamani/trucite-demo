"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [error, setError] = useState("");

  async function handleCheck(e) {
    e.preventDefault();
    setError("");
    setScore(null);
    setExplanation("");
    if (!text.trim()) return;
    setLoading(true);
    try {
      const r = await fetch("/api/truth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!r.ok) throw new Error("Request failed");
      const data = await r.json();
      setScore(data?.score ?? null);
      setExplanation(data?.explanation ?? "");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // NOTE: set your real links here (one source of truth)
  const LINKS = {
    faq: "https://docs.google.com/document/d/1IQM-Qe-SARh9zOm6HT7YYhYxfO4Q2GEVDTt9ZavyA5E/edit?usp=drivesdk",
    terms: "https://docs.google.com/document/d/1ZBRksw_MOzfvP4cqxxnQp54cz-aqXF5j-jsur-EdL3E/edit?usp=drivesdk",
    privacy: "https://docs.google.com/document/d/1Byzx9_CRe8QT4_pEA5X-EWoVl2GIjt3dJ2pUunfE_Kc/edit?usp=drivesdk",
    // if you have a distinct disclaimer doc, put it here; for now, point to terms:
    disclaimer: "https://docs.google.com/document/d/1ZBRksw_MOzfvP4cqxxnQp54cz-aqXF5j-jsur-EdL3E/edit?usp=drivesdk",
    suggestions: "https://forms.gle/REPLACE_WITH_REAL_FORM_ID", // put the real form URL here
    contact: "mailto:founder@trucite.ai",
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <img src="/logo.jpg" alt="" className="hero-logo" />
        <h1 className="hero-title">
          Welcome to <span className="accent">TruCite</span>
        </h1>
        <p className="hero-sub">
          The world’s first <strong>Truth OS</strong> — a cross-platform,
          real-time engine for evaluating and scoring truth.
        </p>

        <div className="badge-row" role="list">
          <div className="badge" role="listitem">
            <span className="badge-emoji">⚡</span> Fast
          </div>
          <div className="badge" role="listitem">
            <span className="badge-emoji">🔗</span> Transparent
          </div>
          <div className="badge" role="listitem">
            <span className="badge-emoji">✨</span> Plug &amp; Play
          </div>
        </div>

        <form className="cta-row" onSubmit={handleCheck}>
          <input
            className="claim-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste a claim, answer, or snippet"
            aria-label="Paste a claim, answer, or snippet"
          />
          <button className="cta" type="submit" disabled={loading}>
            {loading ? "Checking..." : "Check Truth"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {score !== null && (
          <div className="result">
            <div className="score">Truth Score: {score}</div>
            {explanation ? (
              <p className="explanation">{explanation}</p>
            ) : null}
          </div>
        )}
      </section>

      {/* FOOTER LINKS */}
      <hr className="divider" />
      <nav className="footer-links">
        <a href={LINKS.faq} target="_blank" rel="noreferrer">FAQ</a>
        <a href={LINKS.contact}>Contact Us</a>
        <a href={LINKS.suggestions} target="_blank" rel="noreferrer">Suggestions</a>
        <a href={LINKS.terms} target="_blank" rel="noreferrer">Terms</a>
        <a href={LINKS.privacy} target="_blank" rel="noreferrer">Privacy</a>
        <a href={LINKS.disclaimer} target="_blank" rel="noreferrer">Disclaimer</a>
      </nav>
    </>
  );
}
