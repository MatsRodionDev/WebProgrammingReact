import React from 'react';
import UserForm from './UserForm';

const EditUser = ({ user, updateUser }) => {
  const handleUpdateUser = (updatedUser) => {
    updateUser({ ...user, ...updatedUser });
  };

  return <UserForm user={user} onSubmit={handleUpdateUser} />;
};

export default EditUser;