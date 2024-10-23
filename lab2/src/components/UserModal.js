import React from 'react';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserModal;