import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#FF810E] text-white py-8 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-8 lg:space-y-0 -mt-3">
        {/* Left Side - Logo and Social Icons */}
        <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-5">
          <h1 className="font-semibold text-2xl lg:pr-5">chicken crave.</h1>
          <div className="flex space-x-5 pt-5">
            <a href="#!" aria-label="Facebook">
              <FaFacebook className="text-3xl transform hover:scale-150 hover:shadow-lg transition duration-500" />
            </a>
            <a href="#!" aria-label="Instagram">
              <FaInstagram className="text-3xl transform hover:scale-150 hover:shadow-lg transition duration-500" />
            </a>
            <a href="#!" aria-label="Twitter">
              <FaSquareXTwitter className="text-3xl transform hover:scale-150 hover:shadow-lg transition duration-500" />
            </a>
          </div>
        </div>

        {/* Center - Contact Information */}
        <div className="text-center lg:text-left lg:space-y-4">
          <h2 className="font-semibold text-2xl mb-2">Contact Us</h2>
          <div className="flex flex-col gap-4">
            <p>
              Jl. Kuliner No. 69
              <br />
              Jakarta, Indonesia 12345
            </p>
            <p>
              <a href="mailto:info@ayam69.com" className="hover:underline">
                info@chickencrave.com
              </a>
            </p>
            <p>
              <a href="tel:02112345678" className="hover:underline">
                (021) 1234-5678
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Navigation Links */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-4 lg:space-y-0 lg:items-start items-center">
          <a href="#!" className="hover:underline">
            Home
          </a>
          <a href="#!" className="hover:underline">
            About
          </a>
          <a href="#!" className="hover:underline">
            Menu
          </a>
          <a href="#!" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
