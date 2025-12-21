import { useState } from "react";
import FoodList from "./FoodList.jsx";

const Items = () => {
  const [food, setFood] = useState(["Apple", "Mango", "Banana"]);

  const handleChange = () => {
    setFood(["Grapes", ...food]);
  };
  return (
    <>
      <h1>Food</h1>
      <button onClick={handleChange}>Add</button>
      <FoodList food={food} />
    </>
  );
};

export default Items;
