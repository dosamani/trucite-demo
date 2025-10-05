// app/layout.js
import "./globals.css";

export const metadata = { title: "TruCite" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="header__inner">
            <a href="/" className="brand">
              <img src="/trucite.png" alt="TruCite logo" className="brand__logo" />
              <span className="brand__name">TruCite</span>
            </a>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
