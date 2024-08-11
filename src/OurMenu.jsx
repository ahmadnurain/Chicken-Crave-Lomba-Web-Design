import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import food1 from "./assets/product1-img.png";
import food1hover from "./assets/product1-img2.png";
import food2 from "./assets/burger.png";
import food2hover from "./assets/burger2.png";
import food3 from "./assets/food3.png";
import food3hover from "./assets/food32.png";
import food4 from "./assets/food4.png";
import food4hover from "./assets/food4hov.png";
import food4mobile from "./assets/32312633_7861430-removebg-preview 1 (1).png";
import food5 from "./assets/food5.png";
import food5hover from "./assets/food5hov.png";
import food5mob from "./assets/2150849021-removebg-preview 1.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  return (
    <div className="min-h-screen bg-[#FFE7D1] py-4 px-4 sm:px-8 lg:px-14 font-popins pb-[400px]">
      <div className="mx-auto">
        <motion.h1 className="text-center font-bold text-3xl sm:text-4xl mb-5 mt-10 text-label-text" initial={{ y: -50, opacity: 0 }} animate={isInView1 ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} ref={ref1}>
          Our Menu
        </motion.h1>
        <motion.div className="flex flex-col md:flex-row justify-center items-center w-full mt-10" initial={{ y: 50, opacity: 0 }} animate={isInView2 ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }} ref={ref2}>
          <div>
            <Link to="/menu" className="flex items-center text-xl justify-end mr-5 cursor-pointer hover:text-orange-600 transition duration-500 font-semibold mb-5">
              Lihat Semua <IoIosArrowForward />
            </Link>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <motion.div
                className="relative border flex bg-white px-4 py-3 rounded-xl items-center justify-between cursor-pointer transform transition duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-custom-orange group"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Label Best Seller */}
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg z-10">Best Seller</div>

                <div className="flex flex-col">
                  <h1 className="font-extrabold text-lg sm:text-2xl mb-2 group-hover:text-white">Ayam Bakar Madu</h1>
                  <p className="mb-2 text-xs sm:text-sm group-hover:text-white">Ayam bakar yang diolah dengan bumbu spesial dan madu</p>
                  <h1 className="font-bold text-orange-600 text-lg sm:text-xl group-hover:text-white">Rp. 45.000</h1>
                </div>
                <div className="relative w-24 h-24 sm:w-36 sm:h-36">
                  <div className="absolute inset-0">
                    <img src={food1} alt="Food Normal" className="w-full h-full object-contain group-hover:hidden" />
                    <img src={food1hover} alt="Food Hover" className="w-full h-full object-contain top-0 left-0 hidden group-hover:block" />
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="relative border flex bg-white px-4 py-3 rounded-xl items-center justify-between cursor-pointer transform transition duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-custom-orange group"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Label Best Seller */}
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg z-10">Best Seller</div>

                <div>
                  <h1 className="font-extrabold text-lg sm:text-2xl mb-2 text-card-label group-hover:text-white">Burger Ayam BBQ</h1>
                  <p className="mb-2 text-xs sm:text-sm group-hover:text-white">Burger ayam yang diolah dengan saus BBQ yang manis dan gurih.</p>
                  <h1 className="font-bold text-orange-600 text-lg sm:text-xl group-hover:text-white">Rp. 40.000</h1>
                </div>
                <div className="relative w-24 h-24 sm:w-36 sm:h-36">
                  <div className="absolute inset-0">
                    <img src={food2} alt="Food Normal" className="w-full h-full object-contain group-hover:hidden" />
                    <img src={food2hover} alt="Food Hover" className="w-full h-full object-contain top-0 left-0 hidden group-hover:block" />
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="relative border flex bg-white px-4 py-3 rounded-xl items-center justify-between cursor-pointer transform transition duration-500 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-custom-orange group"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Label New Menu */}
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg z-10">Best Seller</div>

                <div>
                  <h1 className="font-extrabold text-lg sm:text-2xl mb-2 text-card-label group-hover:text-white">Ayam Katsu Curry</h1>
                  <p className="mb-2 text-xs sm:text-sm group-hover:text-white">Ayam katsu yang disajikan dengan saus kari spesial.</p>
                  <h1 className="font-bold text-orange-600 text-lg sm:text-xl group-hover:text-white">Rp. 45.000</h1>
                </div>
                <div className="relative w-24 h-24 sm:w-36 sm:h-36">
                  <div className="absolute inset-0">
                    <img src={food3} alt="Food Normal" className="w-full h-full object-contain group-hover:hidden" />
                    <img src={food3hover} alt="Food Hover" className="w-full h-full object-contain top-0 left-0 hidden group-hover:block" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8 mt-10 md:flex-row md:gap-10 justify-center">
          {/* Promo Card 1 */}
          <motion.div
            className="border flex bg-white px-5 py-3 rounded-xl items-center justify-between cursor-pointer transform transition duration-500 ease-in-out hover:shadow-xl hover:bg-custom-orange group"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView3 ? { x: 0, opacity: 1 } : {}}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            ref={ref3}
          >
            <div className="flex-1 z-10 lg:w-80">
              <h1 className="font-bold text-lg sm:text-xl mb-2 font-popins group-hover:text-white">Diskon 15% untuk Pembelian Online Pertama</h1>
              <p className="mb-2 text-sm sm:text-base group-hover:text-white ">Pesan makanan melalui website kami dan nikmati diskon 15% untuk pesanan pertama Anda.</p>
              <p className="mb-2 text-xs sm:text-sm group-hover:text-white">
                Kode Promo: <span className="font-bold">ONLINE15</span>
              </p>
            </div>
            <div className="relative w-[150px] h-[300px] mx-0 sm:w-[239px] sm:h-[266px] md:w-[239px] md:h-[266px] lg:w-[258px] lg:h-[310px] lg:left-[20px] md:-top-10 lg:-top-[24px] lg:-right-[23px] -mb-12">
              <div className="absolute inset-0">
                {/* Mobile Image */}
                <img src={food4mobile} alt="Food Normal Mobile" className="w-full h-full object-contain sm:hidden" />
                {/* Desktop Image */}
                <img src={food4} alt="Food Normal Desktop" className="w-full h-full object-contain hidden sm:block group-hover:hidden" />
                {/* Hover Image */}
                <img src={food4hover} alt="Food Hover" className="w-full h-full object-contain hidden sm:hidden group-hover:hidden lg:group-hover:block" />
              </div>
            </div>
          </motion.div>

          {/* Promo Card 2 */}
          <motion.div
            className="border flex bg-white px-5 py-3 rounded-xl items-center justify-between cursor-pointer transform transition duration-500 ease-in-out hover:shadow-xl hover:bg-custom-orange group"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView4 ? { x: 0, opacity: 1 } : {}}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            ref={ref4}
          >
            <div className="flex-1 z-10">
              <h1 className="font-bold text-lg sm:text-xl mb-2 font-popins group-hover:text-white">Happy Hour Diskon 25%</h1>
              <p className="mb-2 text-sm sm:text-base group-hover:text-white lg:w-96">Nikmati diskon 25% untuk semua menu Ayam69 selama jam 14.00 - 17.00 setiap hari Senin hingga Jumat. Jangan lewatkan kesempatan ini!</p>
              <p className="mb-2 text-xs sm:text-sm group-hover:text-white">
                Masa Berlaku: <span className="font-bold">1 - 31 Juli 2024</span>
              </p>
            </div>
            <div className="relative w-[150px] h-[300px] mx-0 sm:w-[239px] sm:h-[266px] md:w-[239px] md:h-[266px] lg:w-[258px] lg:h-[310px] lg:-mx-[20px] md:-top-10 lg:-top-[1px]  -mb-12">
              <div className="absolute inset-0">
                {/* Mobile Image */}
                <img src={food5mob} alt="Food Normal Mobile" className="w-full h-full object-contain sm:hidden" />
                {/* Desktop Image */}
                <img src={food5} alt="Food Normal Desktop" className="w-full h-full object-contain hidden sm:block group-hover:hidden" />
                {/* Hover Image */}
                <img src={food5hover} alt="Food Hover" className="w-full h-full object-contain hidden sm:hidden group-hover:hidden lg:group-hover:block" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
