import React, { useContext } from "react";
import "../Styling/About.scss";
import AboutImg from "../Media/about.79b2d73f.jpg";
import { ThemeContext } from "./ThemeContext";

const About = () => {
  const { darkmode } = useContext(ThemeContext);
  return (
    <div className={darkmode ? "about-dark" : "about"} id="about">
      <img src={AboutImg} alt="about" />
      <div className={darkmode ? "about-content-dark" : "about-content"}>
        <h3>About us</h3>
        <h1>We cook the best Tasty food.</h1>
        <p>
          We cook the best food in the entire city, with excellent customer
          service, the best meals and at the best price, visit us.
        </p>
        <button>Explore History</button>
      </div>
    </div>
  );
};

export default About;
