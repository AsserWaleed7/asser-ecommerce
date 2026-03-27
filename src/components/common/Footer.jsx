import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>E-Shop</h5>
            <p className="">
              Your one-stop shop for quality products at great prices.
            </p>
          </Col>
          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6>Contact Info</h6>
            <p className="">
              Email: support@eshop.com<br />
              Phone: (555) 123-4567
            </p>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p className="mb-0">&copy; 2024 E-Shop. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;