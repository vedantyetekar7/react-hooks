import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  // most common use case.
  const onClick = () => {
    if (inputRef.current.value === "") {
      inputRef.current.focus();
      inputRef.current.placeholder = "This field is mandatory!";
    }
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Vedant Yetekar</h1>

      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default UseRef;
