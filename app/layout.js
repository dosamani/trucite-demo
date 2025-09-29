import './globals.css';
export const metadata = {
  title: "TruCite",
  description: "The Truth OS for AI",
  icons: {
    icon: "/favicon.ico",   // Path to your favicon in public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="wrap">
            <div className="brand">
              <img
                src="/logo.jpg"
                alt="TruCite Logo"
                style={{
                  width: "22px",
                  height: "22px",
                  objectFit: "contain",
                  marginRight: "8px"
                }}
              />
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
          * {
            box-sizing: border-box;
          }
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          .site-header {
            background: #000;
            padding: 0.8rem 1rem;
          }
          .site-header .wrap {
            max-width: 980px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .brand {
            display: flex;
            align-items: center;
          }
          .brand span {
            font-weight: 800;
            color: #f2c94c;
            font-size: 1.2rem;
          }
          nav a {
            color: #fff;
            text-decoration: none;
            margin-left: 1rem;
            font-size: 1rem;
          }
          .goldbar {
            height: 3px;
            background: #f2c94c;
          }
          .content {
            max-width: 980px;
            margin: 0 auto;
            padding: 2rem;
          }
        `}</style>
      </body>
    </html>
  );
}
