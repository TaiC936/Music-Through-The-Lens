import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import scrollImg1 from "../../assets/imgs/scrollImg1.webp";
import scrollImg2 from "../../assets/imgs/scrollImg2.webp";
import scrollImg3 from "../../assets/imgs/scrollImg3.webp";
import scrollImg4 from "../../assets/imgs/scrollImg4.webp";

// img array and angles
const images = [scrollImg1, scrollImg2, scrollImg3, scrollImg4];
const angles = [-5, 5, -5, 5];

const ImageComponent = ({ src, index, totalImages }) => {
  // tracks scrolling
  const { scrollYProgress } = useScroll();

  // animation start and end points
  const start = index / (totalImages + 1);
  const end = (index + 0.8) / (totalImages + 1);

  // Sets animations based on scroll
  const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    [angles[index] * 2, angles[index]]
  );
  const opacity = useTransform(
    scrollYProgress,
    [start, Math.min(start + 0.1, end)],
    [0, 1]
  );

  return (
    // images
    <motion.div
      style={{ y, scale, rotate, opacity, zIndex: index }}
      className="absolute top-1/4 transform -translate-x-1/2 w-[80%] sm:w-2/3 max-w-lg aspect-[4/4] flex items-center justify-center origin-bottom"
    >
      <img
        loading="lazy"
        src={src}
        alt={index + 1}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      {/*  link to gallery for last image */}
      {index === totalImages - 1 && (
        <Link
          to="/gallery"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg transition-opacity duration-300 hover:bg-opacity-75"
        >
          <span className="text-white text-3xl font-normal">
            [Go To Gallery]
          </span>
        </Link>
      )}
    </motion.div>
  );
};

// validating types
ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired,
};

const ScrollingImages = () => {
  return (
    // scrolling container
    <div className="h-[400vh] relative">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        {images.map((src, index) => (
          <ImageComponent
            key={src}
            src={src}
            index={index}
            totalImages={images.length}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;
