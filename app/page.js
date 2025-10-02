"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [resp, setResp] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "20px" }}>
      {/* …keep your existing header/hero… */}

      <div style={{
        marginTop: 24, display: "flex", gap: 12, alignItems: "center",
        background: "rgba(255,255,255,0.06)", padding: 12, borderRadius: 12
      }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a claim, answer, or snippet…"
          style={{ flex: 1, padding: "12px 14px", borderRadius: 10, border: "1px solid #333" }}
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
          style={{ padding: "12px 16px", borderRadius: 10, fontWeight: 700 }}
        >
          {loading ? "Checking…" : "Check Truth"}
        </button>
      </div>

      {resp && (
        <pre style={{ textAlign: "left", marginTop: 16 }}>
          {JSON.stringify(resp, null, 2)}
        </pre>
      )}
    </main>
  );
}
