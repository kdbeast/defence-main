import { useState } from "react";

const Counting = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Our first counter app: {name}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counting;
