import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ButtonExample() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button variant="secondary">5000 users</Button>
        </Col>
        <Col xs="auto">
          <Button variant="secondary">10 trusted clients</Button>
        </Col>
        <Col xs="auto">
          <Button variant="secondary">10k+ downloads</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonExample;

