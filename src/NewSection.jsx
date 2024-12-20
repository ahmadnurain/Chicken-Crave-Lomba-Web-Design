import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import BurgerEmoji from "./assets/Rectangle 8.png"; // Add your burger emoji image here

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

function NewSection() {
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if animation has occurred
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("new-section");
      const sectionTop = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (sectionTop < viewportHeight * 0.8 && !hasAnimated) {
        setInView(true);
        setHasAnimated(true); // Set hasAnimated to true once the animation has occurred
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  useEffect(() => {
    if (inView) {
      textControls.start("visible");
      imageControls.start("visible");
      cardControls.start("visible");
    }
  }, [inView, textControls, imageControls, cardControls]);

  return (
    <section id="new-section" className="relative py-12 bg-no-repeat bg-cover mb-11 bg-[url('./assets/layered-waves-haikei.svg')]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-28 mt-[30rem] md:mt-80 lg:mt-80">
        <div className="text-center mb-12">
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-label-text" variants={textVariants} initial="hidden" animate={textControls} transition={{ duration: 1 }}>
            About Us
          </motion.h2>
          <motion.p className="text-base sm:text-lg md:text-lg mb-8 pt-2 text-label-text" variants={textVariants} initial="hidden" animate={textControls} transition={{ duration: 1 }}>
            Selamat datang di Chicken Crave, destinasi utama untuk Anda yang mencari pengalaman kuliner ayam yang autentik dan tak terlupakan.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div className="flex-1 mb-8 md:mb-0" variants={imageVariants} initial="hidden" animate={imageControls} transition={{ duration: 1 }}>
            <img src={BurgerEmoji} alt="Burger Emoji" className="mx-auto w-80 sm:w-96" />
          </motion.div>
          <motion.div className="flex-1" variants={cardVariants} initial="hidden" animate={cardControls} transition={{ duration: 1 }}>
            <div className="p-6 sm:p-8 hover:rounded-lg hover:shadow-lg duration-500 ease-in-out text-left transition-transform relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-label-text">Visi</h3>
              <p className="mb-6">
                Kami ingin menjadi pilihan utama bagi pecinta kuliner yang mencari kualitas, keunikan, dan pengalaman bersantap yang istimewa. Dengan terus berinovasi dan menjaga standar tinggi, kami berkomitmen untuk selalu memberikan yang
                terbaik.
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-label-text">Misi</h3>
              <p>Di balik setiap hidangan lezat kami, terdapat tim profesional yang berdedikasi. Dipimpin oleh Chef Ahmad, yang memiliki pengalaman lebih dari 10 tahun di dunia kuliner, kami siap memberikan yang terbaik untuk Anda.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default NewSection;
