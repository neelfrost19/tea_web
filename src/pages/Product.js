import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";
import Title from "../components/Title";

const Product = () => {
    return (
        <div className="app">
            <Navbar />
            <Title title="Our products"/>
            <Footer />
        </div>
    );
};

export default Product;
