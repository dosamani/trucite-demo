"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [score, setScore] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
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
        body: JSON.stringify({ text }),
      });
      if (!r.ok) throw new Error("Request failed");
      const j = await r.json();
      setScore(j.score ?? null);
      setExplanation(j.explanation || "");
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Header lives in layout.js; main contains the hero */}
      <main>
        {/* Logo */}
        <section style={{ textAlign: "center", marginTop: 8 }}>
          <img
            src="/logo.jpg"
            alt="TruCite Logo"
            className="heroLogo"
          />
        </section>

        {/* Title / lead */}
        <h1>
          Welcome to <span style={{ color: "#f2c94c" }}>TruCite</span>
        </h1>
        <p className="lead">
          The world’s first <strong>Truth OS</strong> — a cross-platform,
          real-time engine for evaluating and scoring truth.
        </p>

        {/* Feature chips */}
        <div className="chips">
          <div className="chip">⚡ Fast</div>
          <div className="chip">🔗 Transparent</div>
          <div className="chip">✨ Plug &amp; Play</div>
        </div>

        {/* Input + Button */}
        <div className="inputRow">
          <input
            className="claimInput"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste a claim, answer, or snippet"
          />
          <button
            className="primaryBtn"
            onClick={handleCheck}
            disabled={loading}
            aria-busy={loading ? "true" : "false"}
          >
            {loading ? "Checking…" : "Check Truth"}
          </button>
        </div>

        {/* Simple result area (optional; keep minimal for MVP) */}
        {error && (
          <p style={{ color: "#ff8a8a", textAlign: "center", marginTop: 14 }}>
            {error}
          </p>
        )}
        {score !== null && (
          <div
            style={{
              margin: "18px auto 0",
              padding: "14px 16px",
              maxWidth: 780,
              borderRadius: 14,
              background: "#151519",
              border: "1px solid #2a2a33",
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 6 }}>
              Truth Score: {score}
            </div>
            {explanation && (
              <div style={{ color: "#cfcfd6", lineHeight: 1.55 }}>
                {explanation}
              </div>
            )}
          </div>
        )}

        {/* Footer Links */}
        <div className="footerLinks">
          <a href="https://docs.google.com/document/d/1IQM-Qe-SARh9zOm6HT7YYhYxfO4Q2GEVDTt9ZavyA5E/edit?usp=drivesdk" target="_blank" rel="noreferrer">FAQ</a>
          <a href="mailto:founder@trucite.ai">Contact Us</a>
          <a href="https://docs.google.com/document/d/1ZBRksw_MOzfvP4cqxxnQp54cz-aqXF5j-jsur-EdL3E/edit?usp=drivesdk" target="_blank" rel="noreferrer">Suggestions</a>
          <a href="/terms" >Terms</a>
          <a href="/privacy" >Privacy</a>
          <a href="https://docs.google.com/document/d/1Byzx9_CRe8QT4_pEA5X-EWoVl2GIjt3dJ2pUunfE_Kc/edit?usp=drivesdk" target="_blank" rel="noreferrer">Disclaimer</a>
        </div>
      </main>
    </>
  );
}
