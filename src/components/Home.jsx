import React from "react";
import plane from "../assets/takeoff.jpeg";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="main">
        <div className="title-card">
          <div className="left-col">
            <h1>Track a flight</h1>
            <p>
            <span>SkySpy360:</span> Elevate Your Flight Experience. Real-time Updates, Effortless Tracking, Every Journey.
            </p>
          </div>
          <a href="#flights"><button className="flights-button">Find flights</button></a>
        </div>
      </div>
    </section>
  );
}
