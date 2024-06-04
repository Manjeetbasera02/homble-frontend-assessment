import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProductList from "./screens/ProductList";
import ProductDetail from "./screens/ProductDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
