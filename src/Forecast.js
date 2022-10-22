import React from "react";
import "./forecast.css";
import ForecastPerDay from "./ForecastPerDay";
export default function Forecast() {
  return (
    <div className="fiveDayWeather">
      <h2>5 Day Weather</h2>
      <div className="foreCast">
        <div className="row">
          <ForecastPerDay />
          <ForecastPerDay />
          <ForecastPerDay />
          <ForecastPerDay />
          <ForecastPerDay />
        </div>
      </div>
    </div>
  );
}
