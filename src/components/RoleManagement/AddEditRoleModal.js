import React, { useState } from "react";

const AddEditRoleModal = ({ role, onSave }) => {
  const [roleName, setRoleName] = useState(role ? role.name : "");
  const [permissions, setPermissions] = useState(role ? role.permissions : "");

  const handleSave = () => {
    onSave({ id: role ? role.id : Date.now(), name: roleName, permissions });
    setRoleName("");
    setPermissions("");
  };

  return (
    <div>
      <h2>{role ? "Edit Role" : "Add Role"}</h2>
      <label>
        Role Name:
        <input value={roleName} onChange={(e) => setRoleName(e.target.value)} />
      </label>
      <label>
        Permissions:
        <input value={permissions} onChange={(e) => setPermissions(e.target.value)} />
      </label>
      <button onClick={handleSave}>{role ? "Update" : "Add"}</button>
    </div>
  );
};

export default AddEditRoleModal;
