import React, { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  return <UserContext.Provdider value={{}}>{children}</UserContext.Provdider>;
};

export { UserProvider, UserContext };
