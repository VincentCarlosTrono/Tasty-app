import React, { useContext, useState } from "react";
import "../Styling/Navbar.scss";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(!false);
  const { darkmode, setDarkmode } = useContext(ThemeContext);

  return (
    <div className="header">
      <div className={darkmode ? " nav-computer-dark" : "nav-computer"}>
        <h1>Tasty</h1>

        <div className={darkmode ? "navbar-menu-dark" : "navbar-menu"}>
          <ul>
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
            <button
              onClick={() => {
                setDarkmode(!darkmode);
              }}
            >
              {darkmode ? (
                <div>
                  <i className="bx bx-sun"></i>
                </div>
              ) : (
                <div>
                  <i className="bx bxs-moon"></i>
                </div>
              )}
            </button>
          </ul>
        </div>
      </div>

      <div className={darkmode ? "nav-mobile-dark" : "nav-mobile"}>
        <div className={darkmode ? "mobnav-dark" : "mobnav"}>
          <h1>Tasty</h1>

          <div className="darkmode-btn">
            <h1>
              <button
                onClick={() => {
                  setDarkmode(!darkmode);
                }}
              >
                {darkmode ? (
                  <div>
                    <i className="bx bx-sun"></i>
                  </div>
                ) : (
                  <div>
                    <i className="bx bxs-moon"></i>
                  </div>
                )}
              </button>
            </h1>
          </div>
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            <i className="bx bx-menu"></i>
          </button>

          {open ? (
            <div> </div>
          ) : (
            <div>
              <div className={darkmode ? "navbar-menu-dark" : "navbar-menu"}>
                <ul>
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
