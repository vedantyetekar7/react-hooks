import React, { useState, createContext } from "react";
import Login from "./login";
import User from "./user";

export const AppContext = createContext(null);

const UseContext = () => {
  const [userName, setUserName] = useState("");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default UseContext;
