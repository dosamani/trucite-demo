// app/about/page.js
export default function About() {
  return (
    <main style={{ padding: "2rem 1rem", color: "#e9e9e9" }}>
      <h1 style={{ color: "#f2c94c", marginBottom: 8 }}>About TruCite</h1>
      <p style={{ maxWidth: 720, lineHeight: 1.6 }}>
        TruCite is building the Truth OS for AI — a transparent, real-time scoring and verification
        layer that helps teams evaluate the factuality and reliability of AI outputs. This MVP demo
        uses mocked data to illustrate the end-to-end flow.
      </p>
    </main>
  );
}
