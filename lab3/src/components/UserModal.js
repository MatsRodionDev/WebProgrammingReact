import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{user.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Email: {user.email}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;