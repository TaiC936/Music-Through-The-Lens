import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const TimedPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const NewsletterSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/createNLEmail`, { name, email })
      .then((response) => {
        console.log(response.data);
        setName("");
        setEmail("");
        setNewsletterSubmitted(true);
        setTimeout(() => setNewsletterSubmitted(false), 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="w-full max-w-md mx-4 bg-white rounded-lg shadow-xl"
          >
            <div className="p-6 border-2 border-night">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-night font-bold text-xl">
                  Sign Up To Our Newsletter
                </h4>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closePopup}
                  className="text-night hover:text-amethyst transition-colors duration-200 text-2xl"
                >
                  &times;
                </motion.button>
              </div>
              <p className="text-night text-lg mb-6">
                Get exclusive Behind The Scenes content and updated screening
                locations and timings.
              </p>
              <form onSubmit={NewsletterSubmit} className="flex flex-col gap-2">
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimedPopup;
