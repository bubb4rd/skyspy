import React, { useEffect, useState } from "react";
import 'boxicons';
export default function FlightSearch() {
  const [flightNum, setFlightNum] = useState("");

  const handle = () => {
    const ta = document.getElementById('search-bar');
    console.log(ta.value); //check flight value
    setFlightNum(ta.value);
  }
  return (
    <section className="flights" id="flights">
      <div className="container">
        <div className="center">
          <h1 className="title">Flights</h1>
          <p>Find your flight. Anywhere. Anytime.</p>
          <div className="search-container">
            <div className="center2">
            <textarea
              className="search-bar"
              id="search-bar"
              cols="30"
              rows="10"
              maxLength={10}
              placeholder="Flight#"
            ></textarea>
            <button className="search-flight" onClick={handle}>
            <box-icon name='search'></box-icon>
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flight-information">
        {flightNum}
      </div>
    </section>
  );
}
