import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../Button2.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Logout = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  let history = useHistory();

  const checkButtontStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtontSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const logout = () => {
    localStorage.removeItem("mytoken");
    history.push("/login");
  };

  return (
    <Link to="/login" className="nav-links" onClick={logout}>
      <i className="fas fa-sign-out-alt"></i>
    </Link>
  );
};

export default Logout;
