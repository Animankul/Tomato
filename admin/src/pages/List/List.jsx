import axios from "axios";
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './List.css';

const List = ({url}) => {

  const [foodList, setFoodList] = useState([]); // State for storing food items

  // Fetch list of food items from the backend
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setFoodList(response.data.data);
      } else {
        toast.error("Failed to load food list");
      }
    } catch (error) {
      toast.error("Error fetching data");
      console.error("Error fetching food list:", error);
    }
  };

  // Delete a food item by ID
  const removeFood = async (foodId) => {
    try {
      const response = await axios.delete(`${url}/api/food/remove/${foodId}`);
      if (response.data.success) {
        toast.success("Item deleted successfully");
        fetchList(); // Refresh list after deletion
      } else {
        toast.error("Failed to delete item");
      }
    } catch (error) {
      toast.error("Error deleting item");
      console.error("Error deleting food item:", error);
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list-container flex-col">
      <ToastContainer />
      <h2>All Foods List</h2>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {foodList.length > 0 ? (
          foodList.map((item, index) => (
            <div key={index} className="list-table-format item">
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <button className="delete-btn" onClick={() => removeFood(item._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p className="no-data">No food items available</p>
        )}
      </div>
    </div>
  );
};

export default List;
