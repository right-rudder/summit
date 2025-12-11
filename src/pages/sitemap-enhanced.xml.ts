import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// Define priority levels for different content types
const PRIORITY_LEVELS = {
  homepage: "1.0",
  mainPages: "0.9",
  programs: "0.8",
  blog: "0.7",
  locations: "0.6",
  resources: "0.5",
  other: "0.4",
};

// Define change frequencies
const CHANGE_FREQ = {
  homepage: "weekly",
  programs: "monthly",
  blog: "monthly",
  locations: "yearly",
  resources: "monthly",
  other: "yearly",
};

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("Site URL is required for sitemap generation");
  }

  // Get all blog posts
  const posts = await getCollection("blog");

  // Define static pages with their priorities and change frequencies
  const staticPages = [
    // Homepage
    {
      url: "",
      priority: PRIORITY_LEVELS.homepage,
      changefreq: CHANGE_FREQ.homepage,
    },

    // Main navigation pages
    {
      url: "about/our-team",
      priority: PRIORITY_LEVELS.mainPages,
      changefreq: CHANGE_FREQ.other,
    },
    {
      url: "about/our-fleet",
      priority: PRIORITY_LEVELS.mainPages,
      changefreq: CHANGE_FREQ.other,
    },
    {
      url: "about/visit-us",
      priority: PRIORITY_LEVELS.mainPages,
      changefreq: CHANGE_FREQ.other,
    },

    // Flight programs (high priority)
    {
      url: "flight-programs/sport-pilot-training",
      priority: PRIORITY_LEVELS.programs,
      changefreq: CHANGE_FREQ.programs,
    },
    {
      url: "flight-programs/private-pilot-training",
      priority: PRIORITY_LEVELS.programs,
      changefreq: CHANGE_FREQ.programs,
    },
    {
      url: "flight-programs/instrument-rating",
      priority: PRIORITY_LEVELS.programs,
      changefreq: CHANGE_FREQ.programs,
    },
    {
      url: "flight-programs/commercial-pilot-training",
      priority: PRIORITY_LEVELS.programs,
      changefreq: CHANGE_FREQ.programs,
    },
    {
      url: "flight-programs/multi-engine-rating",
      priority: PRIORITY_LEVELS.programs,
      changefreq: CHANGE_FREQ.programs,
    },
    {
      url: "flight-programs/private-pilot-instrument-bundle",
      priority: PRIORITY_LEVELS.programs,
      changefreq: CHANGE_FREQ.programs,
    },

    // Career pages
    {
      url: "career/career-track",
      priority: PRIORITY_LEVELS.programs,
      changefreq: CHANGE_FREQ.programs,
    },
    {
      url: "career/instructor-training",
      priority: PRIORITY_LEVELS.programs,
      changefreq: CHANGE_FREQ.programs,
    },
    {
      url: "career/teach-at-summit",
      priority: PRIORITY_LEVELS.programs,
      changefreq: CHANGE_FREQ.programs,
    },

    // Discovery flight
    {
      url: "discovery-flight",
      priority: PRIORITY_LEVELS.mainPages,
      changefreq: CHANGE_FREQ.other,
    },
    {
      url: "new-to-flying",
      priority: PRIORITY_LEVELS.mainPages,
      changefreq: CHANGE_FREQ.other,
    },

    // Resources
    {
      url: "resources/faqs",
      priority: PRIORITY_LEVELS.resources,
      changefreq: CHANGE_FREQ.resources,
    },
    {
      url: "resources/financing",
      priority: PRIORITY_LEVELS.resources,
      changefreq: CHANGE_FREQ.resources,
    },
    {
      url: "resources/insurance",
      priority: PRIORITY_LEVELS.resources,
      changefreq: CHANGE_FREQ.resources,
    },
    {
      url: "resources/forms",
      priority: PRIORITY_LEVELS.resources,
      changefreq: CHANGE_FREQ.resources,
    },

    // Blog index
    {
      url: "blog",
      priority: PRIORITY_LEVELS.blog,
      changefreq: CHANGE_FREQ.blog,
    },

    // Legal pages
    {
      url: "privacy-policy",
      priority: PRIORITY_LEVELS.other,
      changefreq: CHANGE_FREQ.other,
    },
    {
      url: "tos",
      priority: PRIORITY_LEVELS.other,
      changefreq: CHANGE_FREQ.other,
    },
  ];

  // Location pages
  const locations = [
    "blue-springs",
    "gardner",
    "grain-valley",
    "grandview",
    "harrisonville",
    "independence",
    "kansas-city",
    "leawood",
    "lenexa",
    "merriam",
    "mission-hills",
    "olathe",
    "mission",
    "overland-park",
    "raymore",
    "shawnee",
    "prairie-village",
    "parkville",
    "weston",
  ];

  const locationPages = locations.map((location) => ({
    url: `pilot-training/${location}`,
    priority: PRIORITY_LEVELS.locations,
    changefreq: CHANGE_FREQ.locations,
  }));

  // Blog posts
  const blogPages = posts.map((post) => ({
    url: `blog/${post.slug}`,
    priority: PRIORITY_LEVELS.blog,
    changefreq: CHANGE_FREQ.blog,
    lastmod: post.data.updatedDate || post.data.pubDate,
  }));

  // Combine all pages
  type SitemapPage = {
    url: string;
    priority: string;
    changefreq: string;
    lastmod?: Date;
  };

  const allPages: SitemapPage[] = [
    ...staticPages,
    ...locationPages,
    ...blogPages,
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${new URL(page.url, site).href}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    ${page.lastmod ? `<lastmod>${page.lastmod.toISOString().split("T")[0]}</lastmod>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
