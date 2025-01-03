import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Product from "./pages/Product";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<Homepage />} />
        </Routes>
      </Router>
  );
}

export default App;
