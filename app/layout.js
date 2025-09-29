"use client";

export const metadata = {
  title: "TruCite",
  description: "The Truth OS for AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="wrap">
            <div className="brand">
              <img src="/logo.jpg" alt="TruCite Logo" />
              <span>TruCite</span>
            </div>
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <div className="goldbar" />
        <main className="content">{children}</main>

        <style jsx global>{`
          :root{--black:#0a0a0a;--gold:#f2c94c;--text:#111;--muted:#444}
          *{box-sizing:border-box}html,body{margin:0;padding:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial}
          .site-header{background:var(--black);color:#fff}
          .site-header .wrap{max-width:980px;margin:0 auto;padding:12px 16px;display:flex;align-items:center;justify-content:space-between}
          .brand{display:flex;align-items:center;gap:10px}
          .brand img{width:28px;height:28px;object-fit:contain;border-radius:4px;background:#000}
          .brand span{font-weight:800;color:var(--gold);font-size:20px;letter-spacing:.3px}
          nav a{color:#fff;text-decoration:none;margin-left:18px;font-weight:600}
          .goldbar{height:3px;background:var(--gold)}
          .content{max-width:980px;margin:0 auto;padding:28px 16px 80px}
        `}</style>
      </body>
    </html>
  );
}
