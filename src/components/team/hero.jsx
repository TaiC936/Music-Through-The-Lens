import { motion, useTransform, useScroll } from "framer-motion";
import img1 from "../../assets/imgs/galimg (8).webp";
import { containerVariants } from "../../animations/varients";

export function Hero() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.5]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  return (
    <motion.div
      className="flex flex-col lg:flex-row pt-32 pb-14 h-screen justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div>
        <motion.h1
          className="leading-none mb-4 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The <motion.span className="text-butterscotch">Team</motion.span>
        </motion.h1>
        <motion.p
          className="lg:w-2/3 text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Behind every captivating concert photograph is a dedicated team of
          visionaries. Our collective passion for music and imagery drives us to
          freeze moments of pure artistic expression. From the thunderous beats
          to the dazzling lights, we're there to capture it all. Meet the faces
          behind the lenses, the storytellers who bring you closer to the heart
          of live music. Together, we're not just documenting performances;
          we're preserving the raw energy and emotion that make each show
          unforgettable.
        </motion.p>
      </motion.div>
      <motion.div
        className="flex items-end mt-8 overflow-hidden lg:overflow-visible object-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          style={{ scale, y }}
          className="lg:right-0 lg:origin-bottom-right"
        >
          <motion.img src={img1} alt="team picture" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
