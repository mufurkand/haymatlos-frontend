"use client";

import { createContext, useState, useContext } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
