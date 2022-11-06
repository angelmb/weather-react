import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";
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
                <h6 className="futureDate">{forecast[0].dt}</h6>

                <img
                  src={forecast[0].weather[0].icon}
                  alt={forecast[0].weather[0].description}
                />
                <h5>
                  <strong>{forecast[0].temp.min}</strong> /{" "}
                  {forecast[0].temp.max}° F
                </h5>
                <h6>{forecast[0].weather[0].description}</h6>
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
