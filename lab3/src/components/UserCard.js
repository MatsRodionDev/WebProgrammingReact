import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const UserCard = ({ user, deleteUser, startEdit, showDetails }) => {
  return (
    <Card className="user-card mb-3">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Col>
          <Col className="text-right">
            <Button variant="primary" onClick={() => startEdit(user)}>Edit</Button>
            <Button variant="danger" onClick={() => deleteUser(user.id)} className="ml-2">Delete</Button>
            <Button variant="info" onClick={() => showDetails(user)} className="ml-2">Details</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserCard;