import React from 'react';
import UserForm from './UserForm';

const EditUser = ({ user, updateUser }) => {
  const handleUpdateUser = (updatedUser) => {
    updateUser({ ...user, ...updatedUser });
  };

  return (
    <>
        <h2>Edit user</h2>
        <UserForm user={user} onSubmit={handleUpdateUser} />
    </>)
  ;
};

export default EditUser;