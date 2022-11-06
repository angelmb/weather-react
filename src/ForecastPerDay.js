import React from "react";
import "./forecast.css";
import axios from "axios";

export default function ForecastPerDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let maxTemp = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  return (
    <div className="forecastDay">
      <h6 className="futureDate">{props.data.dt}</h6>

      <img
        src={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
      />
      <h5>
        <strong>{minTemp()}</strong> / {maxTemp()}° F
      </h5>
      <h6>{props.data.weather[0].description}</h6>
    </div>
  );
}
