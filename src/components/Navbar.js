import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
    <nav className="navbar">
        <div className="logo">ARGOCO</div>
        <div className="nav-links">
            <div>Home</div>
            <div>Categories</div>
            <div>Blogs</div>
            <div>About Us</div>
            <div>Resources</div>
        </div>
        <input className="search-bar" type="text" placeholder="Search" />
    </nav>
);

export default Navbar;
