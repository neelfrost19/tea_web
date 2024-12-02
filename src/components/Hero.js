import React from "react";
import Button from "./Button";

import "../styles/Hero.css";

const Hero = () => (
    <section className="hero">
        <div className="hero-text">
            <h1>
                <span>Perfect Tea</span> Moments, Anytime, Anywhere.
            </h1>
            <p>
                Discover the art of brewing with our premium tea crafted to deliver
                flavor, aroma, and serenity in every sip.
            </p>
            <Button text="Explore Products" />
        </div>
        <div className="hero-image">
            <img src="/images/tea.svg" alt="Tea cup with leaves" />
        </div>
    </section>
);

export default Hero;
