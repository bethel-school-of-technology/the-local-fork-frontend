import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button2 } from "./Button2";
import SearchBar from "./searchbar";
import { Row, Col } from "react-bootstrap";

function Navbar({ handleSubmit, query, findRestaurant }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Row>
        <nav className="navbar">
          <Col>
            <div className="navbar-container">
              {/* TLF Logo (Left Side) */}
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img
                  className="navbar-logo-img"
                  src="../TLFLogo.png"
                  alt="Logo"
                  style={{
                    width: "90px",
                    marginLeft: "100px",
                  }}
                />
              </Link>

              {/* Responsive Menu Icon */}
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>

              <ul className={click ? "nav-menu active" : "nav-menu"}>
                {/* Home Icon */}
                <li className="nav-item">
                  <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
                    <i className="fas fa-home"></i>
                  </Link>
                </li>

                {/* Favorites Icon */}
                {/* <li className="nav-item">
                  <Link
                    to="/favorites"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <i className="far fa-heart"></i>
                  </Link>
                </li> */}

                {/* Map Icon */}
                <li className="nav-item">
                  <Link
                    to="/map"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </Link>
                </li>

                {/* Sign Up Icon */}
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <i className="far fa-user"></i>
                  </Link>
                </li>

                {/* Logout Icon */}
                <li className="nav-item">{button && <Button2></Button2>}</li>
              </ul>
            </div>
          </Col>

          <Col>
            <SearchBar
              handleSubmit={handleSubmit}
              query={query}
              findRestaurant={findRestaurant}
            />
          </Col>
        </nav>
      </Row>
    </>
  );
}

export default Navbar;
