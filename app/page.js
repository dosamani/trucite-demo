export default function Home() {
  return (
    <section className="hero">
      <h1>Welcome to TruCite</h1>
      <p className="sub">
        The world’s first <strong>Truth OS</strong> for AI — a cross-platform,
        real-time engine for evaluating and scoring truth.
      </p>
      <p className="tag">⚡ Fast • 🔗 Transparent • 🧩 Plug &amp; Play</p>

      <style jsx>{`
        .hero{text-align:center}
        h1{margin:16px 0 8px;font-size:clamp(34px,6vw,56px);letter-spacing:-.02em}
        .sub{margin:0 auto;max-width:760px;font-size:clamp(18px,2.6vw,22px);color:#444;line-height:1.55}
        .sub strong{color:#111}
        .tag{margin-top:10px;font-weight:700;color:#f2c94c}
      `}</style>
    </section>
  );
}
