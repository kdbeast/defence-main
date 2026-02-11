import { useCallback, useMemo, useEffect, useState } from "react";
import Prop from "./Prop";

const funcBased = () => {
  // useState hook is used to add state management to function components
  const [name, setName] = useState("Karan");
  const [age, setAge] = useState(21);

  // useEffect hook is used to add side effects to function components
  useEffect(() => {
    console.log("Component rendered", name, age);
  }, [name, age]);

  // useMemo hook is used to memoize values
  const fullName = useMemo(() => {
    return name + " " + age;
  }, [name, age]);

  // useCallback hook is used to memoize functions
  const handleClick = useCallback(() => {
    setName("Karan Jamwal");
    setAge(22);
  }, [name, age]);

  const reset = () => {
    setName("Karan");
    setAge(21);
  };
  return (
    <>
      <div>This is a function based component</div>
      <Prop name={name} age={age} />
      <p>Full Name: {fullName}</p>
      <button onClick={handleClick}>Change Name and Age</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default funcBased;
