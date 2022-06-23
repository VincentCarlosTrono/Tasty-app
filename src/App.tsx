import React, { useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import BodyContent from "./Components/BodyContent";
import About from "./Components/About";
import Services from "./Components/Services";
import Menu from "./Components/Menu";
import Apps from "./Components/App";
import Talk from "./Components/Talk";
import Footer from "./Components/Footer";
import { ThemeContext } from "./Components/ThemeContext";
import "./Styling/App2.scss";

function App() {
  const { darkmode } = useContext(ThemeContext);
  return (
    <div className={`App-header ${darkmode && "dark"}`}>
      <div className={"App"}>
        <header className={"App-header"}>
          <Navbar />
          <BodyContent />
          <About />
          <Services />
          <Menu />
          <Apps />
          <Talk />
          <Footer />
        </header>
      </div>
    </div>
  );
}

export default App;
