import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import UserList from "./UserList";
import AddEditUserModal from "./AddEditUserModal";
import { getUsers, addUser, updateUser, deleteUser } from "../../services/mockApi";

const UserManagement = () => {
  const { users, setUsers, roles } = useContext(AppContext); // Ensure AppContext is imported correctly
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getUsers().then(setUsers);
  }, [setUsers]);

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSaveUser = (user) => {
    if (user.id) {
      updateUser(user).then((updatedUser) => {
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
      });
    } else {
      addUser(user).then((newUser) => setUsers((prevUsers) => [...prevUsers, newUser]));
    }
    setIsModalOpen(false);
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId).then(() => {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userId));
    });
  };

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={handleAddUser}>Add New User</button>
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
      {isModalOpen && (
        <AddEditUserModal
          user={selectedUser}
          roles={roles}
          onSave={handleSaveUser}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserManagement;
