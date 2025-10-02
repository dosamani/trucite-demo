// app/layout.js — TruCite root layout
import "./globals.css";

export const metadata = {
  title: "TruCite",
  description:
    "The world’s first Truth OS — a cross-platform, real-time engine for evaluating and scoring truth.",
  icons: { icon: "/logo.jpg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Site header */}
        <header>
          <nav
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#f2c94c",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              <img
                src="/logo.jpg"
                alt="TruCite logo"
                width="28"
                height="28"
                className="heroLogo"
                style={{ borderRadius: 6 }}
              />
              TruCite
            </a>

            <div style={{ display: "flex", gap: 22 }}>
              <a href="/" style={{ color: "#eaeaea", textDecoration: "none" }}>
                Home
              </a>
              <a
                href="/about"
                style={{ color: "#eaeaea", textDecoration: "none" }}
              >
                About
              </a>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main style={{ maxWidth: 980, margin: "0 auto", padding: "28px 16px 60px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
