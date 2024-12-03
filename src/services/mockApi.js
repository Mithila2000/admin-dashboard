// export const getUsers = () => Promise.resolve([{ id: 1, name: "John Doe", role: "Admin" }]);
// export const getRoles = () => Promise.resolve([{ id: 1, name: "Admin", permissions: "Read, Write, Delete" }]);
// export const getPermissions = () => Promise.resolve([{ roleId: 1, permissions: "Read, Write, Delete" }]);

// Mock data
let users = [
    { id: 1, name: "John Doe", role: "Admin", status: true },
    { id: 2, name: "Jane Smith", role: "Editor", status: true },
    { id: 3, name: "Alice Johnson", role: "Viewer", status: false },
  ];
  
  let roles = [
    { id: 1, name: "Admin", permissions: "Read, Write, Delete" },
    { id: 2, name: "Editor", permissions: "Read, Write" },
    { id: 3, name: "Viewer", permissions: "Read" },
  ];

  let permissions = [
    { roleId: 1, permissions: "Read, Write, Delete" },
    { roleId: 2, permissions: "Read, Write" },
    { roleId: 3, permissions: "Read" },
  ];
  
  // Mock API methods
  
  // Get all users
  export const getUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(users), 500); // Simulate server latency
    });
  };
  
  // Add a new user
  export const addUser = (newUser) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const id = Math.max(...users.map((u) => u.id)) + 1; // Generate a unique ID
        const user = { ...newUser, id };
        users.push(user);
        resolve(user);
      }, 500);
    });
  };
  
  // Update an existing user
  export const updateUser = (updatedUser) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        users = users.map((u) => (u.id === updatedUser.id ? updatedUser : u));
        resolve(updatedUser);
      }, 500);
    });
  };
  
  // Delete a user
  export const deleteUser = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        users = users.filter((u) => u.id !== id);
        resolve({ message: "User deleted successfully" });
      }, 500);
    });
  };
  
  // Get all roles
  export const getRoles = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(roles), 500);
    });
  };

  export const getPermissions = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(permissions), 500); // Simulate server latency
    });
  };
  
