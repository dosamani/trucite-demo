export const metadata = {
  title: "TruCite MVP",
  description: "The Truth OS for AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#0A2540",
            color: "white",
          }}
        >
          <img
            src="/logo.png"
            alt="TruCite Logo"
            style={{ height: "40px", marginRight: "1rem" }}
          />
          <nav>
            <a href="/" style={{ color: "white", marginRight: "1rem" }}>
              Home
            </a>
            <a href="/about" style={{ color: "white" }}>
              About
            </a>
          </nav>
        </header>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
