import { useState, useEffect } from "react"; // Import useEffect
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Checkout from "./Checkout"; // Import the Checkout component
import "./index.css";
import SplashScreen from "./SplashScreen";
import { CartProvider } from "./Cartcontext";
import CartPopup from "./CartPopup"; // Import CartPopup
import Payment from "./Payment";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <CartProvider>
        <Navbar toggleCart={toggleCart} />
        <CartPopup isOpen={isCartOpen} toggleCart={toggleCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Add route for Checkout */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
