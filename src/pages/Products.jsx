import React, { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col, Form, Button, Badge, Card } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { getProducts, searchProducts } from '../services/api';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || 'All'
  });

  // 🔥 Dynamic Categories من المنتجات
  const categories = useMemo(() => {
    const cats = allProducts.map(p => p.category);
    return ['All', ...new Set(cats)].sort();
  }, [allProducts]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, allProducts]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const products = await getProducts();
      setAllProducts(products);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let result = [...allProducts];

    // 🔥 Search Filter
    if (filters.search) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // 🔥 Category Filter
    if (filters.category !== 'All') {
      result = result.filter(p => p.category === filters.category);
    }

    setFilteredProducts(result);
  };

  const handleCategoryClick = (category) => {
    setFilters({ ...filters, category });
    
    // 🔥 Update URL
    const params = new URLSearchParams(searchParams);
    if (category !== 'All') {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    if (filters.search) {
      params.set('search', filters.search);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({ search: '', category: 'All' });
    setSearchParams({});
  };

  const categoryCount = (category) => {
    if (category === 'All') return allProducts.length;
    return allProducts.filter(p => p.category === category).length;
  };

  return (
    <Container className="py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="display-5 fw-bold mb-1">🛍️ Products</h1>
          <p className="text-muted mb-0">
            {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>
        {(filters.search || filters.category !== 'All') && (
          <Button variant="outline-secondary" onClick={clearFilters} size="sm">
            🗑️ Clear Filters
          </Button>
        )}
      </div>

      {/* Filters */}
      <Row className="mb-5">
        {/* Search */}
        <Col md={6} lg={4} className="mb-4">
          <Form.Group>
            <Form.Label className="fw-bold">
              <i className="bi bi-search me-2"></i>Search Products
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by name or description..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </Form.Group>
        </Col>

        {/* 🔥 Dynamic Categories */}
        <Col md={6} lg={8}>
          <Form.Group>
            <Form.Label className="fw-bold">
              🏷️ Categories ({categories.length - 1})
            </Form.Label>
            <div className="d-flex flex-wrap gap-2 p-3 bg-light rounded-3">
              {categories.map((category) => (
                <Badge
                  key={category}
                  bg={filters.category === category ? "primary" : "secondary"}
                  className="p-3 fs-6 fw-semibold px-4 py-2 user-select-none category-badge"
                  style={{ 
                    cursor: 'pointer',
                    borderRadius: '25px',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category} 
                  <small className="ms-1 opacity-75">
                    ({categoryCount(category)})
                  </small>
                  {filters.category === category && (
                    <i className="bi bi-check-circle-fill ms-1"></i>
                  )}
                </Badge>
              ))}
            </div>
          </Form.Group>
        </Col>
      </Row>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary mb-4" style={{width: '4rem', height: '4rem'}} />
          <h4>Loading products...</h4>
          <p className="text-muted">Fetching from database</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-inbox display-1 text-muted mb-4"></i>
          <h3>No products found</h3>
          <p className="text-muted lead">
            Try adjusting your search or category filters
          </p>
          <Button variant="outline-primary" size="lg" onClick={clearFilters}>
            🔄 Show All Products
          </Button>
        </div>
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col lg={3} md={6} xs={12} key={product.id} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Products;