"use client";

import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => {},
});

/*
  user = {
          nickname,
          role,
          token,
          uuid,
        };
*/
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userAuth = localStorage.getItem("user");
    if (userAuth === null && user === null) return;

    setUser(JSON.parse(userAuth));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
