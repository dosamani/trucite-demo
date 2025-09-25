export const metadata = {
  title: "TruCite MVP",
  description: "The Truth OS for AI",
};

export default function RootLayout({ children }) {
  const shell = { maxWidth: 960, margin: "0 auto", padding: "24px", fontFamily: "sans-serif" };
  const nav  = { display: "flex", gap: 16, marginBottom: 24, alignItems: "center" };
  const link = { textDecoration: "none", color: "#0366d6", fontWeight: 600 };

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <div style={shell}>
          <nav style={nav}>
            <a href="/" style={link}>Home</a>
            <a href="/about" style={link}>About</a>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
