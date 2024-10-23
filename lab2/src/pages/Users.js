import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import AddUser from '../components/AddUser';
import UserModal from '../components/UserModal';
import UserForm from '../components/UserForm';
import data from '../data.json';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [modalUser, setModalUser] = useState(null);

  useEffect(() => {
    setUsers(data);
  }, []);

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
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const showDetails = (user) => {
    setModalUser(user);
  };

  const closeModal = () => {
    setModalUser(null);
  };

  return (
    <div>
      <h1>User Management</h1>
      <AddUser addUser={addUser} />
      {editingUser && (
        <UserForm user={editingUser} onSubmit={updateUser} />
      )}
      <UserList
        users={users}
        deleteUser={deleteUser}
        startEdit={startEdit}
        showDetails={showDetails}
      />
      <UserModal user={modalUser} onClose={closeModal} />
    </div>
  );
};

export default Users;