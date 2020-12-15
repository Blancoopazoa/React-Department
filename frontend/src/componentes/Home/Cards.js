import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function Cards() {
  return (
    <div className="product">
      <h1>Quienes Somos</h1>
      <p>Somos una empresa Turistica, con la mejora calidad del mundo</p>
      <br></br>
      <div className="hero-btns">
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

export default Cards;
