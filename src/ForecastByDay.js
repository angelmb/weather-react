import React from "react";
import "./forecast.css";

export default function ForecastPerDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function formatDay() {
    let newDate = new Date(props.data.dt * 1000);

    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let date = newDate.getDate();
    let month = months[newDate.getMonth()];
    let year = newDate.getFullYear();

    let fullDate = `${month} ${date}, ${year}`;
    return fullDate;
  }

  function formatIcon() {
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return icon;
  }

  return (
    <div className="forecastDay">
      <h6 className="futureDate">{formatDay()}</h6>

      <img src={formatIcon()} alt={props.data.weather[0].description} />
      <h5>
        <strong>{minTemp()}</strong> / {maxTemp()}C
      </h5>
      <h6>{props.data.weather[0].description}</h6>
    </div>
  );
}
