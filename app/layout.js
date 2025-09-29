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
              <img src="/logo.jpg" alt="TruCite" />
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

        {/* All critical styles live here so nothing breaks */}
        <style jsx global>{`
          :root { --black: #0a0a0a; --gold: #f2c94c; }

          html, body { margin: 0; padding: 0; height: 100%; }
          body {
            background: radial-gradient(1200px 600px at 50% -10%, #1a1a1a, var(--black) 50%, #000 100%);
            color: #e5e5e5;
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Inter, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          }

          .site-header {
            background: #0b0b0b;
            border-bottom: 2px solid #1f1f1f;
            position: sticky; top: 0; z-index: 20;
          }
          .wrap {
            max-width: 980px; margin: 0 auto; padding: .9rem 1rem;
            display: flex; align-items: center; justify-content: space-between;
          }
          .brand { display: flex; align-items: center; gap: .6rem; }
          .brand img { width: 28px; height: 28px; object-fit: contain; border-radius: 4px; }
          .brand span { font-weight: 800; color: var(--gold); font-size: 1.25rem; letter-spacing: .2px; }

          nav { display: flex; gap: 1.25rem; }
          nav a {
            color: #e7e7e7; text-decoration: none; font-weight: 600;
          }
          nav a:hover { color: var(--gold); }

          .goldbar { height: 3px; background: var(--gold); }

          .content { max-width: 980px; margin: 0 auto; padding: 2rem 1rem 4rem; }

          /* Home & demo styles */
          .home { display: flex; flex-direction: column; align-items: center; }
          .heroTitle {
            text-align: center;
            font-size: clamp(2.2rem, 6vw, 4rem);
            font-weight: 900;
            margin: 2rem 0 .75rem;
            color: #fafafa; /* ensure NOT faded */
            letter-spacing: .3px;
          }
          .heroTitle span { color: var(--gold); }
          .heroSubtitle {
            text-align: center;
            max-width: 900px;
            color: #d8d8d8;
            line-height: 1.6;
            font-size: clamp(1rem, 2.7vw, 1.2rem);
            margin: 0 0 1.6rem;
          }

          .demo {
            width: 100%;
            max-width: 980px;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            padding: 1rem;
            box-shadow: 0 18px 60px rgba(0,0,0,.45);
            backdrop-filter: blur(3px);
          }
          .inputRow { display: grid; grid-template-columns: 1fr auto; gap: .8rem; }
          .queryInput {
            padding: .95rem 1rem; border-radius: 12px; outline: none; border: 1px solid rgba(255,255,255,.12);
            background: rgba(10,10,10,.65); color: #f6f6f6;
          }
          .queryInput::placeholder { color: #9aa0a6; }
          .ctaBtn {
            padding: .95rem 1rem; border-radius: 12px; border: none;
            background: linear-gradient(90deg, var(--gold), #f5a524); color: #111; font-weight: 800;
          }
          .ctaBtn:disabled { opacity: .6; }

          .resultCard { margin-top: 1rem; border-top: 1px dashed rgba(255,255,255,.12); padding-top: 1rem; }
          .scoreHeader { display: flex; gap: 1rem; align-items: center; }
          .scoreValue { font-size: clamp(2.2rem, 7vw, 3.2rem); font-weight: 900; line-height: 1; }
          .scoreMeta { flex: 1; }
          .scoreLabel { font-weight: 700; margin-bottom: .35rem; }
          .scoreBar { width: 100%; height: 10px; background: rgba(255,255,255,.08); border-radius: 999px; overflow: hidden; }
          .scoreFill { height: 100%; border-radius: 999px; }

          .citationsTitle { margin-top: .8rem; font-weight: 700; color: #eaeaea; }
          .citations ul { list-style: none; padding: 0; margin: .4rem 0 0; display: grid; gap: .45rem; }
          .citations li a { color: #cbd5e1; text-decoration: underline; }
          .badge {
            display: inline-block; padding: .15rem .5rem; border-radius: 999px; font-size: .75rem;
            font-weight: 700; margin-right: .5rem; text-transform: capitalize; background: rgba(255,255,255,.08);
          }
          .badge.supports { color: #16a34a; background: rgba(22,163,74,.12); }
          .badge.neutral  { color: #f59e0b; background: rgba(245,158,11,.12); }
          .badge.disputes { color: #ef4444; background: rgba(239,68,68,.12); }

          .pillars { margin-top: 1rem; color: #f1f1f1; opacity: .9; text-align: center; }

          @media (max-width: 640px) {
            .wrap { padding: .8rem .9rem; }
            .demo { padding: .9rem; }
          }
        `}</style>
      </body>
    </html>
  );
}
