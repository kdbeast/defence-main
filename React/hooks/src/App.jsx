import Sum from "./Sum";
import Post from "./Post";
import React, { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10000);

  // function primeNumber() {
  //   let total = 0;
  //   if (num > 1) {
  //     total++;
  //     for (let i = 3; i <= num; i++) {
  //       total++;
  //       for (let j = 2; j < i; j++) {
  //         if (i % j === 0) {
  //           total--;
  //           break;
  //         }
  //       }
  //     }
  //   }
  //   return total;
  // }

  const prime = React.useMemo(() => {
    let total = 0;
    if (num > 1) {
      total++;
      for (let i = 3; i <= num; i++) {
        total++;
        for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            total--;
            break;
          }
        }
      }
    }
    return total;
  }, [num]);

  const handleClick = useCallback(() => {
    console.log("Button Clicked", num);
  }, [num]);

  const obj = React.useMemo(() => {
    return { name: "Karan", age: 22 };
  }, []);

  console.log("App Render");
  return (
    <>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={() => setNum((num) => num + 1)}>num is {num}</button>
      <p>Total Prime Number:{prime}</p>
      <button onClick={handleClick}>Click</button>
      <Sum num={num} />
      <Post value={obj} />
    </>
  );
}

export default App;
