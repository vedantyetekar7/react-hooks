import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <div>
        <button onClick={add}>Increment</button>
      </div>
    </div>
  );
};

export default UseState;
