import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">
          <Image src="/trucite.png" alt="TruCite logo" width={48} height={48} />
          <span className="brand">TruCite</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main>
        <div className="hero">
          <Image src="/trucite.png" alt="TruCite logo large" width={320} height={320} />
          <h1>Welcome to <span className="highlight">TruCite</span></h1>
          <p>
            The world’s first <b>Truth OS</b> — a cross-platform, real-time engine
            for evaluating and scoring truth.
          </p>
          <div className="chips">
            <span className="chip">⚡ Fast</span>
            <span className="chip">🔗 Transparent</span>
            <span className="chip">✨ Plug & Play</span>
          </div>
          <div className="inputRow">
            <input placeholder="Paste a claim, answer, or snippet" />
            <button>Check Truth</button>
          </div>
        </div>
      </main>

      <footer>
        <nav className="footerNav">
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
          <a href="#">Suggestions</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Disclaimer</a>
        </nav>
      </footer>
    </div>
  );
}
