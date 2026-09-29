import { getCollection } from "astro:content";
import { site } from "../../config/site";

export async function GET() {
  const posts = (await getCollection("writing", ({ data }) => data.language === "id" && !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${site.url}/id/writing/${p.data.category}/${p.id}</link>
      <guid>${site.url}/id/writing/${p.data.category}/${p.id}</guid>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <description>${esc(p.data.description)}</description>
    </item>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${site.name} — Tulisan</title>
    <link>${site.url}/id/writing</link>
    <atom:link href="${site.url}/id/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Tulisan terbaru oleh ${site.name} (Indonesia)</description>
    <language>id</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
