import React from "react";
import { motion, useInView } from "framer-motion";
import watchImg from "../../assets/imgs/watchImg.webp";
import Button from "../shared/button";
import { itemVariants, containerVariants } from "../../animations/varients";

function Watch() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="my-24 flex flex-col gap-8 mx-5 md:flex-row md:mx-32 flex-col-reverse"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="basis-2/3  flex flex-col gap-2"
        variants={itemVariants}
      >
        <img loading="lazy" src={watchImg} alt="singer on stage preforming" />
      </motion.div>

      <motion.div
        className="flex flex-col justify-end basis-1/3 md:basis-1/2"
        variants={itemVariants}
      >
        <motion.h2 variants={itemVariants}>
          Where To <span className="text-butterscotch">Watch</span>{" "}
        </motion.h2>
        <motion.p
          className="border-t border-l p-2 text-base"
          variants={itemVariants}
        >
          Experience the raw energy and nostalgia of concert photography through
          the lens of analog film.
          <br />
          <br />
          Our short film takes you behind the scenes with passionate
          photographers as they document live music performances using nothing
          but 35mm cameras and their artistic vision.
        </motion.p>
        <motion.div className="border-l p-2" variants={itemVariants}>
          <Button text="Watch Now!" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Watch;
