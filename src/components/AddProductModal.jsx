import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { postRequest } from '../axios';

const AddProductModal = ({ show, handleClose, fetchProducts }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    allergenInfo: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await postRequest('/products', product);
    fetchProducts();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="productDescription">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="productAllergenInfo">
            <Form.Label>Product Allergen Info</Form.Label>
            <Form.Control
              type="text"
              name="allergenInfo"
              value={product.allergenInfo}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;
