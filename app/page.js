"use client";
import { useState } from "react";

/* ---------- LIVE LINKS ---------- */
// FAQ (working doc)
const FAQ_URL = "https://docs.google.com/document/d/1WF0NB9fnxhDPEi_arGSp18Kev9KXdoX-IePIE8KJgCQ/view?usp=sharing";
// Suggestions (REPLACE with your real Google Form short link if different)
const SUGGEST_URL = "https://forms.gle/kJz3nVJ3tZqgF5Qm6";
const CONTACT_EMAIL = "mailto:founder@trucite.ai";

// Legal docs you provided (converted to /view)
const TERMS_URL      = "https://docs.google.com/document/d/1IQM-Qe-SARh9zOm6HT7YYhYxfO4Q2GEVDTt9ZavyA5E/view?usp=sharing";
const PRIVACY_URL    = "https://docs.google.com/document/d/1ZBRksw_MOzfvP4cqxxnQp54cz-aqXF5j-jsur-EdL3E/view?usp=sharing";
const DISCLAIMER_URL = "https://docs.google.com/document/d/1Byzx9_CRe8QT4_pEA5X-EWoVl2GIjt3dJ2pUunfE_Kc/view?usp=sharing";

/* ---------- STYLES ---------- */
const wrap = {
  maxWidth: 980,
  margin: "0 auto",
  padding: "28px 16px 60px",
  color: "#eaeaea",
  textAlign: "center",
};

const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "8px 14px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,.18)",
  background: "rgba(255,255,255,.06)",
  color: "#fff",
  fontWeight: 700,
};

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
    setLoading(true);
    try {
      const r = await fetch("/api/truth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!r.ok) throw new Error("Request failed");
      const j = await r.json();
      setScore(j.score);
      setExplanation(j.explanation || "");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={wrap}>
      {/* Hard-fix logo edge; swap to transparent PNG for perfect result */}
      <section style={{ marginTop: 18 }}>
        <img
          src="/logo.jpg"
          alt="TruCite Logo"
          className="tc-logo"
          style={{
            width: 120,
            height: "auto",
            display: "block",
            margin: "6px auto 10px",
            border: 0,
            outline: "none",
            boxShadow: "none",
            background: "transparent",
          }}
        />
      </section>

      <h1
        style={{
          fontSize: "clamp(28px, 5.8vw, 56px)",
          fontWeight: 800,
          color: "#f2c94c",
          margin: "6px 0 2px",
        }}
      >
        Welcome to <span style={{ color: "#f2c94c" }}>TruCite</span>
      </h1>

      <p
        style={{
          fontSize: "clamp(16px, 3.6vw, 22px)",
          color: "#cfcfcf",
          lineHeight: 1.5,
          margin: "0 auto 18px",
          maxWidth: 820,
        }}
      >
        The world’s first <strong style={{ color: "#fff" }}>Truth OS</strong> — a
        cross-platform, real-time engine for evaluating and scoring truth.
      </p>

      {/* Badges */}
      <div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 18, flexWrap: "wrap" }}>
        <div style={badgeStyle}>⚡ Fast</div>
        <div style={badgeStyle}>🔗 Transparent</div>
        <div style={badgeStyle}>✨ Plug &amp; Play</div>
      </div>

      {/* Input + CTA */}
      <div style={{ maxWidth: 680, margin: "20px auto", display: "flex", gap: 12 }}>
        <input
          className="tc-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a claim, answer, or snippet"
          style={{
            flex: 1,
            height: 56,
            borderRadius: 14,
            border: "1px solid #333",
            background: "#111",
            color: "#fff",
            padding: "0 16px",
            textAlign: "center",
          }}
        />
        <button
          className="tc-cta"
          onClick={handleCheck}
          disabled={loading || !text.trim()}
        >
          {loading ? "Checking…" : "Check Truth"}
        </button>
      </div>

      {error && <p style={{ color: "#ff6b6b", marginTop: 8 }}>{error}</p>}

      {(score !== null || explanation) && (
        <div
          style={{
            margin: "20px auto 10px",
            maxWidth: 820,
            textAlign: "left",
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.12)",
            borderRadius: 14,
            padding: 16,
          }}
        >
          {score !== null && (
            <p style={{ margin: "0 0 6px" }}>
              <strong>Truth Score:</strong>{" "}
              <span style={{ color: "#f2c94c", fontWeight: 800 }}>{score}</span>
            </p>
          )}
          {explanation && (
            <p style={{ margin: 0, color: "#d9d9d9", whiteSpace: "pre-wrap" }}>{explanation}</p>
          )}
        </div>
      )}

      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,.12)", margin: "24px 0 12px" }} />

      {/* Footer links */}
      <nav style={{ display: "flex", gap: 22, justifyContent: "center", flexWrap: "wrap" }}>
        <a href={FAQ_URL} target="_blank" rel="noreferrer" className="tc-link">FAQ</a>
        <a href={CONTACT_EMAIL} className="tc-link">Contact Us</a>
        <a href={SUGGEST_URL} target="_blank" rel="noreferrer" className="tc-link">Suggestions</a>
        <a href={TERMS_URL} target="_blank" rel="noreferrer" className="tc-link">Terms</a>
        <a href={PRIVACY_URL} target="_blank" rel="noreferrer" className="tc-link">Privacy</a>
        <a href={DISCLAIMER_URL} target="_blank" rel="noreferrer" className="tc-link">Disclaimer</a>
      </nav>

      {/* Small global polish without touching globals.css */}
      <style jsx global>{`
        .tc-input::placeholder {
          color: rgba(255,255,255,0.82) !important;
          text-align: center !important;
        }
        .tc-cta {
          height: 56px;
          padding: 0 20px;
          border-radius: 14px;
          border: 1px solid #7a6425;
          background: #c5a244;
          color: #1a1a1a;
          font-weight: 800;
        }
        .tc-cta:disabled { opacity: 0.6; }
        .tc-link {
          color: #f2c94c;
          text-decoration: none;
          font-weight: 700;
        }
        .tc-link:hover { text-decoration: underline; }

        .tc-logo {
          border: 0 !important;
          outline: none !important;
          box-shadow: none !important;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </main>
  );
}
