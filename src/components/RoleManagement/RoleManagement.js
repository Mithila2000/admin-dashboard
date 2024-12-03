import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import RoleList from "./RoleList";
import AddEditRoleModal from "./AddEditRoleModal";
import { getRoles } from "../../services/mockApi";

const RoleManagement = () => {
  const { roles, setRoles } = useContext(AppContext);

  useEffect(() => {
    getRoles().then(setRoles);
  }, [setRoles]);

  return (
    <div>
      <h1>Role Management</h1>
      <RoleList roles={roles} />
      <AddEditRoleModal />
    </div>
  );
};

export default RoleManagement;
