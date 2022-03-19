/*
// Example 1

import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
    // Page will be rendered first and then hook will work.
    useEffect(() => {
    console.log("hiii");
  }, []);

  // Page will be rendered later the hook function.
  useLayoutEffect(() => {
    console.log("hiii");
  }, []);

  return <div style={{ marginTop: "260px" }}>Hello</div>;
};

export default UseLayoutEffect;
*/

// Example 2

import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "hello world";
    console.log(inputRef.current.value);
  }, []);

  return (
    <div className="App">
      <input
        ref={inputRef}
        value="vedant"
        style={{ width: 400, height: 200 }}
      ></input>
    </div>
  );
};

export default UseLayoutEffect;
