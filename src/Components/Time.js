import { useState } from "react";
import "./Time.css";
function Time(props) {
  const [colour, setColour] = useState("pink");

  const changeColourHandler = () => {
    document.querySelector(".Time").style.backgroundColor = colour;
    setColour("red");

    console.log(colour);
  };

  return (
    <div className="Time">
      I'm the Time Container!
      <button onClick={changeColourHandler}>
        click me to change background Color
      </button>
    </div>
  );
}
export default Time;
