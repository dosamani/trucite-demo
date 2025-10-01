"use client";

// app/about/page.js
export default function About() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px", color: "#eaeaea" }}>
      <h1 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 700, marginBottom: "20px" }}>
        About TruCite
      </h1>
      <p style={{ lineHeight: 1.6, marginBottom: "20px" }}>
        TruCite is building a <strong>Truth OS for AI</strong> — a transparent,
        real-time verification layer that evaluates claims, detects uncertainty,
        and generates a clear <em>Truth Score</em> with verifiable citations.
      </p>
      <p style={{ lineHeight: 1.6, marginBottom: "20px" }}>
        Our approach draws on cutting-edge methods like <strong>TruthRL</strong> 
        (reinforcement learning for truthfulness) and deterministic verification
        routines. By combining retrieval, abstention logic, and citation 
        grounding, TruCite helps reduce hallucinations and improve trust in AI output.
      </p>
      <p style={{ lineHeight: 1.6, marginBottom: "20px" }}>
        <strong>MVP goal:</strong> deliver a lightweight demo that takes a claim,
        runs a verification routine, and returns a transparent score with sources. 
        From there, we’ll expand into editor plugins, enterprise APIs, and 
        platform integrations.
      </p>
      <p style={{ lineHeight: 1.6 }}>
        🚀 Want to follow our progress or join the waitlist? 
        <a 
          href="https://trucite-demo.vercel.app" 
          style={{ color: "#facc15", marginLeft: "5px" }}
        >
          Sign up here
        </a>
      </p>
    </main>
  );
}
