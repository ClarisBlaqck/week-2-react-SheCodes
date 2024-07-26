import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setResult(`It is 19°C in ${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div class="formElement">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-form-input"
          placeholder="Enter City"
          onChange={updateCity}
        />
        <input type="submit" className="search-form-button" value="Search" />
      </form>
      <h1>{result}</h1>
    </div>
  );
}
