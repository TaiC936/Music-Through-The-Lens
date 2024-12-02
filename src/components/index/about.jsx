import React from "react";
import { motion, useInView } from "framer-motion";
import aboutImg from "../../assets/imgs/aboutimg.webp";
import Button from "../shared/button";
import { itemVariants, containerVariants } from "../../animations/varients";

function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="w-full flex justify-center px-4">
      <motion.div
        ref={ref}
        className="w-fit"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className=" max-w-7xl grid grid-cols-1 grid-rows-1 md:grid-cols-3 mdgrid-rows-3">
          <motion.div
            className="col-span-4 md:col-span-2   mb-4"
            variants={itemVariants}
          >
            <h2 className="leading-none">
              <span className="text-butterscotch">
                Capturing the Beat <br />
              </span>
              A Lens on Concert Photography
            </h2>
          </motion.div>
          <motion.div
            className="row-start-2 md:row-span-2 p-3 pl-0 md:row-start-2 border-t border-l md:border-l-0 "
            variants={itemVariants}
          >
            <img
              loading="lazy"
              src={aboutImg}
              alt="artist on stage"
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            className="border-b border-l row-start-4 col-span-4 md:col-span-2 md:row-span-1 md:row-start-2"
            variants={itemVariants}
          >
            <p className="text-base mb-4 p-2">
              Following Summer, a passionate but struggling photographer, as she
              navigates the electrifying world of concert photography. From dive
              bars to sold-out arenas, Summer's journey captures the raw energy
              of live music and the relentless pursuit of that perfect shot. As
              she battles low light, restrictive contracts, and fierce
              competition, Summer discovers that her greatest challenge isn't
              just capturing the artists on stage, but finding her own voice in
              a sea of flashing lights. <br />
              <br /> This documentary offers an intimate look at the highs and
              lows of a career behind the camera, revealing the dedication,
              creativity, and resilience required to make it in the fast-paced
              world of music photography. Through Summer's lens, we see not just
              the stars on stage, but the rising talent behind the viewfinder
            </p>
          </motion.div>
          <motion.div
            className="col-start-2 row-start-5 md:col-start-4 md:row-start-3 w-fit h-fit p-2 border-b border-l"
            variants={itemVariants}
          >
            <Button text="Learn More" to="/about" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
