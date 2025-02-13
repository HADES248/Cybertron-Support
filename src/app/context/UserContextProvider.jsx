'use client'
import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (window) {
      const storedValue = localStorage.getItem('user');
      if (storedValue) {
        setUser(JSON.parse(storedValue));
      }
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );

}

export default UserContextProvider;