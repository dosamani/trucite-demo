import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: "flex", alignItems: "center", padding: "1rem", background: "black", color: "gold" }}>
          <Image
  src="/Logo.jpg"   // ← match the exact case: Logo.jpg vs logo.jpg
  alt="TruCite Logo"
  width={40}
  height={40}
  priority
/>
          <h1 style={{ marginLeft: "0.5rem", color: "gold" }}>TruCite</h1>
          <nav style={{ marginLeft: "auto" }}>
            <a href="/" style={{ margin: "0 1rem", color: "white" }}>Home</a>
            <a href="/about" style={{ margin: "0 1rem", color: "white" }}>About</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
