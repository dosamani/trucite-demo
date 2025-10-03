export const metadata = {
  title: "TruCite",
  description: "Truth OS — real-time engine for evaluating and scoring truth.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header__inner">
            <a className="brand" href="/">
              <img
                src="/logo.jpg"
                alt="TruCite"
                className="brand__logo"
                draggable="false"
              />
              <span className="brand__name">TruCite</span>
            </a>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
            </nav>
          </div>
          <div className="site-header__rule" />
        </header>

        {children}
      </body>
    </html>
  );
}
