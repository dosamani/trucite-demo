export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        color: "#fff",
        background: "linear-gradient(to bottom, #000000, #1a1a1a)",
        minHeight: "100vh",
      }}
    >
      {/* Logo centered above heading */}
      <img
        src="/logo.jpg"
        alt="TruCite Logo"
        style={{
          width: "64px",
          height: "64px",
          objectFit: "contain",
          marginBottom: "1rem",
        }}
      />

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Welcome to <span style={{ color: "#f2c94c" }}>TruCite</span>
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6",
          marginBottom: "2rem",
        }}
      >
        The world’s first <strong>Truth OS</strong> for AI — a cross-platform,
        real-time engine for evaluating and scoring truth.
      </p>

      {/* Claim input + button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <input
          type="text"
          placeholder="Paste a claim, answer, or snippet"
          style={{
            padding: "0.75rem 1rem",
            border: "none",
            borderRadius: "6px 0 0 6px",
            width: "300px",
            fontSize: "1rem",
            background: "#333",
            color: "#fff",
          }}
        />
        <button
          style={{
            padding: "0.75rem 1.25rem",
            background: "linear-gradient(90deg, #f2c94c, #f2994a)",
            border: "none",
            borderRadius: "0 6px 6px 0",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Check Truth
        </button>
      </div>

      <p
        style={{
          marginTop: "1.5rem",
          fontWeight: "500",
          color: "#ccc",
        }}
      >
        ⚡ Fast · 🔗 Transparent · ✨ Plug & Play
      </p>
    </main>
  );
}
