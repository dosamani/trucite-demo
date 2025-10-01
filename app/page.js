// app/page.js
export default function Home() {
  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "8px 18px 40px",
        textAlign: "center",
      }}
    >
      <img
        src="/logo.jpg"
        alt="TruCite Logo"
        style={{
          width: "clamp(70px,12vw,120px)",
          display: "block",
          margin: "10px auto 10px",
          borderRadius: 14,
          boxShadow:
            "0 6px 20px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.06) inset",
        }}
      />

      <h1
        style={{
          fontSize: "clamp(28px,5.8vw,56px)",
          lineHeight: 1.12,
          margin: "4px 0 0",
          fontWeight: 700,
          color: "#e9e9ea",
        }}
      >
        Welcome to{" "}
        <span style={{ color: "#f2c94c" }}>
          TruCite
        </span>
      </h1>

      <p
        style={{
          maxWidth: 820,
          margin: "10px auto 16px",
          fontSize: "clamp(16px,3.6vw,22px)",
          lineHeight: 1.5,
          color: "#c8c8cc",
        }}
      >
        The world’s first <strong style={{ color: "#e9e9ea" }}>Truth OS</strong>{" "}
        for AI — a cross-platform, real-time engine for evaluating and scoring
        truth.
      </p>

      {/* Input row */}
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 10,
          alignItems: "center",
          width: "min(780px,100%)",
          margin: "0 auto 14px",
          padding: 10,
          background: "rgba(255,255,255,.04)",
          border: "1px solid rgba(255,255,255,.06)",
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(0,0,0,.35)",
        }}
      >
        <input
          aria-label="Claim or snippet"
          placeholder="Paste a claim, answer, or snippet"
          style={{
            background: "rgba(255,255,255,.06)",
            color: "#e9e9ea",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 12,
            height: 48,
            padding: "0 14px",
            fontSize: "clamp(15px,3.8vw,18px)",
            textAlign: "center",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            height: 48,
            padding: "0 18px",
            minWidth: 126,
            borderRadius: 12,
            border: 0,
            fontWeight: 700,
            fontSize: "clamp(14px,3.6vw,18px)",
            color: "#1b1400",
            whiteSpace: "nowrap",
            cursor: "pointer",
            background:
              "linear-gradient(135deg,#f2c94c,#f6d87b 60%,#f9e8a9)",
            boxShadow: "0 8px 20px rgba(242,201,76,.25)",
          }}
        >
          Check Truth
        </button>
      </form>

      {/* Pills */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
          margin: "10px auto 0",
          color: "#c8c8cc",
          fontSize: "clamp(14px,3.6vw,18px)",
        }}
      >
        {["⚡ Fast", "🔗 Transparent", "✨ Plug & Play"].map((txt) => (
          <span
            key={txt}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.06)",
              color: "#e9e9ea",
            }}
          >
            {txt}
          </span>
        ))}
      </div>
    </main>
  );
}
