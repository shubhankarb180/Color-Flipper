import React, { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  let [color, setColor] = useState("#af0925");

  const handleColorChange = () => {
    //Generate Random Color
    color = Math.floor(Math.random() * 16777215).toString(16);

    const locator = document.getElementById("main-content");
    const colorCodeLocator = document.getElementById('color-code');
    colorCodeLocator.style.color = "#" + color;
    locator.style.backgroundColor = "#" + color;
    setColor("#" + color);
  };

  return (
    <div id="main-content">
      <div className="row h-100 w-75 mx-auto">
        <div className="col d-flex justify-content-center align-self-center">
          <div className="card text-white bg-dark p-2 rounded">
            <div className="card-body border border-secondary">
              <h2 className="app-title pt-1 pb-2">Color Flipper</h2>
              <div className="div-content p-2 text-center">
                <h5 className="p-2 rounded">Background Color : <span id='color-code'>{color}</span></h5>
                {/* <h4 className="card-title">Color Flipper</h4> */}
                <button
                  type="button"
                  onClick={handleColorChange}
                  className="btn btn-outline-secondary text-white border-dark mt-2"
                >
                  Flip it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
