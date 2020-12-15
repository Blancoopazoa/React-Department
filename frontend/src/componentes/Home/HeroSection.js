import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

import img1 from "../../assets/images/img-9.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>LA AVENTURA ESPERA</h1>
      <p>Que estas esperando?</p>
      <br></br>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          EMPEZAR
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          VER EL TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
