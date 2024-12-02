/* eslint-disable react/no-unescaped-entities */
import Button from "../shared/button";
import img2 from "../../assets/imgs/galimg (12).webp";
import { motion, useScroll, useTransform } from "framer-motion";
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="h-fit w-full flex flex-col gap-8 mb-8 pt-20 ">
      {" "}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.h1 className="leading-none" variants={textVariants}>
          <motion.span
            className="text-butterscotch text-3xl"
            variants={textVariants}
          >
            {" "}
            About
          </motion.span>{" "}
          <br />
          <motion.span variants={textVariants}>
            Music Through The Lens
          </motion.span>
        </motion.h1>
        <motion.p className="text-base text-amethyst" variants={textVariants}>
          Four Frames Films
        </motion.p>
      </motion.div>
      <motion.div
        className="flex flex-col gap-4 md:flex-row justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.p
          className="basis-2/3 text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          In the pulsing heart of London's music scene, 'Concert Photography'
          follows Summer's relentless pursuit to turn fleeting moments into
          timeless art. This intimate documentary reveals the passion,
          challenges, and triumphs behind the lens, as one aspiring photographer
          strives to make her mark in the electrifying world of concert
          photography.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        >
          <Button text="Watch Now!" />
        </motion.div>
      </motion.div>
      <motion.div
        className="lg:h-[800px] overflow-hidden relative"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.4, delay: 0.8 },
          opacity: { delay: 0.7 },
        }}
      >
        <motion.div className="inset-0" style={{ y }}>
          <motion.img
            src={img2}
            alt="singer on stage at an event"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
