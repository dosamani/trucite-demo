import './globals.css';

export const metadata = {
  title: "TruCite",
  description: "The Truth OS for AI",
  icons: {
    icon: "/favicon.ico", // replace if you want a custom favicon
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
                  marginRight: "8px",
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
      </body>
    </html>
  );
}
