"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [error, setError] = useState("");

  async function handleCheck(e) {
    e.preventDefault();
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
      setScore(data?.score ?? null);
      setExplanation(data?.explanation ?? "");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const LINKS = {
    faq: "https://docs.google.com/document/d/1IQM-Qe-SARh9zOm6HT7YYhYxfO4Q2GEVDTt9ZavyA5E/edit?usp=drivesdk",
    terms: "https://docs.google.com/document/d/1ZBRksw_MOzfvP4cqxxnQp54cz-aqXF5j-jsur-EdL3E/edit?usp=drivesdk",
    privacy: "https://docs.google.com/document/d/1Byzx9_CRe8QT4_pEA5X-EWoVl2GIjt3dJ2pUunfE_Kc/edit?usp=drivesdk",
    disclaimer:
      "https://docs.google.com/document/d/1ZBRksw_MOzfvP4cqxxnQp54cz-aqXF5j-jsur-EdL3E/edit?usp=drivesdk",
    suggestions: "https://forms.gle/REPLACE_WITH_REAL_FORM_ID",
    contact: "mailto:founder@trucite.ai",
  };

  return (
    
    <section className="hero">
  <div className="heroCard">
    {/* Prefer /logo.png with transparent background */}
    <img src="/logo.png" alt="TruCite" className="heroLogo" />
  </div>

  <h1>Welcome to <span style={{color:'var(--brand)'}}>TruCite</span></h1>
  <p className="tagline">
    The world’s first <strong>Truth OS</strong> — a cross-platform, real-time engine for evaluating and scoring truth.
  </p>

  <div className="badges">
    <div className="badge"><span className="icon">⚡</span> Fast</div>
    <div className="badge"><span className="icon">🔗</span> Transparent</div>
    <div className="badge"><span className="icon">✨</span> Plug &amp; Play</div>
  </div>

  <div className="inputRow">
    <input type="text" placeholder="Paste a claim, answer, or snippet" />
    <button className="cta">Check Truth</button>
  </div>
</section>

      <hr className="divider" />
      <nav className="footer-links">
        <a href={LINKS.faq} target="_blank" rel="noreferrer">
          FAQ
        </a>
        <a href={LINKS.contact}>Contact Us</a>
        <a href={LINKS.suggestions} target="_blank" rel="noreferrer">
          Suggestions
        </a>
        <a href={LINKS.terms} target="_blank" rel="noreferrer">
          Terms
        </a>
        <a href={LINKS.privacy} target="_blank" rel="noreferrer">
          Privacy
        </a>
        <a href={LINKS.disclaimer} target="_blank" rel="noreferrer">
          Disclaimer
        </a>
      </nav>
    </>
  );
}
