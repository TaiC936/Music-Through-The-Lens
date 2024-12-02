import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import bts1 from "../../assets/imgs/galimg (5).webp";
import bts2 from "../../assets/imgs/galimg (6).webp";
import bts3 from "../../assets/imgs/galimg (7).webp";
import bts4 from "../../assets/imgs/galimg (4).webp";

// imgs
const images = [
  {
    src: bts1,
    title: "Concert Night",
    alt: "Behind the scenes of a concert at night",
  },
  {
    src: bts2,
    title: "On stage Moments",
    alt: "Candid moments of performers on stage",
  },
  {
    src: bts3,
    title: "Equipment",
    alt: "Close-up of music and photography equipment",
  },
  {
    src: bts4,
    title: "Stage Through Camera",
    alt: "View of the stage through a camera lens",
  },
];

const BTSGal = () => {
  // tracks current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef();

  // width of draggable area
  const [width, setWidth] = useState(0);

  // calculation for draggable width
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative pt-32 overflow-hidden flex items-end pb-8">
      <div className="absolute inset-0 flex justify-center z-0 overflow-hidden">
        <h1 className="text-[20vw] text-zinc-700 mt-24 md:mt-12 lg:mt-0">
          BTS
        </h1>
      </div>

      <div className="relative w-full px-4 pt-4 lg:px-0">
        <motion.div
          ref={carouselRef}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-16 md:gap-32 py-12 md:py-24"
            animate={{ x: -currentIndex * (width / (images.length - 1)) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="min-w-full sm:min-w-[50%] md:min-w-[33.333%] flex flex-col"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover pointer-events-none"
                />
                <p className="mt-2 text-white text-base">{image.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-between md:mx-24 mt-4">
          <button
            className="border-white-smoke border px-4 py-2 text-white-smoke hover:bg-purple-900"
            text="Previous Image"
            onClick={prevImage}
            disabled={currentIndex === 0}
          >
            Previous Image
          </button>

          <button
            className="border-white-smoke border px-4 py-2 text-white-smoke hover:bg-purple-900"
            text="Next Image"
            onClick={nextImage}
            disabled={currentIndex === images.length - 1}
          >
            Next Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default BTSGal;
