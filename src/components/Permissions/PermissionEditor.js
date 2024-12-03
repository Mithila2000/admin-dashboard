import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import PermissionsList from "./PermissionsList";
import { getRoles, getPermissions } from "../../services/mockApi";

const PermissionEditor = () => {
  const { roles, setRoles, permissions, setPermissions } = useContext(AppContext);

  useEffect(() => {
    // Fetch roles and permissions from the mock API
    getRoles().then(setRoles);
    getPermissions().then(setPermissions);
  }, [setRoles, setPermissions]);

  const updatePermissions = (roleId, updatedPermissions) => {
    // Update permissions for a role
    setPermissions((prev) =>
      prev.map((perm) =>
        perm.roleId === roleId ? { ...perm, permissions: updatedPermissions } : perm
      )
    );
  };

  return (
    <div>
      <h1>Permissions Editor</h1>
      <PermissionsList
        roles={roles}
        permissions={permissions}
        onUpdate={updatePermissions}
      />
    </div>
  );
};

export default PermissionEditor;
