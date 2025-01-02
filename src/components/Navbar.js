import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
    <nav className="navbar">
        <div className="logo">ARGOCO</div>
        <div className="nav-links">
            <div>Home</div>
            <div>Products</div>
            <div>About Us</div>
        </div>
        <input className="search-bar" type="text" placeholder="Search" />
    </nav>
);

export default Navbar;
