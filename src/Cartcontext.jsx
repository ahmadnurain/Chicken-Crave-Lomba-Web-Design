import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
}

// Define PropTypes for CartProvider
CartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a required prop of type node
};

export default CartContext;
