import React from "react";
import "./forecast.css";
import axios from "axios";

export default function ForecastPerDay(props) {
  function showForecast(response) {
    console.log(response.data);
  }
  let apiKey = `5f472b7acba333cd8a035ea85a0d4d4c`;
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${apiKey}`;
  axios.get(url).then(showForecast);

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
