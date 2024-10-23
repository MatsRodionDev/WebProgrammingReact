import React, { useState } from 'react';
import UserForm from './UserForm';

const AddUser = ({ addUser }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddUser = (user) => {
    addUser(user);
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add User'}
      </button>
      {showForm && <UserForm onSubmit={handleAddUser} />}
    </div>
  );
};

export default AddUser;