import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { getProducts } from '../services/api';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setFeaturedProducts);
  }, []);

  return (
    <Container>
      {/* Hero Section */}
      <section className="hero-section mb-5">
        <Carousel>
          <Carousel.Item>
            <div className="d-block p-5 w-100 hero-image" style={{ 
              background: 'linear-gradient(45deg, #007bff, #6f42c1)', 
              height: '400px', 
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <div className="text-center mt-3">
                <h1 className="display-4 fw-bold mb-4">Welcome to E-Shop</h1>
                <p className="lead mb-4">Discover amazing products at unbeatable prices</p>
                <Link to="/products">
                  <Button size="lg" variant="light" className="px-5">Shop Now</Button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block p-5 w-100 hero-image" style={{ 
              background: 'linear-gradient(45deg, #007bff, #6f42c1)', 
              height: '400px', 
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <div className="text-center mt-3">
                <h1 className="display-4 fw-bold mb-4">About Us</h1>
                <p className="lead mb-4">Learn more about us</p>
                <Link to="/About">
                  <Button size="lg" variant="light" className="px-5">Learn more</Button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block p-5 w-100 hero-image" style={{ 
              background: 'linear-gradient(45deg, #007bff, #6f42c1)', 
              height: '400px', 
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <div className="text-center mt-3">
                <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
                <p className="lead mb-4">Reach out to us via Contact Us</p>
                <Link to="/Contact">
                  <Button size="lg" variant="light" className="px-5">Contact Us</Button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section>
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold mb-3">Featured Products</h2>
          <p className="text-muted lead">Check out our top picks</p>
        </div>
        
        <Row>
          {featuredProducts.slice(0, 4).map((product) => (
            <Col lg={3} md={6} xs={12} className="mb-4" key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-4">
          <Link to="/products" className="btn btn-outline-primary btn-lg">View All Products</Link>
        </div>
      </section>
    </Container>
  );
};

export default Home;