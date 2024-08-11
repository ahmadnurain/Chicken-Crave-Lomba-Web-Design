import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import CartContext from "./Cartcontext";

const navbarVariants = {
  hidden: { y: -100 },
  visible: { y: 0 },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -20, height: 0, overflow: "hidden" },
  visible: { opacity: 1, y: 0, height: "auto", overflow: "visible" },
};

const sections = ["home", "about", "ourmenu", "contact"];

function Navbar({ toggleCart }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation(); // Get current route
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
        setIsMenuOpen(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);

      const sectionHeights = sections
        .map((section) => {
          const element = document.getElementById(section);
          return element ? { id: section, offsetTop: element.offsetTop, offsetHeight: element.offsetHeight } : null;
        })
        .filter(Boolean);

      const currentSection = sectionHeights.find(({ offsetTop, offsetHeight }) => {
        return window.scrollY >= offsetTop - 50 && window.scrollY < offsetTop + offsetHeight;
      });

      setActiveSection(currentSection ? currentSection.id : "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isCheckoutPage = location.pathname === "/checkout"; // Check if the current route is checkout

  return (
    <motion.header
      className={`p-4 sticky top-0 z-50 transition-colors duration-300 ${showNavbar ? (isMenuOpen ? "bg-white" : "bg-transparent backdrop-blur-lg") : "bg-transparent backdrop-blur-lg"} ${isMenuOpen ? "shadow-lg" : ""}`}
      variants={navbarVariants}
      initial="visible"
      animate={showNavbar ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-9 my-2">
        <h1 className="text-2xl font-bold text-text-color">CHICKEN CRAVE</h1>
        <nav className="hidden md:flex gap-10">
          {sections.map((section) => (
            <Link to={`/${section}`} key={section} className={`relative cursor-pointer hover:underline ${activeSection === section ? "text-orange-600" : ""}`} onClick={() => setIsMenuOpen(false)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && <span className="absolute bottom-0 left-0 w-full border-b-4 border-orange-600" style={{ transform: "translateY(4px)" }}></span>}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-6 items-center">
          {!isCheckoutPage && ( // Conditionally render the Cart button
            <button className="relative" onClick={toggleCart}>
              <FiShoppingCart size={24} />
              {cartItems.length > 0 && <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2">{cartItems.length}</span>}
            </button>
          )}
          <button className="group relative border-orange-600 border-2 rounded-2xl text-orange-600 px-10 py-2 font-bold overflow-hidden hover:text-white duration-500 ease-in-out">
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 bg-orange-600 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
          </button>
          <button className="bg-orange-600 text-white font-bold px-10 py-2 rounded-2xl hover:shadow-[0_0_0_4px_#fed7aa] duration-500">Sign Up</button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <motion.div
        className={`md:hidden flex flex-col items-stretch ${isMenuOpen ? "bg-white" : "bg-transparent"} p-4 rounded-lg shadow-lg w-full absolute left-0 top-full z-40 ${isMenuOpen ? "backdrop-blur-lg" : ""}`}
        variants={dropdownVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
      >
        {sections.map((section) => (
          <Link to={`/${section}`} key={section} className={`relative cursor-pointer hover:underline py-2 text-center ${activeSection === section ? "text-orange-600" : ""}`} onClick={() => setIsMenuOpen(false)}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {activeSection === section && <span className="absolute bottom-0 left-0 w-full border-b-4 border-orange-600" style={{ transform: "translateY(4px)" }}></span>}
          </Link>
        ))}
        <div className="flex flex-col gap-4 mt-4">
          <button className="group relative border-orange-600 border-2 rounded-2xl text-orange-600 px-4 py-2 font-bold overflow-hidden hover:text-white duration-500 ease-in-out w-full">
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 bg-orange-600 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
          </button>
          <button className="bg-orange-600 text-white font-bold px-4 py-2 rounded-2xl hover:shadow-[0_0_0_4px_#fed7aa] duration-500 w-full">Sign Up</button>
        </div>
      </motion.div>
    </motion.header>
  );
}

Navbar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default Navbar;
