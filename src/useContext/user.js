import React, { useContext } from "react";
import { AppContext } from "./useContext";

const User = () => {
  const { userName } = useContext(AppContext);

  return (
    <div>
      <h3>User: {userName}</h3>
    </div>
  );
};

export default User;
