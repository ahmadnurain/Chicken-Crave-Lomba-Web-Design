import PropTypes from "prop-types";
import { useContext } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CartContext from "./Cartcontext";

const CartPopup = ({ isOpen, toggleCart }) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize navigate

  if (!isOpen) return null;

  const handleCheckout = () => {
    navigate("/checkout"); // Redirect to /checkout
    toggleCart(); // Close the popup
  };

  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-white p-6 rounded-xl w-96 relative">
        <button onClick={toggleCart} className="absolute top-2 right-2 text-2xl">
          <FiX />
        </button>
        <h2 className="text-2xl font-bold mb-4">Keranjang</h2>
        <ul className="mb-4">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>
                {" "}
                {parseFloat(item.price).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </li>
          ))}
        </ul>
        <button
          className="bg-orange-600 text-white w-full py-2 rounded-2xl font-bold hover:bg-orange-700"
          onClick={handleCheckout} // Use the new handleCheckout function
        >
          Checkout
        </button>
      </div>
    </motion.div>
  );
};

CartPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default CartPopup;
