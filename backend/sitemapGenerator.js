const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

async function generateSitemap(baseUrl) {
  try {
    const smStream = new SitemapStream({ hostname: baseUrl });

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

    routes.forEach((route) => {
      smStream.write(route);
    });

    smStream.end();

    const sitemap = await streamToPromise(Readable.from(smStream));
    return sitemap.toString();
  } catch (error) {
    console.error("Error in generateSitemap:", error);
    throw error;
  }
}

module.exports = generateSitemap;
