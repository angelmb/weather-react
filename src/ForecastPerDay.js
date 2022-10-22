import React from "react";
import "./forecast.css";

export default function ForecastPerDay() {
  let forecastData = {
    templow: 62,
    temphigh: 74,
    date: "7/31 Sun",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  return (
    <div className="col">
      <h6 className="futureDate">{forecastData.date}</h6>

      <img src={forecastData.imgUrl} alt={forecastData.description} />
      <h5>
        <strong>{forecastData.templow}</strong> / {forecastData.temphigh}° F
      </h5>
      <h6>{forecastData.description}</h6>
    </div>
  );
}
