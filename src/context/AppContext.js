import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);

  return (
    <AppContext.Provider value={{ users, setUsers, roles, setRoles, permissions, setPermissions }}>
      {children}
    </AppContext.Provider>
  );
};
