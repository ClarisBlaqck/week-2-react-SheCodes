import React, { useState } from "react";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function TempFarenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature * 9) / 5 + 32);
  }

  function CelciusTemp(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <p>
      °
      <a href="/" onClick={CelciusTemp}>
        C
      </a>{" "}
      | °
      <a href="/" onClick={TempFarenheit}>
        F
      </a>
    </p>
  );
}
