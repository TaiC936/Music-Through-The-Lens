import React, { lazy } from "react";

import { Helmet } from "react-helmet-async";
import Nav from "../components/shared/nav";
import BTSGal from "../components/bts/btsgal";
const Footer = lazy(() => import("../components/shared/footer"));

const BTS = () => {
  return (
    <>
      <Helmet>
        <title>Behind The Scenes | Music Through The Lens</title>
        <meta
          name="description"
          content="Go behind the scenes of concert photography. Explore our gallery of candid moments, equipment setups, and the unseen world of music photographers."
        />
        <meta
          name="keywords"
          content="behind the scenes, concert photography, music photographer, backstage, photography equipment"
        />
        <meta
          property="og:title"
          content="Behind The Scenes | Music Through The Lens"
        />
        <meta
          property="og:description"
          content="Discover the unseen world of concert photography. Explore our behind-the-scenes gallery of candid moments and equipment setups."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/bts"
        />
        <link
          rel="canonical"
          href="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/bts"
        />
      </Helmet>{" "}
      <Nav />
      <main className="">
        <BTSGal />
      </main>{" "}
      <Footer />{" "}
    </>
  );
};

export default BTS;
