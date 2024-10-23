import React from 'react';

const UserCard = ({ user, deleteUser, startEdit }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => startEdit(user)}>Edit</button>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;