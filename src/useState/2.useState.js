import React, { useState } from "react";

const UseState = () => {
  const [inputValue, setInputValue] = useState("vedant");

  const change = (event) => {
    return setInputValue(event.target.value);
  };

  return (
    <div>
      {inputValue}
      <div>
        <input placeholder="Enter something..." onChange={change} />
      </div>
    </div>
  );
};

export default UseState;
