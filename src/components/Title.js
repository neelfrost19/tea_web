import React from 'react';
import '../styles/Title.css';

const Title = ({title}) => {
    return (
        <section className="title">
            <div className="title-container">
                <h1>{title}</h1>
            </div>
        </section>
    );
};

export default Title;
