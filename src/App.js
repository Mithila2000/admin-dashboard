import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import UserManagement from "./components/UserManagement/UserManagement";
import RoleManagement from "./components/RoleManagement/RoleManagement";
import PermissionEditor from "./components/Permissions/PermissionEditor";
import "./styles/global.css"; // Import global styles
import "./App.css"

function App() {
  return (
    <AppProvider>
      <Router>
        <div>
        <nav>
          <NavLink to="/users">User Management</NavLink>
          <NavLink to="/roles">Role Management</NavLink>
          <NavLink to="/permissions">Permissions</NavLink>
        </nav>
          <Routes>
            <Route path="/users" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
            <Route path="/permissions" element={<PermissionEditor />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
