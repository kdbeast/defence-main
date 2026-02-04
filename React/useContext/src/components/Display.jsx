import { useContext } from "react";
import { CountContext } from "../App";

const Display = () => {
  const { count } = useContext(CountContext);
  return (
    <div className="flex justify-center items-center">
      I am Displaying the count: {count}
    </div>
  );
};

export default Display;
