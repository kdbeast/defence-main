import React from "react";

const Sum = React.memo(({ num }) => {
  function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  console.log("Sum Render");
  return (
    <div>
      <h1>Sum</h1>
      <p>{calculateSum()}</p>
    </div>
  );
});

export default Sum;
