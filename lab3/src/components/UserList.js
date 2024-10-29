import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, deleteUser, startEdit, showDetails }) => {
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          startEdit={startEdit}
          showDetails={showDetails}
        />
      ))}
    </div>
  );
};

export default UserList;