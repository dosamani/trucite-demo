"use client";
import { useState } from "react";

/** ========================================================================
 * CENTRAL LINK CONFIG
 * Paste the correct URLs here and only here.
 * ===================================================================== */
const LINKS = {
  FAQ:        "https://docs.google.com/document/d/1IQM-Qe-SARh9zOm6HT7YYhYxfO4Q2GEVDTt9ZavyA5E/edit",
  TERMS:      "https://docs.google.com/document/d/1ZBRksw_MOzfvP4cqxxnQp54cz-aqXF5j-jsur-EdL3E/edit",
  PRIVACY:    "https://docs.google.com/document/d/1Byzx9_CRe8QT4_pEA5X-EWoVl2GIjt3dJ2pUunfE_Kc/edit",
  DISCLAIMER: "https://docs.google.com/document/d/1Byzx9_CRe8QT4_pEA5X-EWoVl2GIjt3dJ2pUunfE_Kc/edit",
  CONTACT:    "mailto:founder@trucite.ai",
  SUGGESTIONS:"https://forms.gle/REPLACE_WITH_SUGGESTIONS_FORM_ID" // send me this; drop it in
};

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [error, setError] = useState("");

  async function handleCheck() {
    setError("");
    setScore(null);
    setExplanation("");
    if (!text.trim()) return;

    setLoading(true);
    try {
      const r = await fetch("/api/truth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });
      if (!r.ok) throw new Error("Request failed");
      const data = await r.json();
      setScore(data.score ?? null);
      setExplanation(data.explanation ?? "");
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      {/* ========== HERO =================================================== */}
      <section className="logo-wrap" aria-label="TruCite logo">
        <img src="/logo.jpg" alt="TruCite logo" className="logo-img" />
      </section>

      <h1>Welcome to TruCite</h1>

      <p className="lede">
        The world’s first <strong style={{ color: "#fff" }}>Truth OS</strong> — a cross-platform,
        real-time engine for evaluating and scoring truth.
      </p>

      {/* ========== FEATURE BADGES ======================================== */}
      <div className="badges" role="list" aria-label="TruCite highlights">
        <div className="badge" role="listitem" aria-label="Fast">
          <span className="badge-icon spark" aria-hidden="true" />
          <span>Fast</span>
        </div>
        <div className="badge" role="listitem" aria-label="Transparent">
          <span className="badge-icon chain" aria-hidden="true" />
          <span>Transparent</span>
        </div>
        <div className="badge" role="listitem" aria-label="Plug & Play">
          <span className="badge-icon stars" aria-hidden="true" />
          <span>Plug &amp; Play</span>
        </div>
      </div>

      {/* ========== CTA (INPUT + BUTTON) ================================== */}
      <div className="cta-row">
        <input
          className="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a claim, answer, or snippet"
          aria-label="Paste a claim, answer, or snippet"
        />
        <button className="button" onClick={handleCheck} disabled={loading}>
          {loading ? "Checking…" : "Check Truth"}
        </button>
      </div>

      {/* ========== RESULT AREA (simple MVP) =============================== */}
      {error && (
        <p style={{ color: "#ff8a8a", marginTop: 14 }}>{error}</p>
      )}
      {score !== null && (
        <div style={{ marginTop: 16 }}>
          <p style={{ fontWeight: 700 }}>Truth Score: {score}</p>
          {explanation && <p style={{ color: "#cfcfcf" }}>{explanation}</p>}
        </div>
      )}

      {/* ========== FOOTER LINKS ========================================== */}
      <nav className="footer" aria-label="Helpful links">
        <a href={LINKS.FAQ} target="_blank" rel="noopener noreferrer">FAQ</a>
        <a href={LINKS.CONTACT}>Contact Us</a>
        <a href={LINKS.SUGGESTIONS} target="_blank" rel="noopener noreferrer">Suggestions</a>
        <a href={LINKS.TERMS} target="_blank" rel="noopener noreferrer">Terms</a>
        <a href={LINKS.PRIVACY} target="_blank" rel="noopener noreferrer">Privacy</a>
        <a href={LINKS.DISCLAIMER} target="_blank" rel="noopener noreferrer">Disclaimer</a>
      </nav>
    </main>
  );
}
