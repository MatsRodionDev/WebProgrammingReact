import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>About this App</Card.Title>
          <Card.Text>
            The User Management App is designed to help you efficiently manage user information.
          </Card.Text>
          <Card.Text>Features include:</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Add new users</ListGroup.Item>
            <ListGroup.Item>Edit existing user details</ListGroup.Item>
            <ListGroup.Item>Delete users from the system</ListGroup.Item>
            <ListGroup.Item>View detailed information about each user</ListGroup.Item>
          </ListGroup>
          <Card.Text>
            Built using React, this app provides a responsive and modern interface for handling user data.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;