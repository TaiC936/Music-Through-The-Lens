import Picturegal from "../components/gallery/picturegal";
import React, { lazy } from "react";

import Nav from "../components/shared/nav";
const Footer = lazy(() => import("../components/shared/footer"));
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Concert Photography Gallery | Music Through The Lens</title>
        <meta
          name="description"
          content="Explore our stunning gallery of concert photographs. Witness the energy and emotion of live music performances captured through our lenses."
        />
        <meta
          name="keywords"
          content="concert photography, music gallery, live performance photos, music photographer portfolio"
        />
        <meta
          property="og:title"
          content="Concert Photography Gallery | Music Through The Lens"
        />
        <meta
          property="og:description"
          content="Immerse yourself in the world of live music through our captivating concert photography gallery."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/gallery"
        />
        <link rel="preload" as="image" href="../assets/imgs/trailerimg.webp" />

        <link
          rel="canonical"
          href="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/gallery"
        />
      </Helmet>{" "}
      <Nav />
      <main className=" bg-white-smoke ">
        <Picturegal />
      </main>{" "}
      <Footer />{" "}
    </>
  );
};

export default Gallery;
