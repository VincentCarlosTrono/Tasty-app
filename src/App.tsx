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

function App() {
  const { darkmode } = useContext(ThemeContext);
  return (
    <div>
      <div className={darkmode ? "navbar-dark" : "navbar"}>
        <Navbar />
      </div>

      <div className={darkmode ? "App-dark" : "App"}>
        <div></div>
        <header className={darkmode ? "App-header-dark" : "App-header"}>
          <BodyContent />
          <About />
          <Services />
          <Menu />
          <Apps />
          <Talk />
          <Footer />
        </header>
        <div></div>
      </div>
    </div>
  );
}

export default App;
