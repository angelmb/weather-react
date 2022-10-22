import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Search from "./Search";

import Forecast from "./Forecast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Search />
    <Forecast />
    <App />
    <p className="createdBy">
      Created by Angel Leung. View on{" "}
      <a href="https://github.com/angelmb/weather-react" target="blank">
        Github
      </a>
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
