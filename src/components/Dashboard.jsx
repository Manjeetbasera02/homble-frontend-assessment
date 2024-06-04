import React, { useState, useEffect } from 'react';
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';
import { getRequest } from '../axios';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await getRequest('/dashboard');
      setProducts(response.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleSort = (key) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (key === 'id') {
        return a.id - b.id;
      } else if (key === 'price') {
        return a.price - b.price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    setProducts(sortedProducts);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toString().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Dashboard</h2>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by name or ID"
          aria-label="Search by name or ID"
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={handleSearch}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Button variant="link" onClick={() => handleSort('id')}>
                ID
              </Button>
            </th>
            <th>
              <Button variant="link" onClick={() => handleSort('name')}>
                Name
              </Button>
            </th>
            <th>
              <Button variant="link" onClick={() => handleSort('price')}>
                Price
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          ) : (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
