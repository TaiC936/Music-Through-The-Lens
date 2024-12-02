import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import img1 from "../../assets/imgs/galimg (1).webp";
import img2 from "../../assets/imgs/galimg (2).webp";
import img3 from "../../assets/imgs/galimg (3).webp";
import img4 from "../../assets/imgs/galimg (4).webp";
import img5 from "../../assets/imgs/galimg (5).webp";
import img6 from "../../assets/imgs/galimg (6).webp";
import img7 from "../../assets/imgs/galimg (7).webp";
import img8 from "../../assets/imgs/galimg (8).webp";
import img9 from "../../assets/imgs/galimg (9).webp";
import img10 from "../../assets/imgs/galimg (10).webp";
import img11 from "../../assets/imgs/galimg (11).webp";
import img12 from "../../assets/imgs/galimg (12).webp";
import img13 from "../../assets/imgs/galimg (13).webp";
import img14 from "../../assets/imgs/galimg (14).webp";
import img15 from "../../assets/imgs/galimg (15).webp";
import img16 from "../../assets/imgs/galimg (16).webp";
import img17 from "../../assets/imgs/galimg (17).webp";
import img18 from "../../assets/imgs/galimg (18).webp";
import img19 from "../../assets/imgs/galimg (19).webp";
import img20 from "../../assets/imgs/galimg (20).webp";

const images = [
  {
    src: img1,
    title: "Lead singer belting out lyrics",
    alt: "Energetic lead singer performing on a brightly lit stage",
  },
  {
    src: img2,
    title: "Guitarist mid-solo",
    alt: "Guitarist playing an intense solo under spotlights",
  },
  {
    src: img3,
    title: "Vocalist engaging the crowd",
    alt: "Singer reaching out to the audience from the edge of the stage",
  },
  {
    src: img4,
    title: "Band in action",
    alt: "Band performing together on a large stage",
  },
  {
    src: img5,
    title: "Singer's emotional performance",
    alt: "Close-up of singer with eyes closed, singing passionately",
  },
  {
    src: img6,
    title: "Frontman commanding the stage",
    alt: "Lead singer running across the stage with microphone in hand",
  },
  {
    src: img7,
    title: "Drummer in the spotlight",
    alt: "Drummer surrounded by cymbals, caught mid-beat",
  },
  {
    src: img8,
    title: "Vocalist's powerful stance",
    alt: "Singer standing tall with arms outstretched on stage",
  },
  {
    src: img9,
    title: "Singer captivating the audience",
    alt: "Lead singer performing passionately on stage with dramatic lighting",
  },
  {
    src: img10,
    title: "Singer's energetic performance",
    alt: "Singer leaping on stage during an intense moment of the concert",
  },
  {
    src: img11,
    title: "Drummer's rhythmic intensity",
    alt: "Drummer playing with intense focus, surrounded by drum kit",
  },
  {
    src: img12,
    title: "Singer's emotional delivery",
    alt: "Close-up of singer with eyes closed, gripping the microphone tightly",
  },
  {
    src: img13,
    title: "Singer's stage presence",
    alt: "Singer standing at the edge of the stage, arms outstretched to the crowd",
  },
  {
    src: img14,
    title: "Singer's crowd interaction",
    alt: "Singer reaching out to touch hands with front-row fans",
  },
  {
    src: img15,
    title: "Singer's powerful vocals",
    alt: "Singer belting out high notes with head tilted back",
  },
  {
    src: img16,
    title: "Singer's intimate moment",
    alt: "Singer crouching on stage, making eye contact with audience members",
  },
  {
    src: img17,
    title: "Singer's charismatic performance",
    alt: "Singer dancing across the stage with microphone in hand",
  },
  {
    src: img18,
    title: "Guitarist's solo spotlight",
    alt: "Guitarist playing a solo at the front of the stage, bathed in spotlight",
  },
  {
    src: img19,
    title: "Singer's encore performance",
    alt: "Singer with arms raised triumphantly during the encore",
  },
  {
    src: img20,
    title: "Singer's final Song",
    alt: "Singerat the end of the ",
  },
];
const Picturegal = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const closeImage = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const showPreviousImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="pt-24 pb-20 lg:mx-32 md:mx-12 mx-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-night outside border-night w-fit mb-8 text-shaddow"
      >
        Gallery
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            layoutId={`image-${index}`}
            onClick={() => {
              setSelectedImage(image);
              setCurrentIndex(index);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer border-night border-2 p-2 aspect-square"
            variants={itemVariants}
          >
            <div className="w-full h-full relative">
              <motion.img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <motion.p className="mt-2 text-sm font-semibold text-zinc-700 truncate">
              {image.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,.8)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <motion.div
              layoutId={`image-${currentIndex}`}
              className="bg-white p-4 max-w-3xl overflow-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div className="flex justify-between pb-2">
                <motion.p className="text-lg font-semibold text-night truncate">
                  {selectedImage.title}
                </motion.p>
                <motion.button onClick={closeImage} className="text-black">
                  <X size={24} />
                </motion.button>
              </motion.div>
              <div className="aspect-square relative">
                <motion.img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-between pt-2">
                <button onClick={showPreviousImage} className="p-2">
                  <ArrowLeft size={24} />
                </button>
                <button onClick={showNextImage} className="p-2">
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Picturegal;
