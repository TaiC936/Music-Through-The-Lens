/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import img1 from "../../assets/imgs/galimg (1).webp";

export function Summer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="my-24 md:my-40"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <motion.div
          className="md:col-span-2 flex flex-col justify-end"
          variants={itemVariants}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2">Meet Summer</h2>
          <h3 className="text-butterscotch font-semibold text-lg md:text-xl lg:text-2xl">
            The Lens Behind the Music
          </h3>
        </motion.div>
        <motion.div
          className="md:col-start-3 flex flex-col justify-end"
          variants={itemVariants}
        >
          <motion.img
            src={img1}
            alt=""
            className="w-full h-auto object-cover"
            transition={{ duration: 0.3 }}
          />
          <p className="text-zinc-500 mt-2 text-sm">London, 2024</p>
        </motion.div>
        <motion.div
          className="md:col-span-1 md:row-span-2"
          variants={itemVariants}
        >
          <p className="text-sm md:text-base">
            Summer, a rising star in London's concert photography scene, is the
            beating heart of our documentary. With an unwavering passion for
            music and an eye for capturing raw emotion, she navigates the
            high-energy world of live performances with determination and grace.{" "}
            <br />
            <br />
            Despite being relatively new to the field, Summer's unique
            perspective and technical skill have already caught the attention of
            local venues and up-and-coming bands. Her journey is one of
            perseverance, creativity, and the relentless pursuit of that perfect
            shot.
          </p>
        </motion.div>
        <motion.div
          className="md:col-span-1 md:row-span-2"
          variants={itemVariants}
        >
          <motion.div className="mb-4" variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-2">Background</h4>
            <p className="text-sm md:text-base">
              As we follow Summer from small, dimly lit clubs to larger venues,
              we witness her growth not just as a photographer, but as an artist
              finding her voice. Her story is a testament to the power of
              following one's dreams, no matter the obstacles.
              <br />
              <br />
              Through Summer's lens, we gain insight into the challenges and
              triumphs of concert photography, and the dedication it takes to
              turn a passion into a profession in the competitive London music
              scene.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-2">Aspirations</h4>
            <p className="text-sm md:text-base">
              As we follow Summer from small, dimly lit clubs to larger venues,
              we witness her growth not just as a photographer, but as an artist
              finding her voice. Her story is a testament to the power of
              following one's dreams, no matter the obstacles.
              <br />
              <br />
              Through Summer's lens, we gain insight into the challenges and
              triumphs of concert photography, and the dedication it takes to
              turn a passion into a profession in the competitive London music
              scene.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Summer;
