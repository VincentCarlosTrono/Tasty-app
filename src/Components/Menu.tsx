import React, { useContext } from "react";
import "../Styling/Menu.scss";
import Plate1 from "../Media/plate1.4b6a8454.png";
import Plate2 from "../Media/plate2.a084b491.png";
import Plate3 from "../Media/plate3.e6ab6f13.png";
import { ThemeContext } from "./ThemeContext";

const Menu = () => {
  const { darkmode } = useContext(ThemeContext);
  const menus = [
    {
      image: Plate1,
      title: "Barbeque Salad",
      description: "Delicious Dish",
      price: "$12.00",
    },
    {
      image: Plate2,
      title: "Seafood Salad",
      description: "Satisfying Dish",
      price: "$15.00",
    },
    {
      image: Plate3,
      title: "Egg Salad",
      description: "Lowest Price ",
      price: "$10.00",
    },
  ];
  return (
    <div className="grid-container">
      <div className="container">
        <div className={"offer-menu"}>
          <h1>Menu</h1>
          <div className={"menu"}>
            {menus.map((menu: any) => {
              const { image, title, description, price } = menu;

              return (
                <div className={"cards"} id="menu">
                  <div className={"card"}>
                    <img src={image} alt="menu" />
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <h2>{price}</h2>
                    <button>
                      <i className="bx bx-cart"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
