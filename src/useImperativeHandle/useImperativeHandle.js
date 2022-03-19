import React, { useRef, forwardRef } from "react";
import Button from "./Button";

const UseImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Parent
      </button>
      <div style={{ marginTop: "100px" }}>
        <Button ref={buttonRef} />
      </div>
    </div>
  );
};

export default UseImperativeHandle;
