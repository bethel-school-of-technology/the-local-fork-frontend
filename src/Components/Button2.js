import React from "react";
import "./Button2.css";
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
        
           <Logout />
        
    );
};
