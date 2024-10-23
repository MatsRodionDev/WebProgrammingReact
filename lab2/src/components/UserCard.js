import React from 'react';
import '../App.css';

const UserCard = ({ user, deleteUser, startEdit }) => {
  return (
    <div className="user-card">
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div>
        <button onClick={() => startEdit(user)}>Edit</button>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;