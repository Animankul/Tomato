import PropTypes from "prop-types";
import { useContext } from "react";
import { StoreContext } from "../../context/StoredContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list && food_list.length > 0 ? (
          food_list.map((item) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={item._id} // Ensure uniqueness
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null;
          })
        ) : (
          <p>No food items available.</p>
        )}
      </div>
    </div>
  );
};

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default FoodDisplay;
