// api/index.js
export default async function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: "TruCite MVP",
    message: "Backend is alive",
    time: new Date().toISOString(),
  });
}