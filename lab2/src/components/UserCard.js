import React from 'react';

const UserCard = ({ user, deleteUser, startEdit, showDetails }) => {
  return (
    <div className="user-card">
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div>
        <button onClick={() => startEdit(user)}>Edit</button>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
        <button onClick={() => showDetails(user)}>Details</button>
      </div>
    </div>
  );
};

export default UserCard;