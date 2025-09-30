// app/about/page.js
export const metadata = {
  title: "About – TruCite",
  description: "What TruCite is and what this MVP demonstrates.",
};

export default function AboutPage() {
  return (
    <main className="about">
      <h1>About TruCite</h1>

      <p>
        TruCite is building the <strong>Truth OS</strong> for AI — a transparent,
        real-time scoring and verification layer that helps teams evaluate the
        factuality and reliability of AI outputs.
      </p>

      <p>
        This MVP uses mocked data to illustrate the end-to-end flow (input →
        evidence retrieval → scoring → explanation). The production service
        plugs into your LLMs, RAG stacks, and data sources to produce a portable{" "}
        <em>truth score</em> with citations and abstain/deferral logic.
      </p>

      <style jsx>{`
        :root { --gold:#f2c94c; --ink:#e9e9ea; --muted:#c8c8cc; }
        .about { max-width:880px; margin:0 auto; padding:40px 20px 80px; text-align:center; }
        h1 { font-size:clamp(28px,6vw,44px); line-height:1.15; margin:10px 0 18px; color:var(--ink); }
        p { color:var(--muted); font-size:clamp(16px,3.4vw,18px); line-height:1.65; margin:10px auto 14px; max-width:760px; }
        strong { color:var(--ink); }
        em { color:var(--gold); font-style:normal; font-weight:600; }
      `}</style>
    </main>
  );
}
