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
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const LINKS = {
    faq: "https://docs.google.com/document/d/1IQM-Qe-SARh9zOm6HT7YYhYxfO4Q2GEVDTt9ZavyA5E/edit?usp=drivesdk",
    terms: "https://docs.google.com/document/d/1ZBRksw_MOzfvP4cqxxnQp54cz-aqXF5j-jsur-EdL3E/edit?usp=drivesdk",
    privacy: "https://docs.google.com/document/d/1Byzx9_CRe8QT4_pEA5X-EWoVl2GIjt3dJ2pUunfE_Kc/edit?usp=drivesdk",
    disclaimer:
      "https://docs.google.com/document/d/1ZBRksw_MOzfvP4cqxxnQp54cz-aqXF5j-jsur-EdL3E/edit?usp=drivesdk",
    suggestions: "https://forms.gle/REPLACE_WITH_REAL_FORM_ID",
    contact: "mailto:founder@trucite.ai",
  };

  return (
    <>
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

          {/* gold chain icon (SVG so it stays gold on all devices) */}
          <div className="badge" role="listitem">
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="icon"
            >
              <path
                fill="#f5c84b"
                d="M10.59 13.41a1.998 1.998 0 0 0 2.83 0l3.88-3.88a2 2 0 1 0-2.83-2.83l-1.42 1.42l-1.41 1.41l-1.42 1.42a2 2 0 0 0 0 2.83m2.82-2.82l1.42-1.42m-8.41 8.41l3.88-3.88a2 2 0 1 0-2.83-2.83L6.65 13.7a2 2 0 1 0 2.83 2.83z"
              />
            </svg>
            Transparent
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

      <hr className="divider" />
      <nav className="footer-links">
        <a href={LINKS.faq} target="_blank" rel="noreferrer">
          FAQ
        </a>
        <a href={LINKS.contact}>Contact Us</a>
        <a href={LINKS.suggestions} target="_blank" rel="noreferrer">
          Suggestions
        </a>
        <a href={LINKS.terms} target="_blank" rel="noreferrer">
          Terms
        </a>
        <a href={LINKS.privacy} target="_blank" rel="noreferrer">
          Privacy
        </a>
        <a href={LINKS.disclaimer} target="_blank" rel="noreferrer">
          Disclaimer
        </a>
      </nav>
    </>
  );
}
