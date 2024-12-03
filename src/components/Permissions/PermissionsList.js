import React, { useState } from "react";

const PermissionsList = ({ roles, permissions, onUpdate }) => {
  const [editingRoleId, setEditingRoleId] = useState(null);
  const [newPermissions, setNewPermissions] = useState("");

  const startEditing = (roleId, currentPermissions) => {
    setEditingRoleId(roleId);
    setNewPermissions(currentPermissions);
  };

  const savePermissions = () => {
    onUpdate(editingRoleId, newPermissions);
    setEditingRoleId(null);
    setNewPermissions("");
  };

  return (
    <div>
      <h2>Permissions List</h2>
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => {
            const rolePermissions = permissions.find((perm) => perm.roleId === role.id)?.permissions || "";

            return (
              <tr key={role.id}>
                <td>{role.name}</td>
                <td>
                  {editingRoleId === role.id ? (
                    <input
                      type="text"
                      value={newPermissions}
                      onChange={(e) => setNewPermissions(e.target.value)}
                      placeholder="Enter permissions (e.g., Read, Write)"
                    />
                  ) : (
                    rolePermissions
                  )}
                </td>
                <td>
                  {editingRoleId === role.id ? (
                    <>
                      <button onClick={savePermissions}>Save</button>
                      <button onClick={() => setEditingRoleId(null)}>Cancel</button>
                    </>
                  ) : (
                    <button onClick={() => startEditing(role.id, rolePermissions)}>Edit</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsList;
