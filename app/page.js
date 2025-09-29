export default function Home() {
  return (
    <main className="content">
      {/* Hero Logo */}
      <img 
        src="/logo.jpg" 
        alt="TruCite Logo" 
        className="hero-logo"
      />

      {/* Headline */}
      <h1 className="hero-headline">
        Welcome to <span className="highlight">TruCite</span>
      </h1>

      {/* Subheadline */}
      <p className="hero-subheadline">
        The world’s first <b>Truth OS</b> for AI — a cross-platform, real-time engine 
        for evaluating and scoring truth.
      </p>

      {/* Input + Button */}
      <div className="input-group fade-in-input">
        <input 
          type="text" 
          placeholder="Paste a claim, answer, or snippet" 
        />
        <button className="pulse-button">Check Truth</button>
      </div>

      {/* Features */}
      <div className="features fade-in-features">
        <span>⚡ Fast</span> · <span>🔗 Transparent</span> · <span>✨ Plug & Play</span>
      </div>

      {/* Styles */}
      <style jsx>{`
        .content {
          min-height: 100vh;
          background: linear-gradient(to bottom, #111, #000);
          color: #fff;
          text-align: center;
          padding: 4rem 1rem;
          font-family: Arial, sans-serif;
        }

        /* Hero Logo */
        .hero-logo {
          width: 90px;
          margin: 0 auto 20px;
          opacity: 0;
          transform: scale(0.9);
          animation: fadeInScale 1.2s ease-out forwards;
        }

        /* Headline */
        .hero-headline {
          font-size: 2rem;
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 1s;
        }

        .highlight {
          color: #f2c94c;
        }

        /* Subheadline */
        .hero-subheadline {
          max-width: 600px;
          margin: 0 auto 2rem;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #ddd;
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 2s;
        }

        /* Input Section */
        .input-group {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 3s;
        }

        input {
          padding: 0.75rem 1rem;
          border-radius: 8px 0 0 8px;
          border: none;
          outline: none;
          width: 250px;
          background: #222;
          color: #fff;
        }

        button {
          padding: 0.75rem 1.25rem;
          border-radius: 0 8px 8px 0;
          border: none;
          background: linear-gradient(90deg, #f2c94c, #f2994a);
          color: #000;
          font-weight: bold;
          cursor: pointer;
          opacity: 0;
          animation: fadeInScale 0.8s ease-out forwards;
          animation-delay: 3.5s;
        }

        .pulse-button {
          animation: fadeInScale 0.8s ease-out forwards, pulse 1.5s ease-in-out 4s infinite;
        }

        /* Features Row */
        .features {
          margin-top: 1.5rem;
          color: #ccc;
          font-size: 0.95rem;
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 4.5s;
        }

        /* Animations */
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </main>
  );
}
