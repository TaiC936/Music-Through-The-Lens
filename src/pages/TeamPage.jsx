import { Helmet } from "react-helmet-async";
import React, { lazy } from "react";

import Hero from "../components/team/hero";
import TeamScroll from "../components/team/teamscroll";

import Nav from "../components/shared/nav";
const Footer = lazy(() => import("../components/shared/footer"));
const Contact = lazy(() => import("../components/shared/contact"));

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Music Through The Lens</title>
        <meta
          name="description"
          content="Meet the passionate photographers and creatives behind Music Through The Lens. Our team brings concert photography to life with skill and artistry."
        />
        <meta
          name="keywords"
          content="concert photographers, music photography team, creative professionals, behind the scenes"
        />
        <meta property="og:title" content="Our Team | Music Through The Lens" />
        <meta
          property="og:description"
          content="Discover the talented individuals who capture the magic of live music. Meet our team of expert concert photographers and creatives."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/team"
        />
        <meta property="og:image" content="[URL to team photo or logo]" />
        <link
          rel="canonical"
          href="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/team"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Our Team",
            description:
              "Meet the talented photographers and creatives behind Music Through The Lens",
            url: "https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/team",
            publisher: {
              "@type": "Organization",
              name: "Music Through The Lens",
              logo: {
                "@type": "ImageObject",
                url: "[URL to your logo]",
              },
            },
            employee: [
              {
                "@type": "Person",
                name: "Léa Fabiola",
                jobTitle: "Director, Editor",
              },
              {
                "@type": "Person",
                name: "Katie Barnes",
                jobTitle: "Director, DoP",
              },
              {
                "@type": "Person",
                name: "Ella",
                jobTitle: "1st Aid",
              },
              {
                "@type": "Person",
                name: "Luca",
                jobTitle: "Producer",
              },
            ],
          })}
        </script>
      </Helmet>{" "}
      <Nav />
      <main className="lg:mx-32 md:mx-12 mx-4">
        <Hero />
        <TeamScroll />
        <Contact />
      </main>{" "}
      <Footer />{" "}
    </>
  );
};

export default Team;
