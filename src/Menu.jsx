// Menu.jsx
import { useState, useContext } from "react";
import CartContext from "./Cartcontext";
import burgerImg from "./assets/burger.png";
import burgerHoverImg from "./assets/burger2.png";
import chickenImg from "./assets/product1-img.png";
import chickenHoverImg from "./assets/product1-img2.png";
import katsuImg from "./assets/food3.png";
import katsuHoverImg from "./assets/food32.png";
import friesImg from "./assets/Group 70.png";
import friesHoverImg from "./assets/Group 86.png";
import teaImg from "./assets/Group 74.png";
import teaHoverImg from "./assets/Group 90.png";
import lemonTeaImg from "./assets/Group 73.png";
import lemonTeaHoverImg from "./assets/Group 89.png";
import orangeJuiceImg from "./assets/Group 72.png";
import orangeJuiceHoverImg from "./assets/Group 88.png";
import milkshakeImg from "./assets/Group 71.png";
import milkshakeHoverImg from "./assets/Group 87.png";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const { addToCart } = useContext(CartContext);

  const menuItems = [
    {
      id: 1,
      name: "Ayam Bakar Madu",
      price: 45000,
      image: chickenImg,
      hoverImage: chickenHoverImg,
      category: "Makanan",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Burger Ayam BBQ",
      price: 40000,
      image: burgerImg,
      hoverImage: burgerHoverImg,
      category: "Makanan",
      isBestSeller: true,
    },
    {
      id: 3,
      name: "Ayam Katsu Curry",
      price: 35000,
      image: katsuImg,
      hoverImage: katsuHoverImg,
      category: "Makanan",
      isBestSeller: true,
    },
    {
      id: 4,
      name: "French Fries",
      price: 10000,
      image: friesImg,
      hoverImage: friesHoverImg,
      category: "Makanan",
    },
    {
      id: 5,
      name: "Es Teh Manis",
      price: 10000,
      image: teaImg,
      hoverImage: teaHoverImg,
      category: "Minuman",
    },
    {
      id: 6,
      name: "Lemon Tea",
      price: 12000,
      image: lemonTeaImg,
      hoverImage: lemonTeaHoverImg,
      category: "Minuman",
    },
    {
      id: 7,
      name: "Es Jeruk",
      price: 15000,
      image: orangeJuiceImg,
      hoverImage: orangeJuiceHoverImg,
      category: "Minuman",
    },
    {
      id: 8,
      name: "Milk Shake",
      price: 18000,
      image: milkshakeImg,
      hoverImage: milkshakeHoverImg,
      category: "Minuman",
    },
  ];

  const categories = ["Semua", "Makanan", "Minuman"];
  const filteredItems = activeCategory === "Semua" ? menuItems : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[url('./assets/blob-scene-haikei.png')] bg-cover bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 pt-6 sm:pt-8 md:pt-9 pb-12 sm:pb-16 lg:pb-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pb-6 sm:pb-8 md:pb-14">Our Menu</h1>
        <nav className="flex flex-wrap justify-center gap-4 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm sm:text-base md:text-lg font-semibold py-2 px-4 sm:py-2.5 sm:px-6 md:py-3 md:px-8 rounded-xl transition duration-300 ${
                activeCategory === category ? "bg-orange-500 text-white" : "bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 sm:mt-8 md:mt-8 lg:mt-8">
          {filteredItems.map((item) => (
            <div key={item.id} onClick={() => addToCart(item)} className="relative bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col group transform transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:text-white">
              {item.isBestSeller && <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-10">Best Seller</div>}
              <div className="relative w-full h-32 flex items-center justify-center mb-4">
                <img src={item.image} alt={item.name} className="object-contain h-full group-hover:hidden transition-all duration-300 ease-in-out" />
                <img src={item.hoverImage} alt={`${item.name} Hover`} className="absolute object-contain h-full group-hover:block transition-all duration-300 ease-in-out hidden" />
              </div>
              <h2 className="text-left text-lg sm:text-xl font-bold">{item.name}</h2>
              <p className="text-left font-semibold text-sm sm:text-base">Rp {item.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
