const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const mongoose = require("mongoose");

async function generateSitemap(baseUrl) {
  try {
    const sitemapStream = new SitemapStream({ hostname: baseUrl });

    sitemapStream.write({ url: "/", changefreq: "daily", priority: 1 });
    sitemapStream.write({
      url: "/about",
      changefreq: "monthly",
      priority: 0.8,
    });
    sitemapStream.write({
      url: "/contact",
      changefreq: "monthly",
      priority: 0.8,
    });
    sitemapStream.write({ url: "/team", changefreq: "monthly", priority: 0.8 });
    sitemapStream.write({
      url: "/gallery",
      changefreq: "monthly",
      priority: 0.8,
    });
    sitemapStream.write({
      url: "/Behind-The-Scenes",
      changefreq: "monthly",
      priority: 0.8,
    });
    sitemapStream.write({ url: "/Blog", changefreq: "monthly", priority: 0.8 });
    sitemapStream.write({
      url: "/Privacy-Policy",
      changefreq: "monthly",
      priority: 0.8,
    });
    sitemapStream.write({
      url: "/5-Essential-Concert-Photography-Tips-for-Aspiring-Music-Photographers",
      changefreq: "monthly",
      priority: 0.8,
    });

    sitemapStream.end();

    const sitemap = await streamToPromise(Readable.from(sitemapStream));
    return sitemap.toString();
  } catch (error) {
    console.error("Error generating sitemap:", error);
    throw error;
  }
}

module.exports = generateSitemap;
