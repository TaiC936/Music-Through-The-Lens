import React, { useState, lazy } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/imgs/galimg (1).webp";
import Nav from "../../components/shared/nav";
import axios from "axios";
import { Helmet } from "react-helmet-async";
const Footer = lazy(() => import("../../components/shared/footer"));

const BlogPost = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const NewsletterSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/createNLEmail`, { name, email })
      .then((response) => {
        console.log(response.data);
        setName("");
        setEmail("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Helmet>
        <title>
          5 Essential Concert Photography Tips for Aspiring Music Photographers
        </title>
        <meta
          name="description"
          content="Dive into the world of concert photography with these 5 crucial tips. Learn how to capture stunning live music shots and start your journey as a music photographer."
        />
        <meta
          name="keywords"
          content="concert photography, music photographer, live music photography, photography tips, low-light photography"
        />
        <meta
          property="og:title"
          content="5 Essential Concert Photography Tips for Aspiring Music Photographers"
        />
        <meta
          property="og:description"
          content="Learn how to capture stunning live music shots with these essential concert photography tips."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/blog/concert-photography-tips"
        />
        <link
          rel="canonical"
          href="https://https://music-through-the-lens-taiadcamerons-projects.vercel.app/.com/blog/concert-photography-tips"
        />
      </Helmet>
      <main>
        <Nav />
        <motion.div
          initial="initial"
          animate="in"
          exit="exit"
          variants={{
            initial: { opacity: 0, y: 20 },
            in: { opacity: 1, y: 0 },
          }}
          className="bg-white-smoke text-night pt-20 pb-16"
        >
          <div className="mx-auto px-4 max-w-3xl">
            <header className="mb-4">
              <h1 className=" mb-4 text-night leading-snug text-3xl lg:text-5xl">
                5 Essential Concert Photography Tips for Aspiring Music
                Photographers
              </h1>
              <div className="flex items-center text-sm gap-2  ">
                <p className="text-night text-base">By Automan</p>
                <p className="text-night text-base">|</p>
                <p className="text-night text-base">11/1/24</p>
                <p className="text-night text-base">|</p>
                <p className="text-night text-base">3 Min Read</p>
              </div>
            </header>

            <img
              src={img1}
              alt="Blog Post Featured Image"
              className=" object-cover mb-8"
            />

            <article className="   text-night">
              <h2 className="text-night">Master Low-Light Photography</h2>
              <p className="text-night mb-8">
                Concert venues are often dimly lit, making low-light photography
                skills crucial. Here are some key points: <br />
                Use a fast lens (f/2.8 or wider) to allow more light <br />
                Increase your ISO (start around 1600-3200) Experiment with
                slower shutter speeds (1/125 or 1/250) <br />
                Remember, embracing the darkness can lead to moody, atmospheric
                shots that capture the essence of live performances.
              </p>

              <h2 className="text-night"> Understand Your Camera Settings</h2>
              <p className="text-night mb-8">
                Familiarize yourself with your camera's manual settings. In the
                fast-paced environment of a concert, you need to adjust quickly.
                Practice changing settings without looking at your camera.
              </p>

              <h2 className="text-night">Choose the Right Gear</h2>
              <p className="text-night mb-8">
                While gear isn't everything, having the right equipment can make
                a difference: <br />
                A full-frame camera for better low-light performance <br />
                Fast zoom lenses (24-70mm f/2.8 and 70-200mm f/2.8 are popular
                choices) <br />
                Extra batteries and memory cards
              </p>

              <h2 className="text-night">Learn Concert Etiquette</h2>
              <p className="text-night mb-8 ">
                Respect the artists, other photographers, and the audience. Some
                tips: <br />
                Don't use flash unless explicitly permitted <br />
                Stay low and avoid blocking the audience's view <br />
                Be mindful of your movements, especially in small venues
              </p>

              <h2 className="text-night">Research the Venue and Artist</h2>
              <p className="text-night mb-8 ">
                Knowing the venue layout and the artist's performance style can
                help you anticipate great photo opportunities. Study previous
                concert photos from the venue and watch live videos of the
                artist.
              </p>

              <h2 className="text-night">Conclusion</h2>
              <p className="text-night mb-8 ">
                Becoming a successful concert photographer takes practice,
                patience, and passion. By following these tips and continuously
                honing your skills, you'll be well on your way to capturing
                stunning live music moments. Remember, every great music
                photographer started as a beginner. Keep shooting, stay
                inspired, and let your unique vision shine through your work.
              </p>
            </article>

            <div className="mt-12 pt-8 border-t border-night">
              <p className="text-night text-lg mb-2">
                Sign up to our newsletter and get exclusive Behind The Scenes
                content and updated screening locations and timings.
              </p>
              <form
                name="newsletter-form"
                onSubmit={NewsletterSubmit}
                className="flex flex-col gap-2"
              >
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="newsletter-Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="px-4 py-2 border-2 border-night focus:border-amethyst focus:outline-none transition-colors duration-200"
                  required
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="px-4 py-2 border-2 border-night focus:border-amethyst focus:outline-none transition-colors duration-200"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-night text-white px-6 py-2 hover:bg-amethyst transition-colors duration-200"
                >
                  Sign Up
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
        <Footer />{" "}
      </main>
    </>
  );
};

export default BlogPost;
