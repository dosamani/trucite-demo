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
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "28px 16px 60px",
        color: "#eaeaea",
        textAlign: "center",
      }}
    >
      {/* HERO */}
      <section>
        <img
          src="/logo.jpg"
          alt="TruCite Logo"
          className="heroLogo"
          style={{
            width: 160,
            margin: "26px auto 14px",
            borderRadius: 20,
            display: "block",
          }}
          draggable={false}
        />

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

        {/* Feature badges in one row on most screens */}
        <div className="featureRow" style={{ marginTop: 10, marginBottom: 22 }}>
          {[
            { icon: "⚡", label: "Fast" },
            { icon: "🔗", label: "Transparent" },
            { icon: "✨", label: "Plug & Play" },
          ].map((b) => (
            <div
              key={b.label}
              style={{
                border: "1px solid rgba(255,255,255,.12)",
                padding: "10px 18px",
                borderRadius: 16,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
                boxShadow: "0 2px 8px rgba(0,0,0,.25) inset",
                minWidth: 124,
              }}
            >
              <span style={{ fontSize: 18, marginRight: 8 }}>{b.icon}</span>
              <span style={{ fontWeight: 600 }}>{b.label}</span>
            </div>
          ))}
        </div>

        {/* Input + CTA */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 14,
            alignItems: "center",
            maxWidth: 820,
            margin: "0 auto",
          }}
        >
          <input
            className="inputCentered"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste a claim, answer, or snippet"
            style={{
              height: 56,
              borderRadius: 16,
              padding: "0 16px",
              background: "rgba(0,0,0,.35)",
              border: "1px solid rgba(255,255,255,.14)",
              color: "#eaeaea",
            }}
          />
          <button
            className="ctaPrimary"
            onClick={handleCheck}
            disabled={loading || !text.trim()}
            style={{
              height: 56,
              minWidth: 138,
              borderRadius: 16,
              border: "1px solid rgba(0,0,0,.4)",
              background:
                "linear-gradient(180deg, #f2c94c 0%, #e1b842 100%)",
              color: "#1a1300",
              fontWeight: 800,
              boxShadow: "0 8px 22px rgba(242, 201, 76, .18)",
              opacity: loading || !text.trim() ? 0.7 : 1,
            }}
          >
            {loading ? "Checking…" : "Check Truth"}
          </button>
        </div>

        {/* Links row */}
        <hr
          style={{
            margin: "22px auto 14px",
            maxWidth: 860,
            border: "none",
            borderTop: "1px solid rgba(255,255,255,.08)",
          }}
        />
        <nav
          style={{
            display: "flex",
            gap: 26,
            flexWrap: "wrap",
            justifyContent: "center",
            fontWeight: 600,
          }}
        >
          <a
            href="https://docs.google.com/document/d/1IQM-Qe-SARh9zOm6HT7YYhYxfO4Q2GEVDTt9ZavyA5E/edit?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ
          </a>
          <a href="mailto:founder@trucite.ai">Contact Us</a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_SUGGESTIONS_FORM_ID/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suggestions
          </a>
          <a
            href="https://docs.google.com/document/d/1ZBRksw_MOzfvP4cqxxnQp54cz-aqXF5j-jsur-EdL3E/edit?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>
          <a
            href="https://docs.google.com/document/d/1Byzx9_CRe8QT4_pEA5X-EWoVl2GIjt3dJ2pUunfE_Kc/edit?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
          <a
            href="https://docs.google.com/document/d/1IQM-Qe-SARh9zOm6HT7YYhYxfO4Q2GEVDTt9ZavyA5E/edit?usp=drivesdk#heading=h.disclaimer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Disclaimer
          </a>
        </nav>
      </section>

      {/* (Optional) result section could go here */}
      {error && (
        <p style={{ color: "#ff8080", marginTop: 16, fontWeight: 600 }}>
          {error}
        </p>
      )}
      {score !== null && (
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 18, fontWeight: 800 }}>
            Truth Score: {score}
          </div>
          {explanation && (
            <p style={{ maxWidth: 820, margin: "8px auto 0", color: "#d8d8d8" }}>
              {explanation}
            </p>
          )}
        </div>
      )}
    </main>
  );
}
