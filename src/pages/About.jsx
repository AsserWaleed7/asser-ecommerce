import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <h1 className="display-4 fw-bold text-center mb-5">About E-Shop</h1>
      
      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center border-0 shadow">
            <Card.Body>
              <div className="mb-3">
                <i className="bi bi-truck display-4 text-primary"></i>
              </div>
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Text>Get your orders delivered quickly and reliably.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center border-0 shadow">
            <Card.Body>
              <div className="mb-3">
                <i className="bi bi-shield-check display-4 text-success"></i>
              </div>
              <Card.Title>Secure Payments</Card.Title>
              <Card.Text>Your payment information is protected with industry-leading security.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center border-0 shadow">
            <Card.Body>
              <div className="mb-3">
                <i className="bi bi-headset display-4 text-info"></i>
              </div>
              <Card.Title>24/7 Support</Card.Title>
              <Card.Text>Our support team is here to help you anytime.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;