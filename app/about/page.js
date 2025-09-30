export default function About() {
  return (
    <main className="about">
      <h1 className="title">Hello About Page</h1>
      <p className="content">
        ✅ If you can see this text at <code>/about</code>, the route is working correctly.
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
        }
      `}</style>
    </main>
  );
}
