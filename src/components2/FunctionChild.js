import React, { useState } from "react";

const FunctionChild = () => {
  const [count, setCount] = useState(0);
  const incCounter = () => {
    setCount(count + 1);
  };

  const decCounter = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>function</h1>
      <button onClick={() => incCounter()}>+</button>
      <input type="text" value={count} />
      <button onClick={() => decCounter()}>-</button>
    </div>
  );
};

export default FunctionChild;
