export default function About() {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
        color: "#e9e9ea",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 700,
          color: "#f2c94c",
          marginBottom: 16,
        }}
      >
        About TruCite
      </h1>
      <p style={{ lineHeight: 1.6 }}>
        TruCite is building the Truth OS for AI — a transparent, real-time
        scoring and verification layer that helps teams evaluate the factuality
        and reliability of AI outputs. This MVP demo uses mocked data to
        illustrate the end-to-end flow.
      </p>
    </div>
  );
}
