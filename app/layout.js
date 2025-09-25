export const metadata = {
  title: "TruCite MVP",
  description: "The Truth OS for AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "'Inter', sans-serif", backgroundColor: "#F9FAFB" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.75rem 2rem",
            backgroundColor: "#0A2540", // deep navy brand
            color: "white",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo.png"
              alt="TruCite"
              style={{ height: "36px", marginRight: "0.75rem" }}
            />
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>TruCite</span>
          </div>
          <nav>
            <a href="/" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>
              Home
            </a>
            <a href="/about" style={{ color: "white", textDecoration: "none" }}>
              About
            </a>
          </nav>
        </header>
        <main style={{ padding: "2rem", textAlign: "center" }}>{children}</main>
      </body>
    </html>
  );
}
