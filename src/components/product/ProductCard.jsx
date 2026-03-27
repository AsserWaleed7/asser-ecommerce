import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="h-100 shadow-sm product-card-hover">
      <div className="position-relative overflow-hidden">
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ height: '250px', objectFit: 'cover' }} 
        />
        <Badge bg="success" className="position-absolute top-2 end-2 fs-6">
          ${product.price}
        </Badge>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-5 fw-bold">{product.name}</Card.Title>
        <Card.Text className="flex-grow-1 text-muted">{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-end mt-auto">
          <Badge bg="info">{product.category}</Badge>
          <div>
            <Link to={`/products/${product.id}`} className="btn btn-outline-primary btn-sm me-2">
              View
            </Link>
            <Button variant="primary" size="sm" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;