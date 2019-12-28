import React from "react";

const App = () => {
  // https://api.openweathermap.org/data/2.5/weather?q=
  return (
    <div className="cont">
      <h1 className={"title"}>Weather API</h1>

      {/* &#8451; */}
      <div>
        <p>
          The temperature is currently {"TEMP"} but feels more like {"FEELS LIKE"}
        </p>
        <p>Currently the weather would best be described as {"DESCRIPTION"}</p>
        <p>With highs of {"HIGHS"}</p>
        <p>And lows of {"LOWS"}</p>
        <p>The sun will set at {"SUNRISE"}</p>
        <p>And will rise at {"SUNSET"}</p>
      </div>

      {/* JSX for input field */}
      {/*<div className={"divider"}/>*/}
      {/*<p>Enter city name</p>*/}
      {/*<input className={"input"}/>*/}
      {/*<button className={"button"}>Get Weather</button>*/}
    </div>
  );
};

export default App;
