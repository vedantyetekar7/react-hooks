import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <div>{toggle && <p>Toggle</p>}</div>
      <button>
        <div></div>
        Child
      </button>
    </>
  );
});

export default Button;
