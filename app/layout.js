// app/layout.js
export const metadata = {
  title: "TruCite",
  description:
    "Truth OS — real-time engine for evaluating and scoring truth.",
};

import "./globals.css";

const COMMIT_REF = process.env.COMMIT_REF || "";
const BRANCH = process.env.BRANCH || "";
const REPO_URL =
  process.env.NEXT_PUBLIC_REPO_URL ||
  "https://github.com/dosamani/trucite-demo";

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
                className="brand_logo"
                draggable="false"
              />
              <span className="brand_name">TruCite</span>
            </a>

            <nav className="nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
            </nav>

            {/* Commit badge, always shows on Netlify builds */}
            {COMMIT_REF && (
              <a
                className="commit-badge"
                href={`${REPO_URL}/commit/${COMMIT_REF}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Commit ${COMMIT_REF.slice(0, 7)} on ${BRANCH || "main"}`}
              >
                {BRANCH || "main"}@{COMMIT_REF.slice(0, 7)}
              </a>
            )}
          </div>

          <div className="site-header__rule" />
        </header>

        {children}
      </body>
    </html>
  );
}
