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
    } catch (e) {
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
        padding: "24px 20px 60px",
        color: "#eaeaea",
      }}
    >
      {/* Top Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 0",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          marginBottom: 18,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/logo.jpg"
            alt="TruCite"
            style={{ width: 28, height: 28, borderRadius: 6 }}
          />
          <strong style={{ color: "#f2c94c", fontSize: 18 }}>TruCite</strong>
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          <a href="/" style={{ color: "#eaeaea", textDecoration: "none" }}>
            Home
          </a>
          <a href="#about" style={{ color: "#eaeaea", textDecoration: "none" }}>
            About
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center" }}>
        <img
          src="/logo.jpg"
          alt="TruCite Logo"
          style={{
            width: "120px",
            margin: "10px auto 12px",
            borderRadius: 14,
            display: "block",
          }}
        />
        <h1
          style={{
            fontSize: "clamp(28px, 5.8vw, 56px)",
            fontWeight: 800,
            color: "#f2c94c",
            margin: "6px 0",
          }}
        >
          Welcome to <span style={{ color: "#f2c94c" }}>TruCite</span>
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 3.6vw, 22px)",
            color: "#cfcfcf",
            lineHeight: 1.5,
            margin: "0 auto 22px",
            maxWidth: 820,
            textWrap: "balance",
          }}
        >
          The world’s first <strong style={{ color: "#fff" }}>Truth OS</strong> — a
          cross-platform, real-time engine for evaluating and scoring truth.
        </p>

        {/* Feature badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 26,
          }}
        >
          <span style={badgeStyle}>⚡ Fast</span>
          <span style={badgeStyle}>🔗 Transparent</span>
          <span style={badgeStyle}>✨ Plug &amp; Play</span>
        </div>
      </section>

      {/* Input + Button */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginTop: 6,
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a claim, answer, or snippet…"
          style={{
            flex: 1,
            maxWidth: 520,
            padding: "14px 14px",
            borderRadius: 12,
            border: "1px solid #333",
            background: "#101010",
            color: "#eaeaea",
            fontSize: 16,
            textAlign: "center", // center text and placeholder
            outline: "none",
          }}
        />
        <button
          onClick={handleCheck}
          disabled={loading || !text.trim()}
          style={{
            padding: "14px 18px",
            borderRadius: 12,
            fontWeight: 800,
            background: loading || !text.trim() ? "#53471f" : "#f2c94c",
            color: "#1a1a1a",
            border: "none",
            cursor: loading || !text.trim() ? "not-allowed" : "pointer",
            minWidth: 132,
          }}
        >
          {loading ? "Checking…" : "Check Truth"}
        </button>
      </section>

      {/* Error */}
      {error && (
        <p style={{ color: "#ff6b6b", textAlign: "center", marginTop: 14 }}>
          {error}
        </p>
      )}

      {/* Result Card */}
      {score !== null && (
        <section
          style={{
            margin: "26px auto 0",
            background: "#0f0f0f",
            border: "1px solid #222",
            borderRadius: 14,
            padding: 16,
            maxWidth: 640,
          }}
        >
          <h2
            style={{
              margin: "0 0 10px 0",
              fontSize: 20,
              color: "#eaeaea",
              fontWeight: 700,
            }}
          >
            ✅ Truth Score:{" "}
            <span style={{ color: "#00e676" }}>{score}%</span>
          </h2>

          {/* Progress bar */}
          <div
            aria-label="Truth score progress"
            style={{
              width: "100%",
              height: 10,
              borderRadius: 999,
              background: "#1c1c1c",
              overflow: "hidden",
              border: "1px solid #2a2a2a",
            }}
          >
            <div
              style={{
                width: `${Math.max(0, Math.min(100, score))}%`,
                height: "100%",
                background:
                  score >= 70
                    ? "#00e676"
                    : score >= 40
                    ? "#ffca28"
                    : "#ff5252",
              }}
            />
          </div>

          <p style={{ marginTop: 12, color: "#cfcfcf" }}>{explanation}</p>
        </section>
      )}

      {/* About anchor */}
      <section id="about" style={{ marginTop: 48, textAlign: "center" }}>
        <h3 style={{ color: "#f2c94c", marginBottom: 8 }}>About TruCite</h3>
        <p style={{ color: "#cfcfcf", maxWidth: 800, margin: "0 auto" }}>
          TruCite delivers real-time verification, citations, bias checks, and
          compliance signals — your always-visible Truth Score across apps and
          platforms.
        </p>
      </section>

      {/* Center placeholder text */}
      <style jsx>{`
        input::placeholder {
          text-align: center;
          opacity: 1;
          color: #8a8a8a;
        }
        body, main { background: #0a0a0a; }
      `}</style>
    </main>
  );
}

const badgeStyle = {
  background: "rgba(242, 201, 76, 0.12)",
  border: "1px solid rgba(242, 201, 76, 0.3)",
  color: "#f2c94c",
  padding: "8px 12px",
  borderRadius: 999,
  fontWeight: 700,
  fontSize: 14,
};
