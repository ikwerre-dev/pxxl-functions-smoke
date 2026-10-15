export default function handler(req, res) {
  const marker = req.query.marker ?? "direct";
  res.setHeader("Cache-Control", "public, s-maxage=30");
  res.setHeader("X-Pxxl-Functions", "staging-smoke");
  return res.status(200).json({ ok: true, marker, method: req.method, runtime: "pxxl-functions" });
}
