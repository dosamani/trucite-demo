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
    } catch (err) {
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
        padding: "28px 16px 60px",
        color: "#eeeaea",
        textAlign: "center",
      }}
    >
      {/* Logo + Hero */}
      <section>
        <img
          src="/logo.jpg"
          alt="TruCite Logo"
          style={{ width: 120, margin: "20px auto 10px", display: "block" }}
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
          color: "#cfccfc",
          lineHeight: 1.5,
          margin: "0 auto 18px",
          maxWidth: 820,
        }}
      >
        The world’s first <strong style={{ color: "#fff" }}>Truth OS</strong> — a
        cross-platform, real-time engine for evaluating and scoring truth.
      </p>

      {/* Tagline Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          margin: "24px 0 32px",
        }}
      >
        {["⚡ Fast", "🔗 Transparent", "✨ Plug & Play"].map((label, i) => (
          <span
            key={i}
            style={{
              background: "#111",
              border: "1px solid #f2c94c",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Input + Button */}
      <div
        style={{
          margin: "20px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: 600,
          gap: 12,
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a claim, answer, or snippet…"
          style={{
            flex: 1,
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid #333",
            fontSize: 16,
            textAlign: "center",
            color: "#000",
          }}
        />
        <button
          onClick={handleCheck}
          disabled={loading}
          style={{
            padding: "12px 20px",
            borderRadius: 10,
            border: "none",
            background: loading ? "#999" : "#f2c94c",
            color: "#000",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          {loading ? "Checking…" : "Check Truth"}
        </button>
      </div>

      {/* Results */}
      {error && (
        <p style={{ color: "red", marginTop: 20, fontWeight: 600 }}>{error}</p>
      )}
      {score !== null && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            border: "1px solid #444",
            borderRadius: 10,
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
            background: "#1a1a1a",
          }}
        >
          <h3 style={{ marginBottom: 10, color: "#f2c94c" }}>
            Truth Score: {score}
          </h3>
          <p style={{ color: "#fff" }}>{explanation}</p>
        </div>
      )}

      {/* Footer Links */}
      <footer
        style={{
          marginTop: 60,
          paddingTop: 30,
          borderTop: "1px solid #333",
          fontSize: 14,
          color: "#aaa",
        }}
      >
        <div style={{ marginBottom: 12 }}>
          <a
            href="https://docs.google.com/document/d/FAQ_DOC_ID"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#f2c94c" }}
          >
            FAQ
          </a>
          <a
            href="mailto:founder@trucite.ai"
            style={{ margin: "0 10px", color: "#f2c94c" }}
          >
            Contact Us
          </a>
          <a
            href="https://forms.gle/SUGGESTION_FORM_ID"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#f2c94c" }}
          >
            Suggestions
          </a>
        </div>
        <div>
          <a
            href="/terms"
            style={{ margin: "0 8px", color: "#f2c94c" }}
          >
            Terms
          </a>
          <a
            href="/privacy"
            style={{ margin: "0 8px", color: "#f2c94c" }}
          >
            Privacy
          </a>
          <a
            href="/disclaimer"
            style={{ margin: "0 8px", color: "#f2c94c" }}
          >
            Disclaimer
          </a>
        </div>
      </footer>
    </main>
  );
}
