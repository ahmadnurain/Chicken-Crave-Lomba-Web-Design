import { motion } from "framer-motion";
import foodImage from "./assets/Group 2.png";
import FloatingFoods from "./floating";
import "./style.css";
import NewSection from "./NewSection";
import BlurFade from "@/components/magicui/blur-fade";

import OurMenu from "./OurMenu";
import ContactUs from "./Contactus";
import { MarqueeDemo } from "./Marquee";

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <>
      <div className="overflow-x-hidden" id="home">
        <div className="min-h-screen bg-cover bg-no-repeat font-popins ">
          <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-4 md:px-10 space-y-8 md:space-y-0 md:space-x-8 my-24">
            <div className="flex-1 text-center md:text-left relative z-10">
              <BlurFade>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-text-color mb-4 md:-mt-4 -mt-20 pt-8 text-label-text font-popins" style={{ lineHeight: "1.5" }}>
                  Nikmati Sensasi Kuliner Terbaik di Setiap <br className="hidden md:block" />
                  <span className="md:hiden ">Gigitan! </span>
                </h2>
              </BlurFade>
              <BlurFade>
                <p className="text-lg md:text-2xl mb-4 pt-3 text-label-text">Jelajahi Dunia Rasa yang Tak Terlupakan dengan Pilihan Menu Terlezat dari Kami</p>
              </BlurFade>
              <motion.button
                initial="hidden"
                animate="visible"
                variants={scrollVariants}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="bg-orange-600 text-white rounded-2xl font-semibold px-6 md:px-12 py-3 mt-3 hover:shadow-[0_0_0_4px_#fed7aa] transition duration-500 relative z-10"
              >
                Lihat Menu
              </motion.button>
            </div>
            <motion.div className="flex-1 flex justify-center md:justify-end" initial="hidden" animate="visible" variants={scrollVariants} transition={{ duration: 0.5, delay: 0.25 }}>
              <img src={foodImage} alt="Kuliner" className="w-4/5 mb-4 md:w-4/5 mr-7 mt-8 md:mr-0 md:mt-0   food-floating" />
              <FloatingFoods />
            </motion.div>
          </div>
        </div>
      </div>
      <section id="about">
        <NewSection />
      </section>
      <section id="ourmenu">
        <OurMenu />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section>
        <MarqueeDemo />
      </section>
    </>
  );
}

export default Home;
