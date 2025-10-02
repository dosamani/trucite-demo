export async function POST(req) {
  const { text } = await req.json();

  // Very simple demo scoring logic
  const fakeScore = Math.floor(Math.random() * 100);

  let explanation;
  if (fakeScore > 70) {
    explanation = "This looks likely true.";
  } else if (fakeScore > 40) {
    explanation = "This may be partially true or needs more evidence.";
  } else {
    explanation = "This looks questionable or false.";
  }

  return new Response(
    JSON.stringify({ score: fakeScore, explanation }),
    { headers: { "Content-Type": "application/json" }, status: 200 }
  );
}
