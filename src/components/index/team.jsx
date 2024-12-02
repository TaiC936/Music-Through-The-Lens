import React from "react";
import { motion, useInView } from "framer-motion";
import img2 from "../../assets/imgs/galimg (8).webp";
import Button from "../shared/button";
import { itemVariants, containerVariants } from "../../animations/varients";

export function Team() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="flex justify-center my-24 mx-8 md:my-44"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-[1000px] flex flex-col gap-8 md:flex-row items-center">
        <motion.div
          className="flex flex-col gap-2 basis-2/3"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="text-white-smoke text-6xl leading-none ">
              &quot;
            </div>
            <p className="text-base text-zinc-500">Katie</p>
            <p className="text-sm text-amethyst">Co-Director</p>
          </motion.div>
          <motion.p
            className="md:font-semibold leading-snug mb-2"
            variants={itemVariants}
          >
            Experience the raw energy and nostalgia of Music Through The Lens
            through the lens of analog film. Our short film takes you behind the
            scenes with passionate photographers as they document live music
            performances using nothing but 35mm cameras and their artistic
            vision.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button text="View The Team" to="/team" />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="h-full  basis-1/3">
          <img
            loading="lazy"
            src={img2}
            alt="team member"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Team;
