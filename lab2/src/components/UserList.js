import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, deleteUser, startEdit }) => {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} deleteUser={deleteUser} startEdit={startEdit} />
      ))}
    </div>
  );
};

export default UserList;