import React, { useContext } from "react";
import "../Styling/Talk.scss";
import { ThemeContext } from "./ThemeContext";

const Talk = () => {
  const { darkmode } = useContext(ThemeContext);
  return (
    <div className={darkmode ? "contact-dark" : "contact"} id="contact">
      <div className={darkmode ? "contact-info-dark" : "contact-info"}>
        <h2>Let's Talk</h2>
        <h1>Contact us</h1>
        <p>
          If you want to reserve a table in our restaurant, contact us and
          <br /> we will attend you quickly, with our 24/7 chat service.
        </p>
      </div>

      <button>Contact us now</button>
    </div>
  );
};

export default Talk;
