export default function About() {
  return (
    <main className="about">
      <h1 className="title">About TruCite</h1>
      <p className="content">
        TruCite is building the <strong>Truth OS</strong> for AI — a transparent, 
        real-time scoring and verification layer that helps teams evaluate the 
        factuality and reliability of AI outputs.
      </p>
      <p className="content">
        This MVP demo uses mocked data to illustrate the end-to-end flow.
      </p>

      <style jsx>{`
        .about {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
          text-align: center;
        }
        .title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 700;
          color: #f2c94c;
          margin-bottom: 20px;
        }
        .content {
          font-size: clamp(16px, 3vw, 20px);
          line-height: 1.6;
          color: #e9e9ea;
          margin-bottom: 16px;
        }
      `}</style>
    </main>
  );
}
