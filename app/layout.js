import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: "flex", alignItems: "center", padding: "1rem", background: "#0a192f", color: "white" }}>
          <Image src="/logo.jpg" alt="TruCite Logo" width={40} height={40} />
          <nav style={{ marginLeft: "1rem" }}>
            <Link href="/" style={{ margin: "0 1rem" }}>Home</Link>
            <Link href="/about" style={{ margin: "0 1rem" }}>About</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
