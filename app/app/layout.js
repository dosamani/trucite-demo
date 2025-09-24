export const metadata = {
  title: "TruCite MVP",
  description: "The Truth OS for AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}