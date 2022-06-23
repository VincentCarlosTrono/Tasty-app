import React, { useState } from "react";
import "../Styling/Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="grid-container header-section">
      <div className="container">
        <div className="header">
          <h1>Tasty</h1>
          <div className="navigation">
            <ul className={`navbar`}>
              <li>
                <a href="/">HOME </a>
              </li>

              <li>
                <a href="#about">ABOUT </a>
              </li>

              <li>
                <a href="#services">SERVICES </a>
              </li>

              <li>
                <a href="#menu">MENU </a>
              </li>

              <li>
                <a href="#contact">CONTACT US </a>
              </li>
            </ul>

            <div className={`nav-mobile-btn`}>
              <button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <i className="bx bx-menu" />
              </button>
            </div>
          </div>

          {open && (
            <ul className={`navbar-menu`}>
              <li>
                <a href="/">HOME </a>
              </li>

              <li>
                <a href="#about">ABOUT </a>
              </li>

              <li>
                <a href="#services">SERVICES </a>
              </li>

              <li>
                <a href="#menu">MENU </a>
              </li>

              <li>
                <a href="#contact">CONTACT US </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
