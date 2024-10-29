import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Welcome to the User Management App</Card.Title>
          <Card.Text>
            This application allows you to manage users easily. You can add, edit, delete, and view user details in a user-friendly interface.
          </Card.Text>
          <Card.Text>
            Navigate to the Users page to see the list of users or add new users to the system.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;