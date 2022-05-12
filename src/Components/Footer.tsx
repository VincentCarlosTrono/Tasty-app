import React, { useContext } from "react";
import "../Styling/Footer.scss";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { darkmode } = useContext(ThemeContext);
  const links = [
    {
      title: "Services",
      link1: "Delivery",
      link2: "Pricing",
      link3: "Fast Food",
      link4: "Reservation",
    },
    {
      title: "Information",
      link1: "Contact us",
      link2: "Privacy Policy",
      link3: "FAQs",
      link4: "Terms of Services",
    },
    {
      title: "Address",
      link1: "Lima - Peru",
      link2: "Jr Union #999",
      link3: "999 - 888 - 777",
      link4: "TastyFood@email.com",
    },
  ];
  return (
    <div className={darkmode ? "main-footer-dark" : "main-footer"}>
      <div className={darkmode ? "footer-dark" : "footer"}>
        <div className={darkmode ? "tasty-food-dark" : "tasty-food"}>
          <h1>Tasty Food</h1>
          <p>Restaurants</p>

          <p>follow us:</p>
          <div className={darkmode ? "icons-dark" : "icons"}>
            <p>
              <i className="bx bxl-facebook-square"></i>
            </p>
            <p>
              <i className="bx bxl-twitter"></i>
            </p>
            <p>
              <i className="bx bxl-instagram-alt"></i>
            </p>
          </div>
        </div>
        <div className={darkmode ? "links-dark" : "links"}>
          {links.map((link: any) => {
            const { title, link1, link2, link3, link4 } = link;
            return (
              <div>
                <h1>{title}</h1>
                <p>{link1}</p>
                <p>{link2}</p>
                <p>{link3}</p>
                <p>{link4}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h4>©2020 Bedimcode. All right reserved</h4>
    </div>
  );
};

export default Footer;
