import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../components/shared/nav";
const Footer = lazy(() => import("../components/shared/footer"));
import Hero from "../components/about/hero";
import Summer from "../components/about/summer";
import Extra from "../components/about/extra";
const Watch = lazy(() => import("../components/shared/watch"));
const Contact = lazy(() => import("../components/shared/contact"));
import Quote from "../components/about/quote";
import { ParallaxProvider } from "react-scroll-parallax";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Concert Photography Documentary</title>
        <meta
          name="description"
          content="Learn about our journey in creating a documentary on concert photography. Meet our team and discover the passion behind our project."
        />
        <meta
          name="keywords"
          content="concert photography, documentary, about us, behind the scenes"
        />
        <meta
          property="og:title"
          content="About Us | Concert Photography Documentary"
        />
        <meta
          property="og:description"
          content="Discover the story behind our concert photography documentary and meet the team bringing it to life."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/about"
        />
        <link
          rel="canonical"
          href="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/about"
        />
      </Helmet>{" "}
      <Nav />
      <main className="lg:mx-32 md:mx-12 mx-4">
        <ParallaxProvider>
          <Hero />
        </ParallaxProvider>
        <Quote />
        <Summer />
        <Extra />
        <Watch />
        <Contact />
      </main>{" "}
      <Footer />
    </>
  );
};

export default About;
