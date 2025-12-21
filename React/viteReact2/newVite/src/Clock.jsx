import { useState } from "react";
import Counting from "./Counting";

const Clock = () => {
  const [clock, setClock] = useState(["A", "B", "C"]);

  const handleChange = () => {
    setClock(["D", ...clock]);
  };
  return (
    <>
      <h1>clock</h1>
      <button onClick={handleChange}>Add</button>
      {clock.map((clock) => {
        return <Counting key={clock} name={clock} />;
      })}
    </>
  );
};

export default Clock;
