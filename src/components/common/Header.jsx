import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';

const Header = () => {
  const { cartCount } = useCart(); 
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  console.log('Cart Count:', cartCount); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${searchQuery}`;
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-2" >
      <Container>
        
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-primary">
          🛍️ E-Shop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
        
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'fw-bold text-primary' : ''}>
              🏠 Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className={location.pathname === '/products' ? 'fw-bold text-primary' : ''}>
              🛍️ Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about">ℹ️ About</Nav.Link>
            <Nav.Link as={Link} to="/contact">📞 Contact</Nav.Link>
          </Nav>

          

     
          <Link to="/cart" className="text-decoration-none me-3">
            <div className="position-relative d-inline-block cart-icon-container">
        
              <div className="cart-icon p-3 rounded-circle bg-primary text-white d-flex align-items-center justify-content-center">
                <i className="bi bi-cart-fill fs-3"></i>
              </div>
              
            
              {cartCount > 0 && (
                <div 
                  className="position-absolute cart-number top-0 start-100 translate-middle badge rounded-pill bg-danger border border-white"
                  style={{
                    minWidth: '20px',
                    height: '23px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    
                    boxShadow: '0 4px 12px rgba(220,53,69,0.4)'
                  }}
                >
                  {cartCount}
                </div>
              )}
              
             
              
            </div>
          </Link>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;