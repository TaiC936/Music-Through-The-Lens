/* eslint-disable react/no-unescaped-entities */
import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/index/hero";
import PopUp from "../components/index/popup";
import Nav from "../components/shared/nav";

const About = lazy(() => import("../components/index/about"));
const Team = lazy(() => import("../components/index/team"));
const ScrollingImages = lazy(() =>
  import("../components/index/scrollingImages")
);
const Watch = lazy(() => import("../components/shared/watch"));
const Contact = lazy(() => import("../components/shared/contact"));
const Footer = lazy(() => import("../components/shared/footer"));

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Music Through The Lens | Concert Photography Documentary</title>

        <meta
          name="description"
          content="Explore the world of concert photography through our documentary. Witness the passion, challenges, and artistry behind capturing live music performances."
        />
        <meta
          name="keywords"
          content="concert photography, music documentary, live music, photographer, behind the scenes"
        />
        <meta
          property="og:title"
          content="Music Through The Lens | Concert Photography Documentary"
        />
        <meta
          property="og:description"
          content="Dive into the captivating world of concert photography. Our documentary showcases the art, passion, and challenges of capturing live music moments."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com"
        />
        <meta property="og:image" content="../assets/imgs/galimg (2).webp" />

        <link
          rel="preload"
          fetchpriority="high"
          as="image"
          href="/src/assets/imgs/trailerimg.webp"
          type="image/webp"
        />

        <link
          rel="canonical"
          href="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com"
        />
      </Helmet>
      <Nav />
      <main>
        <PopUp />
        <Hero />
        <About />

        <Team />

        <ScrollingImages />

        <Watch />

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
