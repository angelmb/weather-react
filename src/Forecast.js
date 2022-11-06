import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";
import ForecastPerDay from "/ForecastPerDay";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState({});

  let apiKey = `c819171fe0abdc14039af4ef5dda283b`;
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${apiKey}`;
  axios.get(url).then(showForecast);

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);

    if (loaded) {
      console.log(forecast);
      return (
        <div className="fiveDayWeather">
          <h2>5 Day Weather</h2>
          <div className="foreCast">
            <div className="row">
              <div className="col">
                <ForecastPerDay data={forecast[0]} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="fiveDayWeather">
          <h2>5 Day Weather</h2>
          <div className="foreCast">
            <div className="row">
              <div className="col">
                <h6 className="futureDate">Nov 3</h6>

                <img
                  src="	http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Sunny"
                />
                <h5>
                  <strong>18</strong> / 23° C
                </h5>
                <h6>Sunny</h6>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
