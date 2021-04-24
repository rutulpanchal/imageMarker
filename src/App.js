import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import hullleft from "./assest/hull-left.svg";
import hullright from "./assest/hull-right.svg";
import EllipseRed from "./assest/Ellipse 289.svg";
import EllipseGreen from "./assest/Ellipse 290.svg";
import "./App.css";

function App() {
  const [redcircle, setRedCircle] = useState("none");
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [xgPosition, setXgPosition] = useState(0);
  const [ygPosition, setYgPosition] = useState(0);
  const [xg2Position, setXg2Position] = useState(0);
  const [yg2Position, setYg2Position] = useState(0);
  const [greenCircle, setGreenCircle] = useState("none");
  const [greenCircle2, setGreenCircle2] = useState("none");
  const handleClick = (event) => {
    setRedCircle("block");
    setXPosition(event.clientX);
    setYPosition(event.clientY);
  };
  const fixCircle = (event) => {
    setGreenCircle("block");
    setRedCircle("none");
    setXgPosition(xPosition);
    setYgPosition(yPosition);
  };
  const resetCircle = (event) => {
    setGreenCircle("none");
  };
  const fixCircle2 = (event) => {
    setGreenCircle2("block");
    setRedCircle("none");
    setXg2Position(xPosition);
    setYg2Position(yPosition);
  };
  const resetCircle2 = (event) => {
    setGreenCircle2("none");
  };

  return (
    <div className="App">
      <div
        style={{
          transform: `translate(${xPosition}px, ${yPosition}px)`,
          position: "absolute",
          display: redcircle,
        }}
      >
        <img src={EllipseRed} alt="logo" />
      </div>

      <div
        style={{
          display: greenCircle,
          position: "absolute",
          transform: `translate(${xgPosition}px, ${ygPosition}px)`,
        }}
      >
        <img src={EllipseGreen} alt="logo" />
      </div>

      <div
        style={{
          display: greenCircle2,
          position: "absolute",
          transform: `translate(${xg2Position}px, ${yg2Position}px)`,
        }}
      >
        <img src={EllipseGreen} alt="logo" />
      </div>
      <div>
        <img
          src={hullleft}
          className="App-logo"
          alt="logo"
          onClick={handleClick}
        />
      </div>

      <div>
        <img
          src={hullright}
          className="App-logo"
          alt="logo"
          onClick={handleClick}
        />
      </div>
      <button onClick={fixCircle}>confirm</button>
      <button onClick={resetCircle}>reset</button>
      <div>
        <button onClick={fixCircle2}>confirm</button>
        <button onClick={resetCircle2}>reset</button>
      </div>
    </div>
  );
}

export default App;
