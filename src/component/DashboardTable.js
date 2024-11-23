import React from "react";
import "../style/MatchaPage.css";

const DashboardTable = () => {
    return (
        <div className="page-container">
            <header className="navbar">
                <div className="logo">茶</div>
                <nav className="menu">
                    <a href="#home" className="menu-item active">Home</a>
                    <a href="#blog" className="menu-item">Blog</a>
                    <a href="#contact" className="menu-item">Contact</a>
                    <a href="#about" className="menu-item">About us</a>
                </nav>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <button className="search-icon">🔍</button>
                </div>
                <button className="menu-icon">☰</button>
            </header>

            <main className="content">
                <section className="text-section">
                    <h1>Matcha Tea</h1>
                    <p className="subtitle">Organic japanese tea</p>
                    <p className="description">
                        Why is the best and healthiest option?<br />
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy nibh euismod.
                    </p>
                    <button className="read-more">Read more</button>
                </section>

                <section className="image-section">
                    <div className="carousel">
                        <button className="carousel-arrow left">◀</button>
                        <div className="images">
                            <img src="/path/to/matcha1.jpg" alt="Matcha" />
                            <img src="/path/to/matcha2.jpg" alt="Matcha powder" />
                        </div>
                        <button className="carousel-arrow right">▶</button>
                    </div>
                </section>
            </main>

            <footer>
                <div className="language-switch">
                    🌐 En
                </div>
            </footer>
        </div>
    );
};

export default DashboardTable;