import React from "react";
import "./current.css";
export default function FormatDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div>
      <h5 className="date">
        {month} {date},{year} {hour}:{minute}
      </h5>
      <h5 className="time">{day}</h5>
    </div>
  );
}
