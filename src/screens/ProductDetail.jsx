import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRequest } from '../axios';
import ProductDetails from '../components/ProductDetails';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await getRequest(`/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductDetail;
