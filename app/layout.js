export const metadata = {
  title: "TruCite",
  description:
    "The world’s first Truth OS — a cross-platform, real-time engine for evaluating and scoring truth.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="header-inner">
            <div className="brand">
              <img src="/logo.jpg" alt="" className="brand-mark" />
              <span className="brand-name">TruCite</span>
            </div>
            <nav className="nav">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
