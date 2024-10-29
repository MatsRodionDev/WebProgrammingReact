import React, { useState } from 'react';
import UserForm from './UserForm';
import { Button, Collapse } from 'react-bootstrap';

const AddUser = ({ addUser }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddUser = (user) => {
    addUser(user);
    setShowForm(false);
  };

  return (
    <div className="mb-3">
      <Button 
        variant={showForm ? 'secondary' : 'primary'} 
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Add User'}
      </Button>
      <Collapse in={showForm}>
        <div className="mt-3">
          <UserForm onSubmit={handleAddUser} />
        </div>
      </Collapse>
    </div>
  );
};

export default AddUser;