// app/api/check/route.js

// Minimal mock "Truth OS" endpoint for MVP demo.
// Deterministic outputs from input text so it feels real during a demo.

const cannedCitations = [
  { title: "Stanford CRFM Blog", url: "https://crfm.stanford.edu/" },
  { title: "Allen AI — Semantic Scholar", url: "https://www.semanticscholar.org/" },
  { title: "arXiv: Evaluation of LLM Factuality", url: "https://arxiv.org/abs/2307.XXXXX" },
  { title: "OECD AI Policy Observatory", url: "https://oecd.ai/" },
  { title: "Nature — AI and Evidence", url: "https://www.nature.com/subjects/artificial-intelligence" },
];

function hashish(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

function pickN(arr, n, seed) {
  const out = [];
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 1664525 + 1013904223) >>> 0;
    out.push(arr[s % arr.length]);
  }
  return Array.from(new Map(out.map(o => [o.url, o])).values()).slice(0, n);
}

function scoreFrom(text) {
  const h = hashish(text.trim());
  const raw = (h % 71) + 15; // 15..85 to avoid extremes
  return Math.max(1, Math.min(99, raw));
}

function verdictFrom(score) {
  if (score >= 80) return "Likely True";
  if (score >= 65) return "Plausible";
  if (score >= 45) return "Uncertain";
  if (score >= 25) return "Doubtful";
  return "Likely False";
}

function risksFrom(text, score, seed) {
  const pool = [
    "Possible missing citations",
    "Ambiguous time frame",
    "Out-of-date source",
    "Model uncertainty detected",
    "Potential bias in sources",
    "Requires domain expert review",
  ];
  const n = score >= 75 ? 1 : score >= 55 ? 2 : 3;
  return pickN(pool.map((t, i) => ({ t, i })), n, seed).map(x => x.t);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const query = (body?.query || "").slice(0, 1000);
    if (!query) {
      return new Response(JSON.stringify({ error: "Missing 'query' string" }), { status: 400 });
    }

    // Compute deterministic demo outputs
    const seed = hashish(query);
    const truthScore = scoreFrom(query);
    const verdict = verdictFrom(truthScore);
    const citations = pickN(cannedCitations, 3, seed);
    const risks = risksFrom(query, truthScore, seed);

    const evidenceSummary =
      truthScore >= 65
        ? "Multiple independent sources support the key elements of this claim. Minor gaps remain."
        : truthScore >= 45
        ? "Evidence is mixed or indirect. Confident decision-making would benefit from deeper review."
        : "Insufficient or conflicting evidence found among sampled sources for this exact claim.";

    // Simulate latency (feels real in demo)
    await new Promise(r => setTimeout(r, 600 + (seed % 600)));

    return Response.json({
      query,
      truthScore,
      verdict,
      evidenceSummary,
      citations,
      risks,
      modelNotes: "Demo mode: results are illustrative and deterministic from input text.",
      latencyMs: 600 + (seed % 600),
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Bad request" }), { status: 400 });
  }
}
