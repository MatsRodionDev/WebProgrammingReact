import React, { useState, useEffect } from 'react';
import '../App.css';

const UserForm = ({ user = {}, onSubmit }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');

  useEffect(() => {
    setName(user.name || '');
    setEmail(user.email || '');
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: user.id || Date.now(), name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ padding: '10px', margin: '5px', borderRadius: '5px', width: 'calc(100% - 22px)' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ padding: '10px', margin: '5px', borderRadius: '5px', width: 'calc(100% - 22px)' }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;