import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Header / Navbar */}
      <header className="w-full flex justify-between items-center py-4 px-6 bg-black">
        <div className="flex items-center space-x-2">
          <Image
            src="/trucite.png"
            alt="TruCite logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-yellow-400">TruCite</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-yellow-400 hover:underline">
            Home
          </a>
          <a href="#" className="text-yellow-400 hover:underline">
            About
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-4xl font-extrabold">Welcome to TruCite</h1>
        <p className="text-lg max-w-2xl text-gray-300">
          The world’s first <span className="font-bold text-white">Truth OS</span> — 
          a cross-platform, real-time engine for evaluating and scoring truth.
        </p>

        {/* Feature Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-white text-black px-4 py-2 rounded-full shadow">
            ⚡ Fast
          </span>
          <span className="bg-white text-black px-4 py-2 rounded-full shadow">
            🔗 Transparent
          </span>
          <span className="bg-white text-black px-4 py-2 rounded-full shadow">
            ✨ Plug & Play
          </span>
        </div>

        {/* Input + Button */}
        <div className="flex w-full max-w-md mt-6">
          <input
            type="text"
            placeholder="Paste a claim, answer, or snippet"
            className="flex-1 px-4 py-2 rounded-l-lg border border-gray-500 bg-black text-white focus:outline-none"
          />
          <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-r-lg">
            Check Truth
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-yellow-400 space-x-4">
        <a href="#">FAQ</a>
        <a href="#">Contact Us</a>
        <a href="#">Suggestions</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Disclaimer</a>
      </footer>
    </div>
  );
}
