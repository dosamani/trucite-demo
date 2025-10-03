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
      const data = await r.json();
      setScore(data.score);
      setExplanation(data.explanation || "");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "28px 16px 80px",
        color: "#eaeaea",
        textAlign: "center",
      }}
    >
      {/* HERO */}
      <section>
        <img
          src="/logo.jpg"
          alt="TruCite Logo"
          style={{
            width: "100%",
            maxWidth: 540,
            height: "auto",
            margin: "18px auto 10px",
            borderRadius: 24,
            display: "block",
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
          draggable="false"
        />
      </section>

      <h1
        style={{
          fontSize: "clamp(28px, 5.8vw, 56px)",
          fontWeight: 800,
          color: "#f2c94c",
          margin: "10px 0 8px",
        }}
      >
        Welcome to <span style={{ color: "#f2c94c" }}>TruCite</span>
      </h1>

      <p
        style={{
          fontSize: "clamp(16px, 3.6vw, 22px)",
          lineHeight: 1.5,
          margin: "0 auto 18px",
          maxWidth: 820,
          color: "#cfcccf",
        }}
      >
        The world’s first <strong style={{ color: "#fff" }}>Truth OS</strong> —
        a cross-platform, real-time engine for evaluating and scoring truth.
      </p>

      {/* BADGE ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 18,
        }}
      >
        <Badge icon="⚡" label="Fast" />
        <Badge icon="🔗" label="Transparent" />
        <Badge icon="✨" label="Plug & Play" />
      </div>

      {/* INPUT + BUTTON */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 14,
          maxWidth: 920,
          margin: "0 auto 10px",
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a claim, answer, or snippet"
          style={{
            width: "100%",
            height: 54,
            borderRadius: 14,
            border: "1px solid #3a3a3a",
            background: "#131313",
            color: "#e9e9e9",
            padding: "0 18px",
            textAlign: "center",
            outline: "none",
          }}
        />

        <button
          onClick={handleCheck}
          disabled={loading || !text.trim()}
          style={{
            height: 54,
            borderRadius: 14,
            border: "none",
            cursor: loading || !text.trim() ? "not-allowed" : "pointer",
            fontWeight: 700,
            fontSize: 18,
            color: "#1a1a1a",
            background:
              "linear-gradient(180deg, #f6d365 0%, #f2c94c 55%, #d9a21f 100%)",
            boxShadow:
              "0 6px 18px rgba(242, 201, 76, 0.25), inset 0 1px 0 rgba(255,255,255,0.35)",
            transition: "transform 120ms ease",
            opacity: loading || !text.trim() ? 0.6 : 1,
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {loading ? "Checking…" : "Check Truth"}
        </button>
      </div>

      {error && <p style={{ color: "#ff7676", marginTop: 8 }}>{error}</p>}

      {score !== null && (
        <div
          style={{
            maxWidth: 920,
            margin: "16px auto 0",
            textAlign: "left",
            background: "#101010",
            border: "1px solid #2a2a2a",
            borderRadius: 14,
            padding: 16,
          }}
        >
          <p style={{ margin: 0 }}>
            <strong>Truth Score:</strong>{" "}
            <span style={{ color: "#f2c94c" }}>{score}</span>
          </p>
          {explanation && (
            <p style={{ margin: "8px 0 0", whiteSpace: "pre-wrap" }}>
              {explanation}
            </p>
          )}
        </div>
      )}

      <hr style={{ margin: "26px auto 14px", maxWidth: 920 }} />

      <nav
        aria-label="Footer"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          flexWrap: "wrap",
          fontWeight: 600,
        }}
      >
        <a href="/faq" style={footerLinkStyle}>FAQ</a>
        <a href="mailto:founder@trucite.ai" style={footerLinkStyle}>Contact Us</a>
        <a href="/suggestions" style={footerLinkStyle}>Suggestions</a>
        <a href="/terms" style={footerLinkStyle}>Terms</a>
        <a href="/privacy" style={footerLinkStyle}>Privacy</a>
        <a href="/disclaimer" style={footerLinkStyle}>Disclaimer</a>
      </nav>
    </main>
  );
}

const footerLinkStyle = { color: "#f2c94c", textDecoration: "none" };

function Badge({ icon, label }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 16px",
        borderRadius: 14,
        background: "rgba(255, 215, 96, 0.08)",
        border: "1px solid rgba(255, 215, 96, 0.22)",
        color: "#f2c94c",
        fontWeight: 700,
        whiteSpace: "nowrap",
      }}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </span>
  );
}
