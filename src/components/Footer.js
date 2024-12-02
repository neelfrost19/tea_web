import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>ARGOCO</h4>
                <p>+91 5697452361</p>
                <p>argoco@gmail.com</p>
            </div>
            <div className="footer-section">
                <h4>Menu</h4>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Categories</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Useful Links</h4>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Purchasing Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Career</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Office Hours</h4>
                <p>9:00 PM - 6:00 PM</p>
                <p>Monday–Friday</p>
            </div>
        </footer>
    );
};

export default Footer;
