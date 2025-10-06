import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="mb-6">
        <Image 
          src="/trucite.png" 
          alt="TruCite logo" 
          width={180} 
          height={180} 
          priority 
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-3">Welcome to TruCite</h1>

      {/* Tagline */}
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
        The world’s first <span className="font-semibold">Truth OS</span> — a cross-platform, real-time engine for evaluating and scoring truth.
      </p>

      {/* Feature Buttons */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        <span className="px-4 py-2 bg-white text-black rounded-full font-semibold">⚡ Fast</span>
        <span className="px-4 py-2 bg-white text-black rounded-full font-semibold">🔗 Transparent</span>
        <span className="px-4 py-2 bg-white text-black rounded-full font-semibold">✨ Plug & Play</span>
      </div>

      {/* Input + Button */}
      <div className="flex gap-2 mb-10 w-full max-w-md">
        <input 
          type="text" 
          placeholder="Paste a claim, answer, or snippet" 
          className="flex-grow px-4 py-2 rounded-lg text-black"
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg">
          Check Truth
        </button>
      </div>

      {/* Footer Links */}
      <footer className="text-sm text-gray-400 flex flex-wrap justify-center gap-4 border-t border-gray-700 pt-4 w-full max-w-3xl">
        <a href="#">FAQ</a>
        <a href="#">Contact Us</a>
        <a href="#">Suggestions</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Disclaimer</a>
      </footer>
    </main>
  );
}
