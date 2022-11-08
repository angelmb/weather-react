import React, { useState, useEffect } from "react";
import "./forecast.css";
import axios from "axios";
import ForecastByDay from "./ForecastByDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState({});

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function apiCall() {
    let apiKey = `5f472b7acba333cd8a035ea85a0d4d4c`;
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showForecast);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="fiveDayWeather">
        <h2>5 Day Weather</h2>
        <div className="foreCast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <ForecastByDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    apiCall();

    return null;
  }
}
