import { useState, useContext } from "react";
import CartContext from "./Cartcontext";
import CreditCard from "./assets/6276-removebg-preview.png"; // Correct import path
import Paypal from "./assets/paypal-logo-0.png";
import Dana from "./assets/Dana.png";
import Ovo from "./assets/WDZ999VRPWJJ5LJ99R7JLLB6L373T56D56PFKEFW-5a65533e.png";

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState("Right Now");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const applyDiscount = () => {
    if (discountCode === "DISCOUNT10") {
      setDiscount(10000); // Applying a flat $10 discount
    } else {
      setDiscount(0);
    }
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => {
      const itemPrice = parseFloat(item.price) || 0;
      return sum + itemPrice;
    }, 0);
    return total;
  };

  const total = calculateTotal();
  const totalAfterDiscount = total - discount;

  return (
    <div className="bg-gray-100 min-h-screen p-4 pt-6 pb-10 flex flex-col items-center gap-8">
      <h1 className="font-bold text-5xl text-center">Checkout</h1>
      {/* Navigation Bar */}
      <div className="w-full max-w-4xl p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">1</div>
            <span className="font-bold">Personal Info</span>
          </div>
          <div className="w-full md:w-1/3 border-t-2 border-gray-600 my-6 md:my-0"></div>
          <div className="flex items-center space-x-2 pl-5 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">2</div>
            <span className="font-bold">Payment Methods</span>
          </div>
          <div className="w-full md:w-1/3 border-t-2 border-gray-300  my-6 md:my-0"></div>
          <div className="flex items-center space-x-2 pl-5 text-gray-400">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">3</div>
            <span>Order Summary</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center w-full max-w-6xl gap-6">
        {/* Payment Methods Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full lg:w-2/3 flex-1">
          <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
          <div className="mb-4">
            <label className="block mb-5 text-lg font-bold">Choose Your Payment Method</label>
            <div className="flex flex-wrap justify-around mb-4">
              <div className={`p-4 border rounded-xl cursor-pointer ${paymentMethod === "credit-card" ? "border-orange-600" : "border-gray-300"}`} onClick={() => setPaymentMethod("credit-card")}>
                <img src={CreditCard} alt="Credit Card" className="w-16 h-16 object-contain" />
              </div>
              <div className={`p-4 border rounded-xl cursor-pointer ${paymentMethod === "paypal" ? "border-orange-600" : "border-gray-300"}`} onClick={() => setPaymentMethod("paypal")}>
                <img src={Paypal} alt="PayPal" className="w-16 h-16 object-contain" />
              </div>
              <div className={`p-4 border rounded-xl cursor-pointer ${paymentMethod === "dana" ? "border-orange-600" : "border-gray-300"}`} onClick={() => setPaymentMethod("dana")}>
                <img src={Dana} alt="Dana" className="w-16 h-16 object-contain" />
              </div>
              <div className={`p-4 border rounded-xl cursor-pointer ${paymentMethod === "ovo" ? "border-orange-600" : "border-gray-300"}`} onClick={() => setPaymentMethod("ovo")}>
                <img src={Ovo} alt="Ovo" className="w-16 h-16 object-contain" />
              </div>
            </div>
          </div>

          <div className="mb-4 mt-10">
            <label className="block mb-5 text-lg font-bold">Delivery Time</label>
            <div className="flex flex-wrap justify-between gap-2">
              {["Right Now", "09:00-11:00", "11:00-13:00", "13:00-15:00", "Custom"].map((time) => (
                <button key={time} className={`py-2 px-4 rounded-xl w-full sm:w-auto ${deliveryTime === time ? "bg-orange-600 text-white" : "bg-gray-200"}`} onClick={() => setDeliveryTime(time)}>
                  {time}
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className="bg-orange-600 text-white py-2 px-4 mt-10 rounded-[8px] w-full font-bold hover:shadow-[0_0_0_4px_#fed7aa] transition duration-500">
            Next
          </button>
        </div>

        {/* Basket Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full lg:w-1/3 flex-shrink-0">
          <h2 className="text-2xl font-bold mb-4">Basket</h2>
          <ul className="mb-4">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center mb-2 border-b-2 pb-2 border-slate-200 font-bold">
                  <span className="mr-2">{item.quantity}</span>
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-2" />
                  <span className="flex-1">{item.name}</span>
                  <span className="mr-6 text-sm">
                    {parseFloat(item.price).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </li>
              ))
            ) : (
              <li className="text-center">No items in cart.</li>
            )}
          </ul>
          <div className="mb-4">
            <div className="flex gap-3">
              <input type="text" value={discountCode} onChange={handleDiscountChange} placeholder="Enter discount code" className="w-full p-2 border border-gray-300 rounded-[8px]" />
              <button onClick={applyDiscount} className="bg-orange-600 text-white py-2 px-4 rounded-[8px]">
                Apply
              </button>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4 font-bold">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>
                {total.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount:</span>
              <span className="text-red-500">
                -
                {discount.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total:</span>
              <span>
                {totalAfterDiscount.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
