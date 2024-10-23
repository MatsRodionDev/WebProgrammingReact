import React, { useState } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';

const App = () => {
  const [users, setUsers] = useState([]);
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
    <div>
      <h1>User Cards</h1>
      <AddUser addUser={addUser} />
      {editingUser && <EditUser user={editingUser} updateUser={updateUser} />}
      <UserList users={users} deleteUser={deleteUser} startEdit={startEdit} />
    </div>
  );
};

export default App;