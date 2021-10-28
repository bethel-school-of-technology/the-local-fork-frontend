import React from "react";
import "./Button2.css";
import { Link } from "react-router-dom";
import Logout from "./pages/Logout";

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

export const Button2 = ({
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
        <div>
        {/* <Link to='/' className='btn-mobile'> */}
                {/* <button    //This isn't right...
                    className={`btn fas fa-sign-out-alt ${checkButtontStyle} ${checkButtontSize}`}
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button> */}
                <Logout />
        {/* </Link> */}
        </div>
    );
};
