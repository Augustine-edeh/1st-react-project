import MainContainer from "./Components/MainContainer";
import Time from "./Components/Time";
import DateComponent from "./Components/DateComponent";
import { useState } from "react";
function App() {
  // const showTime = () => {
  // Default Date parameters:
  // date object
  const dateObj = new Date();

  // getting seconds
  let [defaultSeconds, setDefaultSeconds] = useState(dateObj.getSeconds());
  // getting minutes
  let defaultMinute = dateObj.getMinutes();
  // getting hour
  let hour = dateObj.getHours();
  // getting day
  const defaultday = dateObj.getDay();
  // getting date
  const defaultDate = dateObj.getDate();
  // getting month
  const defaultMonth = dateObj.getMonth();
  // getting year
  const defaultYear = dateObj.getFullYear();

  // weeks array
  const daysOfTheweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // months array
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // processed Date parameters:
  // month
  const month = monthArray[defaultMonth];
  // day
  const day = daysOfTheweek[defaultday];

  // Am/pm
  let period = hour < 12 ? "Am" : "Pm";

  // const clockDiv = document.getElementById("clock");
  // const dateDiv = document.getElementById("date");

  // adding a prefixed zero to the time parameter for uniform display digits at all times
  // hour < 10 ? (hour = "0" + hour) : "";
  // defaultMinute < 10 ? (defaultMinute = "0" + defaultMinute) : "";
  // defaultSeconds < 10 ? (defaultSeconds = "0" + defaultSeconds) : "";
  // hour > 12 ? (hour = hour - 12) : "";
  // hour == 00 ? (hour = 12) : "";

  // Translating the logics above for React's strict mode
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (defaultMinute < 10) {
    defaultMinute = "0" + defaultMinute;
  }
  if (defaultSeconds < 10) {
    defaultSeconds = "0" + defaultSeconds;
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour === "00") {
    hour = 12;
  }

  // processed timeString
  const timeString = `${hour}:${defaultMinute}:${defaultSeconds} ${period}`;

  // processed dateString
  const dateString = `${day} ${month} ${defaultDate}, ${defaultYear}`;

  //displaying timeString in the clock div
  // clockDiv.innerText = timeString;
  //displaying  dateString in the clock div
  // dateDiv.innerText = dateString;

  // simulating the showTime function every 1 second.
  // setInterval(showTime, 1000);
  // };

  // Disabled cause React was throwing an error in the browser
  // showTime();
  setDefaultSeconds("0");
  return (
    <MainContainer className="overall-container">
      <Time timeString={timeString} />
      <DateComponent dateString={dateString} />
    </MainContainer>
  );
}

export default App;
