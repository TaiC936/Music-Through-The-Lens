import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import img1 from "../../assets/imgs/galimg (1).webp";
import img2 from "../../assets/imgs/galimg (2).webp";

function TeamScroll() {
  const { scrollY } = useScroll();
  const [currentIndex, setCurrentIndex] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  //team
  const teamMembers = [
    {
      job: "Director, DoP",
      name: "Katie Barnes",
      image: img1,
      text: "Kate's media journey began in secondary school, inspired by K-pop music videos' unique visual style. This fascination with creative storytelling naturally led her to pursue film and television studies.",
      alt: "picture of kate",
    },
    {
      job: "Director, Editor",
      name: "Léa Fabiola",
      image: img2,
      text: "Raised by a film enthusiast father who always had a camera at the ready, Léa's obsession with movies and the film industry blossomed early. This childhood immersion in cinema shaped her creative journey, fueling her passion for filmmaking.",
      alt: "picture of Léa",
    },
    {
      job: "1st Aid",
      name: "Ella",
      image: img1,
      text: "Ella's expertise in first aid ensures the safety of our crew and talent on set. Her quick thinking and calm demeanor are invaluable assets during intense shooting schedules.",
      alt: "picture of Ella",
    },
    {
      job: "Producer",
      name: "Luca",
      image: img2,
      text: "Luca's organizational skills and creative vision make him an exceptional producer. He seamlessly coordinates all aspects of production, ensuring that our projects run smoothly from concept to completion.",
      alt: "picture of Luca",
    },
  ];

  // scroll trigger points
  const triggerPoints = [700, 1050, 1350, 1700, 2000];

  //scroll position change eventlistener
  useMotionValueEvent(scrollY, "change", (latest) => {
    //determines what team member based on scroll position
    if (
      latest < triggerPoints[0] ||
      latest >= triggerPoints[triggerPoints.length - 1]
    ) {
      setCurrentIndex(undefined);
      setIsVisible(false);
      setProgress(0);
    } else {
      setIsVisible(true);
      let newIndex = triggerPoints.findIndex(
        (point, i) => latest >= point && latest < triggerPoints[i + 1]
      );
      newIndex = Math.min(newIndex, teamMembers.length - 1);
      setCurrentIndex(newIndex);

      // calculates loading bar progress
      const sectionStart = triggerPoints[0];
      const sectionEnd = triggerPoints[triggerPoints.length - 1];
      const currentProgress =
        (latest - sectionStart) / (sectionEnd - sectionStart);
      setProgress(Math.min(Math.max(currentProgress, 0), 1));
    }
  });

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    enter: { y: 50, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };

  return (
    <div className="md:h-[1700px] h-[1950px] w-full">
      {/* Loading Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-butterscotch z-50"
        style={{ scaleX: progress, transformOrigin: "0%" }}
      />

      {/* main content container */}
      <motion.div
        className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%] w-full"
        variants={contentVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div className="flex flex-col px-4 md:px-0 md:flex-row gap-12 justify-center">
          {/* job and name */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              {currentIndex !== undefined && (
                <>
                  <motion.h2
                    key={`job-${currentIndex}`}
                    variants={itemVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="w-64 z-10"
                  >
                    {teamMembers[currentIndex].job}
                  </motion.h2>
                  <motion.h4
                    key={`name-${currentIndex}`}
                    variants={itemVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-amethyst text-3xl"
                  >
                    {teamMembers[currentIndex].name}
                  </motion.h4>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Team image */}
          <AnimatePresence mode="wait">
            {currentIndex !== undefined && (
              <motion.div
                key={`image-${currentIndex}`}
                variants={itemVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ delay: 0.2, duration: 0.4 }}
                className="basis-1/4"
              >
                <img
                  src={teamMembers[currentIndex].image}
                  alt=""
                  className="w-full h-auto"
                />
              </motion.div>
            )}
          </AnimatePresence>
          {/* description */}
          <AnimatePresence mode="wait">
            {currentIndex !== undefined && (
              <motion.div
                key={`text-${currentIndex}`}
                variants={itemVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ delay: 0.3, duration: 0.4 }}
                className="basis-1/4 flex items-end"
              >
                <p>{teamMembers[currentIndex].text}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TeamScroll;
