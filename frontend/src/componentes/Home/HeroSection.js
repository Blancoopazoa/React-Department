import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "./HeroSection.css";



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
      </div>
    </div>
  );
}

export default HeroSection;
