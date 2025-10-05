import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className="nav flex justify-between items-center px-6 py-4">
        <h2 className="text-xl font-bold text-yellow-500">TruCite</h2>
        <div className="space-x-6">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero text-center py-10">
        <div className="heroLogoWrap">
          <Image
            src="/trucite.png"   // make sure your logo is inside /public
            alt="TruCite logo"
            width={260}
            height={260}
            priority
            className="heroLogo"
          />
        </div>

        <h1 className="text-4xl font-bold mt-6">Welcome to TruCite</h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          The world’s first <strong>Truth OS</strong> — a cross-platform,
          real-time engine for evaluating and scoring truth.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm">
            ⚡ Fast
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm">
            🔗 Transparent
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm">
            ✨ Plug & Play
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <input
            type="text"
            placeholder="Paste a claim, answer, or snippet"
            className="px-4 py-2 w-80 rounded border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="mt-4 px-6 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400">
            Check Truth
          </button>
        </div>

        {/* FOOTER */}
        <footer className="mt-12 text-sm text-yellow-500 space-x-4">
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact Us</a>
          <a href="/suggestions">Suggestions</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/disclaimer">Disclaimer</a>
        </footer>
      </section>
    </main>
  );
}
