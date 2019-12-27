import React, { useState } from 'react';
import Axios from "axios";

const App = () => {


  return (
    <div className="cont">
      <h1 className={"title"}>Weather API</h1>

      <div>
        <p>Currently the weather would best be described as {"DESCRIPTION"}</p>
        <p>With highs of {"HIGHS"}</p>
        <p>And lows of {"LOWS"}</p>
        <p>The sun will set at {"SUNRISE"}</p>
        <p>And will rise at {"SUNSET"}</p>
      </div>

      {/*<div className={"divider"}/>*/}
      {/*<p>Enter city name</p>*/}
      {/*<input className={"input"}/>*/}
    </div>
  );
}

export default App;
