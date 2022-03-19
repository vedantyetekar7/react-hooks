import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, showText: state.showText };

    case "toggleShowText":
      return { count: state.count, showText: !state.showText };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        click
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default UseReducer;

/*
// useState

import React, { useState } from "react";

const UseReducer = () => {
    const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
      <div>
      <h1>{count}</h1>
      <button
      onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
        >
        click
        </button>
        {showText && <p>This is a text</p>}
        </div>
        );
};

export default UseReducer;

*/
