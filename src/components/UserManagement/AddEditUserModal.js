import React, { useState } from "react";

const AddEditUserModal = ({ user, roles, onSave }) => {
  const [userName, setUserName] = useState(user ? user.name : "");
  const [role, setRole] = useState(user ? user.role : "");
  const [status, setStatus] = useState(user ? user.status : true);

  const handleSave = () => {
    onSave({ id: user ? user.id : Date.now(), name: userName, role, status });
    setUserName("");
    setRole("");
    setStatus(true);
  };

  return (
    <div>
      <h2>{user ? "Edit User" : "Add User"}</h2>
      <label>
        Name:
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          {roles.map((r) => (
            <option key={r.id} value={r.name}>
              {r.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value === "true")}>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </label>
      <button onClick={handleSave}>{user ? "Update" : "Add"}</button>
    </div>
  );
};

export default AddEditUserModal;
