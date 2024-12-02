import { Helmet } from "react-helmet-async";
import React, { lazy } from "react";
const Footer = lazy(() => import("../components/shared/footer"));
import Nav from "../components/shared/nav";

const ContactForm = lazy(() => import("../components/shared/contact"));

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Music Through The Lens</title>
        <meta
          name="description"
          content="Get in touch with our team of concert photographers. Whether you have questions about our services or want to collaborate, we're here to help."
        />
        <meta
          name="keywords"
          content="contact, concert photography, music photographer, inquiries, collaboration"
        />
        <meta property="og:title" content="Contact Music Through The Lens" />
        <meta
          property="og:description"
          content="Reach out to our team of professional concert photographers for inquiries, collaborations, or any questions about our services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/contact"
        />
        <link
          rel="canonical"
          href="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/contact"
        />
      </Helmet>{" "}
      <Nav />
      <main className="lg:mx-32 md:mx-12 mx-4 pt-24">
        <ContactForm />
      </main>{" "}
      <Footer />{" "}
    </>
  );
};

export default Contact;
