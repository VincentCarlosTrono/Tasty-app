import React from "react";
import Mobile from "../Media/mobile-app.7d08b404.png";
import Apple from "../Media/apple.png";
import Android from "../Media/android.png";
import "../Styling/App.scss";

const App = () => {
  return (
    <div className="mobile-app">
      <img src={Mobile} alt="mobile-phone" />
      <div className="context">
        <div className="description">
          <h1>App is available</h1>
          <p>
            Find our application and download it, you can make reservations,
            food orders, see your deliveries on the way and much more.
          </p>
        </div>
        <div className="store">
          <img src={Apple} alt="apple-store" />
          <img src={Android} alt="googleplay-store" />
        </div>
      </div>
    </div>
  );
};

export default App;
