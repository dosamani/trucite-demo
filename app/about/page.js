export default function About() {
  const wrap = { maxWidth: 720, margin: "48px auto", lineHeight: 1.6, fontSize: 16 };
  const h2 = { fontSize: 28, fontWeight: 700, marginBottom: 12 };
  const p  = { opacity: 0.9, marginBottom: 14 };

  return (
    <main style={wrap}>
      <h2 style={h2}>About TruCite</h2>
      <p style={p}>
        TruCite is building a <strong>Truth OS</strong> for AI — a cross-platform, always-on layer
        that evaluates claims in real time and returns a transparent <em>Truth Score</em> with
        verifiable citations.
      </p>
      <p style={p}>
        MVP goal: a lightweight demo that takes a claim, runs a deterministic verification routine,
        and shows a score + sources. From there, we’ll expand to editor plugins and enterprise APIs.
      </p>
      <p style={p}>
        Questions or want early access? Visit the Carrd site and join the waitlist.
      </p>
    </main>
  );
}
