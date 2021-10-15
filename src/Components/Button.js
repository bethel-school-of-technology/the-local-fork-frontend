import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle,
    buttonSize,
 }) => {
    const checkButtontStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtontSize = SIZES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0];

    return (
        <Link to='/home' className='btn-mobile'>
            <button
            className={`btn ${checkButtontStyle} ${checkButtontSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
            </Link>
    );
 };
