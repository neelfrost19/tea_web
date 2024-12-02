import React, {useEffect, useState} from "react";
import "../styles/Button.css"

const Button = (props) => {
    const {text} = props;

    return (
        <button className="explore-btn">
            <div>
                {`${text}`}
            </div>
            <img src="/images/arrow.svg" alt="Matcha"/>
        </button>
    );
}

export default Button;