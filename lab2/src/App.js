import React, { useState } from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import './App.css';

const App = () => {
  // Инициализация с тремя пользователями
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Smith', email: 'alice@example.com' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
  ]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const startEdit = (user) => {
    setEditingUser(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setEditingUser(null);
  };

  return (
    <div className="container">
      <h1>User Cards</h1>
      <AddUser addUser={addUser} />
      {editingUser && <EditUser user={editingUser} updateUser={updateUser} />}
      <UserList users={users} deleteUser={deleteUser} startEdit={startEdit} />
    </div>
  );
};

export default App;