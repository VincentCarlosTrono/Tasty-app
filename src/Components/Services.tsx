import React, { useContext } from "react";
import "../Styling/Services.scss";
import Dish from "../Media/dish.d05d4fda.svg";
import Pizza from "../Media/pizza.be920fcc.svg";
import { ThemeContext } from "./ThemeContext";

const Services = () => {
  const { darkmode } = useContext(ThemeContext);
  const services = [
    {
      image: Dish,
      title: "Excellent Food",
      description:
        "We offer our clients excellent quality services for many years with the best and delicious food in the city.",
    },
    {
      image: Pizza,
      title: "Fast Food",
      description:
        "We offer our clients excellent quality services for many years with the best and delicious food in the city.",
    },
    {
      image: Dish,
      title: "Fast Delivery",
      description:
        "We offer our clients excellent quality services for many years with the best and delicious food in the city.",
    },
  ];

  return (
    <div className="grid-container">
      <div className="container">
        <div className={"offer"} id="services">
          <h1>Our Amazing Services</h1>
          <div className={"services"}>
            {services.map((service: any) => {
              const { image, title, description } = service;
              return (
                <div>
                  <img src={image} alt="maindish" />
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
