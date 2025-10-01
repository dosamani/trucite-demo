import "./globals.css";
import Link from "next/link";

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
              <img src="/logo.jpg" alt="TruCite" className="logo" />
              <span>TruCite</span>
            </div>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link> {/* ✅ fixed link */}
            </nav>
          </div>
        </header>

        <div className="goldbar" />
        <main className="content">{children}</main>
      </body>
    </html> 
  );
}
