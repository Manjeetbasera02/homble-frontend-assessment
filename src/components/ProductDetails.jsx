import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductDetails = ({ product }) => {
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    allergens: false,
    usage: false
  });

  const toggleSection = (section) => {
    setExpandedSections({ ...expandedSections, [section]: !expandedSections[section] });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ${product.price}
        </Card.Text>
        <Card.Text>
          <Button onClick={() => toggleSection('description')}>
            {expandedSections.description ? 'Hide' : 'Show'} Description
          </Button>
          {expandedSections.description && <p>{product.description}</p>}
        </Card.Text>
        <Card.Text>
          <Button onClick={() => toggleSection('allergens')}>
            {expandedSections.allergens ? 'Hide' : 'Show'} Allergen Information
          </Button>
          {expandedSections.allergens && <p>{product.allergens}</p>}
        </Card.Text>
        <Card.Text>
          <Button onClick={() => toggleSection('usage')}>
            {expandedSections.usage ? 'Hide' : 'Show'} Usage Instructions
          </Button>
          {expandedSections.usage && <p>{product.usage}</p>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
