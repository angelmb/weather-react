import React, { useState } from "react";

export default function UpdateUnit(props) {
  const [unit, setUnit] = useState("metrics");
  const [temp, setTemp] = useState(props.temp);

  function UpdateToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
    setTemp(Math.round((props.temp * 9) / 5 + 32));
  }

  function UpdateToCelcius(event) {
    event.preventDefault();
    setUnit("metrics");
    setTemp(props.temp);
  }

  if (unit === "metrics") {
    return (
      <div>
        <h1>{props.temp}</h1>
        <span className="unit">
          °C |{" "}
          <a href=".." onClick={UpdateToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{temp}</h1>
        <span className="unit">
          <a href=".." onClick={UpdateToCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
