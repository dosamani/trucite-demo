"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [resp, setResp] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Hero / Header */}
      <img
        src="/logo.jpg"
        alt="TruCite Logo"
        style={{
          width: "120px",
          margin: "20px auto",
          borderRadius: 14,
        }}
      />

      <h1
        style={{
          fontSize: "clamp(28px, 5.8vw, 56px)",
          fontWeight: 700,
          color: "#f2c94c",
          margin: "10px 0",
        }}
      >
        Welcome to <span style={{ color: "#f2c94c" }}>TruCite</span>
      </h1>

      <p
        style={{
          fontSize: "clamp(16px, 3.6vw, 22px)",
          color: "#ccc",
          lineHeight: 1.5,
          margin: "0 auto 40px",
          maxWidth: 820,
        }}
      >
        The world’s first <strong style={{ color: "#e9e9ea" }}>Truth OS</strong>{" "}
        — a cross-platform, real-time engine for evaluating and scoring truth.
      </p>

      {/* Input + Button */}
      <div
        style={{
          margin: "0 auto 20px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a claim, answer, or snippet…"
          style={{
            flex: 1,
            maxWidth: "400px",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #333",
            fontSize: "16px",
            textAlign: "center", // centers both input and typed text
          }}
        />
        <button
          onClick={async () => {
            setLoading(true);
            try {
              const r = await fetch("/api/hello");
              const j = await r.json();
              setResp(j);
            } finally {
              setLoading(false);
            }
          }}
          style={{
            padding: "14px 20px",
            borderRadius: "10px",
            fontWeight: 700,
            background: "#f2c94c",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Checking…" : "Check Truth"}
        </button>
      </div>

      {/* Features Strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "30px",
        }}
      >
        <span style={{ color: "#f2c94c" }}>⚡ Fast</span>
        <span style={{ color: "#f2c94c" }}>🔗 Transparent</span>
        <span style={{ color: "#f2c94c" }}>✨ Plug & Play</span>
      </div>

      {/* Response Output */}
      {resp && (
        <pre
          style={{
            textAlign: "left",
            marginTop: "20px",
            padding: "12px",
            background: "#111",
            borderRadius: "8px",
            color: "#0f0",
          }}
        >
          {JSON.stringify(resp, null, 2)}
        </pre>
      )}

      {/* Center placeholder text */}
      <style jsx>{`
        input::placeholder {
          text-align: center;
          opacity: 1;
          color: #777;
        }
      `}</style>
    </main>
  );
}
