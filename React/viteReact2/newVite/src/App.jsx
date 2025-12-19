import { useState } from "react";

function App() {
  // useState, count =0 , setCount()
  // setCount ki value ko update kar skte hai, nd app function ko re-render kar dega

  let [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;
