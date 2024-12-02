import Hero from "../components/blog/Hero";
import React, { lazy } from "react";

import Nav from "../components/shared/nav";
const Footer = lazy(() => import("../components/shared/footer"));
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Concert Photography Blog | Music Through The Lens</title>
        <meta
          name="description"
          content="Explore our blog for expert tips, insights, and stories about concert photography. Learn from professional music photographers and improve your skills."
        />
        <meta
          name="keywords"
          content="concert photography, music photographer, live music photography, photography blog, music photography tips"
        />
        <meta
          property="og:title"
          content="Concert Photography Blog | Music Through The Lens"
        />
        <meta
          property="og:description"
          content="Dive into the world of concert photography with expert tips, insights, and stories from professional music photographers."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/blog"
        />
        <link
          rel="canonical"
          href="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/blog"
        />
      </Helmet>{" "}
      <Nav />
      <main className="lg:px-32 md:px-12 px-4 bg-white-smoke ">
        <Hero />
      </main>{" "}
      <Footer />{" "}
    </>
  );
};

export default Blog;
