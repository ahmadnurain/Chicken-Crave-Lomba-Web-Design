import "./style.css"; // Create this CSS file for styling

// Import your floating food images
import Food1 from "./assets/burger-svgrepo-com.svg";
import Food2 from "./assets/burger-svgrepo-com.svg";
import Food3 from "./assets/burger-svgrepo-com.svg";

const FloatingFoods = () => {
  return (
    <div className="floating-foods-container">
      <img src={Food1} alt="Food 1" className="floating-food floating1" />
      <img src={Food2} alt="Food 2" className="floating-food floating2" />
      <img src={Food3} alt="Food 3" className="floating-food floating3" />
    </div>
  );
};

export default FloatingFoods;
