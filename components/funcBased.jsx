import { useState } from "react";
import Prop from "./Prop";

const funcBased = () => {
  const [name, setName] = useState("Karan");
  const [age, setAge] = useState(21);

  const handleClick = () => {
    setName("Karan Jamwal");
    setAge(22);
  };
  return (
    <>
      <div>This is a function based component</div>
      <Prop name={name} age={age} />
      <button onClick={handleClick}>Change Name and Age</button>
    </>
  );
};

export default funcBased;
