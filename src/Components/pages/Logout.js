import React from "react";
import { useHistory } from "react-router-dom";
import "../Button2.css";

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large'];

const Logout = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    let history = useHistory();


    const checkButtontStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtontSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

    const handleSubmit = () => {
        localStorage.removeItem("mytoken");
        history.push('/login');

    }

    return (
        <form onSubmit={handleSubmit}>

            <button
                className={`btn fas fa-sign-out-alt ${checkButtontStyle} ${checkButtontSize}`}
                onClick={onClick}
                type={type="submit"}>
                {children}
            </button>
        </form>
    )

};

export default Logout;

