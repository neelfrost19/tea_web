import React, { useState } from "react";
import "../styles/Carousel.css";

const Carousel = ({components}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
    };

    return (
        <div>
            <div className="carousel">
                {components[currentIndex] ?? {}}
                <div className="carousel-container">
                    <button
                        className="carousel-button"
                        onClick={handlePrev}
                    >
                        <img src="/images/arrow-right-line.svg" alt="prev" />
                    </button>
                    <div className="carousel-dots dot">
                        {components.map((_, index) => (
                            <span
                                className={`dot ${currentIndex === index ? "active" : ""}`}
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                    <button
                        className="carousel-button"
                        onClick={handleNext}
                    >
                        <img src="/images/arrow-right-line.svg" alt="next"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
