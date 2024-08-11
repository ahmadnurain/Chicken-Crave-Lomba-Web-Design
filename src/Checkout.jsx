import { useState, useContext } from "react";
import CartContext from "./Cartcontext";

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    postalCode: "",
  });
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState("dine-in");
  const [tableBooking, setTableBooking] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    console.log("Delivery Method:", deliveryMethod);
    console.log("Table Booking:", tableBooking);
  };

  const total = calculateTotal();
  const shippingFee = deliveryMethod === "delivery" ? 5000 : 0; // Additional shipping fee for delivery
  const totalAfterDiscount = total - discount + shippingFee;

  return (
    <div className="bg-gray-100 min-h-screen p-4 pt-6 pb-10 flex flex-col items-center gap-8">
      <h1 className="font-bold text-3xl sm:text-5xl">Checkout</h1>
      {/* Navigation Bar */}
      <div className="w-full max-w-4xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-around">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">1</div>
            <span className="font-bold">Personal Info</span>
          </div>
          <div className="w-full sm:w-1/3 border-t-2 border-gray-300 mt-6 sm:mt-0 lg:mt-6"></div>
          <div className="flex items-center space-x-2 text-gray-400 pl-5 mb-4 sm:mb-0">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">2</div>
            <span>Payment Methods</span>
          </div>
          <div className="w-full sm:w-1/3 border-t-2 border-gray-300 mt-6 sm:mt-0 lg:mt-6"></div>
          <div className="flex items-center space-x-2 text-gray-400 pl-5">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">3</div>
            <span>Order Summary</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center w-full max-w-6xl gap-6">
        {/* Checkout Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full lg:w-2/3 flex-1">
          <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="mb-4">
              <label className="block mb-2">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full p-2 border border-gray-300 rounded-[8px]" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded-[8px]" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full p-2 border border-gray-300 rounded-[8px]" required />
            </div>
            {deliveryMethod === "delivery" && (
              <div className="mb-4">
                <label className="block mb-2">Street Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your street address" className="w-full p-2 border border-gray-300 rounded-[8px]" required />
              </div>
            )}
            <div className="flex flex-col sm:flex-row mb-4 gap-4">
              <div className="flex-1">
                <label className="block mb-2">State/Province</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter your state/province" className="w-full p-2 border border-gray-300 rounded-[8px]" required />
              </div>
              <div className="flex-1">
                <label className="block mb-2">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your city" className="w-full p-2 border border-gray-300 rounded-[8px]" required />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mb-4 gap-4">
              <div className="flex-1">
                <label className="block mb-2">Zip/Postal Code</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Enter your zip/postal code" className="w-full p-2 border border-gray-300 rounded-[8px]" required />
              </div>
            </div>

            {/* Delivery method selection */}
            <div className="mb-4">
              <label className="block mb-2">Delivery Method</label>
              <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)} className="w-full p-2 border border-gray-300 rounded-[8px]">
                <option value="dine-in">Dine In</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>

            {/* Table booking option */}
            {deliveryMethod === "dine-in" && (
              <div className="mb-4">
                <label className="block mb-2">Table Booking</label>
                <input type="text" value={tableBooking} onChange={(e) => setTableBooking(e.target.value)} placeholder="Enter table booking details" className="w-full p-2 border border-gray-300 rounded-[8px]" />
              </div>
            )}

            <button type="submit" className="bg-orange-600 text-white py-2 px-4 rounded-[8px] w-full font-bold hover:shadow-[0_0_0_4px_#fed7aa] transition duration-500">
              Next
            </button>
          </form>
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
              <button onClick={applyDiscount} className="bg-orange-600 text-white py-2 px-4 rounded-[8px] hover:shadow-[0_0_0_4px_#fed7aa] transition duration-500">
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
            {deliveryMethod === "delivery" && (
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span className="text-green-600">
                  +
                  {shippingFee.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
            )}
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
