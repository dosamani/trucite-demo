export default function Home() {
  const hero = {
    textAlign: "center",
    marginTop: 80,
  };

  const h1 = {
    fontSize: 36,
    fontWeight: 700,
    marginBottom: 16,
  };

  const p = {
    fontSize: 18,
    maxWidth: 600,
    margin: "0 auto",
    opacity: 0.85,
  };

  return (
    <main style={hero}>
      <h1 style={h1}>Welcome to TruCite</h1>
      <p style={p}>
        The world’s first <strong>Truth OS</strong> for AI — 
        a cross-platform, real-time engine for evaluating and scoring truth.
      </p>
    </main>
  );
}
