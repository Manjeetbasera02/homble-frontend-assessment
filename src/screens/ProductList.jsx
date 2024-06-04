import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getRequest } from '../axios';
import ProductCard from '../components/ProductCard';
import AddProductModal from '../components/AddProductModal';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await getRequest('/products');
    setProducts(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1>Product List</h1>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>
      <Row>
        {products.sort((a, b) => a.price - b.price).map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <AddProductModal show={show} handleClose={handleClose} fetchProducts={fetchProducts} />
    </Container>
  );
};

export default ProductList;
