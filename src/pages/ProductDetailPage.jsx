import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Form, ListGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { getProductById } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    const productData = await getProductById(id);
    setProduct(productData);
  };

  if (!product) {
    return (
      <Container className="py-5">
        <div className="text-center">Loading...</div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ height: '500px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={6}>
          <h1 className="display-5 fw-bold mb-3">{product.name}</h1>
          <Badge bg="success" className="fs-4 mb-3 px-3 py-2">${product.price}</Badge>
          
          <div className="mb-4">
            <h5>Quantity:</h5>
            <Form.Group className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="me-2"
              >
                -
              </Button>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                min={1}
                max={product.stock}
                className="w-25 text-center mx-2"
              />
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              >
                +
              </Button>
            </Form.Group>
            <small className="text-muted">{product.stock} in stock</small>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-100 mb-3"
            onClick={() => addToCart({ ...product, quantity })}
          >
            Add to Cart
          </Button>

          <ListGroup className="mb-4">
            <ListGroup.Item>
              <strong>Category:</strong> {product.category}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;