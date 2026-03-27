import React from 'react';
import { Container, Row, Col, Table, Button, Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <Container className="py-5">
        <Card className="text-center py-5">
          <Card.Body>
            <h3>Your cart is empty</h3>
            <p className="text-muted">Add some products to get started</p>
            <Link to="/products">
              <Button variant="primary" size="lg">Continue Shopping</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Shopping Cart</h2>
        <Button variant="outline-danger" size="sm" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>

      <Row>
        <Col md={8}>
          <Table responsive className="mb-4">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </tbody>
          </Table>
        </Col>
        
        <Col md={4}>
          <Card className="sticky-top" style={{ top: '20px' }}>
            <Card.Body>
              <h5 className="card-title">Order Summary</h5>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <span>Total Items:</span>
                <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <strong>Total Price:</strong>
                <strong>${getTotalPrice().toFixed(2)}</strong>
              </div>
              <Link to="/checkout">
                <Button variant="primary" className="w-100 mb-2">
                  Proceed to Checkout
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline-primary" className="w-100">
                  Continue Shopping
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;