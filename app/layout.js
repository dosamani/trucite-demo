// app/layout.js
import "./globals.css";

export const metadata = {
  title: "TruCite",
  description: "The world’s first Truth OS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="header_inner">
            <a className="brand" href="/">
              <img src="/trucite.png" alt="TruCite logo" className="brand_logo" />
              <span className="brand_name">TruCite</span>
            </a>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>

        <main className="page">{children}</main>
      </body>
    </html>
  );
}
