import React from "react";
import "./Hero.css";
import phot from "./image/phot.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero1">
        <div className="hero2">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            we are a family owned medeterranean resturant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>

        <div className="hero3">
          <img src={phot} alt="phto" className="hero-img" required />
        </div>
      </div>
    </div>
  );
}
