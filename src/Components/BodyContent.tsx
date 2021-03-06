import React, { useContext } from "react";
import BodyImage from "../Media/home.1357e4c1.png";
import "../Styling/BodyContent.scss";
import { ThemeContext } from "./ThemeContext";

const BodyContent = () => {
  const { darkmode } = useContext(ThemeContext);
  return (
    <div className="grid-container">
      <div className="container">
        <div className={"body"}>
          <div className={"body-content"}>
            <h1>Tasty Food</h1>
            <h3>Try The Best Food Of The Week.</h3>
            <button>View Menu</button>
          </div>
          <img src={BodyImage} alt="maindish" />
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
