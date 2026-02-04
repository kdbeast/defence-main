import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center p-2">
        <h1 className="text-2xl font-bold">{count}</h1>
      </div>
      <div className="flex justify-center items-center p-2">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
