import { useEffect, useState } from "react";

function App() {
  // useState, count =0 , setCount()
  // setCount ki value ko update kar skte hai, nd app function ko re-render kar dega

  // let [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const [users, setUsers] = useState([]);
  // const [count, setCount] = useState(30);

  const [count, setCount] = useState([10, 20, 30, 40, 50]);

  const handleChange = () => {
    setCount([...count, 60]);
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       `https://api.github.com/users?per_page=${count}`
  //     );
  //     const data = await response.json();
  //     setUsers(data);
  //   }

  //   fetchData();
  // }, [count]);

  return (
    <>
      <h1
        style={{
          color: "white",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "black",
        }}
      >
        Vite + React
      </h1>
      {/* <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button> */}
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <div
        style={{
          gap: "10px",
          margin: "10px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* {users.map((user) => {
          return (
            <img
              key={user.id}
              alt={user.login}
              src={user.avatar_url}
              style={{ width: "100px", height: "100px" }}
            />
          );
        })} */}
        <h1>{count}</h1>
        <button onClick={handleChange}>Add</button>
      </div>
    </>
  );
}

export default App;
