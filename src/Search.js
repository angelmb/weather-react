import React, { useState } from "react";
import "./header.css";
import "./current.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [returned, setReturned] = useState(false);
  const [weather, setWeather] = useState({});
  const [currentCity, setCurrentCity] = useState(
    <div className="currentWeather">
      <div className="top">
        <div className="row">
          <div className="col-9">
            <h2>Current Weather</h2>
            <h4 className="location">New York</h4>
            <h4 className="time">09:36am</h4>
          </div>

          <div className="col-3">
            <h5 className="date">October 21, 2022</h5>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="row">
          <div className="col-3 verticalDivider">
            <div className="currentTemp">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
              />
              <h1>21</h1>
              <span className="unit">
                <a href="..">°C</a> <a href="..">°F</a>
              </span>
            </div>
          </div>
          <div className="col verticalDivider">
            <div className="row">
              <div className="col-6">
                <ul className="label">
                  <li>
                    <label>HUMIDITY</label>
                  </li>
                  <li>
                    <label>WIND</label>
                  </li>
                  <li>
                    <label>RAIN</label>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="value">
                  <li>
                    <h5>
                      <span>34</span>%
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <span>2.3</span> mph
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <span>18</span>%
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col verticalDividerHidden">
            <div className="row">
              <div className="col-6">
                <ul className="label">
                  <li>
                    <label>SUNRISE</label>
                  </li>
                  <li>
                    <label>SUNSET</label>
                  </li>
                  <li>
                    <label>UV INDEX</label>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="value">
                  <li>
                    <h5>05:30 am</h5>
                  </li>
                  <li>
                    <h5>08:12 pm</h5>
                  </li>
                  <li>
                    <h5>3 of 10</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `5f472b7acba333cd8a035ea85a0d4d4c`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setReturned(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    if (returned) {
      setCurrentCity(
        <div className="currentWeather">
          <div className="top">
            <div className="row">
              <div className="col-9">
                <h2>Current Weather</h2>
                <h4 className="location">{city}</h4>
                <h4 className="time">09:35am</h4>
              </div>

              <div className="col-3">
                <h5 className="date">October 21, 2022</h5>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="row">
              <div className="col-3 verticalDivider">
                <div className="currentTemp">
                  <img src={weather.icon} alt={weather.description} />
                  <h1>{weather.temperature}</h1>
                  <span className="unit">
                    <a href="..">°C</a> <a href="..">°F</a>
                  </span>
                </div>
              </div>
              <div className="col verticalDivider">
                <div className="row">
                  <div className="col-6">
                    <ul className="label">
                      <li>
                        <label>HUMIDITY</label>
                      </li>
                      <li>
                        <label>WIND</label>
                      </li>
                      <li>
                        <label>RAIN</label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="value">
                      <li>
                        <h5>
                          <span>{weather.humidity}</span>%
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <span>{weather.wind}</span> mph
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <span>15</span>%
                        </h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col verticalDividerHidden">
                <div className="row">
                  <div className="col-6">
                    <ul className="label">
                      <li>
                        <label>SUNRISE</label>
                      </li>
                      <li>
                        <label>SUNSET</label>
                      </li>
                      <li>
                        <label>UV INDEX</label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="value">
                      <li>
                        <h5>05:30 am</h5>
                      </li>
                      <li>
                        <h5>08:12 pm</h5>
                      </li>
                      <li>
                        <h5>3 of 10</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      return currentCity;
    } else {
      return currentCity;
    }
  }

  return (
    <div>
      <header>
        <h1>Weather Forecast</h1>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <input
                className="searchBar"
                type="search"
                id="search-input"
                placeholder="Search by city or zip code"
                onChange={updateCity}
              />
            </form>
          </div>
          <div className="col">
            <div className="alignRight">
              <button className="currentLoc">Current location</button>
            </div>
          </div>
        </div>
      </header>
      {currentCity}
    </div>
  );
}
