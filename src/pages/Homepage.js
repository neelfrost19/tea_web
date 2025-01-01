import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import "../index.css";

const Homepage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Categories />
            <Features />
            <AboutUs />
            {/*<Footer />*/}
        </div>
    );
};

export default Homepage;
