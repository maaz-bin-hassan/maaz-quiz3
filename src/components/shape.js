import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Image5 from '../assets/icon.png';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-end">
          <Image src={Image5} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;


        