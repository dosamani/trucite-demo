// app/layout.js

export const metadata = {
  title: "TruCite",
  description:
    "Truth OS — real-time engine for evaluating and scoring truth.",
};

import "./globals.css";

/**
 * Small server component that shows the current short commit hash,
 * linking to the commit on GitHub. It reads build envs that Netlify
 * injects (COMMIT_REF, BRANCH). If none exist (e.g., local dev),
 * it renders nothing.
 */
function CommitBadge() {
  // Netlify injects COMMIT_REF and BRANCH on builds
  const fullSha =
    process.env.COMMIT_REF ||
    process.env.NEXT_PUBLIC_COMMIT ||
    "";
  const shortSha = fullSha ? fullSha.slice(0, 7) : "";
  const branch =
    process.env.BRANCH ||
    process.env.NEXT_PUBLIC_BRANCH ||
    "main";

  if (!shortSha) return null;

  // If you ever change the repo, update this base URL:
  const repoBase =
    process.env.NEXT_PUBLIC_REPO_URL ||
    "https://github.com/dosamani/trucite-demo";
  const href = `${repoBase}/commit/${fullSha}`;

  return (
    <a
      href={href}
      className="commit-badge"
      target="_blank"
      rel="noopener noreferrer"
      title={`Commit ${shortSha} on ${branch}`}
    >
      {branch}@{shortSha}
    </a>
  );
}

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
            </a>
            <span className="brand_name">TruCite</span>

            {/* Commit hash (right side of header) */}
            <CommitBadge />
          </div>

          <nav className="nav nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>

          <div className="site-header__rule" />
        </header>

        {children}
      </body>
    </html>
  );
}
