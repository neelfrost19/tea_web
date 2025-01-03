import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
    <nav className="navbar">
        <div className="logo">ARGOCO</div>
        <div className="nav-links">
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/product">Products
                </a>
            </div>
            <div>
                <a href="/">About Us</a>
            </div>
        </div>
        <input className="search-bar" type="text" placeholder="Search" />
    </nav>
);

export default Navbar;
