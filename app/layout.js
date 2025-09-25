import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "TruCite MVP",
  description: "The Truth OS for AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px 16px",
            backgroundColor: "#000",
            borderBottom: "2px solid #D4AF37",
          }}
        >
          <Image src="/logo.png" alt="TruCite logo" width={40} height={40} priority />
          <span style={{ fontWeight: 700, fontSize: "1.2rem", color: "#D4AF37" }}>
            TruCite
          </span>
          <nav style={{ marginLeft: "auto", display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
          </nav>
        </header>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
