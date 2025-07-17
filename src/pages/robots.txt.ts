import type { APIRoute } from "astro";

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /*?*
Disallow: /search
Disallow: /404
Disallow: /500

# Specific bot directives
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Crawl delay
Crawl-delay: 1

# Sitemap location
Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
