import React from "react";
import "./Main.css";
import photo1  from './image/photo1.jpg';
import photo2  from './image/photo2.jpg';

export default function Main() {
  return (
    <div className="main1">
      <div className="offer">
        <h1>This weeks specials!</h1>
        <h2><button className="online">Online menus</button></h2>
      </div>
      <div className="main">
        <div>
         <img src={photo1} alt="phto" required/>
          <h2>Greek Salad</h2>
          <p>
            The famous Greek salad of crispy lettuce, peppers, olives, and our
            chicago style lota, cheese, garnished with garlic and rosemary
            croutons.
          </p>
          <h3>Order a delivery</h3>
        </div>
        <div>
        <img src={photo2} alt="phto" required/>
          <h2>Bruchetta</h2>
          <p>
            The famous Greek salad of crispy lettuce, peppers, olives, and our
            chicago style lota, cheese, garnished with garlic and rosemary
            croutons.
          </p>
          <h3>Order a delivery</h3>
        </div>
        <div>
        <img src={photo1} alt="" />
          <h2>Lemon Desert</h2>
          <p>
            The famous Greek salad of crispy lettuce, peppers, olives, and our
            chicago style lota, cheese, garnished with garlic and rosemary
            croutons.
          </p>
          <h3>Order a delivery</h3>
        </div>
      </div>
    </div>
  );
}
