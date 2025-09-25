// app/layout.js
export const metadata = {
  title: "TruCite",
  description: "Truth OS for AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav">
            <a className="brand" href="/">
              <img src="/logo.jpg" alt="TruCite" className="brand-logo" />
              <span className="brand-text">TruCite</span>
            </a>

            <nav className="links">
              <a href="/">Home</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>

        <main className="page">{children}</main>

        <style jsx global>{`
          :root {
            --bg: #0a0a0a;
            --text: #f6f6f6;
            --muted: #cfcfcf;
            --gold: #f5c518;
            --border: rgba(255,255,255,0.08);
            --maxw: 1100px;
          }
          html, body { margin:0; padding:0; background:var(--bg); color:var(--text); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
          a { color: inherit; text-decoration: none; }

          .container { width:100%; max-width: var(--maxw); margin:0 auto; padding:0 20px; }

          /* Header */
          .site-header {
            position: sticky; top:0; z-index: 40;
            background:#000; border-bottom: 1px solid var(--border);
          }
          .nav {
            height:64px; display:flex; align-items:center; justify-content:space-between;
          }
          .brand { display:flex; gap:10px; align-items:center; }
          .brand-logo { width:36px; height:36px; object-fit:contain; }
          .brand-text { font-weight:800; font-size:22px; color: var(--gold); letter-spacing: .3px; }

          .links { display:flex; gap:22px; }
          .links a { color: var(--text); opacity:.9; }
          .links a:hover { opacity:1; color: var(--gold); }

          /* Main pushes down under sticky header */
          .page { min-height: 100vh; }
        `}</style>
      </body>
    </html>
  );
}
