import "./App.css";
import iphone from "./media/iphone-front-transparent.png";
import iosBadge from "./media/badge-ios.svg";
import androidBadge from "./media/badge-android.svg";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const functionDarkModeToggle = () => {
    if (darkMode == false) {
      return "toggle-circle toggle-light";
    } else {
      return "toggle-circle toggle-dark";
    }
  };
  const functionDarkModeHeader = () => {
    if (darkMode == false) {
      return "app-header-light";
    } else {
      return "app-header-dark";
    }
  };

  const changeDarkMode = () => {
    if (darkMode == false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    console.log(darkMode);
  };
  return (
    <div className="App">
      <div className={functionDarkModeHeader()}>
        <h1 className="header-title">TABLÚ FAMOSOS</h1>
        <div className="toggle-button">
          <div
            className={functionDarkModeToggle()}
            onClick={changeDarkMode}
          ></div>
        </div>
      </div>
      <div className="body-div">
        <div className="iphone-container">
          <img className="iphone-pic" src={iphone}></img>
          <div className="body-text-container">
            <div className="body-text-first-row">
              <h2 className="body-text body-text-title">JUGÁ </h2>
              <h2 className="body-text-tablu">TABLÚ FAMOSOS </h2>
            </div>

            <div className="body-text-second-row">
              <h2 className="body-text body-text-subt">Divertite con amigos</h2>
            </div>
            <p className="body-text body-text-download">
              Descargá la app en tu smartphone
            </p>
            <div className="buttons-cointainer">
              <img className="button-app" src={iosBadge}></img>
            </div>
            <div className="buttons-cointainer">
              <img className="button-app app-android" src={androidBadge}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
