export const metadata = {
  title: "TruCite MVP",
  description: "The Truth OS for AI",
};

export default function RootLayout({ children }) {
  const wrap = {
    minHeight: "100vh",
    background: "#0b0b0e",
    color: "#eaeaea",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    lineHeight: 1.5,
  };

  const container = {
    maxWidth: 900,
    margin: "0 auto",
    padding: "24px 20px 56px",
  };

  const nav = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    borderBottom: "1px solid #222",
    marginBottom: 24,
  };

  const brand = { fontWeight: 700, letterSpacing: 0.3, fontSize: 18 };
  const links = { display: "flex", gap: 16, fontSize: 15 };

  const a = {
    color: "#eaeaea",
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: 8,
    border: "1px solid transparent",
  };

  const aHover = { borderColor: "#2a2a2f", background: "#141418" };

  // tiny helper to mimic :hover on mobile tap as well
  const Link = ({ href, children }) => (
    <a
      href={href}
      style={a}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, aHover)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, a)}
    >
      {children}
    </a>
  );

  return (
    <html lang="en">
      <body style={wrap}>
        <div style={container}>
          <nav style={nav}>
            <div style={brand}>🚀 TruCite MVP</div>
            <div style={links}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>

          {children}

          <footer style={{ marginTop: 48, borderTop: "1px solid #222", paddingTop: 16, fontSize: 13, opacity: 0.8 }}>
            © {new Date().getFullYear()} TruCite.ai — “Truth OS for AI”
          </footer>
        </div>
      </body>
    </html>
  );
}
