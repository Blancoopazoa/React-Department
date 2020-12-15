import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import "../../App";
function Navbar() {
  const [click, setclick] = useState(false);
  const [button, setButtton] = useState(true);

  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButtton(false);
    } else {
      setButtton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TORL <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Quienes Somos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sing-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Regístrate
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline"><Link to="/Login">Registrar</Link></Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
