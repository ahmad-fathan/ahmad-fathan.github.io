import { site } from "../config/site";

export async function GET() {
  const paths = ["", "publications", "research", "teaching", "talks", "cv", "contact"];
  const list = paths.map((p) => `  <url><loc>${site.url}/${p}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${list}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
