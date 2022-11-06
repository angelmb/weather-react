import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Current from "./Current";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Current />

    <App />
    <p className="createdBy">
      Created by Angel Leung. View on{" "}
      <a href="https://github.com/angelmb/weather-react" target="blank">
        Github
      </a>
    </p>
  </React.StrictMode>
);

reportWebVitals();
